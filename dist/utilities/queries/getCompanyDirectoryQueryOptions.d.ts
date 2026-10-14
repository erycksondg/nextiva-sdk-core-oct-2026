import type { CompanyDirectoryEventData } from '../../types';
export declare function getCompanyDirectoryQueryOptions(): {
    queryFn: ({ client, queryKey }: {
        client: import("@tanstack/query-core").QueryClient;
        queryKey: readonly unknown[];
        signal: AbortSignal;
        meta: import("@tanstack/query-core").QueryMeta | undefined;
        pageParam?: unknown;
        direction?: unknown;
    }) => Promise<CompanyDirectoryEventData>;
    queryKey: string[];
};
//# sourceMappingURL=getCompanyDirectoryQueryOptions.d.ts.map