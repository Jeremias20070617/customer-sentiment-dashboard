

export default {
    app: {
        title: "Painel de Sentimento do Cliente com IA",
        subtitle: "Analise o feedback dos clientes com IA para descobrir insights acionáveis.",
    },
    sidebar: {
        title: "Sentimento IA",
        workspace: "Meus Projetos",
        dashboard: "Painel de Análise",
        chat: "Chat IA",
        settings: "Configurações",
    },
    workspace: {
        title: "Meus Projetos de Análise",
        subtitle: "Crie um novo projeto ou continue trabalhando em um existente.",
        createNew: "Criar Nova Análise",
        newProjectName: "Análise sem título",
        confirmDelete: "Tem certeza de que deseja excluir este projeto? Esta ação não pode ser desfeita.",
        confirmDeleteTitle: "Confirmar Exclusão",
        deleteButton: "Excluir",
        renameTitle: "Renomear Projeto",
        renameInput: "Digite o novo nome do projeto",
        renameButton: "Renomear",
        cancelButton: "Cancelar",
        openProject: "Abrir",
        noAnalysis: "Nenhuma análise ainda",
        reviewsAnalyzed: "{count} avaliações analisadas",
        createdOn: "Criado em: {date}",
    },
    project: {
         textarea: {
            placeholder: "Cole aqui as avaliações dos seus clientes... Recomenda-se uma avaliação por linha para melhores resultados."
        },
        deepThinking: {
            title: "Modo de Pensamento Profundo",
            description: "Usa um modelo mais poderoso para insights de resumo mais profundos."
        },
        analyzeButton: "Analisar Sentimento",
        analyzingButton: "Analisando...",
        ready: {
            title: "Pronto para Analisar",
            description: "Seu relatório de sentimento aparecerá aqui assim que você analisar seu primeiro lote de avaliações."
        },
        summary: {
            title: "Resumo Executivo da IA",
            description: "Principais insights e áreas de melhoria acionáveis identificadas pela IA."
        },
        actionableInsights: {
            title: "Insights Acionáveis da IA",
            description: "Próximos passos alimentados por IA para melhorar seu negócio."
        },
        overallScore: {
            title: "Pontuação Geral de Satisfação"
        },
        categoryAnalysis: {
            title: "Análise por Categoria",
            description: "Pontuações para aspectos-chave do negócio e sua importância com base nas avaliações.",
            category: "Categoria",
            score: "Pontuação",
            weight: "Peso"
        },
        reviewBreakdown: {
            title: "Detalhamento das Avaliações",
            description: "Passe o mouse sobre uma avaliação para ver as palavras-chave destacadas.",
            filter: "Filtrar avaliações...",
            review: "Avaliação",
            sentiment: "Sentimento",
            satisfaction: "Satisfação"
        },
        wordClouds: {
            praises: "Elogios Comuns",
            complaints: "Reclamações Comuns",
        },
    },
    settings: {
        title: "Configurações",
        saveChanges: "Salvar Alterações",
        saving: "Salvando...",
        language: {
            title: "Idioma",
            description: "Escolha o idioma de exibição para o aplicativo."
        },
        themes: {
            title: "Aparência",
            description: "Selecione um tema de cores para o painel.",
            light: "Clássico",
            dark: "Escuro",
            gradient: "Gradiente",
            corporate: "Corporativo",
            fun: "Divertido",
            "high-contrast": "Alto Contraste",
        },
        apiKey: {
            title: "Gerenciamento de Chave de API",
            description: "Sua chave de API Gemini é armazenada com segurança no armazenamento local do seu navegador e nunca é enviada para nenhum outro lugar.",
            yourKey: "Sua Chave de API Gemini",
            placeholder: "Digite sua chave de API aqui",
            getLink: "Obtenha sua Chave de API Gemini"
        }
    },
    chat: {
        aiName: "Analista de IA",
        you: "Você",
        welcome: "Olá! Eu sou seu analista de IA. Agora eu também posso realizar tarefas para você. Tente me pedir para 'encontrar todas as avaliações negativas sobre a bateria' ou 'gerar um relatório'.",
        placeholder: "Faça uma pergunta de acompanhamento ou me dê uma tarefa...",
        send: "Enviar",
        foundReviews: "Aqui estão as avaliações que encontrei com base em seus critérios:",
        noReviewsFound: "Não consegui encontrar nenhuma avaliação que corresponda aos seus critérios.",
        generatedReport: "Aqui está o relatório que gerei para você:",
        noAnalysisForReport: "Não há dados de análise disponíveis para gerar um relatório."
    },
    error: {
        title: "Erro",
        pasteReviews: "Por favor, cole algumas avaliações antes de analisar.",
        unknown: "Ocorreu um erro desconhecido.",
        chatError: "Desculpe, encontrei um erro. Por favor, tente novamente.",
        maxProjects: "Você atingiu o máximo de 10 projetos. Por favor, exclua um para criar um novo.",
        apiKeyRequired: "A Chave de API é necessária. Por favor, adicione-a nas configurações.",
        apiKeyRequiredTitle: "Chave de API Necessária",
        apiKeyRequiredDesc: "Para realizar a análise, você precisa adicionar sua chave de API Gemini nas configurações.",
        chatDisabled: "O chat está desativado até que uma análise seja realizada e uma chave de API seja definida."
    },
    loading: {
        stage1: "Analisando sentimento e extraindo palavras-chave...",
        stage2: "Gerando resumo executivo e relatório final..."
    },
    sampleGenerator: {
        generate: "Gerar Amostras",
        generating: "Gerando...",
        description: "Configure a IA para gerar um conjunto personalizado de avaliações de amostra.",
        category: "Categoria",
        reviewCount: "Número de Avaliações",
        reviews: "avaliações",
        sentimentMix: "Mix de Sentimento",
        mix: {
            positive: "Principalmente Positivo",
            balanced: "Equilibrado",
            negative: "Principalmente Negativo"
        }
    }
};
