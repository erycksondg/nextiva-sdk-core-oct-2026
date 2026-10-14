import type { CopilotMessage } from '../../types';
export interface CopilotSessionQueryData {
    hasMore: boolean;
    messages: CopilotMessage[];
    nextCursor: string | null;
    sessionId: string;
    title: string;
}
export declare function getCopilotSessionQueryOptions({ sessionId }: {
    sessionId: string;
}): {
    queryFn: ({ client, queryKey }: {
        client: import("@tanstack/query-core").QueryClient;
        queryKey: readonly unknown[];
        signal: AbortSignal;
        meta: import("@tanstack/query-core").QueryMeta | undefined;
        pageParam?: unknown;
        direction?: unknown;
    }) => CopilotSessionQueryData;
    queryKey: string[];
};
/**
 * Get a message from a session cache
 */
export declare function getCopilotMessageFromCache(sessionId: string, messageId: string): CopilotMessage | undefined;
//# sourceMappingURL=getCopilotSessionQueryOptions.d.ts.map