

export default {
    app: {
        title: "AI顧客感情分析ダッシュボード",
        subtitle: "AIで顧客のフィードバックを分析し、実行可能なインサイトを発見します。",
    },
    sidebar: {
        title: "感情AI",
        workspace: "マイプロジェクト",
        dashboard: "分析ダッシュボード",
        chat: "AIチャット",
        settings: "設定",
    },
    workspace: {
        title: "私の分析プロジェクト",
        subtitle: "新しいプロジェクトを作成するか、既存のプロジェクトで作業を続けます。",
        createNew: "新規分析を作成",
        newProjectName: "無題の分析",
        confirmDelete: "このプロジェクトを削除してもよろしいですか？この操作は元に戻せません。",
        confirmDeleteTitle: "削除の確認",
        deleteButton: "削除",
        renameTitle: "プロジェクトの名前を変更",
        renameInput: "新しいプロジェクト名を入力",
        renameButton: "名前を変更",
        cancelButton: "キャンセル",
        openProject: "開く",
        noAnalysis: "まだ分析がありません",
        reviewsAnalyzed: "{count}件のレビューを分析済み",
        createdOn: "作成日：{date}",
    },
    project: {
         textarea: {
            placeholder: "ここに顧客のレビューを貼り付けてください...最良の結果を得るためには、1行に1つのレビューを推奨します。"
        },
        deepThinking: {
            title: "ディープシンキングモード",
            description: "より強力なモデルを使用して、より深い要約インサイトを得ます。"
        },
        analyzeButton: "感情を分析",
        analyzingButton: "分析中...",
        ready: {
            title: "分析の準備ができました",
            description: "最初のレビューバッチを分析すると、感情レポートがここに表示されます。"
        },
        summary: {
            title: "AIエグゼクティブサマリー",
            description: "AIによって特定されたトップのインサイトと実行可能な改善領域。"
        },
        actionableInsights: {
            title: "AIによる実行可能なインサイト",
            description: "ビジネスを改善するためのAIを活用した次のステップ。"
        },
        overallScore: {
            title: "総合満足度スコア"
        },
        categoryAnalysis: {
            title: "カテゴリ分析",
            description: "主要なビジネス側面とレビューに基づいたその重要性のスコア。",
            category: "カテゴリ",
            score: "スコア",
            weight: "重み"
        },
        reviewBreakdown: {
            title: "詳細なレビューの内訳",
            description: "レビューにカーソルを合わせると、ハイライトされたキーワードが表示されます。",
            filter: "レビューをフィルタリング...",
            review: "レビュー",
            sentiment: "感情",
            satisfaction: "満足度"
        },
        wordClouds: {
            praises: "よくある賞賛",
            complaints: "よくある苦情",
        },
    },
    settings: {
        title: "設定",
        saveChanges: "変更を保存",
        saving: "保存中...",
        language: {
            title: "言語",
            description: "アプリケーションの表示言語を選択してください。"
        },
        themes: {
            title: "外観",
            description: "ダッシュボードのカラーテーマを選択してください。",
            light: "クラシック",
            dark: "ダーク",
            gradient: "グラデーション",
            corporate: "コーポレート",
            fun: "ファン",
            "high-contrast": "ハイコントラスト",
        },
        apiKey: {
            title: "APIキー管理",
            description: "お使いのGemini APIキーは、ブラウザのローカルストレージに安全に保存され、他の場所に送信されることはありません。",
            yourKey: "あなたのGemini APIキー",
            placeholder: "ここにAPIキーを入力してください",
            getLink: "Gemini APIキーを取得"
        }
    },
    chat: {
        aiName: "AIアナリスト",
        you: "あなた",
        welcome: "こんにちは！私はあなたのAIアナリストです。タスクも実行できるようになりました。「バッテリーに関するすべての否定的なレビューを見つけて」とか「レポートを作成して」と頼んでみてください。",
        placeholder: "フォローアップの質問をするか、タスクを与えてください...",
        send: "送信",
        foundReviews: "あなたの基準に基づいて見つかったレビューはこちらです：",
        noReviewsFound: "あなたの基準に一致するレビューは見つかりませんでした。",
        generatedReport: "あなたのために生成したレポートはこちらです：",
        noAnalysisForReport: "レポートを生成するための分析データがありません。"
    },
    error: {
        title: "エラー",
        pasteReviews: "分析する前にレビューをいくつか貼り付けてください。",
        unknown: "不明なエラーが発生しました。",
        chatError: "申し訳ありません、エラーが発生しました。もう一度お試しください。",
        maxProjects: "プロジェクトが最大数の10に達しました。新しいプロジェクトを作成するには、1つ削除してください。",
        apiKeyRequired: "APIキーが必要です。設定で追加してください。",
        apiKeyRequiredTitle: "APIキーが必要です",
        apiKeyRequiredDesc: "分析を実行するには、設定でGemini APIキーを追加する必要があります。",
        chatDisabled: "分析が実行され、APIキーが設定されるまでチャットは無効です。"
    },
    loading: {
        stage1: "感情を分析し、キーワードを抽出中...",
        stage2: "エグゼクティブサマリーと最終レポートを生成中..."
    },
    sampleGenerator: {
        generate: "サンプルを生成",
        generating: "生成中...",
        description: "AIを構成して、カスタムのサンプルレビューセットを生成します。",
        category: "カテゴリ",
        reviewCount: "レビュー数",
        reviews: "件のレビュー",
        sentimentMix: "感情の組み合わせ",
        mix: {
            positive: "主に肯定的",
            balanced: "バランス",
            negative: "主に否定的"
        }
    }
};
