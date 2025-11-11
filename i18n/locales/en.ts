

export default {
    app: {
        title: "AI Customer Sentiment Dashboard",
        subtitle: "Analyze customer feedback with AI to uncover actionable insights.",
    },
    sidebar: {
        title: "Sentiment AI",
        workspace: "My Projects",
        dashboard: "Analysis Dashboard",
        chat: "AI Chat",
        settings: "Settings",
    },
    workspace: {
        title: "My Analysis Projects",
        subtitle: "Create a new project or continue working on an existing one.",
        createNew: "Create New Analysis",
        newProjectName: "Untitled Analysis",
        confirmDelete: "Are you sure you want to delete this project? This action cannot be undone.",
        confirmDeleteTitle: "Confirm Deletion",
        deleteButton: "Delete",
        renameTitle: "Rename Project",
        renameInput: "Enter new project name",
        renameButton: "Rename",
        cancelButton: "Cancel",
        openProject: "Open",
        noAnalysis: "No analysis yet",
        reviewsAnalyzed: "{count} reviews analyzed",
        createdOn: "Created on: {date}",
    },
    project: {
        textarea: {
            placeholder: "Paste your customer reviews here... One review per line is recommended for best results."
        },
        deepThinking: {
            title: "Deep Thinking Mode",
            description: "Uses a more powerful model for deeper summary insights."
        },
        analyzeButton: "Analyze Sentiment",
        analyzingButton: "Analyzing...",
        ready: {
            title: "Ready to Analyze",
            description: "Your sentiment report will appear here once you analyze your first batch of reviews."
        },
        summary: {
            title: "AI Executive Summary",
            description: "Top insights and actionable areas for improvement identified by AI."
        },
        actionableInsights: {
            title: "AI Actionable Insights",
            description: "AI-powered next steps to improve your business."
        },
        overallScore: {
            title: "Overall Satisfaction Score"
        },
        categoryAnalysis: {
            title: "Category Analysis",
            description: "Scores for key business aspects and their importance based on the reviews.",
            category: "Category",
            score: "Score",
            weight: "Weight"
        },
        reviewBreakdown: {
            title: "Detailed Review Breakdown",
            description: "Hover over a review to see highlighted keywords.",
            filter: "Filter reviews...",
            review: "Review",
            sentiment: "Sentiment",
            satisfaction: "Satisfaction"
        },
        wordClouds: {
            praises: "Common Praises",
            complaints: "Common Complaints",
        },
    },
    settings: {
        title: "Settings",
        saveChanges: "Save Changes",
        saving: "Saving...",
        language: {
            title: "Language",
            description: "Choose the display language for the application."
        },
        themes: {
            title: "Appearance",
            description: "Select a color theme for the dashboard.",
            light: "Classic",
            dark: "Dark",
            gradient: "Gradient",
            corporate: "Corporate",
            fun: "Fun",
            "high-contrast": "High Contrast",
        },
        apiKey: {
            title: "API Key Management",
            description: "Your Gemini API key is stored securely in your browser's local storage and is never sent anywhere else.",
            yourKey: "Your Gemini API Key",
            placeholder: "Enter your API key here",
            getLink: "Get your Gemini API Key"
        }
    },
    chat: {
        aiName: "AI Analyst",
        you: "You",
        welcome: "Hello! I'm your AI analyst. I can now perform tasks for you. Try asking me to 'find all negative reviews about the battery' or 'generate a report'.",
        placeholder: "Ask a follow-up question or give me a task...",
        send: "Send",
        foundReviews: "Here are the reviews I found based on your criteria:",
        noReviewsFound: "I couldn't find any reviews matching your criteria.",
        generatedReport: "Here is the report I generated for you:",
        noAnalysisForReport: "There is no analysis data available to generate a report."
    },
    error: {
        title: "Error",
        pasteReviews: "Please paste some reviews before analyzing.",
        unknown: "An unknown error occurred.",
        chatError: "Sorry, I encountered an error. Please try again.",
        maxProjects: "You have reached the maximum of 10 projects. Please delete one to create a new one.",
        apiKeyRequired: "API Key is required. Please add it in the settings.",
        apiKeyRequiredTitle: "API Key Required",
        apiKeyRequiredDesc: "To perform analysis, you need to add your Gemini API key in the settings.",
        chatDisabled: "Chat is disabled until an analysis is performed and an API key is set."
    },
    loading: {
        stage1: "Analyzing sentiment and extracting keywords...",
        stage2: "Generating executive summary and final report..."
    },
    sampleGenerator: {
        generate: "Generate Samples",
        generating: "Generating...",
        description: "Configure the AI to generate a custom set of sample reviews.",
        category: "Category",
        reviewCount: "Number of Reviews",
        reviews: "reviews",
        sentimentMix: "Sentiment Mix",
        mix: {
            positive: "Mostly Positive",
            balanced: "Balanced",
            negative: "Mostly Negative"
        }
    }
};
