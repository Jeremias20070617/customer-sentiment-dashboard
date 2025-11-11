

import React, { useState, useRef, useEffect } from 'react';
import type { Chat } from '@google/genai';
import type { ChatMessage, Project } from '../types';
import { useLanguage } from '../i18n';
import { Button } from './ui/Button';
import { Textarea } from './ui/Textarea';
import { BotIcon } from './icons/BotIcon';
import { createChat } from '../services/geminiService';
import { useApiKey } from '../hooks/useApiKey';

interface ChatViewProps {
  project: Project;
}

export const ChatView: React.FC<ChatViewProps> = ({ project }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { apiKey } = useApiKey();
  const chatSessionRef = useRef<Chat | null>(null);

  useEffect(() => {
    if (!chatSessionRef.current && apiKey && project.analysisResult) {
      chatSessionRef.current = createChat(project, apiKey);
    }
  }, [project, apiKey]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading || !chatSessionRef.current) return;
  
    const userMessage: ChatMessage = { role: 'user', content: userInput.trim() };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);
  
    try {
      let response = await chatSessionRef.current.sendMessage({ message: userMessage.content });
  
      if (response.functionCalls && response.functionCalls.length > 0) {
        const calls = response.functionCalls;
        
        const functionResponseParts = await Promise.all(calls.map(async (call) => {
          let functionResult: any;
          if (call.name === 'findReviews') {
            const { sentiment, keywords } = call.args;
            const filtered = project.analysisResult?.detailedBreakdown.filter(r => {
              const sentimentMatch = !sentiment || r.sentiment === sentiment;
              const keywordList = keywords ? (keywords as string).split(',').map(k => k.trim().toLowerCase()).filter(k => k) : [];
              const keywordMatch = !keywords || keywordList.length === 0 || keywordList.some(k => r.reviewText.toLowerCase().includes(k));
              return sentimentMatch && keywordMatch;
            }) || [];
            
            if (filtered.length > 0) {
              functionResult = { result: `${t('chat.foundReviews')}\n` + filtered.map(r => `- "${r.reviewText}"`).join('\n') };
            } else {
              functionResult = { result: t('chat.noReviewsFound') };
            }
          } else if (call.name === 'generateReport') {
            const res = project.analysisResult;
            if (res) {
                functionResult = { result: `${t('chat.generatedReport')}\n` +
                `**${t('project.overallScore.title')}**: ${res.overallScore.score}/100 - ${res.overallScore.summary}\n` +
                `**${t('project.summary.title')}**:\n${res.executiveSummary}`};
            } else {
                functionResult = { result: t('chat.noAnalysisForReport') };
            }
          } else {
            functionResult = { result: `Unknown function call: ${call.name}` };
          }

          return {
            functionResponse: {
                name: call.name,
                response: functionResult,
            },
          };
        }));
        
        response = await chatSessionRef.current.sendMessage({ message: functionResponseParts });
      }
      
      const modelMessage: ChatMessage = { role: 'model', content: response.text };
      setMessages(prev => [...prev, modelMessage]);
  
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: ChatMessage = { role: 'model', content: t('error.chatError') };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const parseMessageContent = (content: string) => {
    return content.split('\n').filter(line => line.trim() !== '').map((line, index) => {
        line = line.trim();
        if (line.startsWith('### ') || line.startsWith('## ')) {
            return <h3 key={index} className="text-md font-semibold text-primary mt-3 mb-1">{line.replace(/### |## /g, '')}</h3>;
        }
        if (line.startsWith('**') && line.endsWith('**')) {
            return <strong key={index} className="font-semibold text-foreground">{line.replace(/\*\*/g, '')}</strong>;
        }
        if (line.startsWith('* ') || line.startsWith('- ')) {
            return <li key={index} className="ml-4 list-disc">{line.substring(2)}</li>;
        }
        return <p key={index} className="mb-2 last:mb-0">{line}</p>;
    });
  };

  const isChatDisabled = !apiKey || !project.analysisResult;

  return (
    <div className="flex flex-col h-full bg-card/50 border border-border rounded-2xl">
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 p-2 rounded-full"><BotIcon className="h-6 w-6 text-primary" /></div>
            <div className="bg-secondary p-4 rounded-xl rounded-tl-none">
              <p className="font-semibold text-primary mb-1">{t('chat.aiName')}</p>
              <p>{isChatDisabled ? t('error.chatDisabled') : t('chat.welcome')}</p>
            </div>
          </div>

          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'model' && (
                <div className="bg-primary/20 p-2 rounded-full"><BotIcon className="h-6 w-6 text-primary" /></div>
              )}
              <div className={`${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-secondary rounded-tl-none'} p-4 rounded-xl max-w-lg`}>
                <p className={`font-semibold mb-1 ${msg.role === 'user' ? 'text-primary-foreground/80' : 'text-primary'}`}>{msg.role === 'user' ? t('chat.you') : t('chat.aiName')}</p>
                <div>{parseMessageContent(msg.content)}</div>
              </div>
            </div>
          ))}
           {isLoading && (
              <div className="flex items-start gap-4">
                 <div className="bg-primary/20 p-2 rounded-full"><BotIcon className="h-6 w-6 text-primary" /></div>
                 <div className="bg-secondary p-4 rounded-xl rounded-tl-none flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-0"></span>
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150"></span>
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></span>
                 </div>
              </div>
           )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
        <div className="relative">
          <Textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(e);
              }
            }}
            placeholder={isChatDisabled ? t('error.chatDisabled') : t('chat.placeholder')}
            className="pr-24"
            disabled={isLoading || isChatDisabled}
          />
          <Button type="submit" disabled={isLoading || !userInput.trim() || isChatDisabled} className="absolute right-2.5 bottom-2.5">{t('chat.send')}</Button>
        </div>
      </form>
    </div>
  );
};