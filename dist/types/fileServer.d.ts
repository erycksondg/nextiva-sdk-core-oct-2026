import { type PaginatedResponse } from './common';
export interface FileServer {
    _id: string;
    authenticationType: string;
    connectionType: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    encryption: boolean;
    fileserverId: string;
    host: string;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    password: string;
    port: string;
    remoteFolder: string;
    storageBucket: string;
    storageBucketAccessKey: string;
    storageBucketSecretKey: string;
    tenantId: string;
    timeout: string;
    transferWithCloudFunction: boolean;
    username: string;
}
export type FetchFileServersResponseBody = PaginatedResponse<FileServer>;
//# sourceMappingURL=fileServer.d.ts.map