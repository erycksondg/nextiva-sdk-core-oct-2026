import { type PaginatedResponse } from './common';
export interface Prompt {
    _id: string;
    belongsToSystem: number;
    contentType: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: string;
    prompt: string;
    promptId: string;
    tenantId: string;
}
export interface PromptDownloadDetails {
    contentType: string;
    filename: string;
    signedURL: string;
}
export type FetchPromptsResponseBody = PaginatedResponse<Prompt>;
//# sourceMappingURL=prompt.d.ts.map