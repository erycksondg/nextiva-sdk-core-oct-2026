import type { PaginatedResponse } from './common';
import type { StringWithAutocomplete } from './util';
export interface MSTeamsAccessRequest {
    _id: string;
    createdAt: number;
    createdBy: string;
    creationSource: string;
    deletedAt: number;
    email?: string;
    modifiedAt: number;
    modifiedBy: string;
    objectType: 'microsoftteamsaccessrequest';
    role: string;
    status: string;
    tenantId: string;
    userId: string;
    userName?: string;
}
export type FetchMSTeamsAccessRequestResponse = PaginatedResponse<MSTeamsAccessRequest>;
export interface CreateMSTeamsAccessRequestPayload {
    creationSource: 'msteams';
    userId: string;
}
export interface UpdateMSTeamsAccessRequestPayload {
    status: StringWithAutocomplete<'ACCEPTED'>;
    userId: string;
}
export interface FetchMSTeamsAccessRequestPayload {
    tenantId: string;
}
export interface Integration {
    objectType: string;
    providerConfigs: IntegrationProviderConfig[];
    type: string;
}
export interface IntegrationProviderConfig {
    authType: string;
    displayName: string;
    endpointConfigs: ProviderEndpointConfig[];
    provider: string;
}
export interface ProviderEndpointConfig {
    endpoint: string;
    httpMethod?: string;
    type: string;
}
export interface IntegrationAccount {
    authStatus: string;
    authType: string;
    createdBy: string;
    createdDate: number;
    email: string;
    id: string;
    provider: string;
    registrationId: string;
    type: string;
    updatedBy: string;
    updatedDate: number;
}
//# sourceMappingURL=integrations.d.ts.map