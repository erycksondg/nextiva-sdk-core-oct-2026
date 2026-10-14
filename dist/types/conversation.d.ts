import type { WorkitemConversationType } from '../models';
import type { PaginatedResponse } from './common';
import type { Contact } from './contact';
import type { EngagementData, Message } from './message';
import type { ConversationCallRecordingData } from './recordings';
import type { StringWithAutocomplete } from './util';
import type { Workitem } from './workitem';
export interface AgentConversation {
    messages: Array<{
        content: string;
        message_uuid: string;
        role: string;
    }>;
}
export interface ParticipantPayload extends Participant {
    notifyByEmail: boolean;
    notifyBySMS: boolean;
    notifyByVoice: boolean;
    notifyByWeb: boolean;
}
export interface Participant {
    addedBy?: string;
    archivedAt?: number;
    contact?: Partial<Contact>;
    firstName?: string;
    id: string;
    joinedAt?: number;
    lastName?: string;
    notifyByEmail?: boolean;
    notifyBySMS?: boolean;
    notifyByVoice?: boolean;
    notifyByWeb?: boolean;
    phoneNumber?: string;
    queueName?: string;
    type: string;
    user?: {
        _id?: string;
        addresses?: string[];
        firstName?: string;
        lastName?: string;
        personalInboxCampaignId?: string;
        phoneNumber?: string;
        username?: string;
    };
}
/**
 * @deprecated
 */
export interface ConversationPayload {
    description: string;
    name: string;
    objectType?: 'conversation';
    parentEngagementId?: string;
    parentTicketId?: string;
    parentWorkitemId?: string;
    participants: ParticipantPayload[];
    phoneNumber: string;
    sharedInboxId?: string;
    sharedInboxName?: string;
    topicName?: string;
}
export interface Conversation {
    _id: string;
    contactId?: string;
    conversationId: string;
    conversationType?: WorkitemConversationType;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description?: string;
    id: string;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: 'conversation';
    ownerId?: string;
    parentEngagementId?: string;
    parentTicketId?: string;
    parentWorkitemId: string;
    participants: Participant[];
    phoneNumber?: string;
    sharedInboxId?: string;
    sharedInboxName?: string;
    tenantId: string;
    topicName?: string;
    totalCount?: number;
    unreadCount?: number;
}
export type TicketConversationsResponse = PaginatedResponse<Conversation>;
export interface ContactArray {
    contacts: Contact[];
}
/**
 * Required type to be able to filter out the contacts array item in the conversations response
 */
export type ConversationsResponseWithContactArray = PaginatedResponse<Workitem | ContactArray>;
export type ConversationsResponse = PaginatedResponse<Workitem>;
export type ConversationByIdResponse = PaginatedResponse<Workitem> & {
    engagementData?: EngagementData[];
};
export type RecentConversationWorkitemEngagementsResponse = PaginatedResponse<EngagementData>;
export interface ConversationMessageResponse {
    canDial: boolean;
    conversationId: string;
    workitemId: string;
}
export interface FetchConversationHistoryByParticipantIdPayload {
    pageNumber?: number;
    pageSize?: number;
    participantIds: string[];
}
export interface FetchConversationByCampaignIdPayload {
    archived?: boolean;
    calls?: boolean;
    campaignId: string;
    conversationType?: 'contact_based' | 'shared_inbox_internal' | 'internal_chat' | 'channel' | 'queue_contact';
    draft?: boolean;
    inboundCalls?: boolean;
    latest?: boolean;
    limit?: number;
    mentioned?: boolean;
    messages?: boolean;
    missedCalls?: boolean;
    offset?: number;
    outboundCalls?: boolean;
    read?: boolean;
    scope?: 'INTERNAL' | 'EXTERNAL';
    totalUnread?: boolean;
    voicemails?: boolean;
    workitem?: string;
}
export declare const ConversationFilterTabTypes: {
    readonly ALL: "ALL";
    readonly ARCHIVED: "ARCHIVED";
    readonly CALLS: "CALLS";
    readonly CALLS_AND_TEXTS: "CALLS_AND_TEXTS";
    readonly CHANNELS: "CHANNELS";
    readonly DRAFTS: "DRAFTS";
    readonly EXTERNAL: "EXTERNAL";
    readonly INCOMING_CALLS: "INCOMING_CALLS";
    readonly INTERNAL: "INTERNAL";
    readonly MENTIONS: "MENTIONS";
    readonly MISSED_CALLS: "MISSED_CALLS";
    readonly OUTGOING_CALLS: "OUTGOING_CALLS";
    readonly TEXTS: "TEXTS";
    readonly UNREAD: "UNREAD";
    readonly VOICEMAILS: "VOICEMAILS";
};
export type ConversationFilterTabType = (typeof ConversationFilterTabTypes)[keyof typeof ConversationFilterTabTypes];
export interface FetchRecentConversationWorkitemEngagementsPayload {
    cursor?: number;
    filter?: ConversationFilterTabType;
    ignoreVoicemailTranscripts?: boolean;
    latest?: boolean;
    limit?: number;
    tab?: ConversationFilterTabType;
}
export interface FetchConversationWorkItemsByStatusPayload {
    conversationId: string;
    rows?: number;
    start?: number;
    workItemStatus: 'draft';
}
export interface FetchConversationTimelinePayload {
    conversationId: string;
    limit?: number;
    offset?: number;
}
export interface ConversationTimelineResponse {
    conversationId: string;
    pagination: ConversationTimelinePagination;
    sections: ConversationTimelineDateSection[];
}
export interface ConversationTimelineDateSection {
    date: string;
    dateLabel: string;
    groups: ConversationTimelineTopicGroup[];
}
export interface ConversationTimelineTopicGroup {
    entries: ConversationTimelineEntry[];
    summary: string;
    topicName: string;
}
export interface ConversationTimelinePagination {
    hasMore: boolean;
    limit: number;
    offset: number;
}
export interface ConversationTimelineEntry {
    channel?: null | string;
    conversationId?: null | string;
    createdAt?: null | number;
    id?: null | string;
    internalPlatformId?: null | string;
    message?: null | string;
    messageType?: null | string;
    summary?: null | string;
    tenantId?: null | string;
    workitemId?: null | string;
}
/**
 * Supported participant types in a conversation.
 */
