import type { Conversation, ConversationWorkitemsChannelFilter, ConversationWorkitemsResponse, EngagementData, FetchFeedPayload, Participant, Workitem } from '../../types';
import { type QueryClient } from '@tanstack/query-core';
import { type ChannelType } from '../../models';
export declare const MY_INBOX_ID = "my-inbox";
export declare const CHANNEL_FILTER_TO_CHANNEL_TYPE: Record<ConversationWorkitemsChannelFilter, ChannelType[]>;
export declare function sortItems<T extends {
    createdAt: number;
}>(items: T[]): T[];
export declare function filterLatestNItems<T extends {
    createdAt: number;
}>(items: T[], n: number): T[];
export interface ConversationsQueryData {
    engagementData: EngagementData[];
}
export interface ConversationWorkitemsQueryData {
    workitems: Workitem[];
}
export interface ConversationsQueryOptionsParams {
    filter: FetchFeedPayload['filter'];
    queueIds?: FetchFeedPayload['queueIds'];
    tab: FetchFeedPayload['tab'];
}
export declare function getConversationsQueryOptions({ filter, queueIds, tab, }: ConversationsQueryOptionsParams): {
    queryFn: ({ client, queryKey }: {
        client: QueryClient;
        queryKey: readonly unknown[];
        signal: AbortSignal;
        meta: import("@tanstack/query-core").QueryMeta | undefined;
        pageParam?: unknown;
        direction?: unknown;
    }) => {
        engagementData: EngagementData[];
    };
    queryKey: (string | import("../..").FetchFeedFilter[] | undefined)[];
};
export declare function getWorkitemFromConversationsCache(conversationId: string, workitemId: string | undefined, client: QueryClient): Workitem | undefined;
export declare function getConversationWorkitemsQueryOptions({ conversationId, }: {
    conversationId: string;
}): {
    queryFn: ({ client, queryKey }: {
        client: QueryClient;
        queryKey: readonly unknown[];
        signal: AbortSignal;
        meta: import("@tanstack/query-core").QueryMeta | undefined;
        pageParam?: unknown;
        direction?: unknown;
    }) => {
        workitems: Workitem[];
    };
    queryKey: string[];
};
export interface ConversationWorkitemsMultiScopeQueryData {
    conversations: Record<string, Conversation>;
    next: string | undefined;
    workitems: Workitem[];
}
export interface ConversationWorkitemsMultiScopeQueryKey {
    contactId: string | undefined;
    conversationIds: string[];
    filter: ConversationWorkitemsChannelFilter[] | undefined;
    queueIds: string[];
}
export declare function getConversationWorkitemsMultiScopeQueryOptions(params: ConversationWorkitemsMultiScopeQueryKey): {
    queryFn: ({ pageParam }: {
        pageParam: string | undefined;
    }) => Promise<ConversationWorkitemsResponse>;
    queryKey: (string | {
        contactId: string | undefined;
        conversationIds: string[];
        filter: ConversationWorkitemsChannelFilter[] | undefined;
        queueIds: string[];
    })[];
};
export interface ConversationByQueueId {
    conversationId: string;
    participants: Participant[];
    workitems: Workitem[];
}
export declare function getConversationIdByQueueIdQueryOptions({ contactId, queueId, }: {
    contactId?: string;
    queueId: string;
}): {
    queryFn: () => Promise<ConversationByQueueId | null>;
    queryKey: (string | undefined)[];
};
//# sourceMappingURL=getConversationsQueryOptions.d.ts.map