export interface RelatedArticle {
    filename: string;
    id: string;
    score: number;
    summary: string;
    text: string;
    title: string;
    url: string;
    url_title: string;
}
export interface RelatedArticlesResponse {
    articles: RelatedArticle[];
}
export interface RelatedArticlesV2Response {
    data: {
        articles?: RelatedArticle[];
        combined_articles_summary?: {
            text: string;
        };
        response_text: string;
    };
    type: 'error' | 'articles' | 'conversational';
}
export interface RelatedArticleRequest {
    count_threshold: number;
    name: string;
    score_threshold: number;
    temperature: number;
    tenant_id: string;
    text: string;
    time: string;
    type: string;
    use_llm_name?: "llama";
}
//# sourceMappingURL=relatedArticles.d.ts.map