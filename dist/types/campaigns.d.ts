import { type FileState } from '../models';
import { type PaginatedResponse } from './common';
import { type LocalizationEntry } from './localization';
import { type BaseSchemaObject } from './schemaType';
export interface Campaign extends BaseSchemaObject {
    addresses?: string[];
    agentCallbacksAsPriority: boolean;
    amdUnknownAsVoicemail: boolean;
    applyRecordingConsent: boolean;
    attachTicket?: number;
    callerId: string;
    campaignId: string;
    complianceRecordings: boolean;
    complianceRecordingsFileNameFormat: string;
    defaultExtension: boolean;
    defaultOutbound: boolean;
    description: string;
    disableRecordingOnTwoParty: boolean;
    dispositions?: {
        count: number;
        objects?: Array<{
            _id: string;
            campaignId: string;
            createdAt: number;
            dispositionId: string;
            modifiedAt: number;
            objectType: 'campaigndisposition';
        }>;
        total: number;
    };
    emailAccounts?: Array<{
        campaignId: string;
        emailAccountId: string;
        emailAddress: string;
        name: string;
    }>;
    emailFromAddress: string;
    enableRealtimeTranscription: boolean;
    fileServerId?: string;
    filterOnLeads: string;
    ftpFilenameFormat: string;
    holdMusicUrl: string;
    label: string;
    loadLeadOnlyForThridPartySkill: boolean;
    objectType: 'campaign';
    outboundANI: boolean;
    personalInboxNumber?: string;
    priorityCallbacks: boolean;
    recordingAnalysisEndTime: number;
    recordingAnalysisLanguages: string;
    recordingAnalysisMaxDuration: number;
    recordingAnalysisMaxSecondsPerDay: number;
    recordingAnalysisMinDuration: number;
    recordingAnalysisPercentage: number;
    recordingAnalysisStartTime: number;
    recordingAnalysisTotalDuration: number;
    recordingNotificationFrequency?: string;
    recordingPercentage: number;
    recordingPromptId?: string;
    smsFromAddress: string;
    spoofANICompanyDirectory: boolean;
    type?: 'DEFAULT' | 'PERSONAL';
    useForEmail: boolean;
    useForExtension: boolean;
    useForFax: boolean;
    useForOutbound: boolean;
    useForPredictive: boolean;
    useForProgressive: boolean;
    useForSMS: boolean;
    userRecordings: boolean;
    userRecordingsFileNameFormat: string;
    workflowId: string;
}
export interface CampaignOutboundList {
    campaignId: string;
    campaignoutboundlistId: string;
    expansions: {
        outboundlistId: {
            active: boolean;
            campaignId: string;
            createdAt: number;
            duration: number;
            file: string;
            isEmail: boolean;
            isSMS: boolean;
            isScrub: boolean;
            isWorkflow: boolean;
            keepOptinOnly: boolean;
            name: string;
            outboundListLoadForm: {
                campaignId: string;
                duplicateStrategy: string;
                file: string;
                isReassigned: boolean;
                isSMS: boolean;
                isScrub: boolean;
                isWorkflow: boolean;
                keepOptinOnly: boolean;
            };
            outboundlistId: string;
            status: FileState;
            tableName: string;
            totalConverted: number;
            totalDuplicates: number;
            totalFailed: number;
            totalInFile: number;
            totalInserted: number;
            totalScrubed: number;
            transactionId: number;
        };
    };
    outboundlistId: string;
}
interface WorkflowState {
    actions: Array<{
        description: string;
        icon: string;
        name: string;
        properties: {
            condition: {
                conditionType: string;
                expressions: Array<{
                    leftExpression?: string;
                    operator: string;
                    rightExpression?: string;
                }>;
            };
            description?: string;
            eventName?: string;
            expansions?: {
                promptId?: {
                    name: string;
                };
            };
            loop?: number;
            missCallNotification?: string;
            promptId?: string;
            stateId?: string;
            variableName?: string;
        };
        type: string;
    }>;
    campaignStateId: string;
    category: string;
    description: string;
    key: string;
    location: string;
    name: string;
}
export interface CampaignSupervisor {
    campaignId: string;
    userId: string;
}
export interface CampaignDetails {
    _id: string;
    addresses: string[];
    agentCallbacksAsPriority: boolean;
    amdUnknownAsVoicemail: boolean;
    applyRecordingConsent: boolean;
    callerId: string;
    campaignId: string;
    complianceRecordings: boolean;
    complianceRecordingsFileNameFormat: string;
    createdAt: number;
    createdBy?: string;
    defaultExtension: boolean;
    defaultOutbound: boolean;
    dialplans?: {
        count: number;
        objects?: unknown[];
        total: number;
    };
    disableRecordingOnTwoParty: boolean;
    dispositions: {
        count: number;
        objects?: {
            count: number;
            objects?: Array<{
                _id: string;
                campaignId: string;
                createdAt: number;
                dispositionId: string;
                modifiedAt: number;
                objectType: 'campaigndisposition';
            }>;
            total: number;
        };
        total: number;
    };
    emailFromAddress: string;
    emailaccountId?: string;
    enableRealtimeTranscription: boolean;
    expansions: {
        campaignId?: {
            _id: string;
            campaignId: string;
            name: string;
        };
        fileServerId?: {
            _id: string;
            name: string;
        };
        recordingPromptId?: {
            _id: string;
            name: string;
        };
        workflowId: {
            _id: string;
            finalUserStateId: string;
            finalWorkitemStateId: string;
            name: string;
            states: Record<string, WorkflowState>;
            workflowId: string;
        };
    };
    fileServerId?: string;
    filterOnLeads: string;
    ftpFilenameFormat: string;
    holdMusicUrl: string;
    inboundGroupsNumbers: {
        count: number;
        objects?: unknown[];
        total: number;
    };
    lists?: {
        count: number;
        objects?: CampaignOutboundList[];
        total: number;
    };
    localizations?: {
        description?: LocalizationEntry;
        name?: LocalizationEntry;
    };
    machineDetectionTimeout: number;
    maxAttempts: string;
    maxAttemptsPerAddress: string;
    maxDialRatio: string;
    modifiedAt: number;
    modifiedBy?: string;
    name: string;
    noAnswerAction: string;
    noAnswerCallbackInMinutes: string;
    noAnswerDispositionId: string;
    noAnswerTimeout: number;
    numberOfAgentsToKeepForInbound: string;
    objectType: 'campaign';
    outboundANI: boolean;
    predictiveQuaterback: number;
    primaryPhoneField: string;
    priorityCallbacks: boolean;
    realtimeAnalysisServiceId: string[];
    recordingAnalysisEndTime: number;
    recordingAnalysisLanguages?: string;
    recordingAnalysisMaxDuration: number;
    recordingAnalysisMinDuration: number;
    recordingAnalysisPercentage: number;
    recordingAnalysisStartTime: number;
    recordingEventsTranscription?: boolean;
    recordingNotificationFrequency?: string;
    recordingPercentage: number;
    recordingPromptId?: string;
    scorecards?: {
        count: number;
        objects?: unknown[];
        total: number;
    };
    scripts?: {
        count: number;
        objects?: unknown[];
        total: number;
    };
    smsFromAddress: string;
    speechContexts: {
        count: number;
        objects?: unknown[];
        total: number;
    };
    spoofANICompanyDirectory?: boolean;
    stateDIDId: string;
    states: Record<string, WorkflowState>;
    supervisors: {
        count: number;
        objects?: CampaignSupervisor[];
        total: number;
    };
    templates: {
        count: number;
        objects?: unknown[];
        total: number;
    };
    tenantId?: string;
    useForEmail: boolean;
    useForExtension: boolean;
    useForFax: boolean;
    useForOutbound: boolean;
    useForPredictive: boolean;
    useForProgressive: boolean;
    useForSMS: boolean;
    userRecordings?: boolean;
    userRecordingsFileNameFormat?: string;
    workflowId: string;
}
export type FetchCampaignsResponseBody = PaginatedResponse<Campaign>;
export {};
//# sourceMappingURL=campaigns.d.ts.map