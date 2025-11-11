

export default {
    app: {
        title: "AI Müşteri Duygu Analiz Paneli",
        subtitle: "Eyleme geçirilebilir içgörüleri ortaya çıkarmak için müşteri geri bildirimlerini yapay zeka ile analiz edin.",
    },
    sidebar: {
        title: "Duygu AI",
        workspace: "Projelerim",
        dashboard: "Analiz Paneli",
        chat: "AI Sohbet",
        settings: "Ayarlar",
    },
    workspace: {
        title: "Analiz Projelerim",
        subtitle: "Yeni bir proje oluşturun veya mevcut bir proje üzerinde çalışmaya devam edin.",
        createNew: "Yeni Analiz Oluştur",
        newProjectName: "İsimsiz Analiz",
        confirmDelete: "Bu projeyi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.",
        confirmDeleteTitle: "Silmeyi Onayla",
        deleteButton: "Sil",
        renameTitle: "Projeyi Yeniden Adlandır",
        renameInput: "Yeni proje adını girin",
        renameButton: "Yeniden Adlandır",
        cancelButton: "İptal",
        openProject: "Aç",
        noAnalysis: "Henüz analiz yok",
        reviewsAnalyzed: "{count} yorum analiz edildi",
        createdOn: "Oluşturulma: {date}",
    },
    project: {
         textarea: {
            placeholder: "Müşteri yorumlarınızı buraya yapıştırın... En iyi sonuçlar için her satıra bir yorum yazmanız önerilir."
        },
        deepThinking: {
            title: "Derin Düşünme Modu",
            description: "Daha derin özet analizleri için daha güçlü bir model kullanır."
        },
        analyzeButton: "Duyguları Analiz Et",
        analyzingButton: "Analiz ediliyor...",
        ready: {
            title: "Analize Hazır",
            description: "Duygu raporunuz, ilk yorum grubunuzu analiz ettikten sonra burada görünecektir."
        },
        summary: {
            title: "AI Yönetici Özeti",
            description: "Yapay zeka tarafından belirlenen en önemli içgörüler ve eyleme geçirilebilir iyileştirme alanları."
        },
        actionableInsights: {
            title: "AI Eylem Önerileri",
            description: "İşinizi geliştirmek için yapay zeka destekli sonraki adımlar."
        },
        overallScore: {
            title: "Genel Memnuniyet Skoru"
        },
        categoryAnalysis: {
            title: "Kategori Analizi",
            description: "Önemli iş alanları için puanlar ve yorumlara dayalı önem dereceleri.",
            category: "Kategori",
            score: "Puan",
            weight: "Ağırlık"
        },
        reviewBreakdown: {
            title: "Detaylı Yorum Dökümü",
            description: "Vurgulanan anahtar kelimeleri görmek için bir yorumun üzerine gelin.",
            filter: "Yorumları filtrele...",
            review: "Yorum",
            sentiment: "Duygu",
            satisfaction: "Memnuniyet"
        },
        wordClouds: {
            praises: "Yaygın Övgüler",
            complaints: "Yaygın Şikayetler",
        },
    },
    settings: {
        title: "Ayarlar",
        saveChanges: "Değişiklikleri Kaydet",
        saving: "Kaydediliyor...",
        language: {
            title: "Dil",
            description: "Uygulama için görüntüleme dilini seçin."
        },
        themes: {
            title: "Görünüm",
            description: "Panel için bir renk teması seçin.",
            light: "Klasik",
            dark: "Karanlık",
            gradient: "Degrade",
            corporate: "Kurumsal",
            fun: "Eğlenceli",
            "high-contrast": "Yüksek Kontrast",
        },
        apiKey: {
            title: "API Anahtarı Yönetimi",
            description: "Gemini API anahtarınız tarayıcınızın yerel depolama alanında güvenli bir şekilde saklanır ve başka hiçbir yere gönderilmez.",
            yourKey: "Gemini API Anahtarınız",
            placeholder: "API anahtarınızı buraya girin",
            getLink: "Gemini API Anahtarınızı Alın"
        }
    },
    chat: {
        aiName: "AI Analist",
        you: "Siz",
        welcome: "Merhaba! Ben sizin AI analistiniz. Artık sizin için görevler de yapabilirim. Bana 'batarya ile ilgili tüm olumsuz yorumları bul' veya 'bir rapor oluştur' gibi şeyler sormayı deneyin.",
        placeholder: "Bir takip sorusu sorun ya da bir görev verin...",
        send: "Gönder",
        foundReviews: "Kriterlerinize göre bulduğum yorumlar şunlar:",
        noReviewsFound: "Kriterlerinize uyan hiçbir yorum bulamadım.",
        generatedReport: "Sizin için oluşturduğum rapor:",
        noAnalysisForReport: "Rapor oluşturmak için analiz verisi bulunmuyor."
    },
    error: {
        title: "Hata",
        pasteReviews: "Lütfen analiz etmeden önce birkaç yorum yapıştırın.",
        unknown: "Bilinmeyen bir hata oluştu.",
        chatError: "Üzgünüm, bir hatayla karşılaştım. Lütfen tekrar deneyin.",
        maxProjects: "Maksimum 10 projeye ulaştınız. Yeni bir tane oluşturmak için lütfen birini silin.",
        apiKeyRequired: "API Anahtarı gerekli. Lütfen ayarlardan ekleyin.",
        apiKeyRequiredTitle: "API Anahtarı Gerekli",
        apiKeyRequiredDesc: "Analiz yapmak için Gemini API anahtarınızı ayarlara eklemeniz gerekir.",
        chatDisabled: "Sohbet, bir analiz yapılana ve API anahtarı ayarlanana kadar devre dışı."
    },
    loading: {
        stage1: "Duygu analizi yapılıyor ve anahtar kelimeler çıkarılıyor...",
        stage2: "Yönetici özeti ve nihai rapor oluşturuluyor..."
    },
    sampleGenerator: {
        generate: "Örnek Oluştur",
        generating: "Oluşturuluyor...",
        description: "Özel bir örnek yorum seti oluşturmak için yapay zekayı yapılandırın.",
        category: "Kategori",
        reviewCount: "Yorum Sayısı",
        reviews: "yorum",
        sentimentMix: "Duygu Dağılımı",
        mix: {
            positive: "Çoğunlukla Pozitif",
            balanced: "Dengeli",
            negative: "Çoğunlukla Negatif"
        }
    }
};
