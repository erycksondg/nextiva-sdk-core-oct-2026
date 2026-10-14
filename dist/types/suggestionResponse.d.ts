export interface SuggestionResponse {
    answer_message_uuid: string;
    conversaton_uuid: string;
    meta: {
        additional_kwargs: Record<string, unknown>;
        agent: {
            name: string;
            uuid: string;
        };
        category: string;
        customer: {
            name: string;
            uuid: string;
        };
        initial_message: boolean;
        timestamp: string;
        used_related_articles: string[];
    };
    suggested_answer: string;
    tenant_id: string;
}
//# sourceMappingURL=suggestionResponse.d.ts.map