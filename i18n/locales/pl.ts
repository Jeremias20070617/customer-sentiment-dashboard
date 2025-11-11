

export default {
    app: {
        title: "Panel analizy sentymentu klientów AI",
        subtitle: "Analizuj opinie klientów za pomocą AI, aby odkryć przydatne spostrzeżenia.",
    },
    sidebar: {
        title: "Sentyment AI",
        workspace: "Moje projekty",
        dashboard: "Panel analityczny",
        chat: "Czat AI",
        settings: "Ustawienia",
    },
    workspace: {
        title: "Moje projekty analityczne",
        subtitle: "Utwórz nowy projekt lub kontynuuj pracę nad istniejącym.",
        createNew: "Utwórz nową analizę",
        newProjectName: "Analiza bez nazwy",
        confirmDelete: "Czy na pewno chcesz usunąć ten projekt? Tej operacji nie można cofnąć.",
        confirmDeleteTitle: "Potwierdź usunięcie",
        deleteButton: "Usuń",
        renameTitle: "Zmień nazwę projektu",
        renameInput: "Wprowadź nową nazwę projektu",
        renameButton: "Zmień nazwę",
        cancelButton: "Anuluj",
        openProject: "Otwórz",
        noAnalysis: "Brak analizy",
        reviewsAnalyzed: "Przeanalizowano {count} opinii",
        createdOn: "Utworzono: {date}",
    },
    project: {
         textarea: {
            placeholder: "Wklej tutaj opinie swoich klientów... Zalecana jest jedna opinia na wiersz, aby uzyskać najlepsze wyniki."
        },
        deepThinking: {
            title: "Tryb głębokiego myślenia",
            description: "Używa potężniejszego modelu do uzyskania głębszych podsumowań."
        },
        analyzeButton: "Analizuj sentyment",
        analyzingButton: "Analizowanie...",
        ready: {
            title: "Gotowy do analizy",
            description: "Twój raport sentymentu pojawi się tutaj po przeanalizowaniu pierwszej partii opinii."
        },
        summary: {
            title: "Podsumowanie wykonawcze AI",
            description: "Najważniejsze spostrzeżenia i obszary do poprawy zidentyfikowane przez AI."
        },
        actionableInsights: {
            title: "Praktyczne wskazówki od AI",
            description: "Kolejne kroki wspierane przez AI w celu ulepszenia Twojej firmy."
        },
        overallScore: {
            title: "Ogólny wynik satysfakcji"
        },
        categoryAnalysis: {
            title: "Analiza kategorii",
            description: "Oceny dla kluczowych aspektów biznesowych i ich znaczenie na podstawie opinii.",
            category: "Kategoria",
            score: "Wynik",
            weight: "Waga"
        },
        reviewBreakdown: {
            title: "Szczegółowy podział opinii",
            description: "Najedź kursorem na opinię, aby zobaczyć podświetlone słowa kluczowe.",
            filter: "Filtruj opinie...",
            review: "Opinia",
            sentiment: "Sentyment",
            satisfaction: "Satysfakcja"
        },
        wordClouds: {
            praises: "Częste pochwały",
            complaints: "Częste skargi",
        },
    },
    settings: {
        title: "Ustawienia",
        saveChanges: "Zapisz zmiany",
        saving: "Zapisywanie...",
        language: {
            title: "Język",
            description: "Wybierz język wyświetlania aplikacji."
        },
        themes: {
            title: "Wygląd",
            description: "Wybierz motyw kolorystyczny dla panelu.",
            light: "Klasyczny",
            dark: "Ciemny",
            gradient: "Gradient",
            corporate: "Korporacyjny",
            fun: "Zabawny",
            "high-contrast": "Wysoki kontrast",
        },
        apiKey: {
            title: "Zarządzanie kluczem API",
            description: "Twój klucz API Gemini jest bezpiecznie przechowywany w lokalnej pamięci przeglądarki i nigdy nie jest wysyłany gdzie indziej.",
            yourKey: "Twój klucz API Gemini",
            placeholder: "Wprowadź tutaj swój klucz API",
            getLink: "Zdobądź swój klucz API Gemini"
        }
    },
    chat: {
        aiName: "Analityk AI",
        you: "Ty",
        welcome: "Cześć! Jestem Twoim analitykiem AI. Teraz mogę również wykonywać dla Ciebie zadania. Spróbuj poprosić mnie o 'znalezienie wszystkich negatywnych opinii na temat baterii' lub 'wygenerowanie raportu'.",
        placeholder: "Zadaj pytanie uzupełniające lub daj mi zadanie...",
        send: "Wyślij",
        foundReviews: "Oto opinie, które znalazłem na podstawie Twoich kryteriów:",
        noReviewsFound: "Nie udało mi się znaleźć żadnych opinii pasujących do Twoich kryteriów.",
        generatedReport: "Oto raport, który dla Ciebie wygenerowałem:",
        noAnalysisForReport: "Brak danych analitycznych do wygenerowania raportu."
    },
    error: {
        title: "Błąd",
        pasteReviews: "Proszę wkleić kilka opinii przed rozpoczęciem analizy.",
        unknown: "Wystąpił nieznany błąd.",
        chatError: "Przepraszam, wystąpił błąd. Spróbuj ponownie.",
        maxProjects: "Osiągnięto maksymalną liczbę 10 projektów. Usuń jeden, aby utworzyć nowy.",
        apiKeyRequired: "Klucz API jest wymagany. Dodaj go w ustawieniach.",
        apiKeyRequiredTitle: "Wymagany klucz API",
        apiKeyRequiredDesc: "Aby przeprowadzić analizę, musisz dodać swój klucz API Gemini w ustawieniach.",
        chatDisabled: "Czat jest wyłączony do czasu przeprowadzenia analizy i ustawienia klucza API."
    },
    loading: {
        stage1: "Analizowanie sentymentu i wyodrębnianie słów kluczowych...",
        stage2: "Generowanie podsumowania wykonawczego i raportu końcowego..."
    },
    sampleGenerator: {
        generate: "Generuj próbki",
        generating: "Generowanie...",
        description: "Skonfiguruj AI, aby wygenerować niestandardowy zestaw przykładowych opinii.",
        category: "Kategoria",
        reviewCount: "Liczba opinii",
        reviews: "opinii",
        sentimentMix: "Mieszanka sentymentu",
        mix: {
            positive: "Głównie pozytywny",
            balanced: "Zrównoważony",
            negative: "Głównie negatywny"
        }
    }
};
