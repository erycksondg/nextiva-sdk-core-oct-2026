import type { ProactiveAgentAssistPrefetchPayload, ProactiveAgentAssistPrefetchResponse, ProactiveAgentAssistTaskAcceptedResponse, ProactiveAgentAssistTaskPayload, ProactiveAgentAssistTicketPrefetchAcceptedResponse, ProactiveAgentAssistTicketPrefetchPayload, ProactiveAgentAssistTicketTaskAcceptedResponse, ProactiveAgentAssistTicketTaskPayload, ProactiveAgentAssistTicketTypesAcceptedResponse, ProactiveAgentAssistTicketTypesPayload, ProactiveAgentAssistTypesAcceptedResponse, ProactiveAgentAssistTypesPayload } from '../types/proactiveAgentAssist';
import type { InjectionContainer } from '../internal';
export declare class ProactiveAgentAssistService {
    private eventsService;
    private logger;
    private schemaTypeClient;
    constructor({ eventsService, loggerService, schemaTypeClient, }: Pick<InjectionContainer, 'eventsService' | 'loggerService' | 'schemaTypeClient'>);
    private handleProactiveAgentAssistNotification;
    /**
     * Loads the conversation context when the UI opens or switches to a
     * conversation. Runs synchronously — the context is returned in the
     * response body. Subsequent live updates are pushed automatically as
     * ProactiveAgentAssistNotification events (task=prefetch); do not poll
     * this endpoint.
     *
     * @param payload - The conversation identifiers to prefetch context for.
     * @returns A Promise that resolves to the prefetched context (data is null when no summary exists yet).
     */
    prefetchConversation(payload: ProactiveAgentAssistPrefetchPayload): Promise<ProactiveAgentAssistPrefetchResponse>;
    /**
     * Runs an AI-powered assist task on a conversation. Returns 202 Accepted
     * immediately; the result is delivered asynchronously as a
     * ProactiveAgentAssistNotification event, correlated by responseId.
     *
     * @param payload - The conversation identifiers and task to run. channelType is required for reply-style tasks.
     * @returns A Promise that resolves to the 202 acknowledgement containing the correlation responseId.
     */
    runAssistTask(payload: ProactiveAgentAssistTaskPayload): Promise<ProactiveAgentAssistTaskAcceptedResponse>;
    /**
     * Discovers which quick suggestions and agent actions are available for a
     * conversation. Returns 202 Accepted immediately; the result is delivered
     * asynchronously as a ProactiveAgentAssistNotification event
     * (task=get_assist_types), correlated by responseId.
     *
     * @param payload - The conversation identifiers to discover assist types for.
     * @returns A Promise that resolves to the 202 acknowledgement containing the correlation responseId.
     */
    getAssistTypes(payload: ProactiveAgentAssistTypesPayload): Promise<ProactiveAgentAssistTypesAcceptedResponse>;
    /**
     * Preloads ticket context when the UI opens or switches to a ticket.
     * Unlike conversation prefetch, this returns 202 Accepted and the context
     * is delivered asynchronously as a ProactiveAgentAssistNotification event
     * (task=prefetch, conversationId=null), correlated by responseId.
     *
     * @param payload - The ticket identifier plus optional workitemIds to scope the context.
     * @returns A Promise that resolves to the 202 acknowledgement containing the correlation responseId.
     */
    prefetchTicket(payload: ProactiveAgentAssistTicketPrefetchPayload): Promise<ProactiveAgentAssistTicketPrefetchAcceptedResponse>;
    /**
     * Runs an AI-powered assist task scoped to a ticket. Returns 202 Accepted
     * immediately; the result is delivered asynchronously as a
     * ProactiveAgentAssistNotification event (conversationId=null, correlate
     * by ticketId), matched by responseId.
     *
     * @param payload - The ticket identifiers and task to run. channelType is required for reply tasks.
     * @returns A Promise that resolves to the 202 acknowledgement containing the correlation responseId.
     */
    runTicketAssistTask(payload: ProactiveAgentAssistTicketTaskPayload): Promise<ProactiveAgentAssistTicketTaskAcceptedResponse>;
    /**
     * Discovers which quick suggestions and agent actions are available for a
     * ticket. Returns 202 Accepted immediately; the result is delivered
     * asynchronously as a ProactiveAgentAssistNotification event
     * (task=get_assist_types), correlated by responseId.
     *
     * @param payload - The ticket identifier plus optional workitemIds to scope the context.
     * @returns A Promise that resolves to the 202 acknowledgement containing the correlation responseId.
     */
    getTicketAssistTypes(payload: ProactiveAgentAssistTicketTypesPayload): Promise<ProactiveAgentAssistTicketTypesAcceptedResponse>;
}
//# sourceMappingURL=proactiveAgentAssist.d.ts.map