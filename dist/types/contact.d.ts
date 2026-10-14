import { type Account } from './account';
import { type PaginatedResponse } from './common';
import { type Note } from './note';
export interface ContactSegment {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    id: string;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: 'segment';
    segmentId: string;
    tenantId: string;
}
export type ContactLocation = Record<string, unknown>;
export interface Contact {
    _id: string;
    accountId?: string;
    accountJson?: Account;
    addresses: Array<{
        address?: string;
        city?: string;
        country?: string;
        id: string;
        state?: string;
        timezone: string;
        type: string;
        zip?: string;
    }>;
    addresss?: string;
    avatar?: string;
    blockedAt?: number;
    blockedBy?: string;
    city?: string;
    connections?: Array<{
        country?: string;
        countryCode?: string;
        id?: string;
        isPrimary?: boolean;
        isVerified?: boolean;
        name: string;
        phoneNumber?: string;
        type: string;
        value: string;
    }>;
    contactId: string;
    contactSegments?: ContactSegment[];
    country?: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    email?: string;
    expansions?: {
        accountId?: Account;
        contactSegments?: ContactSegment[];
    };
    extension?: string;
    firstName: string;
    id: string;
    jobTitle?: string;
    lastName: string;
    locations?: ContactLocation[];
    mobile?: string;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: 'contact';
    phone?: string;
    profileColor?: string;
    state?: string;
    tenantId: string;
    timezone?: string;
    unknown?: boolean;
    userId?: string;
    zip?: string;
}
export interface ContactNote {
    _id: string;
    contactId: string;
    contactnoteId: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    expansions?: {
        noteId: Note;
    };
    id: string;
    modifiedAt: number;
    modifiedBy: string;
    noteId: string;
    objectType: 'contactnote';
    tenantId: string;
}
export interface ContactDetails extends Contact {
    creditCards: {
        count: number;
        objects?: unknown[];
        total: number;
    };
    notes: {
        count: number;
        objects?: ContactNote[];
        total: number;
    };
    notifications: {
        count: number;
        objects?: unknown[];
        total: number;
    };
    personalities: {
        count: number;
        objects?: unknown[];
        total: number;
    };
    providedPhones: {
        count: number;
        objects?: unknown[];
        total: number;
    };
    tickets: {
        count: number;
        objects?: unknown[];
        total: number;
    };
}
export type FetchContactsResponseBody = PaginatedResponse<Contact>;
export interface ContactImportError {
    message: string;
    rowNumber: number;
}
export interface ContactImportData {
    'CSV processed': {
        errors: ContactImportError[];
        failureCount: number;
        status: 'FAILURE' | 'PARTIAL SUCCESS' | 'SUCCESS';
        successCount: number;
        totalRows: number;
    };
}
export interface ContactImportNotificationData {
    message: ContactImportData;
}
export interface ContactImportFailureData {
    error: string;
    filename: string;
    timestamp: number;
}
export interface ContactImportFailureNotificationData {
    message: ContactImportFailureData;
}
export interface UploadBulkContactsResponseBody {
    message: string;
    timestamp: number;
}
//# sourceMappingURL=contact.d.ts.map