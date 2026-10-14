export interface PredictIntentRequestBody {
    message: string;
    optionals?: {
        agent_id: string;
        channel: string;
        subject: string;
        user_id: string;
        username: string;
    };
    ticketId: string;
}
export interface IntentArtical {
    description: string;
    file_type?: string;
    id: string;
    resource_url: string;
    title: string;
    url?: string;
}
export interface PredictIntentResponse {
    payload: {
        error: boolean;
        faq_response?: {
            articles?: IntentArtical[];
            images: string[];
            text: string;
        };
        intent?: string;
        requestId: string;
        urls?: string[];
    };
    status: string;
}
//# sourceMappingURL=orchestrator.d.ts.map