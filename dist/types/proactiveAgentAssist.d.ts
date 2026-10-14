/**
 * Reply-style assist tasks — they draft customer-facing content and require
 * channelType on the assist request (the backend rejects them with 400
 * otherwise). `provide_next_steps` drafts customer-facing next-step
 * messaging; `plan_next_steps` is the separate agent-facing recommendation
 * task.
 */
export type ProactiveAgentAssistReplyTask = 'write_reply' | 'ack_respond' | 'request_info' | 'provide_next_steps';
/**
 * Tasks accepted by POST /agent-assist/conversations/assist and
 * POST /agent-assist/tickets/assist (both endpoints share one backend enum).
 */
export type ProactiveAgentAssistTask = 'summary' | 'timeline' | 'plan_next_steps' | ProactiveAgentAssistReplyTask;
/**
 * All task values that can appear on a ProactiveAgentAssistNotification.
 */
export type ProactiveAgentAssistNotificationTask = ProactiveAgentAssistTask | 'prefetch' | 'get_assist_types';
/** 'sms' is normalized to 'text' server-side for generation. */
export type ProactiveAgentAssistChannelType = 'email' | 'sms' | 'text' | 'chat';
export interface ProactiveAgentAssistSummaryData {
    extractedInfo?: Record<string, string> | null;
    summary: string;
    topic: string;
}
export interface ProactiveAgentAssistTimelineEvent {
    description: string;
    timestamp: string;
}
export interface ProactiveAgentAssistTimelineData {
    timeline: ProactiveAgentAssistTimelineEvent[];
}
export interface ProactiveAgentAssistReference {
    reference: string;
    referenceType: string;
}
export interface ProactiveAgentAssistClarifyingQuestion {
    content: string;
    title: string;
}
export interface ProactiveAgentAssistNextStep {
    content: string;
    title: string;
}
export interface ProactiveAgentAssistToolParameter {
    name: string;
    value: string;
}
export interface ProactiveAgentAssistAction {
    resolved: boolean;
    title: string;
    toolName: string;
    toolParameters: ProactiveAgentAssistToolParameter[] | null;
}
export interface ProactiveAgentAssistSuggestionBase {
    actions: ProactiveAgentAssistAction[] | null;
    clarifyingQuestions: ProactiveAgentAssistClarifyingQuestion[] | null;
    confidence: number;
    matchScore: number | null;
    rationale: string | null;
    reference: string | null;
    referenceType: string | null;
    references: ProactiveAgentAssistReference[] | null;
    suggestionCategory: string;
    suggestionType: string;
    timestamp: string;
}
export interface ProactiveAgentAssistWriteReplyData extends ProactiveAgentAssistSuggestionBase {
    content: string;
    emailSubject?: string | null;
    formattedContent: string;
}
export interface ProactiveAgentAssistPlanNextStepsData extends ProactiveAgentAssistSuggestionBase {
    nextSteps: ProactiveAgentAssistNextStep[] | null;
}
export interface ProactiveAgentAssistTypeOption {
    description: string;
    taskType: string;
    title: string;
}
export interface ProactiveAgentAssistTypesData {
    actions: ProactiveAgentAssistTypeOption[];
    quickSuggestions: ProactiveAgentAssistTypeOption[];
}
/**
 * Set when the background AI task itself failed, e.g.
 * `{ code: 'ASSIST_TASK_FAILED', message: '...' }`. An error envelope always
 * carries `data: null`.
 */
export interface ProactiveAgentAssistError {
    code: string;
    message: string;
}
/**
 * Common envelope for all agent-assist results delivered over the WebSocket
 * (prefetch, summary, timeline, write_reply, plan_next_steps, get_assist_types).
 *
 * `data` and `error` are independent: `error` set means the task failed
 * (`data` is always null then); `data: null` without `error` means no result
 * is available (e.g. ingestion hasn't caught up).
 */
