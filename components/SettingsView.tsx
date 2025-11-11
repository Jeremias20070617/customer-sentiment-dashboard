

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { useTheme } from '../hooks/useTheme';
import type { Theme } from '../types';
import { useApiKey } from '../hooks/useApiKey';
import { Button } from './ui/Button';
import { Label } from './ui/Label';
import { KeyIcon } from './icons/KeyIcon';
import { EyeIcon } from './icons/EyeIcon';
import { EyeOffIcon } from './icons/EyeOffIcon';

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

const themes: { name: Theme; colors: string[] }[] = [
    { name: 'dark', colors: ['#0A101F', '#0284c7', '#0891b2'] },
    { name: 'light', colors: ['#FFFFFF', '#3b82f6', '#d1d5db'] },
    { name: 'gradient', colors: ['#a855f7', '#ec4899', '#f97316'] },
    { name: 'corporate', colors: ['#FFFFFF', '#1e3a8a', '#64748b'] },
    { name: 'fun', colors: ['#fef3c7', '#22d3ee', '#f472b6'] },
    { name: 'high-contrast', colors: ['#000000', '#FFFF00', '#FFFFFF'] },
];

interface DraftSettings {
    apiKey: string;
    language: string;
    theme: Theme;
}

export const SettingsView: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { apiKey, setApiKey } = useApiKey();
  
  const [draftSettings, setDraftSettings] = useState<DraftSettings>({
    apiKey: apiKey || '',
    language: language,
    theme: theme,
  });
  const [isKeyVisible, setIsKeyVisible] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setDraftSettings({
      apiKey: apiKey || '',
      language: language,
      theme: theme,
    });
  }, [apiKey, language, theme]);

  useEffect(() => {
    const hasChanges =
      draftSettings.apiKey !== (apiKey || '') ||
      draftSettings.language !== language ||
      draftSettings.theme !== theme;
    setIsDirty(hasChanges);
  }, [draftSettings, apiKey, language, theme]);

  const handleDraftChange = (field: keyof DraftSettings, value: string | Theme) => {
    setDraftSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveChanges = () => {
    setIsSaving(true);
    setApiKey(draftSettings.apiKey);
    setLanguage(draftSettings.language);
    setTheme(draftSettings.theme);

    setTimeout(() => {
      setIsSaving(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto space-y-8">
      <header>
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme-gradient-start)] to-[var(--theme-gradient-end)]">
          {t('settings.title')}
        </h1>
      </header>

      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <KeyIcon className="h-5 w-5 text-primary"/>
                {t('settings.apiKey.title')}
            </CardTitle>
            <CardDescription>{t('settings.apiKey.description')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div>
                <Label htmlFor="api-key-input">{t('settings.apiKey.yourKey')}</Label>
                <div className="relative mt-1">
                    <input
                        id="api-key-input"
                        type={isKeyVisible ? 'text' : 'password'}
                        value={draftSettings.apiKey}
                        onChange={(e) => handleDraftChange('apiKey', e.target.value)}
                        placeholder={t('settings.apiKey.placeholder')}
                        className="w-full h-10 bg-background border border-input rounded-md px-3 pr-10 text-sm"
                    />
                    <button
                        type="button"
                        onClick={() => setIsKeyVisible(!isKeyVisible)}
                        className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground"
                    >
                        {isKeyVisible ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-end">
                 <a 
                    href="https://aistudio.google.com/api-keys" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                >
                    {t('settings.apiKey.getLink')}
                </a>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('settings.language.title')}</CardTitle>
          <CardDescription>{t('settings.language.description')}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => handleDraftChange('language', lang.code)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors
                  ${draftSettings.language === lang.code
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('settings.themes.title')}</CardTitle>
          <CardDescription>{t('settings.themes.description')}</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {themes.map((themeItem) => (
                    <div key={themeItem.name}>
                        <button
                            onClick={() => handleDraftChange('theme', themeItem.name)}
                            className={`w-full p-2 border-2 rounded-lg ${draftSettings.theme === themeItem.name ? 'border-primary' : 'border-border'}`}
                        >
                            <div className="flex justify-center items-center space-x-2 rounded-md p-4" style={{backgroundColor: themeItem.colors[0]}}>
                                <div className="h-6 w-6 rounded-full" style={{backgroundColor: themeItem.colors[1]}} />
                                <div className="h-6 w-6 rounded-full" style={{backgroundColor: themeItem.colors[2]}} />
                            </div>
                        </button>
                        <p className="mt-2 text-center text-sm text-muted-foreground">{t(`settings.themes.${themeItem.name}`)}</p>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end pt-4">
        <Button onClick={handleSaveChanges} disabled={!isDirty || isSaving} className="min-w-[150px]">
            {isSaving ? t('settings.saving') : t('settings.saveChanges')}
        </Button>
      </div>
    </div>
  );
};
