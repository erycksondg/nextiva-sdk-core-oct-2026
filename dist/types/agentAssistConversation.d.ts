export interface AgentAssistConversation {
    conversaton_uuid: string;
    messages: [
        {
            content: string;
            message_uuid: string;
            role: string;
        }
    ];
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
        initial_message: boolean;
        timestamp: string;
    };
    related_article_id: string;
    temperature: number;
    tenant_id: string;
}
export interface AgentAssist {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    id?: string;
    modifiedAt: number;
    modifiedBy: string;
    payload: string;
    response: string;
    tenantId: string;
    ticketId: string;
}
//# sourceMappingURL=agentAssistConversation.d.ts.map