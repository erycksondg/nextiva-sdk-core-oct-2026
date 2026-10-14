import type { TicketDetailQueryData } from '../../types';
export declare function getTicketDetailQueryOptions({ ticketId, }: {
    ticketId: string;
}): {
    queryFn: ({ client, queryKey }: {
        client: import("@tanstack/query-core").QueryClient;
        queryKey: readonly unknown[];
        signal: AbortSignal;
        meta: import("@tanstack/query-core").QueryMeta | undefined;
        pageParam?: unknown;
        direction?: unknown;
    }) => TicketDetailQueryData;
    queryKey: string[];
};
//# sourceMappingURL=getTicketDetailQueryOptions.d.ts.map