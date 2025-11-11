

export default {
    app: {
        title: "人工智能客户情绪分析仪表板",
        subtitle: "使用人工智能分析客户反馈，发现可行的见解。",
    },
    sidebar: {
        title: "情绪AI",
        workspace: "我的项目",
        dashboard: "分析仪表板",
        chat: "AI聊天",
        settings: "设置",
    },
    workspace: {
        title: "我的分析项目",
        subtitle: "创建一个新项目或继续处理现有项目。",
        createNew: "创建新分析",
        newProjectName: "未命名分析",
        confirmDelete: "您确定要删除此项目吗？此操作无法撤销。",
        confirmDeleteTitle: "确认删除",
        deleteButton: "删除",
        renameTitle: "重命名项目",
        renameInput: "输入新项目名称",
        renameButton: "重命名",
        cancelButton: "取消",
        openProject: "打开",
        noAnalysis: "暂无分析",
        reviewsAnalyzed: "已分析 {count} 条评论",
        createdOn: "创建于：{date}",
    },
    project: {
         textarea: {
            placeholder: "在此处粘贴您的客户评论...为获得最佳效果，建议每行一条评论。"
        },
        deepThinking: {
            title: "深度思考模式",
            description: "使用更强大的模型进行更深入的摘要分析。"
        },
        analyzeButton: "分析情绪",
        analyzingButton: "分析中...",
        ready: {
            title: "准备分析",
            description: "分析完第一批评论后，您的情绪报告将显示在此处。"
        },
        summary: {
            title: "AI执行摘要",
            description: "由AI识别出的顶级见解和可行的改进领域。"
        },
        actionableInsights: {
            title: "AI可行见解",
            description: "由AI驱动的改进业务的后续步骤。"
        },
        overallScore: {
            title: "总体满意度得分"
        },
        categoryAnalysis: {
            title: "分类分析",
            description: "根据评论得出的关键业务方面的得分及其重要性。",
            category: "类别",
            score: "分数",
            weight: "权重"
        },
        reviewBreakdown: {
            title: "详细评论分解",
            description: "将鼠标悬停在评论上以查看突出显示的关键字。",
            filter: "筛选评论...",
            review: "评论",
            sentiment: "情绪",
            satisfaction: "满意度"
        },
        wordClouds: {
            praises: "常见赞扬",
            complaints: "常见投诉",
        },
    },
    settings: {
        title: "设置",
        saveChanges: "保存更改",
        saving: "保存中...",
        language: {
            title: "语言",
            description: "选择应用程序的显示语言。"
        },
        themes: {
            title: "外观",
            description: "为仪表板选择一个颜色主题。",
            light: "经典",
            dark: "黑暗",
            gradient: "渐变",
            corporate: "企业",
            fun: "有趣",
            "high-contrast": "高对比度",
        },
        apiKey: {
            title: "API密钥管理",
            description: "您的Gemini API密钥安全地存储在您浏览器的本地存储中，绝不会发送到其他任何地方。",
            yourKey: "您的Gemini API密钥",
            placeholder: "在此处输入您的API密钥",
            getLink: "获取您的Gemini API密钥"
        }
    },
    chat: {
        aiName: "AI分析师",
        you: "您",
        welcome: "您好！我是您的AI分析师。我现在也可以为您执行任务。试着让我'查找所有关于电池的负面评论'或'生成一份报告'。",
        placeholder: "提出后续问题或给我一个任务...",
        send: "发送",
        foundReviews: "根据您的标准，我找到了以下评论：",
        noReviewsFound: "我找不到任何符合您标准的评论。",
        generatedReport: "这是我为您生成的报告：",
        noAnalysisForReport: "没有可用于生成报告的分析数据。"
    },
    error: {
        title: "错误",
        pasteReviews: "请在分析前粘贴一些评论。",
        unknown: "发生未知错误。",
        chatError: "抱歉，我遇到了一个错误。请重试。",
        maxProjects: "您已达到10个项目的上限。请删除一个以创建新的项目。",
        apiKeyRequired: "需要API密钥。请在设置中添加。",
        apiKeyRequiredTitle: "需要API密钥",
        apiKeyRequiredDesc: "要执行分析，您需要在设置中添加您的Gemini API密钥。",
        chatDisabled: "在执行分析并设置API密钥之前，聊天功能已禁用。"
    },
    loading: {
        stage1: "分析情绪并提取关键字...",
        stage2: "生成执行摘要和最终报告..."
    },
    sampleGenerator: {
        generate: "生成样本",
        generating: "生成中...",
        description: "配置AI以生成一组自定义的样本评论。",
        category: "类别",
        reviewCount: "评论数量",
        reviews: "条评论",
        sentimentMix: "情绪组合",
        mix: {
            positive: "以正面为主",
            balanced: "均衡",
            negative: "以负面为主"
        }
    }
};
