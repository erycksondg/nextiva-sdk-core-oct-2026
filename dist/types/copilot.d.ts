export interface CopilotSession {
    createdAt: string;
    lastActivity: string;
    lastMessagePreview?: string;
    messageCount: number;
    sessionId: string;
    title: string;
    userId: string;
}
export interface CopilotMessage {
    content: string;
    createdAt: string;
    messageId: string;
    role: 'user' | 'assistant';
    toolName?: string | null;
    toolPayload?: Record<string, unknown> | null;
}
export interface CopilotSessionWithMessages extends CopilotSession {
    messages: CopilotMessage[];
}
export interface CursorPagination {
    hasMore: boolean;
    nextCursor: string | null;
}
export interface FetchCopilotSessionsPayload {
    before?: string;
    limit?: number;
}
export interface FetchCopilotSessionsResponse {
    pagination: CursorPagination;
    sessions: CopilotSession[];
    totalCount: number;
}
export interface FetchCopilotSessionPayload {
    sessionId: string;
}
export interface FetchCopilotSessionResponse {
    createdAt: string;
    lastActivity: string;
    lastMessagePreview?: string;
    messageCount: number;
    sessionId: string;
    title: string;
}
export interface FetchCopilotSessionMessagesPayload {
    before?: string;
    limit?: number;
    sessionId: string;
}
export interface FetchCopilotSessionMessagesResponse {
    messages: CopilotMessage[];
    pagination: CursorPagination;
}
export interface CreateCopilotSessionPayload {
    title?: string;
}
export interface CreateCopilotSessionResponse {
    createdAt: string;
    messageCount: number;
    sessionId: string;
    title: string;
}
export interface RenameCopilotSessionPayload {
    sessionId: string;
    title: string;
}
export interface SendCopilotMessagePayload {
    message: string;
    mode?: 'AUTO' | 'DEEP';
    sessionId?: string | null;
}
export interface SendCopilotMessageResponse {
    messageId: string;
    sessionId: string;
}
export interface CopilotSessionCreatedData {
    createdAt: string;
    lastMessagePreview?: string;
    sessionId: string;
    title: string;
    userId: string;
}
export interface CopilotSessionUpdatedData {
    lastActivity: string;
    lastMessagePreview?: string;
    messageCount: number;
    sessionId: string;
    title: string;
}
export interface CopilotSessionDeletedData {
    sessionId: string;
}
export interface CopilotStreamStartData {
    messageId: string;
    requestMessageId: string;
    sessionId: string;
}
export interface CopilotStreamChunkData {
    done: boolean;
    messageId: string;
    sequence: number;
    sessionId: string;
    text: string;
}
export interface CopilotStreamDoneData {
    durationMs: number;
    messageId: string;
    sessionId: string;
    toolsUsed: string[];
    totalTokens: number;
}
export type CopilotStreamErrorCode = 'CONTEXT_TOO_LONG' | 'RATE_LIMITED' | 'MODEL_UNAVAILABLE' | 'UNAUTHORIZED' | 'UNKNOWN';
export interface CopilotStreamErrorData {
    code: CopilotStreamErrorCode;
    error: string;
    messageId: string;
    sessionId: string;
}
export interface CopilotSessionsLoadingChangedData {
    isLoading: boolean;
}
export interface CopilotSessionLoadingChangedData {
    isLoading: boolean;
    sessionId: string;
}
export interface CopilotStreamState {
    content: string;
    error: CopilotStreamErrorData | null;
    isStreaming: boolean;
    messageId: string | null;
    metadata: {
        durationMs: number;
        toolsUsed: string[];
        totalTokens: number;
    } | null;
    requestMessageId: string | null;
    sessionId: string | null;
}
//# sourceMappingURL=copilot.d.ts.map