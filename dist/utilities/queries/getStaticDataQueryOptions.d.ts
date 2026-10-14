import type { Language, ISchemaType, SchemaLayout, Status, Campaign, Disposition } from '../../types';
export declare function getStaticDataQueryOptions<const T extends StaticDataObjectTypes = StaticDataObjectTypes>(key: T): {
    queryFn: ({ client, queryKey }: {
        client: import("@tanstack/query-core").QueryClient;
        queryKey: readonly unknown[];
        signal: AbortSignal;
        meta: import("@tanstack/query-core").QueryMeta | undefined;
        pageParam?: unknown;
        direction?: unknown;
    }) => Promise<StaticDataTypes[T][]>;
    queryKey: string[];
};
interface StaticDataTypes {
    campaign: Campaign;
    disposition: Disposition;
    language: Language;
    schemalayout: SchemaLayout;
    schematype: ISchemaType;
    status: Status;
}
type StaticDataObjectTypes = keyof StaticDataTypes;
export {};
//# sourceMappingURL=getStaticDataQueryOptions.d.ts.map