export declare const ConversationParticipantTypes: {
    readonly BUSINESS_CONTACT: "business_contact";
    readonly PLATFORM_USER: "platform_user";
    readonly QUEUE: "queue";
};
/**
 * Union of valid participant type string values.
 */
export type ConversationParticipantType = StringWithAutocomplete<(typeof ConversationParticipantTypes)[keyof typeof ConversationParticipantTypes]>;
/**
 * A participant representing a business contact.
 */
export interface BusinessContactParticipant {
    id: string;
    phoneNumber?: string;
    type: typeof ConversationParticipantTypes.BUSINESS_CONTACT;
}
/**
 * Special-case business contact participant used when starting a conversation
 * with a phone number that is not yet associated with an existing contact.
 *
 * Typically used during conversation creation flows.
 */
export interface FreeformBusinessContactParticipant {
    phoneNumber: string;
    type: typeof ConversationParticipantTypes.BUSINESS_CONTACT;
}
/**
 * A participant representing a platform user.
 */
export interface PlatformUserParticipant {
    id: string;
    type: typeof ConversationParticipantTypes.PLATFORM_USER;
}
/**
 * A participant representing a queue.
 */
export interface QueueParticipant {
    id: string;
    type: typeof ConversationParticipantTypes.QUEUE;
}
/**
 * Unified participant type for conversations.
 *
 * This is the preferred type for new systems.
 * It replaces all legacy `ConversationWithParticipants*` types.
 */
export type ConversationParticipant = BusinessContactParticipant | FreeformBusinessContactParticipant | PlatformUserParticipant | QueueParticipant;
/**
 * @deprecated Use `BusinessContactParticipant` instead.
 */
export type ConversationWithParticipantsBusinessContactParticipant = BusinessContactParticipant;
/**
 * @deprecated Use `PlatformUserParticipant` instead.
 */
export type ConversationWithParticipantsPlatformUserParticipant = PlatformUserParticipant;
/**
 * @deprecated Use `QueueParticipant` instead.
 */
export type ConversationWithParticipantsQueueParticipant = QueueParticipant;
/**
 * @deprecated Use `BusinessContactParticipant` instead.
 */
export interface ConversationWithParticipantsPhoneNumberParticipant {
    phoneNumber: string;
}
/**
 * @deprecated Use `BusinessContactParticipant` instead.
 */
export interface ConversationWithParticipantsIdParticipant {
    id: string;
}
/**
 * Legacy union of participant shapes.
 *
 * @deprecated Use `ConversationParticipant` instead.
 *
 * Migration guide:
 * - `{ phoneNumber }` or `{ id }` → `BusinessContactParticipant`
 * - `ConversationWithParticipantsBusinessContactParticipant` → `BusinessContactParticipant`
 * - `ConversationWithParticipantsPlatformUserParticipant` → `PlatformUserParticipant`
 * - `ConversationWithParticipantsQueueParticipant` → `QueueParticipant`
 *
 * This type exists only for backward compatibility and will be removed in a future major version.
 */
export type ConversationWithParticipantsParticipant = ConversationWithParticipantsPhoneNumberParticipant | ConversationWithParticipantsIdParticipant | ConversationWithParticipantsBusinessContactParticipant | ConversationWithParticipantsPlatformUserParticipant | ConversationWithParticipantsQueueParticipant;
/**
 * Payload containing participants in conversations.
 *
 * Prefer `ConversationParticipant[]` for new implementations.
 * Legacy `ConversationWithParticipantsParticipant[]` is supported for backward compatibility.
 */
