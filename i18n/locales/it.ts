

export default {
    app: {
        title: "Dashboard IA del sentiment dei clienti",
        subtitle: "Analizza i feedback dei clienti con l'IA per scoprire insight azionabili.",
    },
    sidebar: {
        title: "Sentiment IA",
        workspace: "I miei progetti",
        dashboard: "Dashboard di analisi",
        chat: "Chat IA",
        settings: "Impostazioni",
    },
    workspace: {
        title: "I miei progetti di analisi",
        subtitle: "Crea un nuovo progetto o continua a lavorare su uno esistente.",
        createNew: "Crea nuova analisi",
        newProjectName: "Analisi senza titolo",
        confirmDelete: "Sei sicuro di voler eliminare questo progetto? L'azione non può essere annullata.",
        confirmDeleteTitle: "Conferma eliminazione",
        deleteButton: "Elimina",
        renameTitle: "Rinomina progetto",
        renameInput: "Inserisci il nuovo nome del progetto",
        renameButton: "Rinomina",
        cancelButton: "Annulla",
        openProject: "Apri",
        noAnalysis: "Nessuna analisi ancora",
        reviewsAnalyzed: "{count} recensioni analizzate",
        createdOn: "Creato il: {date}",
    },
    project: {
         textarea: {
            placeholder: "Incolla qui le recensioni dei tuoi clienti... Si consiglia una recensione per riga per ottenere i migliori risultati."
        },
        deepThinking: {
            title: "Modalità Pensiero Profondo",
            description: "Utilizza un modello più potente per insight di riepilogo più approfonditi."
        },
        analyzeButton: "Analizza sentiment",
        analyzingButton: "Analisi in corso...",
        ready: {
            title: "Pronto per l'analisi",
            description: "Il tuo report sul sentiment apparirà qui una volta analizzato il tuo primo gruppo di recensioni."
        },
        summary: {
            title: "Riepilogo esecutivo IA",
            description: "Principali insight e aree di miglioramento azionabili identificate dall'IA."
        },
        actionableInsights: {
            title: "Insight azionabili IA",
            description: "Prossimi passi basati sull'IA per migliorare la tua attività."
        },
        overallScore: {
            title: "Punteggio di soddisfazione generale"
        },
        categoryAnalysis: {
            title: "Analisi per categoria",
            description: "Punteggi per aspetti aziendali chiave e la loro importanza basata sulle recensioni.",
            category: "Categoria",
            score: "Punteggio",
            weight: "Peso"
        },
        reviewBreakdown: {
            title: "Dettaglio recensioni",
            description: "Passa il mouse su una recensione per vedere le parole chiave evidenziate.",
            filter: "Filtra recensioni...",
            review: "Recensione",
            sentiment: "Sentiment",
            satisfaction: "Soddisfazione"
        },
        wordClouds: {
            praises: "Elogi comuni",
            complaints: "Lamentele comuni",
        },
    },
    settings: {
        title: "Impostazioni",
        saveChanges: "Salva Modifiche",
        saving: "Salvataggio...",
        language: {
            title: "Lingua",
            description: "Scegli la lingua di visualizzazione per l'applicazione."
        },
        themes: {
            title: "Aspetto",
            description: "Seleziona un tema di colori per la dashboard.",
            light: "Classico",
            dark: "Scuro",
            gradient: "Gradiente",
            corporate: "Aziendale",
            fun: "Divertente",
            "high-contrast": "Alto contrasto",
        },
        apiKey: {
            title: "Gestione chiave API",
            description: "La tua chiave API Gemini è archiviata in modo sicuro nella memoria locale del tuo browser e non viene mai inviata altrove.",
            yourKey: "La tua chiave API Gemini",
            placeholder: "Inserisci qui la tua chiave API",
            getLink: "Ottieni la tua chiave API Gemini"
        }
    },
    chat: {
        aiName: "Analista IA",
        you: "Tu",
        welcome: "Ciao! Sono il tuo analista IA. Ora posso anche eseguire compiti per te. Prova a chiedermi di 'trovare tutte le recensioni negative sulla batteria' o 'generare un report'.",
        placeholder: "Fai una domanda di follow-up o dammi un compito...",
        send: "Invia",
        foundReviews: "Ecco le recensioni che ho trovato in base ai tuoi criteri:",
        noReviewsFound: "Non sono riuscito a trovare nessuna recensione che corrisponda ai tuoi criteri.",
        generatedReport: "Ecco il report che ho generato per te:",
        noAnalysisForReport: "Non ci sono dati di analisi disponibili per generare un report."
    },
    error: {
        title: "Errore",
        pasteReviews: "Per favore, incolla alcune recensioni prima di analizzare.",
        unknown: "Si è verificato un errore sconosciuto.",
        chatError: "Spiacenti, ho riscontrato un errore. Riprova.",
        maxProjects: "Hai raggiunto il numero massimo di 10 progetti. Per favore, cancellane uno per crearne uno nuovo.",
        apiKeyRequired: "È richiesta la chiave API. Aggiungila nelle impostazioni.",
        apiKeyRequiredTitle: "Chiave API richiesta",
        apiKeyRequiredDesc: "Per eseguire l'analisi, è necessario aggiungere la chiave API di Gemini nelle impostazioni.",
        chatDisabled: "La chat è disabilitata fino a quando non viene eseguita un'analisi e non viene impostata una chiave API."
    },
    loading: {
        stage1: "Analisi del sentiment ed estrazione delle parole chiave...",
        stage2: "Generazione del riepilogo esecutivo e del report finale..."
    },
    sampleGenerator: {
        generate: "Genera campioni",
        generating: "Generazione...",
        description: "Configura l'IA per generare un set personalizzato di recensioni di esempio.",
        category: "Categoria",
        reviewCount: "Numero di recensioni",
        reviews: "recensioni",
        sentimentMix: "Mix di sentiment",
        mix: {
            positive: "Prevalentemente positivo",
            balanced: "Bilanciato",
            negative: "Prevalentemente negativo"
        }
    }
};
