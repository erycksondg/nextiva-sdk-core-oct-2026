import type { LocalizationEntry } from './localization';
import type { RealTimeUser } from './user';
export type ReportTemplateFieldType = 'string' | 'timestamp';
export interface ReportTemplateField {
    filter: string;
    label: string;
    name: string;
    type: ReportTemplateFieldType;
}
export interface ReportTemplate {
    allowCampaignsSelection?: boolean;
    allowOutboundListSelection?: boolean;
    allowQueuesSelection?: boolean;
    allowSurveySelection?: boolean;
    allowUsersSelection?: boolean;
    description: string;
    duration?: {
        days?: number;
        hours?: number;
        minutes?: number;
        months?: number;
        seconds?: number;
        weeks?: number;
        years?: number;
    };
    fields: ReportTemplateField[];
    icon: string;
    label: string;
    name: string;
    sql: string;
}
export interface Report {
    _id: string;
    cost?: number;
    costWrapup?: number;
    createdAt: number;
    createdBy: string;
    deletedAt?: number;
    description: string;
    expansions?: {
        createdBy?: RealTimeUser;
    };
    fields?: unknown;
    filters: {
        closedDispositions?: string[];
        deviceTypes?: string[];
        dispositions?: string[];
        lastAgentOnly?: boolean;
        rpcDispositions?: string[];
        selectCampaigns?: string[];
        selectLists?: string[];
        selectOutboundListTable?: string;
        selectQueues?: string[];
        selectSurvey?: string;
        selectUsers?: string[];
        supervisedCampaigns?: boolean;
        supervisedQueues?: boolean;
        supervisedUsers?: boolean;
        withCallbacks?: boolean;
        withCompleted?: boolean;
        withFailed?: boolean;
        withMaxAttempts?: boolean;
        withNew?: boolean;
    };
    genericQuery?: string;
    height?: number;
    localizations: {
        description: LocalizationEntry;
        name: LocalizationEntry;
    };
    modifiedAt?: number;
    modifiedBy?: string;
    name: string;
    objectType: 'report';
    outboundListId: string;
    range: {
        from: number;
        maxRange?: string;
        to: number;
        type: string;
    };
    reportFields?: unknown;
    reportId: string;
    results?: string;
    scheduleApplyQuotesToAll?: boolean;
    scheduleAvoidSendingIfNoData?: boolean;
    scheduleCsvSeparator?: string;
    scheduleCsvSeparatorSelection?: string;
    scheduleEmailAccountId?: string;
    scheduleEmailAttachment?: string;
    scheduleEmailSubject?: string;
    scheduleExcludeHeaders?: boolean;
    scheduleFieldMappings?: Array<{
        key: string;
        value: string;
    }>;
    scheduleFileName?: string;
    scheduleFileServerId?: string;
    scheduleFormat?: string;
    scheduleRawData?: boolean;
    scheduleRecipients?: string;
    scheduleSupervisorId?: string;
    scheduleTimeId?: string;
    schemaTypes: Array<{
        key: string;
        value: string;
    }>;
    surveyFilters?: {
        filters?: Array<Record<string, unknown>>;
        surveyId?: string;
    };
    templates?: ReportTemplate;
    tenantId: string;
    timeInterval?: string;
    timezone: string;
    totalQuery?: string;
    type: string;
    width?: number;
}
export interface RunReportRequestBody {
    _id: string;
    endTime: number;
    rangeType: string;
    startTime: number;
    timezone: string;
    type: string;
}
interface RunReportRow {
    cols: Array<{
        axis: {
            dataFormatX: string;
            dataFormatY: string;
        };
        clickEvents: unknown[];
        data: Array<Record<string, unknown>>;
        graph: string;
        graphs: Array<{
            label: string;
            value: string;
        }>;
        id: string;
        legend: {
            dataFormat: string;
            position: string;
        };
        schema: Record<string, unknown>;
        title: string;
        width: number;
    }>;
    height: number;
}
export interface RunReportResponseBody {
    description: string;
    height: number;
    rows: RunReportRow[];
    startEndDate: {
        endTime: number;
        offset: number;
        startTime: number;
        timezone: string;
    };
    title: string;
    total?: Record<string, unknown>;
}
export {};
//# sourceMappingURL=report.d.ts.map