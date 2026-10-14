export interface Feedback {
    ai_source_service: string;
    comments: string;
    content: string;
    conversaton_uuid: string;
    feedback: string;
    feedback_reason: string;
    meta: {
        additional_kwargs: Record<string, unknown>;
        agent: {
            name: string;
            uuid: string;
        };
        customer: {
            name: string;
            uuid: string;
        };
        timestamp: string;
    };
    model_version: string;
    modified_ai_content: string;
    original_ai_content: string;
    related_article_id: string;
    tenant_id: string;
}
//# sourceMappingURL=Feedback.d.ts.map