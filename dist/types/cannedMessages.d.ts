import type { PaginatedResponse } from './common';
export interface CannedCollection {
    _id: string;
    createdAt?: string;
    createdBy: string;
    deletedAt: number;
    description?: string;
    inboxIds?: string[];
    messageCount?: number;
    modifiedAt?: number;
    modifiedBy: string;
    name?: string;
    objectType: string;
    tenantId: string;
    updatedAt?: string;
}
export type CannedCollectionsResponse = PaginatedResponse<CannedCollection>;
export interface CannedResponseCollectionCreatePayload {
    description?: string;
    inboxIds?: string[];
    messageCount: number;
    name: string;
}
export type CannedResponseCollectionUpdatePayload = Partial<CannedResponseCollectionCreatePayload>;
export interface GetCannedResponseCollectionsParams {
    inboxIds?: string[];
    includeFavorites?: boolean;
    page?: number;
    q?: string;
    searchScope?: 'COLLECTION' | 'TEMPLATE';
    size?: number;
}
export interface MessageTemplate {
    createdAt?: number;
    createdBy: string;
    deletedAt?: number;
    message: string;
    modifiedAt?: number;
    modifiedBy: string;
    name: string;
    templateId: string;
    tenantId: string;
    title: string;
}
export interface ImportCannedMessagesResponse {
    errors: Array<{
        error: string;
        field: string;
        row: number;
    }>;
    failureCount: number;
    successCount: number;
    totalRows: number;
}
export interface CannedResponse {
    cannedResponseTemplateId: string;
    collectionId: string;
    isFavorited: boolean;
    template: MessageTemplate;
}
export interface CannedMessagesResponse {
    cannedResponseTemplateDTOList: CannedResponse[];
    count: number;
    next: string | null;
    previous: string | null;
    total: number;
}
export interface GetCannedMessagesParams {
    page?: number;
    search?: string;
    size?: number;
}
export interface CannedMessageCreatePayload {
    collectionId: string;
    message: string;
    title: string;
}
export interface CannedMessageUpdatePayload {
    message: string;
    title: string;
}
export interface CannedResponseTemplateImportEventData {
    collectionId: string;
    createdAt: number;
    id: string;
    name: 'CannedResponseTemplateImportEvent';
    result: string;
    skipMobileNotification: boolean;
    successCount: number;
    templates: Array<{
        cannedResponseTemplateId: string;
        collectionId: string;
        isFavorited: boolean;
        template: {
            createdAt: number;
            createdBy: string;
            message: string;
            modifiedAt: number;
            modifiedBy: string;
            templateId: string;
            tenantId: string;
            title: string;
        };
    }>;
}
export interface CannedMessageCollectionEventData {
    action: string;
    collection: {
        _id: string;
        createdAt: number;
        createdBy: string;
        deletedAt: number;
        description: string;
        inboxIds: string[];
        modifiedAt: number;
        modifiedBy: string;
        name: string;
        objectType: 'cannedmessagecollection';
        tenantId: string;
    };
    createdAt: number;
    id: string;
    name: 'CannedMessageCollectionEvent';
    result: string;
    skipMobileNotification: boolean;
}
export interface CannedResponseTemplateEventData {
    action: string;
    createdAt: number;
    id: string;
    name: 'CannedResponseTemplateEvent';
    result: string;
    skipMobileNotification: boolean;
    template: {
        cannedResponseTemplateId: string;
        collectionId: string;
        isFavorited: boolean;
        template: {
            createdAt: number;
            createdBy: string;
            message: string;
            modifiedAt: number;
            modifiedBy: string;
            templateId: string;
            tenantId: string;
            title: string;
        };
    };
}
//# sourceMappingURL=cannedMessages.d.ts.map