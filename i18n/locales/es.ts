

export default {
    app: {
        title: "Dashboard de Sentimiento del Cliente con IA",
        subtitle: "Analice los comentarios de los clientes con IA para descubrir información procesable.",
    },
    sidebar: {
        title: "Sentimiento IA",
        workspace: "Mis Proyectos",
        dashboard: "Dashboard de Análisis",
        chat: "Chat IA",
        settings: "Configuración",
    },
    workspace: {
        title: "Mis Proyectos de Análisis",
        subtitle: "Cree un nuevo proyecto o continúe trabajando en uno existente.",
        createNew: "Crear Nuevo Análisis",
        newProjectName: "Análisis sin título",
        confirmDelete: "¿Está seguro de que desea eliminar este proyecto? Esta acción no se puede deshacer.",
        confirmDeleteTitle: "Confirmar Eliminación",
        deleteButton: "Eliminar",
        renameTitle: "Renombrar Proyecto",
        renameInput: "Ingrese el nuevo nombre del proyecto",
        renameButton: "Renombrar",
        cancelButton: "Cancelar",
        openProject: "Abrir",
        noAnalysis: "Aún no hay análisis",
        reviewsAnalyzed: "{count} reseñas analizadas",
        createdOn: "Creado el: {date}",
    },
    project: {
         textarea: {
            placeholder: "Pegue aquí las reseñas de sus clientes... Se recomienda una reseña por línea para obtener los mejores resultados."
        },
        deepThinking: {
            title: "Modo de Pensamiento Profundo",
            description: "Utiliza un modelo más potente para obtener resúmenes más profundos."
        },
        analyzeButton: "Analizar Sentimiento",
        analyzingButton: "Analizando...",
        ready: {
            title: "Listo para Analizar",
            description: "Su informe de sentimiento aparecerá aquí una vez que analice su primer lote de reseñas."
        },
        summary: {
            title: "Resumen Ejecutivo de IA",
            description: "Principales ideas y áreas de mejora procesables identificadas por la IA."
        },
        actionableInsights: {
            title: "Ideas Accionables de IA",
            description: "Próximos pasos impulsados por IA para mejorar su negocio."
        },
        overallScore: {
            title: "Puntuación General de Satisfacción"
        },
        categoryAnalysis: {
            title: "Análisis por Categoría",
            description: "Puntuaciones para aspectos clave del negocio y su importancia basada en las reseñas.",
            category: "Categoría",
            score: "Puntuación",
            weight: "Peso"
        },
        reviewBreakdown: {
            title: "Desglose Detallado de Reseñas",
            description: "Pase el cursor sobre una reseña para ver las palabras clave resaltadas.",
            filter: "Filtrar reseñas...",
            review: "Reseña",
            sentiment: "Sentimiento",
            satisfaction: "Satisfacción"
        },
        wordClouds: {
            praises: "Elogios Comunes",
            complaints: "Quejas Comunes",
        },
    },
    settings: {
        title: "Configuración",
        saveChanges: "Guardar Cambios",
        saving: "Guardando...",
        language: {
            title: "Idioma",
            description: "Elija el idioma de visualización para la aplicación."
        },
        themes: {
            title: "Apariencia",
            description: "Seleccione un tema de color para el dashboard.",
            light: "Clásico",
            dark: "Oscuro",
            gradient: "Gradiente",
            corporate: "Corporativo",
            fun: "Divertido",
            "high-contrast": "Alto Contraste",
        },
        apiKey: {
            title: "Gestión de Clave API",
            description: "Su clave API de Gemini se almacena de forma segura en el almacenamiento local de su navegador y nunca se envía a ningún otro lugar.",
            yourKey: "Su Clave API de Gemini",
            placeholder: "Ingrese su clave API aquí",
            getLink: "Obtenga su Clave API de Gemini"
        }
    },
    chat: {
        aiName: "Analista IA",
        you: "Tú",
        welcome: "¡Hola! Soy tu analista de IA. Ahora puedo realizar tareas para ti. Intenta pedirme que 'encuentre todas las reseñas negativas sobre la batería' o 'genere un informe'.",
        placeholder: "Haga una pregunta de seguimiento o deme una tarea...",
        send: "Enviar",
        foundReviews: "Aquí están las reseñas que encontré según sus criterios:",
        noReviewsFound: "No pude encontrar ninguna reseña que coincida con sus criterios.",
        generatedReport: "Aquí está el informe que generé para usted:",
        noAnalysisForReport: "No hay datos de análisis disponibles para generar un informe."
    },
    error: {
        title: "Error",
        pasteReviews: "Por favor, pegue algunas reseñas antes de analizar.",
        unknown: "Ocurrió un error desconocido.",
        chatError: "Lo siento, encontré un error. Por favor, inténtelo de nuevo.",
        maxProjects: "Ha alcanzado el máximo de 10 proyectos. Por favor, elimine uno para crear uno nuevo.",
        apiKeyRequired: "Se requiere una clave API. Por favor, agréguela en la configuración.",
        apiKeyRequiredTitle: "Se Requiere Clave API",
        apiKeyRequiredDesc: "Para realizar un análisis, necesita agregar su clave API de Gemini en la configuración.",
        chatDisabled: "El chat está deshabilitado hasta que se realice un análisis y se configure una clave API."
    },
    loading: {
        stage1: "Analizando sentimiento y extrayendo palabras clave...",
        stage2: "Generando resumen ejecutivo e informe final..."
    },
    sampleGenerator: {
        generate: "Generar Muestras",
        generating: "Generando...",
        description: "Configure la IA para generar un conjunto personalizado de reseñas de muestra.",
        category: "Categoría",
        reviewCount: "Número de Reseñas",
        reviews: "reseñas",
        sentimentMix: "Mezcla de Sentimientos",
        mix: {
            positive: "Mayormente Positivo",
            balanced: "Equilibrado",
            negative: "Mayormente Negativo"
        }
    }
};
