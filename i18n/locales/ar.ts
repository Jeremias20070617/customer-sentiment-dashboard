

export default {
    app: {
        title: "لوحة قيادة مشاعر العملاء بالذكاء الاصطناعي",
        subtitle: "حلل ملاحظات العملاء باستخدام الذكاء الاصطناعي للكشف عن رؤى قابلة للتنفيذ.",
    },
    sidebar: {
        title: "مشاعر AI",
        workspace: "مشاريعي",
        dashboard: "لوحة التحليل",
        chat: "دردشة AI",
        settings: "الإعدادات",
    },
    workspace: {
        title: "مشاريع التحليل الخاصة بي",
        subtitle: "أنشئ مشروعًا جديدًا أو استمر في العمل على مشروع حالي.",
        createNew: "إنشاء تحليل جديد",
        newProjectName: "تحليل غير معنون",
        confirmDelete: "هل أنت متأكد من أنك تريد حذف هذا المشروع؟ لا يمكن التراجع عن هذا الإجراء.",
        confirmDeleteTitle: "تأكيد الحذف",
        deleteButton: "حذف",
        renameTitle: "إعادة تسمية المشروع",
        renameInput: "أدخل اسم المشروع الجديد",
        renameButton: "إعادة تسمية",
        cancelButton: "إلغاء",
        openProject: "فتح",
        noAnalysis: "لا يوجد تحليل بعد",
        reviewsAnalyzed: "تم تحليل {count} مراجعة",
        createdOn: "تم إنشاؤه في: {date}",
    },
    project: {
         textarea: {
            placeholder: "الصق مراجعات عملائك هنا... يوصى بمراجعة واحدة لكل سطر للحصول على أفضل النتائج."
        },
        deepThinking: {
            title: "وضع التفكير العميق",
            description: "يستخدم نموذجًا أكثر قوة للحصول على رؤى ملخصة أعمق."
        },
        analyzeButton: "تحليل المشاعر",
        analyzingButton: "جارٍ التحليل...",
        ready: {
            title: "جاهز للتحليل",
            description: "سيظهر تقرير مشاعرك هنا بمجرد تحليل دفعتك الأولى من المراجعات."
        },
        summary: {
            title: "ملخص تنفيذي بالذكاء الاصطناعي",
            description: "أهم الرؤى ومجالات التحسين القابلة للتنفيذ التي حددها الذكاء الاصطناعي."
        },
        actionableInsights: {
            title: "رؤى قابلة للتنفيذ من الذكاء الاصطناعي",
            description: "الخطوات التالية المدعومة بالذكاء الاصطناعي لتحسين عملك."
        },
        overallScore: {
            title: "درجة الرضا الإجمالية"
        },
        categoryAnalysis: {
            title: "تحليل الفئات",
            description: "درجات لجوانب العمل الرئيسية وأهميتها بناءً على المراجعات.",
            category: "الفئة",
            score: "الدرجة",
            weight: "الوزن"
        },
        reviewBreakdown: {
            title: "تفصيل المراجعات",
            description: "مرر الماوس فوق المراجعة لرؤية الكلمات الرئيسية المميزة.",
            filter: "تصفية المراجعات...",
            review: "المراجعة",
            sentiment: "المشاعر",
            satisfaction: "الرضا"
        },
        wordClouds: {
            praises: "المديح الشائع",
            complaints: "الشكاوى الشائعة",
        },
    },
    settings: {
        title: "الإعدادات",
        saveChanges: "حفظ التغييرات",
        saving: "جارٍ الحفظ...",
        language: {
            title: "اللغة",
            description: "اختر لغة عرض التطبيق."
        },
        themes: {
            title: "المظهر",
            description: "اختر سمة لونية للوحة القيادة.",
            light: "كلاسيكي",
            dark: "داكن",
            gradient: "متدرج",
            corporate: "شركات",
            fun: "ممتع",
            "high-contrast": "تباين عالٍ",
        },
        apiKey: {
            title: "إدارة مفتاح API",
            description: "يتم تخزين مفتاح Gemini API الخاص بك بشكل آمن في التخزين المحلي للمتصفح ولا يتم إرساله إلى أي مكان آخر.",
            yourKey: "مفتاح Gemini API الخاص بك",
            placeholder: "أدخل مفتاح API الخاص بك هنا",
            getLink: "احصل على مفتاح Gemini API الخاص بك"
        }
    },
    chat: {
        aiName: "محلل AI",
        you: "أنت",
        welcome: "مرحباً! أنا محللك الذكي. يمكنني الآن أداء مهام لك. حاول أن تطلب مني 'العثور على جميع المراجعات السلبية حول البطارية' أو 'إنشاء تقرير'.",
        placeholder: "اطرح سؤال متابعة أو أعطني مهمة...",
        send: "إرسال",
        foundReviews: "هذه هي المراجعات التي وجدتها بناءً على معاييرك:",
        noReviewsFound: "لم أتمكن من العثور على أي مراجعات تطابق معاييرك.",
        generatedReport: "هذا هو التقرير الذي أنشأته لك:",
        noAnalysisForReport: "لا توجد بيانات تحليل متاحة لإنشاء تقرير."
    },
    error: {
        title: "خطأ",
        pasteReviews: "يرجى لصق بعض المراجعات قبل التحليل.",
        unknown: "حدث خطأ غير معروف.",
        chatError: "عذراً، لقد واجهت خطأ. يرجى المحاولة مرة أخرى.",
        maxProjects: "لقد وصلت إلى الحد الأقصى وهو 10 مشاريع. يرجى حذف واحد لإنشاء مشروع جديد.",
        apiKeyRequired: "مفتاح API مطلوب. يرجى إضافته في الإعدادات.",
        apiKeyRequiredTitle: "مطلوب مفتاح API",
        apiKeyRequiredDesc: "لإجراء التحليل، تحتاج إلى إضافة مفتاح Gemini API الخاص بك في الإعدادات.",
        chatDisabled: "الدردشة معطلة حتى يتم إجراء تحليل وتعيين مفتاح API."
    },
    loading: {
        stage1: "تحليل المشاعر واستخراج الكلمات الرئيسية...",
        stage2: "إنشاء الملخص التنفيذي والتقرير النهائي..."
    },
    sampleGenerator: {
        generate: "إنشاء عينات",
        generating: "جارٍ الإنشاء...",
        description: "قم بتكوين الذكاء الاصطناعي لإنشاء مجموعة مخصصة من المراجعات النموذجية.",
        category: "الفئة",
        reviewCount: "عدد المراجعات",
        reviews: "مراجعات",
        sentimentMix: "مزيج المشاعر",
        mix: {
            positive: "إيجابي في الغالب",
            balanced: "متوازن",
            negative: "سلبي في الغالب"
        }
    }
};
