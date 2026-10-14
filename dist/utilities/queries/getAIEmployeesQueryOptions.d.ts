import type { AIEmployee } from '../../types';
export interface AIEmployeesQueryData {
    cursor?: number;
    employees: AIEmployee[];
}
export declare function getAIEmployeesQueryOptions(): {
    queryFn: ({ client, queryKey }: {
        client: import("@tanstack/query-core").QueryClient;
        queryKey: readonly unknown[];
        signal: AbortSignal;
        meta: import("@tanstack/query-core").QueryMeta | undefined;
        pageParam?: unknown;
        direction?: unknown;
    }) => Promise<{
        cursor: number;
        employees: AIEmployee[];
    }>;
    queryKey: string[];
};
//# sourceMappingURL=getAIEmployeesQueryOptions.d.ts.map