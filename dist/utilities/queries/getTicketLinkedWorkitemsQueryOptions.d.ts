import type { TicketLinkedWorkitemsQueryData } from '../../types';
export declare function getTicketLinkedWorkitemsQueryOptions({ filter, ticketId, }: {
    filter?: string[];
    ticketId: string;
}): {
    queryFn: ({ client, queryKey }: {
        client: import("@tanstack/query-core").QueryClient;
        queryKey: readonly unknown[];
        signal: AbortSignal;
        meta: import("@tanstack/query-core").QueryMeta | undefined;
        pageParam?: unknown;
        direction?: unknown;
    }) => TicketLinkedWorkitemsQueryData;
    queryKey: (string | string[])[];
};
//# sourceMappingURL=getTicketLinkedWorkitemsQueryOptions.d.ts.map