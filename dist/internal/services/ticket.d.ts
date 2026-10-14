import type { FetchTicketPrioritiesResponseBody, FetchTicketStatusesResponseBody, CreateTicketNoteRequestBody, TicketNote, FetchTicketNotesByTicketIdResponseBody, FetchTicketHistoryResponseBody, FetchTicketsByContactResponseBody, UpdateTicketStatusRequestBody, Ticket, UpdateTicketAssigneeRequestBody, UpdateTicketInboxRequestBody, UpdateTicketNoteRequestBody, FetchWorkItemsRequestBody, UpdateTicketPriorityRequestBody, FetchWorkitemsResponseBody, FetchTicketsResponseBody, SchemaTypeSearchPayload, Workitem, FetchTicketHistoryV2ResponseBody, FetchTicketPropertiesResponseBody, UpdateTicketPropertyRequestBody, FetchTicketByWorkitemIdPayload, FetchTicketByTicketIdPayload, FetchTicketOptionsParam, FetchAgentDashboardPayload, AgentDashboard, TicketFeedback, CreateTicketFeedbackRequestBody, TicketLinkedWorkitemsResponse, TicketNotesResponse, TicketSearchPayload, TicketSearchResponse } from '../../types';
import { type StateService } from '../../services/state';
import { type BaseSchemaTypeClient } from '../../models';
import { type InjectionContainer } from '../dependencyInjectionContainer';
import { type EventsService } from '../../services';
import { type LoggerService } from '../../services/logger';
export declare class BaseTicketService {
    protected eventsService: EventsService;
    protected stateService: StateService;
    protected schemaTypeClient: BaseSchemaTypeClient;
    protected logger: LoggerService;
    private ticketsLoading;
    private ticketLinkedWorkitemsLoading;
    private queryCacheUnsubscribe?;
    constructor({ eventsService, loggerService, schemaTypeClient, stateService, }: Pick<InjectionContainer, 'eventsService' | 'stateService' | 'schemaTypeClient' | 'loggerService'>);
    private handleSupervisorTicketUpdateNotification;
    /**
     * Fetches the ticket statuses from the server.
     * @returns A promise that resolves to a response of ticket statuses.
     * @deprecated Use schemaTypeClient.request method instead.
     */
    fetchStatuses(): Promise<FetchTicketStatusesResponseBody>;
    /**
     * Fetches the ticket priorities from the server.
     * @returns A promise that resolves to a response of ticket priorities.
     * @deprecated Use schemaTypeClient.request method instead.
     */
    fetchPriorities(): Promise<FetchTicketPrioritiesResponseBody>;
    /**
     * Fetches the ticket properties from the server.
     * @returns A promise that resolves to a response of ticket properties.
     * @deprecated Use schemaTypeClient.request method instead.
     */
    fetchProperties(): Promise<FetchTicketPropertiesResponseBody>;
    /**
     * Fetches workitems from the server.
     * @returns A promise that resolves to a response of workitems.
     * @deprecated Use schemaTypeClient.request method instead.
     */
    fetchWorkitems(payload?: FetchWorkItemsRequestBody): Promise<FetchWorkitemsResponseBody>;
    /**
     * @deprecated Use schemaTypeClient.request method instead.
     */
    fetchWorkitem(payload: string): Promise<Workitem>;
    /**
     * @deprecated Use schemaTypeClient.request method instead.
     */
    fetchWorkitem(payload: FetchTicketByWorkitemIdPayload | FetchTicketByTicketIdPayload): Promise<Workitem>;
    /**
     * Fetches a ticket by its ID.
     *
     * @param ticketId - The ID of the ticket to fetch.
     * @param options - Options for the fetch request.
     * @param options.behavior - Specific behavior of the fetch request.
     * * `''` or `undefined` - returns the ticket without any specific additional data.
     * * `'withSurvey'` - includes survey data for the ticket.
     * * defaults to empty string `''`.
     *
     * @returns A promise that resolves to the fetched ticket.
     * @deprecated Use schemaTypeClient.request method instead.
     */
    fetchTicket(ticketId: string, { behavior }?: FetchTicketOptionsParam): Promise<Ticket>;
    /**
     * @deprecated Use schemaTypeClient.request method instead.
     */
    fetchTicketHistory(ticketId: string, page?: number, options?: {
        version: 2;
    }): Promise<FetchTicketHistoryV2ResponseBody>;
    /**
     * @deprecated Use schemaTypeClient.request method instead.
     */
    fetchTicketHistory(ticketId: string, page?: number, options?: {
        version: 1;
    }): Promise<FetchTicketHistoryResponseBody>;
    /**
     * @deprecated Use schemaTypeClient.request method instead.
     */
    fetchTicketHistory(ticketId: string, page?: number, options?: {
        version: 1 | 2;
    }): Promise<FetchTicketHistoryResponseBody | FetchTicketHistoryV2ResponseBody>;
    /**
     * Updates the status of a ticket.
     *
     * @param ticketId - The ID of the ticket to update.
     * @param body - The request body containing the updated ticket status.
     * @returns A promise that resolves to the updated ticket.
     * @deprecated Use schemaTypeClient.request method instead.
     */
    updateTicketStatus(ticketId: string, body: UpdateTicketStatusRequestBody): Promise<Ticket>;
    /**
     * Updates the property field of a ticket.
     *
     * @param ticketId - The ID of the ticket to update.
     * @param body - The request body containing the updated ticket status.
     * @returns A promise that resolves to the updated ticket.
     * @deprecated Use schemaTypeClient.request method instead.
     */
    updateTicketProperty(ticketId: string, body: UpdateTicketPropertyRequestBody): Promise<Ticket>;
    /**
     * Updates the priority of a ticket.
     *
     * @param ticketId - The ID of the ticket to update.
     * @param body - The request body containing the updated ticket priority id
     * @returns A promise that resolves to the updated ticket.
     * * @deprecated Use schemaTypeClient.request method instead.
     */
    updateTicketPriority(ticketId: string, body: UpdateTicketPriorityRequestBody): Promise<Ticket>;
    /**
     * Updates the assignee of a ticket.
     * @param ticketId - The ID of the ticket to update.
     * @param body - The request body containing the updated assignee information, `teamId` must be provided with the same ID as the current queue in the Workitem object.
     * @returns A Promise that resolves to the updated ticket.
     * @deprecated Use schemaTypeClient.request method instead.
     */
    updateTicketAssignee(ticketId: string, body: UpdateTicketAssigneeRequestBody): Promise<Ticket>;
    /**
     * Updates the inbox of a ticket.
     * @param ticketId - The ID of the ticket to update.
     * @param body - The request body containing the updated team information.
     * @returns A Promise that resolves to the updated ticket.
     * @deprecated Use schemaTypeClient.request method instead.
     */
    updateTicketInbox(ticketId: string, body: UpdateTicketInboxRequestBody): Promise<Ticket>;
    /**
     * @deprecated Use sdk.getSchemaTypeClient().search('ticket')
     */
    fetchTickets(payload?: SchemaTypeSearchPayload): Promise<FetchTicketsResponseBody>;
    /**
     * Fetches tickets by contact ID.
     * @param contactId - The ID of the contact.
     * @returns A promise that resolves to the fetched tickets.
     * @deprecated Use schemaTypeClient.request method instead.
     */
    fetchTicketsByContact(contactId: string): Promise<FetchTicketsByContactResponseBody>;
    /**
     * Fetches all statuses tickets by contact ID.
     * @param contactId - The ID of the contact.
     * @returns A promise that resolves to the fetched tickets.
     * @deprecated Use schemaTypeClient.request method instead.
     */
    fetchAllTicketsByContact(contactId: string): Promise<FetchTicketsByContactResponseBody>;
    /**
     * Fetches ticket notes by ticket ID.
     * @param ticketId - The ID of the ticket.
     * @returns A promise that resolves to the ticket notes.
     * @deprecated Use sdk.getSchemaTypeClient().search('ticketnote')
     */
    fetchTicketNotesByTicketId(ticketId: string): Promise<FetchTicketNotesByTicketIdResponseBody>;
    /**
     * Creates a ticket note.
     *
     * @param requestBody - The request body for creating the ticket note.
     * @returns The created ticketnote and note objects.
     * @deprecated Use sdk.getSchemaTypeClient().create('note', { data: { ... } })
     */
    createTicketNote(requestBody: CreateTicketNoteRequestBody): Promise<{
        note: import("../..").Note;
        ticketNote: TicketNote;
    }>;
    /**
     * Updates a ticket note with the specified ID.
     * @param ticketNoteId - The ID of the ticket note to update.
     * @param requestBody - The request body containing the updated ticket note data.
     * @returns A promise that resolves to the updated ticket note.
     * @deprecated Use sdk.getSchemaTypeClient().update('ticketnote', { id: "...", data: { ... } })
     */
    updateTicketNote(ticketNoteId: string, requestBody: UpdateTicketNoteRequestBody): Promise<TicketNote>;
    /**
     * Deletes a ticket note.
     * @param ticketNoteId - The ID of the ticket note to delete.
     * @returns A Promise that resolves to the deleted ticket note.
     * @deprecated Use sdk.getSchemaTypeClient().delete('ticketnote', { id: "..." })
     */
    deleteTicketNote(ticketNoteId: string): Promise<TicketNote>;
    fetchAgentDashboard({ rangeFrom, rangeTo }?: FetchAgentDashboardPayload): Promise<AgentDashboard | undefined>;
    /**
     * Get all notes for a ticket
     * @param ticketId - The ticket ID
     * @deprecated Use schemaTypeClient.request method instead.
     */
    fetchTicketNotes(ticketId: string): Promise<TicketNote[]>;
    /**
     * Get feedbacks of a ticket
     * @param ticketId - The ticket ID
     * @deprecated Use schemaTypeClient.request method instead.
     */
    fetchTicketFeedbacks(ticketId: string): Promise<TicketFeedback[]>;
    /**
     * Create feedback for a ticket
     * @param createTicketFeedbackRequestBody - The createTicketFeedbackRequestBody to update ticket feedback
     * @deprecated Use schemaTypeClient.request method instead.
     */
    createTicketFeedback(createTicketFeedbackRequestBody: CreateTicketFeedbackRequestBody): Promise<TicketFeedback>;
    /**
     * Update feedback for a ticket by feedbackId
     * @param feedbackId - The feedbackId to update
     * @param updateTicketFeedbackRequestBody - The updateTicketFeedbackRequestBody to update ticket feedback
     * @deprecated Use schemaTypeClient.request method instead.
     */
    updateTicketFeedback(feedbackId: string, updateTicketFeedbackRequestBody: CreateTicketFeedbackRequestBody): Promise<TicketFeedback>;
    private static readonly TICKETS_SEARCH_PREFIX;
    private static ticketsQueryKey;
    searchTickets(payload?: TicketSearchPayload): Promise<TicketSearchResponse>;
    private static ticketLinkedWorkitemsQueryKey;
    private static ticketLinkedWorkitemsPrefixByTicketId;
    fetchTicketLinkedWorkitems(ticketId: string, options?: {
        cursor?: string;
        filter?: string[];
        limit?: number;
    }): Promise<TicketLinkedWorkitemsResponse>;
    fetchTicketLinkedWorkitemsByIds(ticketId: string, ids: string[]): Promise<TicketLinkedWorkitemsResponse>;
    private static ticketDetailQueryKey;
    /**
     * Fetches a single ticket by ID. First checks the search cache,
     * then falls back to a retrieve API call.
     */
    fetchTicketDetail(ticketId: string): Promise<Ticket>;
    private static ticketNotesQueryKey;
    fetchTicketNotesList(ticketId: string, options?: {
        limit?: number;
        offset?: number;
    }): Promise<TicketNotesResponse>;
    fetchTicketNoteById(ticketId: string, ticketNoteId: string): Promise<TicketNote>;
    isTicketsLoading(): boolean;
    private setTicketsLoading;
    isTicketLinkedWorkitemsLoading(ticketId: string): boolean;
    private setTicketLinkedWorkitemsLoading;
    private setTicketDetailLoading;
    private setTicketNotesLoading;
    private updateTicketsCache;
    private addOrUpdateTicketInQueryCache;
    private removeTicketFromQueryCache;
    /**
     * Iterates ALL cached filter variations and applies the notification gate
     * against each cache's specific filters. Adds/updates or removes the ticket accordingly.
     */
    private applyTicketToAllSearchCaches;
    private updateTicketLinkedWorkitemsCache;
    private addWorkitemsToTicketLinkedCache;
    private removeWorkitemsFromTicketLinkedCache;
    private setTicketDetailCache;
    private updateTicketDetailCacheIfExists;
    private updateTicketNotesCache;
    private addOrUpdateNoteInCache;
    private removeNoteFromCache;
    /**
     * Returns the set of queue IDs the current agent belongs to.
     * Uses the company directory cache from state service.
     */
    private getAgentQueueIds;
    /**
     * Checks whether a ticket from a notification should be in a specific filter cache.
     *
     * Rules:
     * 1. Queue membership (always): ticket.latestQueueId must be in agent's queues
     * 2. Filter fields (only specified keys): ticket must match all provided filters
     *    - Unspecified filter keys are skipped (no constraint)
     */
    private doesTicketPassGate;
    private subscribeToTicketQueryCacheChanges;
    private handleNewTicketNotificationForCache;
    private handleUpdateTicketNotificationForCache;
    private handleTicketDeleted;
    private handleTicketWorkitemChanged;
    private handleTicketNoteChanged;
    destroy(): void;
}
//# sourceMappingURL=ticket.d.ts.map