import { type SchemaType } from './schematype';
/**
 * @deprecated Use `SchemaTypeClient` to interact with `SchemaTypes`
 */
export declare const SchemaTypes: {
    get(name: string): SchemaType | undefined;
    has(name: string): boolean;
    set(name: string, schemaType: SchemaType): void;
    values(): SchemaType[];
};
//# sourceMappingURL=schematypes.d.ts.map