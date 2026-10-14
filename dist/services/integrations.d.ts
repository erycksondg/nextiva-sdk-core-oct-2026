import { type InjectionContainer } from '../internal';
import type { CreateMSTeamsAccessRequestPayload, FetchMSTeamsAccessRequestPayload, FetchMSTeamsAccessRequestResponse, Integration, IntegrationAccount, MSTeamsAccessRequest, UpdateMSTeamsAccessRequestPayload, UserDetails } from '../types';
export declare class IntegrationsService {
    private logger;
    constructor({ loggerService }: Pick<InjectionContainer, 'loggerService'>);
    createMSTeamsAccessRequest(payload: CreateMSTeamsAccessRequestPayload): Promise<import("axios").AxiosResponse<MSTeamsAccessRequest, any, {}>>;
    fetchMSTeamsAccessRequests(payload: FetchMSTeamsAccessRequestPayload): Promise<import("axios").AxiosResponse<FetchMSTeamsAccessRequestResponse, any, {}>>;
    updateMSTeamsAccessRequest(payload: UpdateMSTeamsAccessRequestPayload): Promise<import("axios").AxiosResponse<UserDetails, any, {}>>;
    fetchIntegrations(): Promise<Integration[]>;
    fetchIntegrationAccounts(): Promise<IntegrationAccount[]>;
    disconnectIntegrationAccount(id: string, clearObjects?: boolean): Promise<void>;
}
//# sourceMappingURL=integrations.d.ts.map