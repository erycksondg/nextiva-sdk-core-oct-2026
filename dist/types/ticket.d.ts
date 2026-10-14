import type { CampaignDetails } from './campaigns';
import type { PaginatedResponse } from './common';
import type { Contact } from './contact';
import type { LocalizationEntry } from './localization';
import type { EngagementData } from './message';
import type { Note } from './note';
import type { Survey, SurveyResult } from './survey';
import type { QueueObject, User } from './user';
import type { StringWithAutocomplete } from './util';
import type { Workitem } from './workitem';
export interface TicketStatus {
    _id: string;
    label: string;
    localizations?: {
        name?: LocalizationEntry;
    };
    modifiedAt: number;
    modifiedBy: string;
    status: string;
    value: string;
}
export type FetchTicketStatusesResponseBody = PaginatedResponse<TicketStatus>;
export interface TicketPriority {
    id: string;
    label: string;
    value: string;
}
export type FetchTicketPrioritiesResponseBody = PaginatedResponse<TicketPriority>;
export interface ActionWorkflowProperty {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    label: string;
    localizations?: {
        description?: LocalizationEntry;
        name?: LocalizationEntry;
    };
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: 'workflowproperty';
    property: string;
    tenantId: string;
    value: string;
}
export interface WorkflowProperty extends ActionWorkflowProperty {
    /**
     * Next detailed properties allowed from this property
     */
    actions: ActionWorkflowProperty[];
    /**
     * Next properties by value allowed from this property
     */
    actionsProperty: string[];
}
export type FetchTicketPropertiesResponseBody = PaginatedResponse<WorkflowProperty>;
export interface FetchWorkItemsRequestBody {
    agentIds?: string[];
    currentSources?: string[];
    inboxIds?: string[];
    q?: string;
    rangeFrom?: number;
    rangeTo?: number;
    rows?: number;
    sort?: string;
    start?: number;
    state?: string;
    statuses?: string[];
    'ticketHistory.queueId'?: string;
}
export interface APIParsedFetchWorkItemsRequestBody {
    agentId?: string;
    currentSource?: string;
    latestQueueId?: string;
    q?: string;
    rangeFrom?: number;
    rangeTo?: number;
    rows?: number;
    sort?: string;
    start?: number;
    state?: string;
    status?: string;
    'ticketHistory.queueId'?: string;
}
export interface TicketUser {
    firstName: string;
    lastName: string;
    name?: string;
    userId: string;
}
export interface TicketQueue {
    localizations?: {
        description?: LocalizationEntry;
        name?: LocalizationEntry;
    };
    name: string;
    queueId: string;
}
export interface WorkItemHistoryItem {
    agentId: string;
    conversation?: EngagementData;
    createdAt: number;
    createdBy: string;
    hidden: string;
    historyType: string;
    id: string;
    modifiedBy: string;
    noteId?: string;
    participantId?: string;
    priority: string;
    queueId?: string;
    replyId?: string;
    status: string;
    subType?: string;
    updatedAt: number;
    workitemId: string;
}
export interface FetchTicketHistoryResponseBody extends FetchTicketHistoryV2ResponseBody {
    hasNext: boolean;
}
export interface FetchTicketHistoryV2ResponseBody {
    _id: string;
    agents?: Record<string, TicketUser>;
    count: number;
    data: WorkItemHistoryItem[];
    hasNext?: boolean;
    notes?: Record<string, TicketNote>;
    participants?: Record<string, TicketUser>;
    processedWorkItems?: string[];
    queues: Record<string, TicketQueue>;
    workItemPageNo?: number;
    workitems?: Record<string, Workitem>;
}
export type FetchTicketsByContactResponseBody = PaginatedResponse<Ticket>;
export interface UpdateTicketStatusRequestBody {
    statusId: string;
}
export interface UpdateTicketPriorityRequestBody {
    priorityId: string;
}
export interface UpdateTicketPropertyRequestBody {
    propertyId: string;
}
export interface UpdateTicketAssigneeRequestBody {
    teamId: string;
    userId: string;
}
export interface UpdateTicketInboxRequestBody {
    teamId: string;
}
export type FetchTicketNotesByTicketIdResponseBody = PaginatedResponse<TicketNote>;
export interface CreateTicketNoteRequestBody {
    body: string;
    ticketId: string;
    title: string;
}
export interface UpdateTicketNoteRequestBody {
    body: string;
    title: string;
}
export interface TicketHistoryItem {
    agentId?: string;
    createdAt: number;
    createdBy?: string;
    hidden: string;
    historyType: string;
    id: string;
    modifiedBy?: string;
    priority: string;
    queueId?: string;
    replyId?: string;
    status: string;
    subType?: string;
    summary?: string;
    updatedAt: number;
    workitemId: string;
}
export interface TicketWorkitem {
    contactId: string;
    conversationId: string;
    linkedAt: number;
    linkedBy: string;
    queueId: string;
    ticketCreatedAt: number;
    ticketId: string;
    ticketworkitemId: string;
    workitemCreatedAt: number;
    workitemId: string;
}
export interface TicketEmbedded {
    ticketworkitems?: TicketWorkitem[];
}
export interface Ticket {
    _embedded?: TicketEmbedded;
    _id?: string;
    agentId: string;
    campaignId?: string;
    contactId?: string;
    conversationId?: string;
    createdAt: number;
    createdBy: string;
    currentSource?: string;
    currentSourceType?: string;
    deletedAt?: number;
    description?: string;
    expansions?: {
        agentId?: User;
        campaignId?: CampaignDetails;
        contactId?: Contact;
        latestQueueId?: QueueObject;
        surveyId?: Survey;
    };
    frtSlaCrossed?: boolean;
    frtSlaTime?: number;
    id?: string;
    latestQueueId?: string;
    latestSummary?: string;
    latestWorkitemId?: string;
    modifiedAt: number;
    modifiedBy: string;
    notes?: PaginatedResponse<TicketNote>;
    objectType?: 'ticket';
    originalSource?: string;
    originalSourceType?: string;
    priority: string;
    property?: string;
    reopened?: boolean;
    state?: string;
    status: string;
    surveyId?: string;
    surveyResult?: Record<string, SurveyResult>;
    tatSlaCrossed?: boolean;
    tatSlaTime?: number;
    tenantId?: string;
    ticketHistory?: TicketHistoryItem[];
    ticketId: string;
    title?: string;
    uuId?: string;
    watchers?: string;
}
export interface TicketNote {
    _id?: string;
    createdAt: number;
    createdBy: string;
    deletedAt?: number;
    description: string;
    expansions?: {
        noteId?: Note;
        ticketId?: Ticket;
    };
    id?: string;
    label?: string;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    noteId?: string;
    objectType?: 'ticketnote';
    tenantId?: string;
    ticketId: string;
    ticketnoteId: string;
}
export type FetchTicketsResponseBody = PaginatedResponse<Ticket>;
export type TicketChangeType = StringWithAutocomplete<'TICKET_ASSIGNED' | 'TICKET_CREATED' | 'TICKET_DELETED' | 'TICKET_UPDATED' | 'TICKETNOTE_CHANGED' | 'TICKETWORKITEM_CHANGED'>;
export type TicketNoteSubType = StringWithAutocomplete<'ADDED' | 'DELETED' | 'EDITED'>;
export interface InternalUpdateTicketNotificationData {
    added?: string[];
    changeType?: TicketChangeType;
    createdAt: number;
    id: string;
    name: 'UpdateTicketNotification';
    removed?: string[];
    removedTicketnoteIds?: string[];
    removedWorkitemIds?: string[];
    result: string;
    skipMobileNotification?: boolean;
    subType?: TicketNoteSubType;
    ticket?: Ticket;
    ticketnoteId?: string;
    userId: string;
    workitemId: string;
}
export interface InternalNewTicketNotificationData {
    added?: string[];
    changeType?: TicketChangeType;
    createdAt?: number;
    id?: string;
    name: 'NewTicketNotification';
    removed?: string[];
    result?: string;
    skipMobileNotification?: boolean;
    subType?: TicketNoteSubType;
    ticket?: Ticket;
    ticketnoteId?: string;
    userId?: string;
    workitemId?: string;
}
export interface AgentDashboard {
    assignedToMeOpenTickets: number;
    assignedToMeTickets: number;
    forwardedTickets: number;
    holdTickets: number;
    inProgressTickets: number;
    openTickets: number;
    pastDueTickets: number;
    reOpenedTickets: number;
}
export type FetchAgentDashboardsResponseBody = PaginatedResponse<AgentDashboard>;
export interface FetchTicketByWorkitemIdPayload {
    workitemId: string;
}
export interface FetchTicketByTicketIdPayload {
    ticketId: string;
}
export interface FetchTicketOptionsParam {
    behavior: StringWithAutocomplete<'withSurvey' | ''>;
}
export interface FetchAgentDashboardPayload {
    rangeFrom?: Date | number;
    rangeTo?: Date | number;
}
export interface TicketFeedback {
    _id: string;
    comment: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    deletedBy: string;
    feedbackAction: 'NEXTIQ' | 'SUMMARY';
    id: string;
    modifiedAt: number;
    modifiedBy: string;
    objectType: 'feedback';
    rateReply: 'THUMBS_DOWN' | 'THUMBS_UP';
    rating: string;
    reason: string;
    requestId: string;
    status: string;
    tenantId: string;
    ticketId: string;
    userId: string;
}
export interface CreateTicketFeedbackRequestBody {
    comment?: string;
    feedbackAction: 'NEXTIQ' | 'SUMMARY';
    rateReply: 'THUMBS_DOWN' | 'THUMBS_UP';
    rating: number;
    reason?: string;
    requestId: string;
    status: string;
    ticketId: string;
}
export interface FetchTicketSlaResponseBody {
    closureSlaCrossed: boolean;
    closureSlaCrossesAt: number;
    crossed: boolean;
    frtSlaCrossed: boolean;
    frtSlaCrossesAt: boolean;
    iterationSlaCrossed: boolean;
    iterationSlaCrossesAt: number;
    responded: boolean;
    ticketId: string;
    workitemCount: number;
}
export interface SupervisorTicketUpdateNotificationData {
    agentid: string;
    changeType?: TicketChangeType;
    createdAt: number;
    id: string;
    name: 'SupervisorTicketUpdateNotification';
    result: string;
    skipMobileNotification: boolean;
    subType?: TicketNoteSubType;
    ticketId: string;
    ticketnoteId?: string;
    userId: string;
}
export interface TicketSearchFilters {
    agentId?: string;
    contactId?: string;
    priority?: string[];
    queueIds?: string[];
    status?: string[];
}
export interface TicketSearchPagination {
    cursor?: string;
    fetch?: 'newer' | 'older';
    limit?: number;
}
export interface TicketSearchPayload {
    filters?: TicketSearchFilters;
    include?: string;
    pagination?: TicketSearchPagination;
}
export interface TicketSearchResponsePagination {
    fetch: string;
    limit: number;
    next: string;
}
export interface TicketSearchResponse {
    pagination: TicketSearchResponsePagination;
    results: Ticket[];
}
export interface TicketsQueryData {
    hasMore: boolean;
    nextCursor: string | null;
    tickets: Ticket[];
}
export interface TicketsLoadingChangedData {
    isLoading: boolean;
}
export interface TicketsQueryUpdatedData {
    queryKey: readonly unknown[];
}
export interface TicketWorkitemMetadata {
    linkedAt: number;
    linkedBy: string;
    queueId: string;
    ticketworkitemId: string;
}
export type TicketLinkedWorkitem = Workitem & {
    ticketworkitemMetadata: TicketWorkitemMetadata;
};
export interface TicketLinkedWorkitemsResponse {
    count: number;
    next: string;
    objects: TicketLinkedWorkitem[];
    previous: string;
    total: number;
}
export interface TicketLinkedWorkitemsQueryData {
    filter?: string[];
    hasMore: boolean;
    nextCursor: string | null;
    workitems: TicketLinkedWorkitem[];
}
export interface TicketLinkedWorkitemsLoadingChangedData {
    isLoading: boolean;
    ticketId: string;
}
export interface TicketDetailQueryData {
    ticket: Ticket | null;
}
export interface TicketDetailLoadingChangedData {
    isLoading: boolean;
    ticketId: string;
}
export interface TicketNotesPagination {
    limit: number;
    offset: number;
    total: number;
}
export interface TicketNotesResponse {
    pagination: TicketNotesPagination;
    results: TicketNote[];
}
export interface TicketNotesQueryData {
    notes: TicketNote[];
    total: number;
}
export interface TicketNotesLoadingChangedData {
    isLoading: boolean;
    ticketId: string;
}
//# sourceMappingURL=ticket.d.ts.map