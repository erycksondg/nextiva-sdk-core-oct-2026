import { type PaginatedResponse } from './common';
import type { LocalizationEntry } from './localization';
export interface Skill {
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    localizations: {
        description: LocalizationEntry;
        name: LocalizationEntry;
    };
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    skillId: string;
    tenantId: string;
    thirdPartyMinUsers: string;
}
export type FetchSkillsResponseBody = PaginatedResponse<Skill>;
//# sourceMappingURL=skills.d.ts.map