import type { FetchPSTNNumbersResponseBody, SchemaTypeSearchPayload } from '../types';
import { type InjectionContainer } from '../internal';
/**
 * @deprecated ProvisioningService is deprecated
 */
export declare class ProvisioningService {
    private schemaTypeClient;
    private logger;
    constructor({ loggerService, schemaTypeClient, }: Pick<InjectionContainer, 'schemaTypeClient' | 'loggerService'>);
    /**
     * @deprecated searchUnusedPSTNNumbers is deprecated
     */
    searchUnusedPSTNNumbers({ q, queryParams, rows, start, }: SchemaTypeSearchPayload): Promise<FetchPSTNNumbersResponseBody>;
}
//# sourceMappingURL=provisioning.d.ts.map