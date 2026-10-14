import type { Method, RawAxiosRequestHeaders } from 'axios';
import type { FetchAccountsResponseBody } from './account';
import type { CampaignDetails, FetchCampaignsResponseBody } from './campaigns';
import type { PaginatedResponse } from './common';
import type { Contact, ContactDetails, FetchContactsResponseBody, UploadBulkContactsResponseBody } from './contact';
import type { PSTNNumberDetails, FetchPSTNNumbersResponseBody } from './pstnNumber';
import type { FetchFunctionsResponseBody } from './functions';
import type { FetchFileServersResponseBody } from './fileServer';
import type { FetchPromptsResponseBody, PromptDownloadDetails } from './prompt';
import type { FetchTicketNotesByTicketIdResponseBody, FetchTicketPrioritiesResponseBody, FetchTicketPropertiesResponseBody, FetchTicketSlaResponseBody, FetchTicketsResponseBody, FetchTicketStatusesResponseBody, Ticket, TicketNote, UpdateTicketAssigneeRequestBody, UpdateTicketInboxRequestBody, UpdateTicketPriorityRequestBody, UpdateTicketStatusRequestBody } from './ticket';
import type { UserProfile, FetchUsersResponseBody, UserDetails, UserVoiceSettings, UserVoiceCallSettingsPayload, VoiceMailGreeting, TextToSpeechRequestBody, UserAutoReplyConfigFixedSlotsPayload, UserAutoReplyConfigFixedSlots, UserAutoReplyConfigFixedSlotsSetEnabled } from './user';
import type { FetchWorkitemsResponseBody } from './workitem';
import type { Note } from './note';
import type { Disposition } from './disposition';
import type { StringWithAutocomplete } from './util';
import type { AgentAssist } from './agentAssistConversation';
import type { ProactiveAgentAssistPrefetchPayload, ProactiveAgentAssistPrefetchResponse, ProactiveAgentAssistTaskAcceptedResponse, ProactiveAgentAssistTaskPayload, ProactiveAgentAssistTicketPrefetchAcceptedResponse, ProactiveAgentAssistTicketPrefetchPayload, ProactiveAgentAssistTicketTaskAcceptedResponse, ProactiveAgentAssistTicketTaskPayload, ProactiveAgentAssistTicketTypesAcceptedResponse, ProactiveAgentAssistTicketTypesPayload, ProactiveAgentAssistTypesAcceptedResponse, ProactiveAgentAssistTypesPayload } from './proactiveAgentAssist';
import type { PredictIntentRequestBody, PredictIntentResponse } from './orchestrator';
import { type Tenant } from './tenant';
import { type FetchSkillsResponseBody } from './skills';
import type { CampaignKBMapping, CreateBulkKBUnitMappingRequestPayload, CreateBulkQueueKBMappingRequestPayload, DeleteManyKBUnitMappingRequestPayload, DeleteManyKBUnitMappingResponseBody, DeleteManyQueueKBMappingRequestPayload, DeleteManyQueueKBMappingResponseBody, FetchKBsResponseBody, FetchKBUnitsResponseBody, KB, KBUnit, KBUnitMapping, QueueKBMapping, TenantKBMapping } from './kb';
import type { HomeTab } from './homeTab';
import type { Report, RunReportRequestBody, RunReportResponseBody } from './report';
import { type ConversationActivitySummaryV2Response } from './conversation';
export interface BaseSchemaObject {
    [key: string]: unknown;
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: string;
}
export interface SchemaTypeLink {
    contentType: string;
    uri: string;
}
export type SchemaTypeCRUDLinkName = 'create' | 'retrieve' | 'update' | 'delete' | 'search' | 'download';
export type SchemaTypeLinkName = 'create' | 'retrieve' | 'update' | 'delete' | 'search' | 'download' | 'assignee' | 'createForUser' | 'deleteFileByKey' | 'findandsearch' | 'priority' | 'status' | 'statuses' | 'team' | 'updateForUser' | 'createNoteToObject' | 'import' | 'deletebulk' | 'sla';
export type SchemaTypeNonCRUDLinkName = Exclude<SchemaTypeLinkName, SchemaTypeCRUDLinkName>;
export interface SchemaTypeRequestLinkMap {
    agentassist: StringWithAutocomplete<'retrieveAll' | SchemaTypeCRUDLinkName>;
    contact: StringWithAutocomplete<'deletebulk' | 'import' | SchemaTypeCRUDLinkName>;
    engagementdata: StringWithAutocomplete<'fetchConversationSummaryV2'>;
    kbunitmapping: StringWithAutocomplete<'createBulk' | 'deleteMany' | SchemaTypeCRUDLinkName>;
    nextiqagentassist: StringWithAutocomplete<'prefetch' | 'assist' | 'getTypes' | 'ticketPrefetch' | 'ticketAssist' | 'ticketGetTypes'>;
    note: StringWithAutocomplete<'createNoteToObject' | SchemaTypeCRUDLinkName>;
    orchestrator: StringWithAutocomplete<'predictIntent'>;
    queuekbmapping: StringWithAutocomplete<'createBulk' | 'deleteMany' | SchemaTypeCRUDLinkName>;
    report: StringWithAutocomplete<'run' | 'duplicate' | SchemaTypeCRUDLinkName>;
    ticket: StringWithAutocomplete<'assignee' | 'status' | 'statuses' | 'priorities' | 'priority' | 'properties' | 'property' | 'team' | 'sla' | SchemaTypeCRUDLinkName>;
    ticketnote: StringWithAutocomplete<'createNote' | SchemaTypeCRUDLinkName>;
    user: StringWithAutocomplete<'vmgreetingtts' | 'deleteFileByKey'>;
    userautoreplyconfig: StringWithAutocomplete<'getFixedSlots' | 'upsertFixedSlots' | 'setFixedSlotsEnabled'>;
    voicesettings: StringWithAutocomplete<'createForUser' | 'updateForUser'>;
}
export type SchemaTypeRequestLinkNames<TName = string> = TName extends keyof SchemaTypeRequestLinkMap ? SchemaTypeRequestLinkMap[TName] : SchemaTypeLinkName;
export type SchemaTypeFieldNativeType = 'string' | 'int' | 'long';
export type SchemaTypeFieldType = 'boolean' | 'string' | 'objectId' | 'dateTime' | 'textarea' | 'picklist' | 'avatar' | 'int' | 'emailAddress' | 'email' | 'phone' | 'lastName' | 'password' | 'ssn' | 'timezone' | 'zipCode' | 'jsonMap' | 'jsonArray' | 'jsonObject' | 'fileHeader' | 'slider' | 'query' | 'fax';
export interface BaseSchemaTypeField {
    label: string;
    mandatory: 0 | 1;
    mappable?: 0 | 1;
    name: string;
    nativeType?: SchemaTypeFieldNativeType;
    reserved: 0 | 1;
    subType?: SchemaTypeFieldSubType;
    type: SchemaTypeFieldType;
    visible: 0 | 1;
}
export interface SchemaTypeBooleanField extends BaseSchemaTypeField {
    default?: boolean;
    type: 'boolean';
}
export interface SchemaTypeStringField extends BaseSchemaTypeField {
    default?: string;
    type: 'string';
}
export interface SchemaTypeTextareaField extends BaseSchemaTypeField {
    default?: string;
    type: 'textarea';
}
export interface SchemaTypePasswordField extends BaseSchemaTypeField {
    type: 'password';
}
export interface SchemaTypeTimezoneField extends BaseSchemaTypeField {
    type: 'timezone';
}
interface SchemaTypeSelectionField extends BaseSchemaTypeField {
    default?: string | number;
    selection: SchemaTypeFieldSelection;
    type: 'picklist' | 'query';
}
export interface SchemaTypePickListField extends SchemaTypeSelectionField {
    type: 'picklist';
}
export interface SchemaTypeQueryField extends SchemaTypeSelectionField {
    type: 'query';
}
export interface SchemaTypeAvatarField extends BaseSchemaTypeField {
    default: string;
    extensions: string;
    type: 'avatar';
}
export interface SchemaTypeIntegerField extends BaseSchemaTypeField {
    default?: number;
    type: 'int';
}
export interface SchemaTypeEmailAddressField extends BaseSchemaTypeField {
    type: 'emailAddress';
}
export interface SchemaTypeEmailField extends BaseSchemaTypeField {
    fields?: {
        bccAddresses: SchemaTypeEmailAddressField;
        bodyParts: SchemaTypeEmailField;
        ccAddresses: SchemaTypeEmailAddressField;
        from: SchemaTypeEmailAddressField;
        subject: SchemaTypeStringField;
        to: SchemaTypeEmailAddressField;
        toAddresses: SchemaTypeEmailAddressField;
    };
    type: 'email';
}
export interface SchemaTypeFromField extends BaseSchemaTypeField {
    mask: boolean;
    subType: 'from';
    type: 'string';
}
export interface SchemaTypeSliderField extends BaseSchemaTypeField {
    default?: number;
    max: number;
    min: number;
    step: number;
    type: 'slider';
}
export interface SchemaTypePhoneField extends BaseSchemaTypeField {
    default?: string;
    mask?: boolean;
    type: 'phone';
}
export interface SchemaTypeDateTimeField extends BaseSchemaTypeField {
    nativeType: 'long';
    type: 'dateTime';
}
export interface SchemaTypeJSONObjectField extends BaseSchemaTypeField {
    fields: Record<string, SchemaTypeField | OtherSchemaTypeField>;
    type: 'jsonObject';
}
export type SchemaTypeFieldSubType = 'from';
export interface SchemaTypeFieldSelection {
    functionAsString?: string;
    multiple: 0 | 1;
    query: {
        displayField?: string;
        displayValue?: string;
        parameter?: string;
        saveField?: string;
        schemaType?: string;
        searchUrl?: string;
    };
    sort?: string;
    values: SchemaTypeFieldSelectionValue[] | number[] | string[];
}
export interface SchemaTypeFieldSelectionValue {
    label: string;
    sort?: number;
    value: number | string;
}
export type SchemaTypeField = SchemaTypeBooleanField | SchemaTypeStringField | SchemaTypeTextareaField | SchemaTypePasswordField | SchemaTypeTimezoneField | SchemaTypePickListField | SchemaTypeQueryField | SchemaTypeAvatarField | SchemaTypeIntegerField | SchemaTypeEmailAddressField | SchemaTypeEmailField | SchemaTypeFromField | SchemaTypeSliderField | SchemaTypePhoneField | SchemaTypeDateTimeField | SchemaTypeJSONObjectField;
export interface OtherSchemaTypeField extends BaseSchemaTypeField {
    type: Exclude<BaseSchemaTypeField['type'], SchemaTypeField['type']>;
}
export interface SchemaTypeRelation {
    label: string;
    name: string;
    permission?: string;
    source: {
        field: string;
        relationField?: string;
        type: string;
    };
    target: {
        field: string;
        multiplicity?: string;
        relationField?: string;
        type: string;
    };
    type: string;
    valueType?: string;
}
export interface ISchemaType extends BaseSchemaObject {
    expansions: Record<string, string>;
    fields: Record<string, SchemaTypeField | OtherSchemaTypeField>;
    label: string;
    links: Record<string, SchemaTypeLink>;
    localizable?: string[];
    modifiedAt: number;
    objectType: 'schematype';
    queryFields: string[];
    relations?: Record<string, SchemaTypeRelation>;
    tenantId: string;
    uniqueKey: string[];
}
export type SchemaTypeName = 'account' | 'note' | 'ticket' | 'ticketnote' | 'campaign' | 'campaignoutboundlist' | 'orchestrator' | 'outboundlist' | 'prompt' | 'pstnnumber' | 'user' | 'userautoreplyconfig' | 'voicesettings' | 'workitem' | 'contact' | 'function' | 'fileserver' | 'agentassist' | 'nextiqagentassist' | 'kbunitmapping' | 'queuekbmapping' | 'report' | 'engagementdata';
export interface SchemaTypeSearchPayload {
    q?: string;
    queryParams?: Record<string, unknown>;
    rows?: number;
    start?: number;
}
export interface SchemaTypeRetrievePayload {
    createdAt?: number;
    id: string;
}
export interface SchemaTypeDownloadPayload {
    fieldname?: string;
    id: string;
    language?: string;
}
export interface BaseSchemaTypeCreatePayload<TFile = Parameters<FormData['append']>[1]> {
    data: Record<string, unknown>;
    file?: TFile;
}
export interface SchemaTypeDeletePayload {
    createdAt?: number;
    id: string;
}
export interface BaseSchemaTypeUpdatePayload<TFile = Parameters<FormData['append']>[1]> {
    createdAt?: number;
    data: Record<string, unknown>;
    file?: TFile;
    filesMetadata?: Record<string, {
        fileType: string;
        label: string;
    }>;
    id: string;
}
interface SchemaTypeRequestCRUDOptions<TPayload> {
    data?: never;
    files?: never;
    headers?: never;
    jsonOverride?: never;
    method?: never;
    payload: TPayload;
    queryParams?: never;
    replacements?: never;
}
interface SchemaTypeRequestDefaultOptions<TName = string, TSchemaTypeLinkName = string, TFile = Parameters<FormData['append']>[1]> {
    data?: CustomRequestData<TName, TSchemaTypeLinkName, TFile>;
    files?: TFile[];
    headers?: RawAxiosRequestHeaders;
    jsonOverride?: boolean;
    method?: Method;
    payload?: never;
    queryParams?: Record<string, unknown>;
    replacements?: Replacements<TName, TSchemaTypeLinkName>;
}
export type BaseSchemaTypeRequestOptions<TName, TSchemaTypeLinkName, TFile = Parameters<FormData['append']>[1]> = TName extends SchemaTypeName ? TSchemaTypeLinkName extends 'create' ? SchemaTypeRequestCRUDOptions<BaseSchemaTypeCreatePayload<TFile>> : TSchemaTypeLinkName extends 'retrieve' ? SchemaTypeRequestCRUDOptions<SchemaTypeRetrievePayload> : TSchemaTypeLinkName extends 'update' ? SchemaTypeRequestCRUDOptions<BaseSchemaTypeUpdatePayload<TFile>> : TSchemaTypeLinkName extends 'delete' ? SchemaTypeRequestCRUDOptions<SchemaTypeDeletePayload> : TSchemaTypeLinkName extends 'search' ? SchemaTypeRequestCRUDOptions<SchemaTypeSearchPayload> : TSchemaTypeLinkName extends 'download' ? SchemaTypeRequestCRUDOptions<SchemaTypeDownloadPayload> : SchemaTypeRequestDefaultOptions<TName, TSchemaTypeLinkName, TFile> : SchemaTypeRequestDefaultOptions<TName, TSchemaTypeLinkName, TFile>;
export interface SchemaTypeSearchResponseMap {
    account: FetchAccountsResponseBody;
    campaign: FetchCampaignsResponseBody;
    contact: FetchContactsResponseBody;
    fileserver: FetchFileServersResponseBody;
    function: FetchFunctionsResponseBody;
    kb: FetchKBsResponseBody;
    kbunit: FetchKBUnitsResponseBody;
    prompt: FetchPromptsResponseBody;
    pstnnumber: FetchPSTNNumbersResponseBody;
    report: PaginatedResponse<Report>;
    skill: FetchSkillsResponseBody;
    ticket: FetchTicketsResponseBody;
    ticketnote: FetchTicketNotesByTicketIdResponseBody;
    user: FetchUsersResponseBody;
    workitem: FetchWorkitemsResponseBody;
}
export interface SchemaTypeRetrieveResponseMap {
    campaign: CampaignDetails;
    contact: ContactDetails;
    hometab: HomeTab;
    kb: KB;
    kbunit: KBUnit;
    note: Note;
    pstnnumber: PSTNNumberDetails;
    report: Report;
    tenant: Tenant;
    ticket: Ticket;
    user: UserDetails;
    userprofile: UserProfile;
}
export interface SchemaTypeDownloadResponseMap {
    prompt: PromptDownloadDetails;
}
export interface SchemaTypeUpdateResponseMap {
    campaign: CampaignDetails;
    disposition: Disposition;
    kb: KB;
    kbunit: KBUnit;
    note: Note;
    report: Report;
    ticketnote: TicketNote;
    user: UserDetails;
    userprofile: UserProfile;
}
export interface SchemaTypeCreateResponseMap {
    agentassist: AgentAssist;
    campaign: CampaignDetails;
    campaignkbmapping: CampaignKBMapping;
    kb: KB;
    kbunit: KBUnit;
    kbunitmapping: KBUnitMapping;
    note: Note;
    queuekbmapping: QueueKBMapping;
    report: Report;
    tenantkbmapping: TenantKBMapping;
    ticketnote: TicketNote;
    user: UserDetails;
}
export interface SchemaTypeDeleteResponseMap {
    campaignkbmapping: undefined;
    kb: KB;
    kbunit: KBUnit;
    queuekbmapping: undefined;
    report: undefined;
    tenantkbmapping: undefined;
    ticketnote: TicketNote;
}
export interface SchemaTypeCustomLinksResponseMap {
    agentassist: {
        retrieveAll: AgentAssist[];
    };
    contact: {
        deletebulk: Contact[];
        import: UploadBulkContactsResponseBody;
    };
    engagementdata: {
        fetchConversationSummaryV2: ConversationActivitySummaryV2Response;
    };
    kbunitmapping: {
        createBulk: KBUnitMapping[];
        deleteMany: DeleteManyKBUnitMappingResponseBody;
    };
    nextiqagentassist: {
        assist: ProactiveAgentAssistTaskAcceptedResponse;
        getTypes: ProactiveAgentAssistTypesAcceptedResponse;
        prefetch: ProactiveAgentAssistPrefetchResponse;
        ticketAssist: ProactiveAgentAssistTicketTaskAcceptedResponse;
        ticketGetTypes: ProactiveAgentAssistTicketTypesAcceptedResponse;
        ticketPrefetch: ProactiveAgentAssistTicketPrefetchAcceptedResponse;
    };
    note: {
        createNoteToObject: Note;
    };
    orchestrator: {
        predictIntent: PredictIntentResponse;
    };
    queuekbmapping: {
        createBulk: QueueKBMapping[];
        deleteMany: DeleteManyQueueKBMappingResponseBody;
    };
    report: {
        duplicate: Report;
        run: RunReportResponseBody;
    };
    ticket: {
        assignee: Ticket;
        priorities: FetchTicketPrioritiesResponseBody;
        priority: Ticket;
        properties: FetchTicketPropertiesResponseBody;
        property: Ticket;
        sla: FetchTicketSlaResponseBody;
        status: Ticket;
        statuses: FetchTicketStatusesResponseBody;
        team: Ticket;
    };
    ticketnote: {
        createNote: TicketNote;
    };
    user: {
        deleteFileByKey: UserVoiceSettings;
        vmgreetingtts: VoiceMailGreeting;
    };
    userautoreplyconfig: {
        getFixedSlots: UserAutoReplyConfigFixedSlots;
        setFixedSlotsEnabled: UserAutoReplyConfigFixedSlots;
        upsertFixedSlots: UserAutoReplyConfigFixedSlots;
    };
    voicesettings: {
        createForUser: Record<string, unknown>;
        updateForUser: UserVoiceSettings;
    };
}
export type SearchableSchemaType = keyof SchemaTypeSearchResponseMap;
export type RetrievableSchemaType = keyof SchemaTypeRetrieveResponseMap;
export type CreatableSchemaType = keyof SchemaTypeCreateResponseMap;
export type UpdatableSchemaType = keyof SchemaTypeUpdateResponseMap;
export type DeletableSchemaType = keyof SchemaTypeDeleteResponseMap;
export type DownloadableSchemaType = keyof SchemaTypeDownloadResponseMap;
export type CustomLinksSchemaType = keyof SchemaTypeCustomLinksResponseMap;
export interface CustomLinksReplacementsMap {
    agentassist: {
        retrieveAll: {
            id: string;
        };
    };
    note: {
        createNoteToObject: {
            id: string;
            objecttype: string;
        };
    };
    report: {
        duplicate: {
            id: string;
        };
    };
    ticket: {
        assignee: {
            id: string;
        };
        priorities: never;
        priority: {
            id: string;
        };
        properties: never;
        property: {
            id: string;
        };
        sla: {
            ticketId: string;
        };
        status: {
            id: string;
        };
        statuses: never;
        team: {
            id: string;
        };
    };
    ticketnote: {
        createNote: {
            ticketId: string;
        };
    };
    user: {
        deleteFileByKey: {
            fileKey: string;
            id: string;
        };
        vmgreetingtts: {
            id: string;
        };
    };
    userautoreplyconfig: {
        getFixedSlots: {
            userId: string;
        };
        setFixedSlotsEnabled: {
            userId: string;
        };
        upsertFixedSlots: {
            userId: string;
        };
    };
    voicesettings: {
        createForUser: {
            userId: string;
        };
        updateForUser: {
            userId: string;
        };
    };
}
export type CustomLinksReplacementsSchemaType = keyof CustomLinksReplacementsMap;
export type Replacements<TName = string, TSchemaTypeLinkName = string> = TName extends CustomLinksReplacementsSchemaType ? TSchemaTypeLinkName extends keyof CustomLinksReplacementsMap[TName] ? CustomLinksReplacementsMap[TName][TSchemaTypeLinkName] : Record<string, unknown> : Record<string, unknown>;
export interface CustomLinksDataMap<TFile = Parameters<FormData['append']>[1]> {
    contact: {
        deletebulk: string[];
        import: {
            duplicateUpdateStrategyType: 'REPLACE' | 'SKIP';
            fieldMap: Record<string, unknown>;
            file?: TFile;
            isShared: boolean;
            realm: 'csv' | 'mobile';
        };
    };
    kbunitmapping: {
        createBulk: CreateBulkKBUnitMappingRequestPayload;
        deleteMany: DeleteManyKBUnitMappingRequestPayload;
    };
    nextiqagentassist: {
        assist: ProactiveAgentAssistTaskPayload;
        getTypes: ProactiveAgentAssistTypesPayload;
        prefetch: ProactiveAgentAssistPrefetchPayload;
        ticketAssist: ProactiveAgentAssistTicketTaskPayload;
        ticketGetTypes: ProactiveAgentAssistTicketTypesPayload;
        ticketPrefetch: ProactiveAgentAssistTicketPrefetchPayload;
    };
    note: {
        createNoteToObject: {
            body: string;
            title: string;
        };
    };
    orchestrator: {
        predictIntent: PredictIntentRequestBody;
    };
    queuekbmapping: {
        createBulk: CreateBulkQueueKBMappingRequestPayload;
        deleteMany: DeleteManyQueueKBMappingRequestPayload;
    };
    report: {
        duplicate: Record<string, unknown>;
        run: RunReportRequestBody;
    };
    ticket: {
        assignee: UpdateTicketAssigneeRequestBody;
        priorities: never;
        priority: UpdateTicketPriorityRequestBody;
        properties: never;
        property: UpdateTicketPriorityRequestBody;
        status: UpdateTicketStatusRequestBody;
        statuses: never;
        team: UpdateTicketInboxRequestBody;
    };
    ticketnote: {
        createNote: {
            body: string;
            title: string;
        };
    };
    user: {
        deleteFileByKey: never;
        vmgreetingtts: TextToSpeechRequestBody;
    };
    userautoreplyconfig: {
        getFixedSlots: never;
        setFixedSlotsEnabled: UserAutoReplyConfigFixedSlotsSetEnabled;
        upsertFixedSlots: UserAutoReplyConfigFixedSlotsPayload;
    };
    voicesettings: {
        createForUser: Record<string, unknown>;
        updateForUser: UserVoiceCallSettingsPayload;
    };
}
export type CustomLinksDataSchemaType = keyof CustomLinksDataMap;
export type CustomRequestData<TName = string, TSchemaTypeLinkName = string, TFile = Parameters<FormData['append']>[1]> = TName extends CustomLinksDataSchemaType ? TSchemaTypeLinkName extends keyof CustomLinksDataMap<TFile>[TName] ? CustomLinksDataMap<TFile>[TName][TSchemaTypeLinkName] : Record<string, unknown> : Record<string, unknown>;
export type SchemaTypeSearchResponseBody<TName, TResponse> = TResponse extends void ? TName extends SearchableSchemaType ? SchemaTypeSearchResponseMap[TName] : PaginatedResponse<unknown> : PaginatedResponse<TResponse>;
export type SchemaTypeRetrieveResponseBody<TName, TResponse> = TResponse extends void ? TName extends RetrievableSchemaType ? SchemaTypeRetrieveResponseMap[TName] : BaseSchemaObject : TResponse;
export type SchemaTypeDownloadResponseBody<TName, TResponse> = TResponse extends void ? TName extends DownloadableSchemaType ? SchemaTypeDownloadResponseMap[TName] : unknown : TResponse;
export type SchemaTypeUpdateResponseBody<TName, TResponse> = TResponse extends void ? TName extends UpdatableSchemaType ? SchemaTypeUpdateResponseMap[TName] : unknown : TResponse;
export type SchemaTypeCreateResponseBody<TName, TResponse> = TResponse extends void ? TName extends CreatableSchemaType ? SchemaTypeCreateResponseMap[TName] : unknown : TResponse;
export type SchemaTypeDeleteResponseBody<TName, TResponse> = TResponse extends void ? TName extends DeletableSchemaType ? SchemaTypeDeleteResponseMap[TName] : unknown : TResponse;
export type SchemaTypeKnownLinksResponseBody<TName, TSchemaTypeLinkName> = TName extends CustomLinksSchemaType ? TSchemaTypeLinkName extends keyof SchemaTypeCustomLinksResponseMap[TName] ? SchemaTypeCustomLinksResponseMap[TName][TSchemaTypeLinkName] : unknown : unknown;
export type SchemaTypeRequestResponseBody<TName, TSchemaTypeLinkName, TResponse> = TResponse extends void ? TSchemaTypeLinkName extends SchemaTypeCRUDLinkName ? TSchemaTypeLinkName extends 'create' ? SchemaTypeCreateResponseBody<TName, TResponse> : TSchemaTypeLinkName extends 'retrieve' ? SchemaTypeRetrieveResponseBody<TName, TResponse> : TSchemaTypeLinkName extends 'update' ? SchemaTypeUpdateResponseBody<TName, TResponse> : TSchemaTypeLinkName extends 'delete' ? SchemaTypeDeleteResponseBody<TName, TResponse> : TSchemaTypeLinkName extends 'download' ? SchemaTypeDownloadResponseBody<TName, TResponse> : TSchemaTypeLinkName extends 'search' ? SchemaTypeSearchResponseBody<TName, TResponse> : unknown : SchemaTypeKnownLinksResponseBody<TName, TSchemaTypeLinkName> : TResponse;
export declare const isDateTimeField: (field: BaseSchemaTypeField) => field is SchemaTypeDateTimeField;
export declare const isPhoneField: (field: BaseSchemaTypeField) => field is SchemaTypePhoneField;
export declare const isSliderField: (field: BaseSchemaTypeField) => field is SchemaTypeSliderField;
export declare const isFromField: (field: BaseSchemaTypeField) => field is SchemaTypeFromField;
export declare const isEmailField: (field: BaseSchemaTypeField) => field is SchemaTypeEmailField;
export declare const isEmailAddressField: (field: BaseSchemaTypeField) => field is SchemaTypeEmailAddressField;
export declare const isIntegerField: (field: BaseSchemaTypeField) => field is SchemaTypeIntegerField;
export declare const isAvatarField: (field: BaseSchemaTypeField) => field is SchemaTypeAvatarField;
export declare const isQueryField: (field: BaseSchemaTypeField) => field is SchemaTypeQueryField;
export declare const isPickListField: (field: BaseSchemaTypeField) => field is SchemaTypePickListField;
export declare const isTimezoneField: (field: BaseSchemaTypeField) => field is SchemaTypeTimezoneField;
export declare const isPasswordField: (field: BaseSchemaTypeField) => field is SchemaTypePasswordField;
export declare const isTextareaField: (field: BaseSchemaTypeField) => field is SchemaTypeTextareaField;
export declare const isStringField: (field: BaseSchemaTypeField) => field is SchemaTypeStringField;
export declare const isBooleanField: (field: BaseSchemaTypeField) => field is SchemaTypeBooleanField;
export declare const isJSONObjectField: (field: BaseSchemaTypeField) => field is SchemaTypeJSONObjectField;
export {};
//# sourceMappingURL=schemaType.d.ts.map