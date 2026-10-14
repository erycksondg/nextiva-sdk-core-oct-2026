import { type PaginatedResponse } from './common';
export interface Account {
    _id: string;
    accountId: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    id: string;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: 'account';
    tenantId: string;
    website?: string;
}
export type FetchAccountsResponseBody = PaginatedResponse<Account>;
//# sourceMappingURL=account.d.ts.map