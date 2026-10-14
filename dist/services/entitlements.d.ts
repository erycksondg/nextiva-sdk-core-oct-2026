import { type InjectionContainer } from '../internal/dependencyInjectionContainer';
import { type TenantEntitlement, type UserEntitlements } from '../types';
export declare class EntitlementsService {
    private stateService;
    private schemaTypeClient;
    private logger;
    constructor({ loggerService, schemaTypeClient, stateService, }: Pick<InjectionContainer, 'eventsService' | 'stateService' | 'schemaTypeClient' | 'loggerService'>);
    fetchUserEntitlements(): Promise<UserEntitlements[]>;
    fetchTenantEntitlements(): Promise<TenantEntitlement[]>;
    private hasEveryEntitlement;
    userHasEntitlements(expectedEntitlements: string[] | Set<string>): boolean;
    tenantHasEntitlements(expectedEntitlements: string[] | Set<string>): boolean;
    private hasSomeEntitlements;
    hasSomeUserEntitlements(expectedEntitlements: string[] | Set<string>): boolean;
    hasSomeTenantEntitlements(expectedEntitlements: string[] | Set<string>): boolean;
}
//# sourceMappingURL=entitlements.d.ts.map