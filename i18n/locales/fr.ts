

export default {
    app: {
        title: "Tableau de bord IA des sentiments clients",
        subtitle: "Analysez les retours clients avec l'IA pour découvrir des informations exploitables.",
    },
    sidebar: {
        title: "Sentiment IA",
        workspace: "Mes projets",
        dashboard: "Tableau d'analyse",
        chat: "Chat IA",
        settings: "Paramètres",
    },
    workspace: {
        title: "Mes projets d'analyse",
        subtitle: "Créez un nouveau projet ou continuez à travailler sur un projet existant.",
        createNew: "Créer une nouvelle analyse",
        newProjectName: "Analyse sans titre",
        confirmDelete: "Êtes-vous sûr de vouloir supprimer ce projet ? Cette action est irréversible.",
        confirmDeleteTitle: "Confirmer la suppression",
        deleteButton: "Supprimer",
        renameTitle: "Renommer le projet",
        renameInput: "Entrez le nouveau nom du projet",
        renameButton: "Renommer",
        cancelButton: "Annuler",
        openProject: "Ouvrir",
        noAnalysis: "Aucune analyse pour l'instant",
        reviewsAnalyzed: "{count} avis analysés",
        createdOn: "Créé le : {date}",
    },
    project: {
         textarea: {
            placeholder: "Collez vos avis clients ici... Un avis par ligne est recommandé pour de meilleurs résultats."
        },
        deepThinking: {
            title: "Mode Réflexion Approfondie",
            description: "Utilise un modèle plus puissant pour des résumés plus perspicaces."
        },
        analyzeButton: "Analyser les sentiments",
        analyzingButton: "Analyse en cours...",
        ready: {
            title: "Prêt pour l'analyse",
            description: "Votre rapport de sentiments apparaîtra ici une fois que vous aurez analysé votre premier lot d'avis."
        },
        summary: {
            title: "Synthèse exécutive par l'IA",
            description: "Principales informations et domaines d'amélioration exploitables identifiés par l'IA."
        },
        actionableInsights: {
            title: "Recommandations exploitables de l'IA",
            description: "Prochaines étapes basées sur l'IA pour améliorer votre entreprise."
        },
        overallScore: {
            title: "Score de satisfaction global"
        },
        categoryAnalysis: {
            title: "Analyse par catégorie",
            description: "Scores pour les aspects clés de l'entreprise et leur importance basée sur les avis.",
            category: "Catégorie",
            score: "Score",
            weight: "Poids"
        },
        reviewBreakdown: {
            title: "Détail des avis",
            description: "Passez la souris sur un avis pour voir les mots-clés en surbrillance.",
            filter: "Filtrer les avis...",
            review: "Avis",
            sentiment: "Sentiment",
            satisfaction: "Satisfaction"
        },
        wordClouds: {
            praises: "Compliments courants",
            complaints: "Plaintes courantes",
        },
    },
    settings: {
        title: "Paramètres",
        saveChanges: "Enregistrer les modifications",
        saving: "Enregistrement...",
        language: {
            title: "Langue",
            description: "Choisissez la langue d'affichage de l'application."
        },
        themes: {
            title: "Apparence",
            description: "Sélectionnez un thème de couleurs pour le tableau de bord.",
            light: "Classique",
            dark: "Sombre",
            gradient: "Dégradé",
            corporate: "Professionnel",
            fun: "Amusant",
            "high-contrast": "Contraste élevé",
        },
        apiKey: {
            title: "Gestion de la clé API",
            description: "Votre clé API Gemini est stockée en toute sécurité dans le stockage local de votre navigateur et n'est jamais envoyée ailleurs.",
            yourKey: "Votre clé API Gemini",
            placeholder: "Entrez votre clé API ici",
            getLink: "Obtenez votre clé API Gemini"
        }
    },
    chat: {
        aiName: "Analyste IA",
        you: "Vous",
        welcome: "Bonjour ! Je suis votre analyste IA. Je peux maintenant effectuer des tâches pour vous. Essayez de me demander de 'trouver tous les avis négatifs sur la batterie' ou de 'générer un rapport'.",
        placeholder: "Posez une question de suivi ou donnez-moi une tâche...",
        send: "Envoyer",
        foundReviews: "Voici les avis que j'ai trouvés en fonction de vos critères :",
        noReviewsFound: "Je n'ai trouvé aucun avis correspondant à vos critères.",
        generatedReport: "Voici le rapport que j'ai généré pour vous :",
        noAnalysisForReport: "Aucune donnée d'analyse n'est disponible pour générer un rapport."
    },
    error: {
        title: "Erreur",
        pasteReviews: "Veuillez coller quelques avis avant d'analyser.",
        unknown: "Une erreur inconnue s'est produite.",
        chatError: "Désolé, j'ai rencontré une erreur. Veuillez réessayer.",
        maxProjects: "Vous avez atteint le nombre maximum de 10 projets. Veuillez en supprimer un pour en créer un nouveau.",
        apiKeyRequired: "Clé API requise. Veuillez l'ajouter dans les paramètres.",
        apiKeyRequiredTitle: "Clé API requise",
        apiKeyRequiredDesc: "Pour effectuer une analyse, vous devez ajouter votre clé API Gemini dans les paramètres.",
        chatDisabled: "Le chat est désactivé jusqu'à ce qu'une analyse soit effectuée et qu'une clé API soit définie."
    },
    loading: {
        stage1: "Analyse des sentiments et extraction des mots-clés...",
        stage2: "Génération de la synthèse exécutive et du rapport final..."
    },
    sampleGenerator: {
        generate: "Générer des exemples",
        generating: "Génération...",
        description: "Configurez l'IA pour générer un ensemble personnalisé d'exemples d'avis.",
        category: "Catégorie",
        reviewCount: "Nombre d'avis",
        reviews: "avis",
        sentimentMix: "Mélange de sentiments",
        mix: {
            positive: "Majoritairement positif",
            balanced: "Équilibré",
            negative: "Majoritairement négatif"
        }
    }
};
