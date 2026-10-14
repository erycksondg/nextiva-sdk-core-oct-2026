import { type InjectionContainer } from '../internal';
import { type SchemaTypeSearchPayload } from '../types';
/**
 * @deprecated FunctionsService is deprecated
 */
export declare class FunctionsService {
    private schemaTypeClient;
    private logger;
    constructor({ loggerService, schemaTypeClient, }: Pick<InjectionContainer, 'schemaTypeClient' | 'loggerService'>);
    /**
     * @deprecated Use sdk.getSchemaTypeClient().search('function')
     */
    fetchFunctions(payload?: SchemaTypeSearchPayload): Promise<import("..").FetchFunctionsResponseBody>;
}
//# sourceMappingURL=functions.d.ts.map