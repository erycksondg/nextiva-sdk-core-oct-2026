import { type PaginatedResponse } from "./common";
export interface KB {
    _id: string;
    campaigns?: {
        count: number;
        objects?: CampaignKBMapping[];
        total: number;
    };
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    kbId: string;
    kbunits?: {
        count: number;
        objects?: Array<KBUnitMapping<false, true>>;
        total: number;
    };
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: "kb";
    queues?: {
        count: number;
        objects?: QueueKBMapping[];
        total: number;
    };
    tenantId: string;
    tenants?: {
        count: number;
        objects?: TenantKBMapping[];
        total: number;
    };
}
export interface KBUnit {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    file?: string;
    kbs?: {
        count: number;
        objects?: Array<KBUnitMapping<true>>;
        total: number;
    };
    kbunitId: string;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: "kbunit";
    preSignedFileUrl?: string;
    tenantId: string;
    type: "website" | "document";
    url?: string;
}
export interface KBUnitMapping<shouldExpandKB = false, shouldExpandKBUnit = false> {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    expansions?: (shouldExpandKB extends true ? {
        kbId: KB;
    } : shouldExpandKBUnit extends true ? {
        kbunitId: KBUnit;
    } : {
        kbId?: KB;
        kbunitId?: KBUnit;
    });
    externalRequestId: string;
    kbId: string;
    kbunitId: string;
    modifiedAt: number;
    modifiedBy: string;
    objectType: "kbunitmapping";
    status: "failed" | "in_progress" | "pending" | "success";
    tenantId: string;
}
export interface TenantKBMapping {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    kbId: string;
    modifiedAt: number;
    modifiedBy: string;
    objectType: "tenantkbmapping";
    tenantId: string;
}
export interface CampaignKBMapping {
    _id: string;
    campaignId: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    kbId: string;
    modifiedAt: number;
    modifiedBy: string;
    objectType: "campaignkbmapping";
    tenantId: string;
}
export interface QueueKBMapping {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    kbId: string;
    modifiedAt: number;
    modifiedBy: string;
    objectType: "queuekbmapping";
    queueId: string;
    tenantId: string;
}
export type FetchKBsResponseBody = PaginatedResponse<KB>;
export type FetchKBUnitsResponseBody = PaginatedResponse<KBUnit>;
export type DeleteManyKBUnitMappingRequestPayload = string[];
export type DeleteManyKBUnitMappingResponseBody = KBUnitMapping[];
export type DeleteManyQueueKBMappingRequestPayload = string[];
export type DeleteManyQueueKBMappingResponseBody = QueueKBMapping[];
export interface CreateBulkKBUnitMappingRequestPayload {
    kbId: string[];
    kbunitId: string[];
}
export interface CreateBulkQueueKBMappingRequestPayload {
    kbId: string[];
    queueId: string[];
}
//# sourceMappingURL=kb.d.ts.map