import type { PaginatedResponse } from './common';
import type { LocalizationEntry } from './localization';
import type { DispositionActionOption, WorkitemType } from '../models';
import { type BaseSchemaObject } from './schemaType';
export interface Disposition extends BaseSchemaObject {
    action?: 'connectedCallback' | 'connectedPersonalCallback';
    blockNumber: boolean;
    callbackDate: number;
    callbackTime?: number;
    connectAgain: boolean;
    dispositionId: string;
    forceContactAssignment: boolean;
    forceSurveyValidation: boolean;
    localizations: {
        name: LocalizationEntry;
    };
    mediaType?: string;
    modifiedAt: number;
    modifiedBy: string;
    note: string;
    objectType: 'disposition';
    phoneNumber?: string;
    queues?: string[];
    resolveTicket: boolean;
    resolved: boolean;
    skills?: string[];
    summary?: unknown;
    survey?: unknown;
    useCampaignIdForDNC: boolean;
    workitemType?: WorkitemType[];
}
export interface DispositionOptions {
    action?: DispositionActionOption;
    callbackDate?: number;
    callbackTime?: number;
    connectAgain?: boolean;
    dispositionId?: string;
    mediaType?: string;
    phoneNumber?: string;
    queues?: string[];
    skills?: string[];
    summary?: unknown;
    survey?: unknown;
    useCallbackNumberOnly?: boolean;
    workitemId: string;
}
export type FetchDispositionsResponse = PaginatedResponse<Disposition>;
//# sourceMappingURL=disposition.d.ts.map