import type { UserDetails } from '../../types';
export declare const getStaticUserQueryOptions: () => {
    queryFn: ({ client, queryKey }: {
        client: import("@tanstack/query-core").QueryClient;
        queryKey: readonly unknown[];
        signal: AbortSignal;
        meta: import("@tanstack/query-core").QueryMeta | undefined;
        pageParam?: unknown;
        direction?: unknown;
    }) => Promise<UserDetails | undefined>;
    queryKey: string[];
};
//# sourceMappingURL=getStaticUserQueryOptions.d.ts.map