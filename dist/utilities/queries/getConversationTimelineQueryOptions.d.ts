export declare const DEFAULT_CONVERSATION_TIMELINE_LIMIT = 20;
export interface ConversationTimelineQueryOptionsParams {
    conversationId: string;
    limit?: number;
}
export declare function getConversationTimelineQueryOptions({ conversationId, limit, }: ConversationTimelineQueryOptionsParams): {
    queryFn: ({ pageParam }: {
        pageParam: number;
    }) => Promise<import("../..").ConversationTimelineResponse>;
    queryKey: (string | number)[];
};
//# sourceMappingURL=getConversationTimelineQueryOptions.d.ts.map