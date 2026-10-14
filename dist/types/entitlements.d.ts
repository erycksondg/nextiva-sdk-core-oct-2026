import { type BaseSchemaObject } from './schemaType';
export interface UserEntitlements extends BaseSchemaObject {
    assignedFeatures: string[];
    assignedItems: Array<{
        code: string;
        version: string;
    }>;
    objectType: string;
    tenantId: string;
    userId: string;
}
export interface TenantEntitlement extends BaseSchemaObject {
    assignedFeatures: string[];
    objectType: string;
    purchases: string[];
    sellableUnitCode: string;
    sellableUnitId: string;
    sellableUnitVersion: string;
    tenantId: string;
    totalAcquired: number;
    totalAssigned: number;
}
//# sourceMappingURL=entitlements.d.ts.map