import type { LocalizationEntry } from './localization';
export interface CampaignScript {
    campaignscriptId: string;
    description: string;
    html: string;
    localizations: {
        description: LocalizationEntry;
        name: LocalizationEntry;
    };
    name: string;
    tenantId: string;
    type: string;
}
//# sourceMappingURL=campaignScript.d.ts.map