export interface ConversationWithParticipantsPayload {
    conversationsParticipantList: ConversationParticipant[] | ConversationWithParticipantsParticipant[];
}
export interface ConversationAndWorkitemPayload {
    conversationId: string;
    isDraft?: boolean;
    workitemId: string;
}
export interface DeleteConversationPayload {
    conversationId: string;
    userId?: string;
}
export interface ChangeConversationDraftStatusPayload {
    conversationId: string;
    draft: boolean;
    workitemId: string;
}
export type ConversationMessageType = StringWithAutocomplete<'DRAFT' | 'TEXT'>;
export interface ArchiveConversationPayload {
    archived: boolean;
    campaignId: string;
    conversationId: string;
}
export interface ArchiveConversationResponse {
    conversationId: string;
    workitemId: string;
}
export declare const ConversationStatuses: {
    readonly ARCHIVED: "ARCHIVED";
    readonly DELETED: "DELETED";
    readonly UNARCHIVED: "UNARCHIVED";
};
export type ConversationStatus = (typeof ConversationStatuses)[keyof typeof ConversationStatuses];
export interface ConversationStatusEventData {
    campaignId?: string;
    conversationId: string;
    createdAt: number;
    id: string;
    name: 'ConversationStatusEvent';
    result: string;
    skipMobileNotification: boolean;
    status: ConversationStatus;
}
export interface ConversationEngagementDataNotificationData {
    conversationId: string;
    createdAt: number;
    engagementData: EngagementData;
    id: string;
    name: 'ConversationEngagementDataNotification';
    result: string;
    skipMobileNotification: boolean;
    status: ConversationStatus;
}
export interface UnreadCountNotificationData {
    agentid: string;
    conversationId: string;
    createdAt: number;
    id: string;
    name: 'UnreadCountNotification';
    result: string;
    skipMobileNotification: boolean;
    unreadCount: number;
    userId: string;
}
export interface UpdateParticipantsPayload {
    addedParticipants: Participant[];
    currentParticipants: Participant[];
    historySharingOptions: {
        endTimestamp: number;
        shareHistory: boolean;
        startTimestamp: number;
    };
    removedParticipants: Participant[];
}
export interface UnreadCounts {
    internal: number;
    mentions: number;
    total: number;
    voicecalls: number;
    voicemails: number;
}
export interface UserRemovedFromChannelNotificationData {
    agentid: string;
    conversationId: string;
    createdAt: number;
    id: string;
    name: 'UserRemovedFromChannelNotification';
    result: string;
    skipMobileNotification: boolean;
    userId: string;
}
export interface TranscriptionsAndRecordingsPayload {
    conversationId: string;
    createdAt: number;
    workitemId: string;
}
export type TranscriptionsAndRecordingsResponse = PaginatedResponse<{
    callRecordingData: ConversationCallRecordingData[];
    summary?: string;
    transcriptionMessages?: Message[];
    voicemailTranscript?: string;
    workitemId: string;
}>;
export interface ConversationActivitySummary {
    categories: {
        latestActivity: Conversation[];
        unreadMessages: Conversation[];
        unreadMissedCalls: Conversation[];
        unreadVoicemails: Conversation[];
    };
    totalUnreadCount: number;
    totalUnreadCountByFilter: {
        totalUnreadMessagesCount: number;
        totalUnreadMissedCallsCount: number;
        totalUnreadVoiceMailsCount: number;
    };
}
export type ConversationActivitySummaryResponse = ConversationActivitySummary[];
export interface ConversationActivitySummaryV2 {
    categories: {
        latestActivity?: EngagementData[];
        unreadContactMessages?: EngagementData[];
        unreadInternalMessages?: EngagementData[];
        unreadTeamMessages?: EngagementData[];
        unreadVoicemails?: EngagementData[];
    };
    totalUnreadCount: number;
    totalUnreadCountByFilter: {
        unreadContactMessages: number;
        unreadInternalMessages: number;
        unreadTeamMessages: number;
        unreadVoicemails: number;
    };
}
export type ConversationActivitySummaryV2Response = [ConversationActivitySummaryV2];
export interface UpdateWorkitemReadStatusPayload {
    conversationId: string;
    status: boolean;
    workitemId: string;
}
export declare const FetchFeedFilters: {
    readonly ALL: "all";
    readonly ARCHIVED: "archived";
    readonly BLOCKED: "blocked";
    readonly CALLS: "calls";
    readonly CALLS_AND_TEXTS: "calls_and_texts";
    readonly CHANNELS: "channels";
    readonly DRAFTS: "drafts";
    readonly EMAIL: "email";
    readonly EXTERNAL: "external";
    readonly INCOMING_CALLS: "incoming_calls";
    readonly INTERNAL: "internal";
    readonly LIVE_CHAT: "live_chat";
    readonly MENTIONS: "mentions";
    readonly MISSED_CALLS: "missed_calls";
    readonly OUTGOING_CALLS: "outgoing_calls";
    readonly PHONE: "phone";
    readonly SMS: "sms";
    readonly TEXTS: "texts";
    readonly UNREAD: "unread";
    readonly VOICEMAILS: "voicemails";
};
export type FetchFeedFilter = StringWithAutocomplete<(typeof FetchFeedFilters)[keyof typeof FetchFeedFilters]>;
export type FetchFeedDirection = StringWithAutocomplete<'older' | 'newer'>;
export type FetchFeedTab = FetchFeedFilter;
export interface FetchFeedPayload {
    cursor?: number;
    fetch?: FetchFeedDirection;
    filter?: FetchFeedFilter | FetchFeedFilter[];
    ignoreVoicemailTranscripts?: boolean;
    includeWorkitems?: boolean;
    limit?: number;
    queueIds?: string;
    tab?: FetchFeedTab;
    workitemsLimit?: number;
}
export interface FetchFeedResponse {
    estimatedRecords: number;
    initiatedAt: number;
    message: string;
    status: string;
    subscriptionChannel: string;
    taskId: string;
}
export interface ConversationFeedPushNotificationData {
    agentid: string;
    batchMetadata: {
        batchNumber: number;
        conversationsInBatch: number;
        isFinalBatch: boolean;
        totalBatches: number;
        totalConversations: number;
    };
    count: number;
    createdAt: number;
    id: string;
    name: 'ConversationFeedPushNotification';
    next: string | number;
    objects: EngagementData[];
    result: string;
    skipMobileNotification: boolean;
    taskId: string;
    timestamp: number;
    total: number;
    userId: string;
}
export interface ConversationWorkitemFeedPushNotificationData {
    agentid: string;
    aiSummaries: Array<{
        aiSummary: string;
        workitemId: string;
    }>;
    batchMetadata: {
        batchNumber: number;
        batchSize: number;
        totalBatches: number;
    };
    conversation: Conversation;
    conversationId: string;
    createdAt: number;
    id: string;
    name: 'ConversationWorkitemFeedPushNotification';
    pagination: {
        count: number;
        next: number;
        total: number;
    };
    parentTaskId: string;
    result: string;
    skipMobileNotification: boolean;
    taskId: string;
    userId: string;
    workitems: Workitem[];
}
export interface ConversationsFeedQueryUpdatedData {
    engagementData: EngagementData[];
    /** Same segment as the push-feed React Query key (`getConversationsQueryOptions`). */
    filter: NonNullable<FetchFeedPayload['filter']>;
    /** Queue id or `'my-inbox'` — last segment of the push-feed query key. */
    queueIds: string;
    /** Feed tab — segment after `filter` in the push-feed query key. */
    tab: NonNullable<FetchFeedPayload['tab']>;
}
export interface ConversationWorkitemsQueryUpdatedData {
    conversationId: string;
    workitems: Workitem[];
}
export interface ConversationsFeedLoadingChangedData {
    filter: NonNullable<FetchFeedPayload['filter']>;
    isLoading: boolean;
    queueIds: string;
    tab: NonNullable<FetchFeedPayload['tab']>;
}
export interface ConversationsFeedErrorChangedData {
    errorMessage: string | null;
    filter: NonNullable<FetchFeedPayload['filter']>;
    queueIds: string;
    tab: NonNullable<FetchFeedPayload['tab']>;
}
export interface ConversationWorkitemsFeedLoadingChangedData {
    conversationId: string;
    isLoading: boolean;
}
export interface ConversationWorkitemsFeedErrorChangedData {
    conversationId: string;
    errorMessage: string | null;
}
export type ConversationWorkitemsChannelFilter = 'phone' | 'email' | 'sms' | 'live_chat';
export interface ConversationWorkitemsParams {
    bidirectional?: boolean;
    contactId?: string;
    conversationIds?: string[];
    cursor?: string;
    endCursor?: number;
    filter?: ConversationWorkitemsChannelFilter[];
    includeCallRecordings?: boolean;
    includeConversation?: boolean;
    includeParentEngagement?: boolean;
    includeReactions?: boolean;
    includeSummary?: boolean;
    includeVoicemail?: boolean;
    lean?: boolean;
    limit?: number;
    queueIds?: string[];
    workitemId?: string;
}
export type ConversationWorkitemsResponse = PaginatedResponse<Workitem> & {
    conversations?: Record<string, Conversation>;
};
//# sourceMappingURL=conversation.d.ts.map