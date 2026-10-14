import type { CopilotSession } from '../../types';
export interface CopilotSessionsQueryData {
    hasMore: boolean;
    nextCursor: string | null;
    sessions: CopilotSession[];
    totalCount: number;
}
export declare function getCopilotSessionsQueryOptions(): {
    queryFn: ({ client, queryKey }: {
        client: import("@tanstack/query-core").QueryClient;
        queryKey: readonly unknown[];
        signal: AbortSignal;
        meta: import("@tanstack/query-core").QueryMeta | undefined;
        pageParam?: unknown;
        direction?: unknown;
    }) => CopilotSessionsQueryData;
    queryKey: string[];
};
/**
 * Get a session from the sessions list cache
 */
export declare function getCopilotSessionFromCache(sessionId: string): CopilotSession | undefined;
//# sourceMappingURL=getCopilotSessionsQueryOptions.d.ts.map