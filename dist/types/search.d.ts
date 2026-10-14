import type { PaginatedResponse } from './common';
import type { Ticket, TicketNote } from './ticket';
import type { Note } from './note';
import type { Contact } from './contact';
import type { EngagementData } from './message';
import type { Transcript } from './transcript';
import type { Account } from './account';
export interface SearchOptions {
    context?: 'MY_HUB';
    filter?: string;
    orderBy?: {
        order: 'asc' | 'desc';
        property: string;
    };
    pageSize?: number;
    platform?: 'VERTEX_AI_SEARCH' | 'NCX_SEARCH' | 'BIG_QUERY_SEARCH';
    q: string;
    queueId?: string[];
    start: number;
    type?: string | string[];
    unknown?: boolean;
}
export interface QuickSearchPayload {
    q: string;
    queueId?: string[];
    unknown?: boolean;
}
export type NCXObjectType = Ticket | TicketNote | Note | Contact | Record<string, unknown>;
export type SearchResponseBody = PaginatedResponse<NCXObjectType>;
export type QuickSearchResponseBody = PaginatedResponse<Ticket | Contact | Note | EngagementData | Transcript | Account>;
export interface QuickSearchUsersAndContactsPayload {
    apiLimit?: number;
    maxSize?: number;
    q: string;
}
export interface AgenticSearchOptions extends Pick<SearchOptions, 'q' | 'pageSize' | 'start' | 'type'> {
    alpha?: number;
}
export type SearchResultsCategory = 'contacts' | 'conversations' | 'tickets';
export interface ContactConnection {
    countryCode?: string;
    id: string;
    isPrimary?: boolean;
    isVerified?: boolean;
    phoneNumber?: string;
    type: string;
    value: string;
}
export interface ContactSearchItem {
    accountId: string | null;
    avatar: string | null;
    companyName: string | null;
    connections: ContactConnection[];
    contactId: string;
    createdAt: number;
    deletedAt: number;
    email: string | null;
    firstName: string | null;
    id: string;
    isVerified: boolean | null;
    jobTitle: string | null;
    lastName: string | null;
    modifiedAt: number;
    name: string | null;
    objectType: 'contact';
    phone: string | null;
    profileColor: string | null;
    ranking: number;
    tenantId: string;
    uuid: string;
}
export type ConversationSentiment = 'Negative' | 'Neutral' | 'Positive' | null;
export type ConversationChannel = 'CHAT' | 'EMAIL' | 'FACEBOOK' | 'GOOGLEREVIEW' | 'INSTAGRAM' | 'SMS' | 'SURVEY' | 'TWITTER' | 'UNKNOWN' | 'VIDEO_MEETING' | 'VOICE' | 'WHATSAPP' | 'YOUTUBE' | null;
export interface ConversationSearchItem {
    channel: ConversationChannel;
    contactEmail: string | null;
    contactId: string | null;
    contactName: string | null;
    contactPhone: string | null;
    conversationId: string;
    createdAt: number | null;
    id: string;
    lastMessageAt: number | null;
    lastMessagePreview: string | null;
    modifiedAt: number | null;
    name: string | null;
    ranking: number;
    sentiment: ConversationSentiment;
    topic: string | null;
    type: 'conversation';
    unreadCount: number;
}
export type TicketSearchSentiment = 'Negative' | 'Neutral' | 'Positive' | null;
export interface TicketSearchItem {
    agentId: string | null;
    closureSlaCrossed: boolean | null;
    closureSlaCrossesAt: number | null;
    contactId: string | null;
    createdAt: number;
    currentSource: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | null;
    deletedAt: number;
    frtSlaCrossed: boolean | null;
    frtSlaCrossesAt: number | null;
    id: string;
    latestQueueId: string | null;
    latestSummary: string | null;
    modifiedAt: number;
    objectType: 'ticket';
    priority: '1' | '2' | '3' | '4' | '5';
    ranking: number;
    sentiment: TicketSearchSentiment;
    slaRemainingMinutes: number | null;
    state: string | null;
    status: '0' | '1' | '2' | '3' | '4' | '5';
    summaryList: string | null;
    tenantId: string;
    ticketId: string;
    uuid: string;
}
export type SearchResultsEvent = {
    category: 'contacts';
    count: number;
    items: ContactSearchItem[];
} | {
    category: 'conversations';
    count: number;
    items: ConversationSearchItem[];
} | {
    category: 'tickets';
    count: number;
    items: TicketSearchItem[];
};
export interface SearchDoneEvent {
    failedCollections: SearchResultsCategory[];
    total: number;
}
export interface SearchErrorEvent {
    code: number;
    message: string;
}
export interface SearchStreamOptions {
    /** Hybrid BM25/vector balance (0-1). Default: 0.5 */
    alpha?: number;
    /** Max results per category. Default: 5 */
    pageSize?: number;
    /** Search text */
    q: string;
    /** Persist as recent search. Default: true */
    save?: boolean;
    /** Filter to specific categories */
    type?: SearchResultsCategory[];
}
export interface AttentionTicketItem {
    contactId: string | null;
    contactName: string | null;
    id: string;
    priority: string;
    slaRemainingMinutes: number | null;
    status: string;
    ticketId: string;
    title: string;
    type: 'ticket';
    urgencyReason: 'sla_breach';
}
export interface AttentionConversationItem {
    channel: ConversationChannel;
    contactEmail: string | null;
    contactId: string | null;
    contactName: string | null;
    contactPhone: string | null;
    conversationId: string;
    id: string;
    lastMessageAt: number | null;
    lastMessagePreview: string | null;
    sentiment: ConversationSentiment;
    type: 'conversation';
    unreadCount: number;
    urgencyReason: 'negative_sentiment_unread';
}
export type AttentionItem = AttentionConversationItem | AttentionTicketItem;
export interface AttentionResponse {
    cachedAt: number;
    items: AttentionItem[];
    ttlSeconds: number;
}
export interface RecentSearchItem {
    id: string;
    query: string;
    savedAt: number;
}
export interface RecentSearchesResponse {
    count: number;
    items: RecentSearchItem[];
}
export type SearchFeedbackEntityType = 'contact' | 'conversation' | 'ticket';
export type SearchFeedbackValue = 'negative' | 'positive';
export interface SearchFeedbackResultRef {
    entityId: string;
    entityType: SearchFeedbackEntityType;
}
export interface SearchFeedbackPayload {
    comment?: string;
    feedback: SearchFeedbackValue;
    query: string;
    resultRefs: SearchFeedbackResultRef[];
}
export interface SearchFeedbackResponse {
    status: 'accepted';
}
//# sourceMappingURL=search.d.ts.map