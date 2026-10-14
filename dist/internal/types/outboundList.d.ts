import type { DuplicateStrategy } from '../../models';
export interface BaseCreateOutboundListPayload<TFile> {
    campaignId: string;
    description: string;
    duplicateStrategy: DuplicateStrategy;
    file: TFile;
    isReassigned: boolean;
    isSMS: boolean;
    isScrub: boolean;
    isWorkflow: boolean;
    keepOptinOnly: boolean;
    name: string;
}
//# sourceMappingURL=outboundList.d.ts.map