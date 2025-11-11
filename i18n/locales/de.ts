

export default {
    app: {
        title: "KI-Kundenstimmungs-Dashboard",
        subtitle: "Analysieren Sie Kundenfeedback mit KI, um handlungsorientierte Einblicke zu gewinnen.",
    },
    sidebar: {
        title: "Sentiment KI",
        workspace: "Meine Projekte",
        dashboard: "Analyse-Dashboard",
        chat: "KI-Chat",
        settings: "Einstellungen",
    },
    workspace: {
        title: "Meine Analyseprojekte",
        subtitle: "Erstellen Sie ein neues Projekt oder arbeiten Sie an einem bestehenden weiter.",
        createNew: "Neue Analyse erstellen",
        newProjectName: "Unbenannte Analyse",
        confirmDelete: "Sind Sie sicher, dass Sie dieses Projekt löschen möchten? Diese Aktion kann nicht rückgängig gemacht werden.",
        confirmDeleteTitle: "Löschen bestätigen",
        deleteButton: "Löschen",
        renameTitle: "Projekt umbenennen",
        renameInput: "Neuen Projektnamen eingeben",
        renameButton: "Umbenennen",
        cancelButton: "Abbrechen",
        openProject: "Öffnen",
        noAnalysis: "Noch keine Analyse",
        reviewsAnalyzed: "{count} Bewertungen analysiert",
        createdOn: "Erstellt am: {date}",
    },
    project: {
         textarea: {
            placeholder: "Fügen Sie hier Ihre Kundenbewertungen ein... Eine Bewertung pro Zeile wird für beste Ergebnisse empfohlen."
        },
        deepThinking: {
            title: "Deep Thinking Modus",
            description: "Verwendet ein leistungsfähigeres Modell für tiefere Einblicke in die Zusammenfassung."
        },
        analyzeButton: "Stimmung analysieren",
        analyzingButton: "Analysiere...",
        ready: {
            title: "Bereit zur Analyse",
            description: "Ihr Stimmungsbericht wird hier angezeigt, sobald Sie Ihre erste Charge von Bewertungen analysiert haben."
        },
        summary: {
            title: "KI-Management-Zusammenfassung",
            description: "Top-Einblicke und handlungsorientierte Verbesserungsbereiche, die von der KI identifiziert wurden."
        },
        actionableInsights: {
            title: "KI-Handlungsempfehlungen",
            description: "KI-gestützte nächste Schritte zur Verbesserung Ihres Unternehmens."
        },
        overallScore: {
            title: "Gesamtzufriedenheitswert"
        },
        categoryAnalysis: {
            title: "Kategorienanalyse",
            description: "Bewertungen für wichtige Geschäftsbereiche und deren Bedeutung basierend auf den Bewertungen.",
            category: "Kategorie",
            score: "Punktzahl",
            weight: "Gewichtung"
        },
        reviewBreakdown: {
            title: "Detaillierte Bewertungsaufschlüsselung",
            description: "Fahren Sie mit der Maus über eine Bewertung, um hervorgehobene Schlüsselwörter anzuzeigen.",
            filter: "Bewertungen filtern...",
            review: "Bewertung",
            sentiment: "Stimmung",
            satisfaction: "Zufriedenheit"
        },
        wordClouds: {
            praises: "Häufiges Lob",
            complaints: "Häufige Beschwerden",
        },
    },
    settings: {
        title: "Einstellungen",
        saveChanges: "Änderungen speichern",
        saving: "Speichern...",
        language: {
            title: "Sprache",
            description: "Wählen Sie die Anzeigesprache für die Anwendung."
        },
        themes: {
            title: "Erscheinungsbild",
            description: "Wählen Sie ein Farbschema für das Dashboard.",
            light: "Klassisch",
            dark: "Dunkel",
            gradient: "Farbverlauf",
            corporate: "Unternehmen",
            fun: "Verspielt",
            "high-contrast": "Hoher Kontrast",
        },
        apiKey: {
            title: "API-Schlüssel-Verwaltung",
            description: "Ihr Gemini API-Schlüssel wird sicher im lokalen Speicher Ihres Browsers gespeichert und nirgendwo anders hingeschickt.",
            yourKey: "Ihr Gemini API-Schlüssel",
            placeholder: "Geben Sie hier Ihren API-Schlüssel ein",
            getLink: "Holen Sie sich Ihren Gemini API-Schlüssel"
        }
    },
    chat: {
        aiName: "KI-Analyst",
        you: "Sie",
        welcome: "Hallo! Ich bin Ihr KI-Analyst. Ich kann jetzt auch Aufgaben für Sie erledigen. Versuchen Sie, mich zu bitten, 'alle negativen Bewertungen über den Akku zu finden' oder 'einen Bericht zu erstellen'.",
        placeholder: "Stellen Sie eine Folgefrage oder geben Sie mir eine Aufgabe...",
        send: "Senden",
        foundReviews: "Hier sind die Bewertungen, die ich basierend auf Ihren Kriterien gefunden habe:",
        noReviewsFound: "Ich konnte keine Bewertungen finden, die Ihren Kriterien entsprechen.",
        generatedReport: "Hier ist der Bericht, den ich für Sie erstellt habe:",
        noAnalysisForReport: "Es sind keine Analysedaten verfügbar, um einen Bericht zu erstellen."
    },
    error: {
        title: "Fehler",
        pasteReviews: "Bitte fügen Sie einige Bewertungen ein, bevor Sie analysieren.",
        unknown: "Ein unbekannter Fehler ist aufgetreten.",
        chatError: "Entschuldigung, ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        maxProjects: "Sie haben die maximale Anzahl von 10 Projekten erreicht. Bitte löschen Sie eines, um ein neues zu erstellen.",
        apiKeyRequired: "API-Schlüssel erforderlich. Bitte fügen Sie ihn in den Einstellungen hinzu.",
        apiKeyRequiredTitle: "API-Schlüssel erforderlich",
        apiKeyRequiredDesc: "Um eine Analyse durchzuführen, müssen Sie Ihren Gemini API-Schlüssel in den Einstellungen hinzufügen.",
        chatDisabled: "Der Chat ist deaktiviert, bis eine Analyse durchgeführt und ein API-Schlüssel festgelegt wurde."
    },
    loading: {
        stage1: "Analysiere Stimmung und extrahiere Schlüsselwörter...",
        stage2: "Erstelle Management-Zusammenfassung und Abschlussbericht..."
    },
    sampleGenerator: {
        generate: "Beispiele generieren",
        generating: "Generiere...",
        description: "Konfigurieren Sie die KI, um einen benutzerdefinierten Satz von Beispielbewertungen zu generieren.",
        category: "Kategorie",
        reviewCount: "Anzahl der Bewertungen",
        reviews: "Bewertungen",
        sentimentMix: "Stimmungsmix",
        mix: {
            positive: "Meist positiv",
            balanced: "Ausgeglichen",
            negative: "Meist negativ"
        }
    }
};
