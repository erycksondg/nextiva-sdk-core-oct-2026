import { type InjectionContainer } from '../internal';
import type { FetchCampaignsResponseBody, CampaignDetails, SchemaTypeSearchPayload } from '../types';
/**
 * @deprecated CampaignService is deprecated
 */
export declare class CampaignService {
    private schemaTypeClient;
    private logger;
    constructor({ loggerService, schemaTypeClient, }: Pick<InjectionContainer, 'schemaTypeClient' | 'loggerService'>);
    /**
     * @deprecated Use sdk.getSchemaTypeClient().search('campaign')
     */
    fetchCampaigns(payload?: SchemaTypeSearchPayload): Promise<FetchCampaignsResponseBody>;
    /**
     * @deprecated Use sdk.getSchemaTypeClient().retrieve('campaign', { id })
     */
    fetchCampaign(id: string): Promise<CampaignDetails>;
}
//# sourceMappingURL=campaign.d.ts.map