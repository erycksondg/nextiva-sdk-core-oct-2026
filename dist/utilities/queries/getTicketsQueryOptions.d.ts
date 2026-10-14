import type { TicketSearchFilters, TicketsQueryData } from '../../types';
export declare function getTicketsQueryOptions(filters?: TicketSearchFilters): {
    queryFn: ({ client, queryKey }: {
        client: import("@tanstack/query-core").QueryClient;
        queryKey: readonly unknown[];
        signal: AbortSignal;
        meta: import("@tanstack/query-core").QueryMeta | undefined;
        pageParam?: unknown;
        direction?: unknown;
    }) => TicketsQueryData;
    queryKey: readonly ["tickets", "search", TicketSearchFilters];
};
//# sourceMappingURL=getTicketsQueryOptions.d.ts.map