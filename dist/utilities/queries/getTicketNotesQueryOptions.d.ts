import type { TicketNotesQueryData } from '../../types';
export declare function getTicketNotesQueryOptions({ ticketId, }: {
    ticketId: string;
}): {
    queryFn: ({ client, queryKey }: {
        client: import("@tanstack/query-core").QueryClient;
        queryKey: readonly unknown[];
        signal: AbortSignal;
        meta: import("@tanstack/query-core").QueryMeta | undefined;
        pageParam?: unknown;
        direction?: unknown;
    }) => TicketNotesQueryData;
    queryKey: string[];
};
//# sourceMappingURL=getTicketNotesQueryOptions.d.ts.map