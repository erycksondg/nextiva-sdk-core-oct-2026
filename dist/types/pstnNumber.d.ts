import { type PaginatedResponse } from './common';
export interface PSTNNumberDetails {
    [key: string]: unknown;
    _id: string;
    belongsToId: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: string;
    phoneNumber: Record<string, unknown>;
    provider: string;
    pstnnumberId: string;
    sid: string;
    tenantId: string;
}
export type FetchPSTNNumbersResponseBody = PaginatedResponse<PSTNNumberDetails>;
//# sourceMappingURL=pstnNumber.d.ts.map