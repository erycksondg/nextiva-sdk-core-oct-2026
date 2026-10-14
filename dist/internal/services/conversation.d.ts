import type { Conversation, ConversationPayload, ConversationMessageResponse, ConversationsResponse, ConversationWithParticipantsPayload, FetchConversationHistoryByParticipantIdPayload, FetchConversationByCampaignIdPayload, FetchConversationTimelinePayload, FetchConversationWorkItemsByStatusPayload, ConversationsResponseWithContactArray, ChangeConversationDraftStatusPayload, ConversationAndWorkitemPayload, DeleteConversationPayload, ArchiveConversationPayload, ArchiveConversationResponse, TicketConversationsResponse, UpdateParticipantsPayload, UnreadCounts, ConversationByIdResponse, FetchRecentConversationWorkitemEngagementsPayload, RecentConversationWorkitemEngagementsResponse, TranscriptionsAndRecordingsPayload, TranscriptionsAndRecordingsResponse, FetchFeedPayload, FetchFeedResponse, ConversationActivitySummaryResponse, ConversationTimelineResponse, UpdateWorkitemReadStatusPayload, Participant, ConversationWorkitemsParams, ConversationWorkitemsResponse } from '../../types/conversation';
import type { BaseConversationEditMessagePayload, BaseConversationSendMessagePayload, BaseConversationSendEmailPayload } from '../types/conversation';
import { type EventsService, type StateService } from '../../services';
import type { Attachment, EngagementData, Workitem } from '../../types';
import { type InjectionContainer } from '../dependencyInjectionContainer';
import { type WorkitemType } from '../../models';
import { type QueryKey } from '@tanstack/query-core';
import { type LoggerService } from '../../services/logger';
export declare const WORKITEM_TYPE: Record<WorkitemType, string>;
export declare class BaseConversationService {
    private queryCacheUnsubscribe?;
    protected stateService: StateService;
    protected eventsService: EventsService;
    protected taskIdMatches: Map<string, // taskId
    {
        filter: FetchFeedPayload['filter'];
        loadingKey?: string;
        persistConversations?: boolean;
        queryKey?: QueryKey;
        queueIds: FetchFeedPayload['queueIds'];
        remainingBatches?: number;
        tab: FetchFeedPayload['tab'];
    }>;
    protected logger: LoggerService;
    private feedLoadingStates;
    private workitemFeedLoadingStates;
    private lastRequestedCursorByKey;
    private pendingPersistQueryKeys;
    private persistQueriesTimer?;
    private pendingWorkitemFeedNotifications;
    private workitemFeedNotificationsTimer?;
    constructor({ eventsService, loggerService, stateService, }: Pick<InjectionContainer, 'stateService' | 'eventsService' | 'loggerService'>);
    private getFeedLoadingKey;
    isFeedLoading(filter: FetchFeedPayload['filter'], queueIds: FetchFeedPayload['queueIds'], tab: FetchFeedPayload['tab']): boolean;
    getLastRequestedCursor(filter: FetchFeedPayload['filter'], queueIds: FetchFeedPayload['queueIds'], tab: FetchFeedPayload['tab']): number | undefined;
    isWorkitemFeedLoading(conversationId: string): boolean;
    getConversationIdsByQueueIds({ filter, queueIds, tab, }: {
        filter: FetchFeedPayload['filter'];
        queueIds: string[];
        tab: FetchFeedPayload['tab'];
    }): Array<{
        conversationId: string;
        participants: Participant[];
        workitems: Workitem[];
    }>;
    /**
     * Subscribe to TanStack Query cache changes and emit events
     * when conversation or workitem queries are updated
     */
    private subscribeToQueryCacheChanges;
    private getQueryKeyCacheKey;
    private schedulePersistQuery;
    private mergeWorkitemFeedNotification;
    private queueWorkitemFeedNotification;
    private flushQueuedWorkitemFeedNotifications;
    createSimpleEngagementDataFromConversation({ conversation, }: {
        conversation: Conversation;
    }): EngagementData;
    upsertEngagementCache({ engagementData, filter, queueIds, tab, }: {
        engagementData: EngagementData;
        filter?: FetchFeedPayload['filter'];
        queueIds: string;
        tab?: FetchFeedPayload['tab'];
    }): void;
    upsertConversationWorkitemsCache({ conversationId, persist, workitems, }: {
        conversationId: string;
        persist?: boolean;
        workitems: Workitem[];
    }): void;
    upsertMultiScopeWorkitemsCache({ removeWorkitemId, workitems, }: {
        removeWorkitemId?: string;
        workitems: Workitem[];
    }): void;
    insertOptimisticMessage({ attachments, baseWorkitem, contactId, conversationId, message, queueId, }: {
        attachments?: Attachment[];
        baseWorkitem: Workitem;
        contactId?: string;
        conversationId: string;
        message: string;
        queueId?: string;
    }): Workitem;
    insertOptimisticEmailWorkitem({ baseWorkitem, engagementData, payload, }: {
        baseWorkitem?: Workitem;
        engagementData?: EngagementData;
        payload: {
            campaignId?: string;
            conversationId?: string;
            from: string;
            message: string;
            queueId?: string;
            subject: string;
            to: string;
        };
    }): Workitem;
    confirmOptimisticMessage({ conversationId, tempWorkitem, workitemId, }: {
        conversationId: string;
        tempWorkitem: Workitem;
        workitemId: string;
    }): void;
    private isConversationMessageFromCurrentUser;
    private isConversationWatermarkFromCurrentUser;
    private getUnreadCountIncrement;
    private createEngagementDataFromWorkitem;
    /**
     * Determines whether a brand-new conversation workitem should be inserted into a
     * given push-feed query cache based on the query's filter key and the workitem's
     * channelType.
     *
     * Rules:
     *  - Always insert into the 'all' filter cache regardless of channelType.
     *  - For 'voice': insert into all call-related filters — 'calls', 'phone',
     *    'incoming_calls', 'outgoing_calls', 'missed_calls', 'voicemails', 'calls_and_texts'.
     *    All call sub-types share channelType='voice', so one condition covers all of them.
     *  - For 'sms': insert into 'sms', 'texts', and 'calls_and_texts'.
     *    'texts' is the SMS sub-filter in the calls_and_texts hierarchy.
     *  - For 'conversation': insert into 'sms', 'texts', 'live_chat', and 'calls_and_texts'.
     *    Treated as CHAT by createEngagementDataFromWorkitem but also a pure text-message channel.
     *  - For 'chat': insert into 'sms', 'live_chat', and 'calls_and_texts'.
     *    Excluded from 'texts' — not a pure text-message channel.
     *  - For 'fax' / 'social': insert into 'sms' and 'calls_and_texts'.
     *    Treated as CHAT by createEngagementDataFromWorkitem but excluded from 'texts' and 'live_chat'.
     *  - For 'email': direct match — inserts into 'email' only.
     *  - For all others: direct channelType → filter key match.
     *  - Cross-channel filters (archived, mentions, unread, drafts, …) are never matched
     *    because channelType alone cannot determine membership in those buckets.
     *
     * Verification scenarios, determined by the incoming work item's channelType:
     * ┌────────────────────────┬──────────────────────────┬───────────┬────────────────────────┬───────────────────────────────────────────┬──────────────┐
     * │ channelType            │ keyFilter                │ isAllFeed │ direct match           │ special OR                                │ shouldInsert │
     * ├────────────────────────┼──────────────────────────┼───────────┼────────────────────────┼───────────────────────────────────────────┼──────────────┤
     * │ sms                    │ ['all']                   │ true      │ —                      │ —                                         │ true  ✓      │
     * │ sms                    │ ['calls','email','sms']   │ false     │ includes('sms')=Y      │ —                                         │ true  ✓      │
     * │ sms                    │ ['calls_and_texts']       │ false     │ false                  │ includes('calls_and_texts')=Y             │ true  ✓      │
     * │ sms                    │ ['texts']                 │ false     │ false                  │ includes('texts')=Y                       │ true  ✓      │
     * │ sms                    │ ['calls','email']         │ false     │ false                  │ —                                         │ false ✓      │
     * │ sms                    │ ['email']                 │ false     │ false                  │ —                                         │ false ✓      │
     * │ voice                  │ ['all']                   │ true      │ —                      │ —                                         │ true  ✓      │
     * │ voice                  │ ['calls','email','sms']   │ false     │ includes('voice')=N    │ includes('calls')=Y                       │ true  ✓      │
     * │ voice                  │ ['phone']                 │ false     │ false                  │ includes('phone')=Y                       │ true  ✓      │
     * │ voice                  │ ['phone','email']         │ false     │ false                  │ includes('phone')=Y                       │ true  ✓      │
     * │ voice (incoming call)  │ ['phone']                 │ false     │ false                  │ includes('phone')=Y (channelType='voice') │ true  ✓      │
     * │ voice (outgoing call)  │ ['phone']                 │ false     │ false                  │ includes('phone')=Y (channelType='voice') │ true  ✓      │
     * │ voice (missed call)    │ ['phone']                 │ false     │ false                  │ includes('phone')=Y (channelType='voice') │ true  ✓      │
     * │ voice (voicemail)      │ ['phone']                 │ false     │ false                  │ includes('phone')=Y (channelType='voice') │ true  ✓      │
     * │ voice                  │ ['incoming_calls']        │ false     │ false                  │ includes('incoming_calls')=Y              │ true  ✓      │
     * │ voice                  │ ['outgoing_calls']        │ false     │ false                  │ includes('outgoing_calls')=Y              │ true  ✓      │
     * │ voice                  │ ['missed_calls']          │ false     │ false                  │ includes('missed_calls')=Y                │ true  ✓      │
     * │ voice                  │ ['voicemails']            │ false     │ false                  │ includes('voicemails')=Y                  │ true  ✓      │
     * │ voice                  │ ['calls_and_texts']       │ false     │ false                  │ includes('calls_and_texts')=Y             │ true  ✓      │
     * │ voice                  │ ['texts']                 │ false     │ false                  │ false (voice is not a texts channel)      │ false ✓      │
     * │ voice                  │ ['email']                 │ false     │ false                  │ false                                     │ false ✓      │
     * │ email                  │ ['calls','email','sms']   │ false     │ includes('email')=Y    │ —                                         │ true  ✓      │
     * │ email                  │ ['texts']                 │ false     │ false                  │ false (email is not a texts channel)      │ false ✓      │
     * │ email                  │ ['calls_and_texts']       │ false     │ false                  │ false (email not in calls+texts)          │ false ✓      │
     * │ email                  │ ['archived']              │ false     │ false                  │ —                                         │ false ✓      │
     * │ chat                   │ ['calls','email','sms']   │ false     │ includes('chat')=N     │ includes('sms')=Y                         │ true  ✓      │
     * │ chat                   │ ['live_chat']             │ false     │ false                  │ includes('live_chat')=Y                   │ true  ✓      │
     * │ chat                   │ ['texts']                 │ false     │ false                  │ false (chat is live_chat, not texts)      │ false ✓      │
     * │ chat                   │ ['calls_and_texts']       │ false     │ false                  │ includes('calls_and_texts')=Y             │ true  ✓      │
     * │ chat                   │ ['calls','email']         │ false     │ false                  │ false                                     │ false ✓      │
     * │ conversation           │ ['calls','email','sms']   │ false     │ includes('conv.')=N    │ includes('sms')=Y                         │ true  ✓      │
     * │ conversation           │ ['live_chat']             │ false     │ false                  │ includes('live_chat')=Y                   │ true  ✓      │
     * │ conversation           │ ['calls_and_texts']       │ false     │ false                  │ includes('calls_and_texts')=Y             │ true  ✓      │
     * │ conversation           │ ['texts']                 │ false     │ false                  │ includes('texts')=Y                       │ true  ✓      │
     * │ conversation           │ ['calls','email']         │ false     │ false                  │ false                                     │ false ✓      │
     * │ fax                    │ ['calls','email','sms']   │ false     │ includes('fax')=N      │ includes('sms')=Y                         │ true  ✓      │
     * │ fax                    │ ['live_chat']             │ false     │ false                  │ false (fax is not live chat)              │ false ✓      │
     * │ fax                    │ ['texts']                 │ false     │ false                  │ false (fax is not a texts channel)        │ false ✓      │
     * │ fax                    │ ['calls_and_texts']       │ false     │ false                  │ includes('calls_and_texts')=Y             │ true  ✓      │
     * │ fax                    │ ['calls','email']         │ false     │ false                  │ false                                     │ false ✓      │
     * │ social                 │ ['calls','email','sms']   │ false     │ includes('social')=N   │ includes('sms')=Y                         │ true  ✓      │
     * │ social                 │ ['live_chat']             │ false     │ false                  │ false (social is not live chat)           │ false ✓      │
     * │ social                 │ ['texts']                 │ false     │ false                  │ false (social is not a texts channel)     │ false ✓      │
     * │ social                 │ ['calls_and_texts']       │ false     │ false                  │ includes('calls_and_texts')=Y             │ true  ✓      │
     * │ social                 │ ['calls','email']         │ false     │ false                  │ false                                     │ false ✓      │
     * │ any                    │ ['all']                   │ true      │ —                      │ —                                         │ true  ✓      │
     * └────────────────────────┴──────────────────────────┴───────────┴────────────────────────┴───────────────────────────────────────────┴──────────────┘
     */
    private shouldInsertNewConversationIntoFeedQuery;
    private updatePushFeedEngagementData;
    /**
     * Update or add a workitem in the conversation workitems cache
     */
    private updateWorkitemInCache;
    /**
     * Find and update a workitem across all queries by workitemId
     */
    private updateWorkitemByIdAcrossQueries;
    /**
     * Find and update matching workitems across all queries
     */
    private updateMatchingWorkitemsAcrossQueries;
    /**
     * Update all workitems in a conversation workitems query.
     */
    private updateWorkitemsInConversationIdQuery;
    /**
     * Update engagement data across all push-feed queries for a conversation
     */
    private updateEngagementDataAcrossQueries;
    /**
     * Remove a conversation from push-feed query cache entries, optionally scoped to a specific
     * filter bucket. When `filter` is omitted the conversation is removed from every push-feed
     * query. When `filter` is provided only queries whose key filter segment matches are touched,
     * leaving all other filter caches intact.
     *
     * Called from two places:
     *
     * 1. ConversationStatusEvent (status === 'UNARCHIVED') — handleConversationsCacheSubscription
     *    When: the backend notifies that a previously archived conversation has been unarchived.
     *    Why:  the conversation must be removed from the 'archived' filter cache only; it should
     *          remain in the 'all' (and any other active) feed caches.
     *
     * 2. UserRemovedFromChannelNotification — handleConversationsCacheSubscription
     *    When: the backend notifies that the current user has been removed from a channel/conversation.
     *    Why:  the user has lost access entirely, so the conversation must be wiped from every
     *          push-feed cache (no filter scope). Workitem queries for the same conversation are
     *          also removed via removeWorkitemQueriesByConversationId.
     */
    private removeConversationFromPushFeedQueries;
    /**
     * Remove the workitem from all the conversationIds workitems query cache (e.g. for blind transfers,
     * the workitem may have lived in multiple conversations)
     */
    private removeWorkitemFromConversation;
    /**
     * Remove workitem from push-feed queries (engagementData), defaulting to the previous one.
     * If it's the only one, default to an empty workitemId so it doesn't display.
     */
    private removeWorkitemFromPushFeedQueries;
    /**
     * Remove all workitem queries for a specific conversation from the cache
     */
    private removeWorkitemQueriesByConversationId;
    private handleConversationsCacheSubscription;
    private persistDataInQueries;
    private handleConversationStatusEvent;
    private handleConversationEngagementDataNotification;
    private handleUnreadCountNotification;
    private handleUserRemovedFromChannel;
    /**
     * Fetch conversations
     * @param {number} params.rows - Number of items per page, defaults to 100
     * @param {number} params.start - Pagination starting index, defaults to 0.
     */
    fetchConversations({ rows, start, }: {
        rows?: number;
        start?: number;
    }): Promise<ConversationsResponse>;
    /**
     * Creates a conversation with the specified `conversationData`.
     * API endpoint.
     * @param {ConversationPayload} conversationData - The required initial data for a conversation.
     * @param {string} conversationData.description - The description of the conversation
     * @param {string} conversationData.name - The name of the conversation
     * @param {ParticipantPayload[]} conversationData.participants - The initial participants of the conversation
     * @param {string} conversationData.phoneNumber - The phone number for this conversation
     * @deprecated use sdk.getSchemaTypeClient().create('conversation', { data: {...} })
     */
    createConversation(conversationData: ConversationPayload): Promise<Conversation>;
    private createMessageRequestPayload;
    /**
     * Send a message in the conversation specified by `campaignId` and `conversationId`.
     * @param {string} params.campaignId - The campaign ID
     * @param {string} params.conversationId - The conversation ID. **This parameter will be REQUIRED** in future versions; to create a conversation, use instead `createConversationWithParticipants`. Using this parameter will send the message to the specified existing conversation.
     * @param params.file - Deprecated file parameter. Use files instead.
     * @param params.files - Array of files to send as attachments.
     * @param {string} params.fromAddressOption - Array of files to send as attachments.
     * @param {string} params.message - The message to send
     * @param {string} params.messageType - The type of message sent, DRAFT or TEXT
     * @param {string[]} params.mentionedUsers - The list of user ids that are mentioned in the message
     * @param {{ phoneNumber: string }[]} params.toAddresses - The list of phone numbers that will be part of the conversation.
     * @param {{ phoneNumber: string }[]} params.to - The ID or number that's the recipient of the message.
     */
    sendMessage(sendMessagePayload: BaseConversationSendMessagePayload<unknown>): Promise<ConversationMessageResponse>;
    /**
     * Edit a draft message specified by `workitemId` in the conversation specified by `campaignId` and `conversationId`.
     * @param {string} params.campaignId - The campaign ID
     * @param {string} params.conversationId - The conversation ID. **This parameter will be REQUIRED** in future versions; to create a conversation, use instead `createConversationWithParticipants`. Using this parameter will send the message to the specified existing conversation.
     * @param params.file - Deprecated file parameter. Use files instead.
     * @param params.files - Array of files to send as attachments.
     * @param {string} params.fromAddressOption - Array of files to send as attachments.
     * @param {string} params.message - The message to send
     * @param {string} params.messageType - The type of message sent, DRAFT or TEXT
     * @param {string[]} params.mentionedUsers - The list of user ids that are mentioned in the message
     * @param {string} params.workitemId - The ID of the workitem to edit
     */
    editMessage(editMessagePayload: BaseConversationEditMessagePayload<unknown>): Promise<ConversationMessageResponse>;
    /**
     * Fetches a conversation's messages by the specified conversationId.
     * @param {string} params.conversationId - The conversation ID
     * @param {number} params.rows - Number of items per page
     * @param {number} params.start - Pagination starting index
     * @param {boolean} params.mentioned - Filter messages that mention the logged user
     * @param {boolean} params.version - To use v1 or v2 of the API. Defaults to v1.
     */
    fetchConversationById({ conversationId, cursor, endCursor, includeCallRecordings, includeConversation, includeParentEngagement, includeSummary, includeVoicemail, limit, mentioned, rows, start, version, workitemId, }: {
        conversationId: string;
        cursor?: number;
        endCursor?: number;
        includeCallRecordings?: boolean;
        includeConversation?: boolean;
        includeParentEngagement?: boolean;
        includeSummary?: boolean;
        includeVoicemail?: boolean;
        limit?: number;
        mentioned?: boolean;
        rows?: number;
        start?: number;
        version?: 'v1' | 'v2';
        workitemId?: string;
    }): Promise<ConversationByIdResponse>;
    /**
     * Fetches a conversation's messages with workItems only in given status
     * @param {string} params.conversationId - The conversation ID
     * @param {number} params.rows - Number of items per page
     * @param {number} params.start - Pagination starting index
     * @param {number} params.workItemStatus - Pagination starting index
     */
    fetchConversationWorkItemsByStatus({ conversationId, rows, start, workItemStatus, }: FetchConversationWorkItemsByStatusPayload): Promise<ConversationsResponse>;
    /**
     * Fetches conversations in the campaign specified by campaignId
     * @param {boolean} params.archived - Filter archived conversations
     * @param {boolean} params.calls - Filter calls
     * @param {string} params.campaignId - The campaign ID
     * @param {boolean} params.draft - Filter draft conversations
     * @param {boolean} params.inboundCalls - Filter inbound calls
     * @param {boolean} params.latest - Filter latest conversations
     * @param {boolean} params.mentioned - Filter messages that have mentions
     * @param {boolean} params.messages - Filter messages
     * @param {boolean} params.missedCalls - Filter missed calls
     * @param {boolean} params.outboundCalls - Filter outbound calls
     * @param {boolean} params.read - Filter read messages
     * @param {number} params.rows - Number of items per page
     * @param {string} params.scope - Filter by scope
     * @param {number} params.start - Pagination starting index
     * @param {boolean} params.totalUnread - Include unread count for each conversation
     * @param {boolean} params.voicemails - Filter voicemails
     * @param {string} params.workitem - Filter by workitem
     */
    fetchConversationByCampaignId({ campaignId, limit, offset, ...params }: FetchConversationByCampaignIdPayload): Promise<ConversationsResponse>;
    /**
     * Fetches the journal-style timeline for a conversation, grouped into date
     * sections and topic groups. Sent to the backend as the snake_case
     * `conversation_id` query param.
     * @param {string} params.conversationId - Conversation to fetch the timeline for.
     * @param {number} params.limit - Number of items per page.
     * @param {number} params.offset - Offset of the first item of the page; advance by `limit` while `pagination.hasMore` is true.
     */
    fetchConversationTimeline({ conversationId, limit, offset, }: FetchConversationTimelinePayload): Promise<ConversationTimelineResponse>;
    /**
     * Fetches recent conversation engagements based on the provided parameters.
     * @param {number} params.cursor - Cursor for pagination.
     * @param {ConversationFilterTabType} params.filter - Filter type for conversations.
     * @param {boolean} params.ignoreVoicemailTranscripts - Whether to ignore voicemail transcripts.
     * @param {number} params.limit - Number of items per page.
     * @param {ConversationFilterTabType} params.tab - Tab filter for conversations.
     */
    fetchRecentConversationWorkitemEngagements(params?: FetchRecentConversationWorkitemEngagementsPayload): Promise<RecentConversationWorkitemEngagementsResponse>;
    /**
     * Fetches conversation messages between the logged user and the participants specified
     * in `participantIds` array.
     *
     * @param {number} params.pageNumber - Page number
     * @param {number} params.pageSize - Number of items per page
     * @param {number} params.participantIds - IDs of the participants
     * @returns
     * * `{}` empty object if there's not conversation with these participants.
     * * `{ total: 0, count: 0, objects: [{ ...basicWorkitem, conversation: { ...conversationInfo } }] }` a single basic workitem with the conversation information if there's an existing conversation but no messages.
     * * `{ total: 2, count: 2, objects: [...workitems] }` An object with the correctly paginated conversation messages.
     */
    fetchConversationHistoryByParticipantId({ pageNumber, pageSize, participantIds, }: FetchConversationHistoryByParticipantIdPayload): Promise<ConversationsResponseWithContactArray>;
    /**
     * Create a conversation with the specified participants.
     * @param payload
     * @param {ConversationWithParticipantsParticipant[]} payload.conversationsParticipantList - The list of participants described by objects with `phoneNumber` or `id`.
     * @returns
     */
    createConversationWithParticipants(payload: ConversationWithParticipantsPayload): Promise<Conversation>;
    /**
     * Bulk update read status of workitems in a conversation.
     */
    bulkChangeReadStatusInConversation(conversationId: string, status: boolean): Promise<Conversation>;
    /**
     * Delete a message from a conversation, used for draft messages flow.
     *
     * @param payload - The payload to delete a message from a conversation.
     * @param {string} payload.conversationId - The conversation ID.
     * @param {boolean=} payload.isDraft - True if the message is a draft, false otherwise.
     * @param {string} payload.workitemId - The workitemId of the message to delete.
     */
    deleteMessage({ conversationId, isDraft, workitemId, }: ConversationAndWorkitemPayload): Promise<Record<string, unknown>>;
    /**
     * Update the draft status of the conversation with conversationId in workitem with workitemId.
     *
     * @param payload - The payload to change the draft status of a conversation.
     * @param conversationId - The conversation ID.
     * @param draft - The draft status.
     * @param workitemId - The workitem ID.
     */
    changeConversationDraftStatus({ conversationId, draft, workitemId, }: ChangeConversationDraftStatusPayload): Promise<Record<string, unknown>>;
    /**
     * Retry sending a failed message from a conversation.
     *
     * @param payload - The payload to delete a message from a conversation.
     * @param {string} payload.conversationId - The conversation ID.
     * @param {string} payload.workitemId - The workitemId of the message to retry.
     */
    retryMessage({ conversationId, workitemId }: ConversationAndWorkitemPayload): Promise<Record<string, unknown>>;
    /**
     * Delete a conversation.
     *
     * @param payload - The payload to delete a conversation.
     * @param {string} payload.conversationId - The conversation ID.
     * @param {string=} payload.userId - The user ID.
     */
    deleteConversation({ conversationId, userId }: DeleteConversationPayload): Promise<Record<string, unknown>>;
    /**
     * Archive and Unarchive a conversation.
     *
     * @param payload - The payload to archive or unarchive a conversation.
     * @param {string} payload.conversationId - The conversation ID.
     * @param {boolean} payload.archived - True if the conversation is archived, false otherwise.
     * @returns
     */
    archiveConversation({ archived, campaignId, conversationId, }: ArchiveConversationPayload): Promise<ArchiveConversationResponse>;
    /**
     * Fetches the conversations of a ticket.
     *
     * @param ticketId - The ticket ID.
     * @returns The ticket conversations.
     */
    fetchTicketConversations(ticketId: string): Promise<TicketConversationsResponse>;
    /**
     * Converts a conversation to a channel.
     *
     * @param conversationId - The conversation ID.
     * @param channelName - The channel name.
     * @returns The channel.
     */
    convertConversationToChannel(conversationId: string, channelName: string): Promise<Conversation>;
    /**
     * Renames a channel.
     *
     * @param channelId - The channel ID.
     * @param channelName - The new channel name.
     * @returns The channel.
     */
    renameChannel(channelId: string, channelName: string): Promise<Conversation>;
    /**
     * Updates the participants of a conversation.
     *
     * @param conversationId - The conversation ID.
     * @param payload - The payload to update the participants.
     * @returns The conversation.
     */
    updateConversationParticipants(conversationId: string, payload: UpdateParticipantsPayload): Promise<Conversation>;
    fetchUnreadCounts(): Promise<UnreadCounts>;
    fetchTranscriptionsAndRecordings({ conversationId, createdAt, workitemId, }: TranscriptionsAndRecordingsPayload): Promise<TranscriptionsAndRecordingsResponse>;
    /**
     * Fetches the conversation activity summary including unread counts and latest activity.
     *
     * @returns The conversation activity summary with categorized conversations and unread counts.
     * @deprecated Use sdk.getSchemaTypeClient() to access the new v2 API
     */
    fetchConversationActivitySummary(): Promise<ConversationActivitySummaryResponse>;
    /**
     * Update read status of a workitem in a conversation.
     */
    updateWorkitemReadStatus({ conversationId, status, workitemId, }: UpdateWorkitemReadStatusPayload): Promise<Record<string, unknown>>;
    private handleConversationFeedPushNotification;
    private handleConversationWorkitemFeedPushNotification;
    /**
     * Clears all orphaned push-feed tasks that were registered via fetchFeed() but
     * never completed because the WebSocket connection dropped before the final batch arrived.
     *
     * Why this is needed:
     * fetchFeed() sets feedLoadingStates to true and registers a taskId in taskIdMatches.
     * The only normal clearing path is handleConversationFeedPushNotification() when
     * remainingBatches reaches 0 (final batch). If the WebSocket drops before the final
     * batch arrives, remainingBatches never reaches 0, feedLoadingStates is never cleared,
     * and the isFeedLoading guard permanently blocks all future fetchFeed() calls for the
     * same filter/tab/queue combination — leaving the UI stuck in a loading state with no
     * way to recover without a page refresh.
     *
     * What this method does:
     * For each pending taskId it clears the loading state, clears the last requested cursor,
     * emits isLoading:false so the hook reacts and unblocks the UI, and emits an error so
     * the user knows the feed failed to load and can retry.
     *
     * Why lastRequestedCursorByKey is cleared per orphaned task:
     * getConversationsQueryOptions.queryFn uses getLastRequestedCursor() to skip background
     * re-fetches when the cursor has not changed. If a fetch was incomplete (partial batches
     * delivered before disconnect), the cache cursor and the last requested cursor may
     * coincidentally match — causing the background re-fetch to be silently skipped on the
     * next queryFn call (e.g. component re-mount). Clearing only the affected loadingKey
     * ensures getLastRequestedCursor returns undefined for that key, so the cursor guard
     * sees a difference and correctly triggers a fresh background fetch after reconnect.
     * Cursor entries for completed fetches are intentionally left untouched.
     */
    private cleanupOrphanedConversationPushFeedTaskIds;
    /**
     * Subscribes to SocketClosedNotification and cleans up any push-feed tasks
     * that were in-flight when the WebSocket connection was lost.
     *
     * Why SocketClosedNotification and not SocketDisconnectedNotification or SocketErrordNotification:
     * - SocketClosedNotification (onWebSocketClose) is the definitive signal that the
     *   underlying WebSocket connection is gone and no further messages will arrive on it.
     * - SocketDisconnectedNotification (onDisconnect) is a STOMP-level graceful disconnect
     *   and does not reliably indicate an unexpected connection loss.
     * - SocketErrordNotification fires for both onWebSocketError and onStompError. In most
     *   failure scenarios onWebSocketError fires first and onWebSocketClose fires immediately
     *   after. Subscribing to both would run cleanup twice on the same taskIds — harmless
     *   but unnecessary. SocketClosedNotification alone is sufficient and definitive.
     *
     * STOMP reconnect behaviour:
     * reconnectDelay is 1000ms — STOMP automatically reconnects after close. Cleaning up
     * on close is still correct because any batches in-flight at the time of close are
     * permanently lost regardless of whether the socket reconnects. The user must trigger
     * a fresh fetchFeed() after reconnect, which is now unblocked by this cleanup.
     */
    private handleWebSocketDisconnect;
    fetchFeed(params: FetchFeedPayload): Promise<FetchFeedResponse | undefined>;
    /**
     * Update workitems by conversation cached in QueryClient
     * @param conversationId - The conversation ID.
     * @param cursor - Epoch cursor, works as 'newest' bound, will fetch workitems created before this ().
     * @param endCursor - Epoch cursor, works as 'oldest' bound, will fetch workitems created after this.
     * @param includeCallRecordings - Whether to include call recordings.
     * @param includeConversation - Whether to include conversation details.
     * @param includeParentEngagement - Whether to include parent engagement details.
     * @param includeSummary - Whether to include summary details.
     * @param includeVoicemail - Whether to include voicemail details.
     * @param limit - The maximum number of items to fetch.
     */
    feedWorkitemsByConversationId({ conversationId, cursor, endCursor, includeCallRecordings, includeConversation, includeParentEngagement, includeSummary, includeVoicemail, limit, }: {
        conversationId: string;
        cursor?: number;
        endCursor?: number;
        includeCallRecordings?: boolean;
        includeConversation?: boolean;
        includeParentEngagement?: boolean;
        includeSummary?: boolean;
        includeVoicemail?: boolean;
        limit: number;
    }): Promise<void>;
    fetchV2ConversationsWorkitems({ bidirectional, contactId, conversationIds, cursor, endCursor, filter, includeCallRecordings, includeConversation, includeParentEngagement, includeReactions, includeSummary, includeVoicemail, lean, limit, queueIds, workitemId, }: ConversationWorkitemsParams): Promise<ConversationWorkitemsResponse>;
    /**
     * Sends an outbound email. If `conversationId` is provided the email is sent as a reply or continuing the conversation.
     * Not sending a conversationId will create a new conversation with the email as the first message.
     * https://nextiva.atlassian.net/wiki/spaces/~jkida/pages/4660494379/Nexar+Outbound+Email+API
     * @param payload.from - The sending mailbox address.
     * @param payload.to - The recipient email address.
     * @param payload.subject - The email subject.
     * @param payload.message - The HTML body.
     * @param payload.emailResponse - Body-parts bag (TEXT + HTML parts required).
     * @param payload.fromAddressOption - Use `1`.
     * @param payload.conversationId - When present, replies within this conversation.
     * @param payload.queueId - Inbox queue for new outbound emails (ignored when conversationId is set).
     * @param payload.campaignId - Optional; derived from `from` if omitted.
     * @param payload.parentWorkitemIds - Workitem IDs to thread this email as a reply to.
     */
    sendEmail({ conversationId, ...rest }: BaseConversationSendEmailPayload): Promise<Workitem>;
    /**
     * Cleanup method - call this when destroying the service
     */
    destroy(): void;
}
//# sourceMappingURL=conversation.d.ts.map