export interface ProactiveAgentAssistNotificationBase {
    contactId?: string | null;
    /** Null for ticket-native events (correlate by ticketId instead). */
    conversationId: string | null;
    /** Set when the background task failed; the UI should render an error state. */
    error?: ProactiveAgentAssistError | null;
    /** ISO 8601 UTC instant marking when the notification was produced. */
    generatedAt: string;
    messageId?: string | null;
    name: 'ProactiveAgentAssistNotification';
    /** Correlates with the responseId returned by the 202 HTTP ack. */
    responseId: string;
    ticketId?: string | null;
    /** On ticket-native events this mirrors the first workitemIds entry. */
    workitemId?: string | null;
    /** Workitems that scoped the context on ticket-native events. */
    workitemIds?: string[] | null;
}
export interface ProactiveAgentAssistPrefetchNotification extends ProactiveAgentAssistNotificationBase {
    data: ProactiveAgentAssistSummaryData | null;
    task: 'prefetch';
}
export interface ProactiveAgentAssistSummaryNotification extends ProactiveAgentAssistNotificationBase {
    data: ProactiveAgentAssistSummaryData | null;
    task: 'summary';
}
export interface ProactiveAgentAssistTimelineNotification extends ProactiveAgentAssistNotificationBase {
    data: ProactiveAgentAssistTimelineData | null;
    task: 'timeline';
}
export interface ProactiveAgentAssistWriteReplyNotification extends ProactiveAgentAssistNotificationBase {
    data: ProactiveAgentAssistWriteReplyData | null;
    task: 'write_reply';
}
export interface ProactiveAgentAssistQuickReplyNotification extends ProactiveAgentAssistNotificationBase {
    data: ProactiveAgentAssistWriteReplyData | null;
    task: 'ack_respond' | 'request_info' | 'provide_next_steps';
}
export interface ProactiveAgentAssistPlanNextStepsNotification extends ProactiveAgentAssistNotificationBase {
    data: ProactiveAgentAssistPlanNextStepsData | null;
    task: 'plan_next_steps';
}
export interface ProactiveAgentAssistTypesNotification extends ProactiveAgentAssistNotificationBase {
    data: ProactiveAgentAssistTypesData | null;
    task: 'get_assist_types';
}
export type ProactiveAgentAssistNotification = ProactiveAgentAssistPrefetchNotification | ProactiveAgentAssistSummaryNotification | ProactiveAgentAssistTimelineNotification | ProactiveAgentAssistWriteReplyNotification | ProactiveAgentAssistQuickReplyNotification | ProactiveAgentAssistPlanNextStepsNotification | ProactiveAgentAssistTypesNotification;
export interface ProactiveAgentAssistPrefetchPayload {
    contactId?: string;
    conversationId: string;
    ticketId?: string;
    workitemId?: string;
}
export interface ProactiveAgentAssistPrefetchResponse {
    /** Null when no summary exists yet; the conversation still opens. */
    data: ProactiveAgentAssistSummaryData | null;
    generatedAt: string;
    message: string;
    responseId: string;
    success: boolean;
}
interface ProactiveAgentAssistTaskPayloadBase {
    contactId?: string;
    conversationId: string;
    messageId?: string;
    ticketId?: string;
    workitemId?: string;
}
export interface ProactiveAgentAssistReplyTaskPayload extends ProactiveAgentAssistTaskPayloadBase {
    channelType: ProactiveAgentAssistChannelType;
    task: ProactiveAgentAssistReplyTask;
}
export interface ProactiveAgentAssistAnalysisTaskPayload extends ProactiveAgentAssistTaskPayloadBase {
    channelType?: ProactiveAgentAssistChannelType;
    task: Exclude<ProactiveAgentAssistTask, ProactiveAgentAssistReplyTask>;
}
export type ProactiveAgentAssistTaskPayload = ProactiveAgentAssistReplyTaskPayload | ProactiveAgentAssistAnalysisTaskPayload;
export interface ProactiveAgentAssistTaskAcceptedResponse {
    channelType?: ProactiveAgentAssistChannelType | null;
    contactId?: string | null;
    conversationId: string;
    message: string;
    messageId?: string | null;
    name: 'ProactiveAgentAssistNotification';
    /** Echoed as responseId in the async WebSocket result. */
    responseId: string;
    success: boolean;
    task: ProactiveAgentAssistTask;
    ticketId?: string | null;
    workitemId?: string | null;
}
export interface ProactiveAgentAssistTypesPayload {
    contactId?: string;
    conversationId: string;
    messageId?: string;
    ticketId?: string;
    workitemId?: string;
}
export interface ProactiveAgentAssistTypesAcceptedResponse {
    contactId?: string | null;
    conversationId: string;
    data: null;
    message: string;
    messageId?: string | null;
    name: 'ProactiveAgentAssistNotification';
    /** Echoed as responseId in the async WebSocket result. */
    responseId: string;
    success: boolean;
    ticketId?: string | null;
    workitemId?: string | null;
}
export interface ProactiveAgentAssistTicketPrefetchPayload {
    contactId?: string;
    ticketId: string;
    /** Optional related workitems to hydrate messages/transcripts. */
    workitemIds?: string[];
}
export interface ProactiveAgentAssistTicketPrefetchAcceptedResponse {
    message: string;
    /** Echoed as responseId in the async WebSocket result. */
    responseId: string;
    success: boolean;
    ticketId: string;
    workitemIds?: string[] | null;
}
interface ProactiveAgentAssistTicketTaskPayloadBase {
    contactId?: string;
    /** Task-specific optional context. */
    context?: Record<string, unknown>;
    messageId?: string;
    ticketId: string;
    workitemIds?: string[];
}
export interface ProactiveAgentAssistTicketReplyTaskPayload extends ProactiveAgentAssistTicketTaskPayloadBase {
    channelType: ProactiveAgentAssistChannelType;
    task: ProactiveAgentAssistReplyTask;
}
export interface ProactiveAgentAssistTicketAnalysisTaskPayload extends ProactiveAgentAssistTicketTaskPayloadBase {
    channelType?: ProactiveAgentAssistChannelType;
    task: Exclude<ProactiveAgentAssistTask, ProactiveAgentAssistReplyTask>;
}
export type ProactiveAgentAssistTicketTaskPayload = ProactiveAgentAssistTicketReplyTaskPayload | ProactiveAgentAssistTicketAnalysisTaskPayload;
export interface ProactiveAgentAssistTicketTaskAcceptedResponse {
    channelType?: ProactiveAgentAssistChannelType | null;
    contactId?: string | null;
    message: string;
    messageId?: string | null;
    /** Echoed as responseId in the async WebSocket result. */
    responseId: string;
    success: boolean;
    task: ProactiveAgentAssistTask;
    ticketId: string;
    workitemIds?: string[] | null;
}
export interface ProactiveAgentAssistTicketTypesPayload {
    contactId?: string;
    ticketId: string;
    workitemIds?: string[];
}
export interface ProactiveAgentAssistTicketTypesAcceptedResponse {
    data: null;
    message: string;
    name: 'ProactiveAgentAssistNotification';
    /** Echoed as responseId in the async WebSocket result. */
    responseId: string;
    success: boolean;
    ticketId: string;
    workitemIds?: string[] | null;
}
export {};
//# sourceMappingURL=proactiveAgentAssist.d.ts.map