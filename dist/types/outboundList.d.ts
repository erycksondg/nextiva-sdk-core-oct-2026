import type { FileState } from '../models';
export interface OutboundListDetails {
    active: boolean;
    campaignId: string;
    duration: number;
    file: string;
    isEmail: boolean;
    isSMS: boolean;
    isScrub: boolean;
    isWorkflow: boolean;
    keepOptinOnly: boolean;
    outboundlistId: string;
    status: FileState;
    totalConverted: number;
    totalDuplicates: number;
    totalFailed: number;
    totalInFile: number;
    totalInserted: number;
    totalScrubed: number;
    transactionId: number;
}
export interface InternalCampaignTotalsNotificationData {
    agentid: string;
    campaignId: string;
    createdAt: number;
    id: string;
    name: string;
    result: string;
    totalActiveList: number;
    totalCallbacks: number;
    totalCompleted: number;
    totalInList: number;
    totalLeads: number;
    totalNewLeads: number;
    userId: string;
}
export interface CampaignTotalsNotificationData {
    campaignId: string;
    totalCallbacks: number;
    totalCompleted: number;
    totalInList: number;
    totalLeads: number;
    totalNewLeads: number;
}
//# sourceMappingURL=outboundList.d.ts.map