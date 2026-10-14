import type { OutboundChannelCategory, OutboundMode, PhoneState, StatusType, TelephonyType, UserHistorySortType, WebRTCProvider, WorkitemType } from '../models';
import type { PaginatedResponse } from './common';
import type { LocalizationEntry } from './localization';
import { type BaseSchemaObject } from './schemaType';
import type { Survey } from './survey';
import type { StringWithAutocomplete } from './util';
import type { Workitem } from './workitem';
export interface TokenResponse {
    location: string;
    token: string;
}
export interface RefreshTokenResponse {
    clientLocation: string;
    location: string;
    token: string;
}
export interface TwilioRefreshTokenResponse {
    token: string;
}
export interface Authority {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    domain: string[];
    entity: string[];
    localizations: {
        name: LocalizationEntry;
    };
    modifiedAt: number;
    modifiedBy: string;
    objectType: string;
    tenantId: string;
    values: string[];
}
export interface Settings {
    acd?: {
        channels?: string[];
        queues?: string[];
    };
    devices?: {
        dtmfSinkId?: string;
        notificationSinkId?: string;
        promptSinkId?: string;
        ringSinkId?: string;
        voiceInputSinkId?: string;
        voiceOutputSinkId?: string;
    };
    dial?: {
        closeOnDial: boolean;
    };
    directory?: {
        agentMessageNotification: boolean;
        agentSoundNotification?: string;
        closeOnDial: boolean;
        closeOnTransfer: boolean;
        queueMessageNotification: unknown[];
        topicMessageNotification: boolean;
    };
    general?: {
        defaultCampaignId: string;
        defaultDialType?: string;
        defaultEmailCampaignId?: string;
        defaultFaxCampaignId?: string;
        defaultSMSCampaignId?: string;
    };
    workitem?: {
        alwaysDigitalMessagesWebNotification: boolean;
        alwaysDigitalWebNotification: boolean;
        alwaysVoiceWebNotification: boolean;
        digitalMessageRingtone?: string;
        digitalRingtone?: string;
        enableDigitalMessagesWebNotification: boolean;
        enableDigitalWebNotification: boolean;
        enableVoiceWebNotification: boolean;
        highPrioritySoundNotification?: string;
        repeatDigitalMessagesRingtone: boolean;
        repeatDigitalRingtone: boolean;
        repeatVoiceRingtone: boolean;
        voiceRingtone?: string;
    };
}
export interface BaseTelephonyConfig {
    address: string;
    useSipEndpoint: boolean;
    workOffHook: boolean;
}
export type PstnAndSipTelephonyConfig = BaseTelephonyConfig & {
    type: Exclude<TelephonyType, 'WEBRTC'>;
};
export type BaseWebRtcTelephonyConfig = BaseTelephonyConfig & {
    iceTransportPolicy: 'all' | 'relay';
    nts?: {
        accountSid: string;
        iceServers: Array<{
            credential?: string;
            url: string;
            urls: string;
            username?: string;
        }>;
        password: string;
        ttl: string;
        username: string;
    };
    token: string;
    tokenExpiration: number;
    tokenRefreshUrl: string;
    turnToken: string;
    type: Extract<TelephonyType, 'WEBRTC'>;
};
export type FreeswitchWebRTCTelephonyConfig = BaseWebRtcTelephonyConfig & {
    iceServers: Array<{
        credential?: string;
        url: string;
        urls: string;
        username?: string;
    }>;
    iceTransportPolicy: string;
    stunURL: string;
    turnURL: string;
    turnUsername: string;
    vertoAddress: string;
    webRTCProvider: Extract<WebRTCProvider, 'thrio'> | Extract<WebRTCProvider, 'nextiva'>;
};
export type TwilioWebRTCTelephonyConfig = BaseWebRtcTelephonyConfig & {
    webRTCProvider: Extract<WebRTCProvider, 'twilio'>;
};
export type TelephonyConfig = TwilioWebRTCTelephonyConfig | PstnAndSipTelephonyConfig | FreeswitchWebRTCTelephonyConfig;
export declare const isFreeswitchWebRTCTelephonyConfig: (config: TelephonyConfig) => config is FreeswitchWebRTCTelephonyConfig;
export interface MultiloginDevice {
    _id: string;
    createdAt: number;
    ringingAt: number;
    telephony?: TelephonyConfig;
    tenantId: string;
    type: string;
    userId: string;
    voiceState: PhoneState;
}
export interface UserSession {
    [key: string]: unknown;
    _id: string;
    acdAutoAccept: boolean;
    acdAutoLogin: boolean;
    acdLoginAt: number;
    activeChannels: unknown;
    allowAcdChanges: boolean;
    authorities: Authority[];
    azureUserIdentity?: {
        accessToken: string;
        azureUserId: string;
        tokenExpiration: number;
    };
    callFailedNotification: boolean;
    createdAt: number;
    createdBy: string;
    credentialsNonExpired: boolean;
    customStatusMessage?: {
        emoji: string;
        message: string;
    };
    defaultAcdLoginStatus: string;
    deletedAt: number;
    deviceInfo: string;
    devices?: Record<string, MultiloginDevice>;
    dialConfirmation: boolean;
    directory: {
        queues: unknown[];
        topics: string[];
        users: string[];
    };
    disableDisposition: string;
    disableEmailNotification: boolean;
    disableStartRecording: boolean;
    disableStopRecording: boolean;
    disableVMNotication: boolean;
    dispositionId: string;
    dispositionNotification: boolean;
    enabled: boolean;
    firstName: string;
    hideInCompanyDirectory: boolean;
    hideInDirectory: boolean;
    idleReason?: string;
    idleStartedAt: number;
    inConference: boolean;
    inMute: boolean;
    inRecording: boolean;
    language: string;
    languageId: string;
    lastName: string;
    lastSearchRange: {
        type: string;
    };
    lastTimeOfOutboundCall: number;
    location: string;
    loginAt: number;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    oAuthProfileAssignmentFromExternalRole: boolean;
    objectType: string;
    outboundMode: OutboundMode;
    password: string;
    passwordModifiedAt: number;
    personalInboxNumber?: string;
    pseudonym: string;
    queues: string[];
    recordingAnalysisPercentage: number;
    regionId: string;
    reminderTime: number;
    ringOnLogout: boolean;
    ringPhoneOnOffer: boolean;
    ringbackURL: string;
    role?: string;
    scrubOnDial: boolean;
    settings: Settings;
    skills: unknown[];
    status: StatusType;
    statusId: string;
    statusStartedAt: number;
    telephony?: TelephonyConfig;
    tenantId: string;
    tenantName: string;
    timezone: string;
    token: string;
    useReactWorkitemLayout: string;
    useSideBarHeader: string;
    userClientSettings: {
        _id: string;
        createdAt: number;
        createdBy: string;
        deletedAt: number;
        modifiedAt: number;
        modifiedBy: string;
        objectType: string;
        tenantId: string;
    };
    userClientSettingsId: string;
    /**
     * The duration the current status was set to last in milliseconds * 1000. So 10 minutes would be `10 * 60 * 1000 * 1000 = 600000000`. This field is only returned when the status is set to a status that has a timer (like Away) and the timer value is greater than 0.
     */
    userDuration?: number;
    userId: string;
    userProfile: {
        _id: string;
        authoritySetId: string;
        autoDispositionId: string;
        callCompleteNotification: boolean;
        callRingingNotification: boolean;
        createdAt: number;
        createdBy: string;
        deletedAt: number;
        disableDisposition: boolean;
        label: string;
        localizations: {
            description: LocalizationEntry;
            name: LocalizationEntry;
        };
        modifiedAt: number;
        modifiedBy: string;
        objectType: string;
        recordingAnalysisPercentage: number;
        tenantId: string;
        userprofileId: string;
    };
    userProfileId: string;
    username: string;
    verifyConsentOnDial: boolean;
    verifyConsentOnSMS: boolean;
    voiceState: PhoneState;
    voicemailFunctionId: string;
    voicemailGreetingFunctionId: string;
    workingOn: string;
}
export interface MultiloginResponse {
    device: MultiloginDevice;
    session: UserSession;
}
export interface HomeTabObject {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    expansions: {
        hometabId: {
            description: string;
            hometabId: string;
            name: string;
            position: string;
        };
    };
    hometabId: string;
    modifiedAt: number;
    modifiedBy: string;
    objectType: string;
    tenantId: string;
    userprofileId: string;
}
export interface HomeTabs {
    count: number;
    objects?: HomeTabObject[];
    total: number;
}
export interface Channel {
    [key: string]: unknown;
    _id: string;
    channelId: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    deletedBy?: string;
    description: string;
    enabled: boolean;
    expansions: {
        channelId: {
            channelId: string;
            description: string;
            name: string;
            type: string;
        };
    };
    label: string;
    limit: number;
    modifiedAt: number;
    modifiedBy: string;
    multitasking: boolean;
    name: string;
    objectType: string;
    priority: number;
    tenantId: string;
    type: string;
    userprofileId: string;
}
export interface OutboundChannel {
    category: OutboundChannelCategory;
    channelId: string;
    channelType: string;
}
export interface QueueObject {
    _id?: string;
    assignmentType: string;
    blended: boolean;
    chatSLA: number;
    createdAt?: number;
    createdBy?: string;
    disableSkills: boolean;
    emailSLA: number;
    hideInCompanyDirectory: boolean;
    lifo: boolean;
    localizations?: {
        description?: LocalizationEntry;
        name?: LocalizationEntry;
    };
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    noAnswerStatusAsAvailable: boolean;
    objectType: 'queue';
    outboundChannels?: OutboundChannel[];
    playAnnouncementPromptId: string;
    pushQueueDataInRealTime: boolean;
    queueId: string;
    realtimeAssignment: boolean;
    slaCalculation: number;
    smsSLA: number;
    socialSLA: number;
    tenantId?: string;
    voiceSLA: number;
}
export interface Queue {
    [key: string]: unknown;
    _id: string;
    agentsToCallsRatio: number;
    businessEventId: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    deletedBy?: string;
    description: string;
    expansions: {
        queueId: QueueObject;
    };
    externalId?: string;
    modifiedAt: number;
    modifiedBy: string;
    objectType: string;
    queueId: string;
    tenantId: string;
    userQueueId: string;
}
export interface Queues {
    count: number;
    objects: Queue[];
    total: number;
}
export interface User {
    _id?: string;
    acdAutoAccept: boolean;
    acdAutoLogin: boolean;
    allowAcdChanges: boolean;
    allowClientTracing: boolean;
    allowServerTracing: boolean;
    alwaysDurationWebNotification: boolean;
    alwaysHoldWebNotification: boolean;
    avatar?: string;
    callFailedNotification: boolean;
    chatAlignment?: boolean;
    chatDurationNotification: boolean;
    chatWelcome?: string;
    configurationId?: string;
    confirmDisposition: string;
    contentType?: string;
    createdBy: string;
    credentialsNonExpired: boolean;
    defaultAcdLoginStatus?: string;
    deletedAt: number;
    dialConfirmation: boolean;
    dialpadMode: string;
    disableDisposition: string;
    disableEmailNotification: boolean;
    disableStartRecording: boolean;
    disableStopRecording: boolean;
    dispositionDelay?: string;
    dispositionNotification: boolean;
    enableDurationWebNotification: boolean;
    enableHoldWebNotification: boolean;
    enableRealtimeTranscription: string;
    enabled: boolean;
    extension?: string;
    firstName: string;
    hideInCompanyDirectory: boolean;
    hideInDirectory: boolean;
    inboundCallDurationNotification: boolean;
    inboundCallHoldNotification: boolean;
    inboundEmailDurationNotification: boolean;
    inboundExtensionCallDurationNotification: boolean;
    inboundSMSDurationNotification: boolean;
    languageId: string;
    lastName: string;
    mSTeamsEnabled?: boolean;
    modifiedAt?: number;
    modifiedBy: string;
    name: string;
    oAuthProfileAssignmentFromExternalRole: boolean;
    objectType: 'user';
    outboundCallDurationNotification: boolean;
    outboundCallHoldNotification: boolean;
    outboundEmailDurationNotification: boolean;
    outboundExtensionCallDurationNotification: boolean;
    outboundSMSDurationNotification: boolean;
    passwordModifiedAt: number;
    pbxUser: boolean;
    predictiveCallDurationNotification: boolean;
    predictiveSMSDurationNotification: boolean;
    progressiveCallDurationNotification: boolean;
    pseudonym: string;
    recordingAnalysisPercentage: number;
    ringOnLogout: boolean;
    ringPhoneOnOffer: boolean;
    scrubOnDial: boolean;
    showWebrtcNotification: boolean;
    socialDurationNotification: boolean;
    telephony?: {
        address: string;
        type: string;
        useSipEndpoint: boolean;
        workOffHook: boolean;
    };
    tenantId?: string;
    timezone: string;
    useSideBarHeader: string;
    userClientSettingsId: string;
    userId: string;
    userProfileId: string;
    username: string;
    verifyConsentOnDial: boolean;
    verifyConsentOnSMS: boolean;
}
export interface UserDetails extends BaseSchemaObject {
    acdAutoAccept: boolean;
    acdAutoLogin: boolean;
    allowAcdChanges: boolean;
    allowClientTracing: boolean;
    allowServerTracing: boolean;
    alwaysDurationWebNotification: boolean;
    alwaysHoldWebNotification: boolean;
    avatar?: string;
    callFailedNotification: boolean;
    chatDurationNotification: boolean;
    confirmDisposition: string;
    credentialsNonExpired: boolean;
    defaultAcdLoginStatus: string;
    dialConfirmation: boolean;
    dialpadMode: string;
    directory: {
        queues: unknown[];
        topics: string[];
        users: string[];
    };
    disableDisposition: 'on' | 'off' | 'userProfile' | boolean | null | undefined;
    disableEmailNotification: boolean;
    disableStartRecording: boolean;
    disableStopRecording: boolean;
    dispositionNotification: boolean;
    edgeId?: string;
    enableDurationWebNotification: boolean;
    enableHoldWebNotification: boolean;
    enableRealtimeTranscription: string;
    enabled: boolean;
    expansions?: {
        languageId?: UserLanguageSettings;
        networkregionId?: UserNetworkRegionSettings;
        personalInboxCampaignId?: UserPersonalInboxCampaignSettings;
        userProfileId?: UserProfileSettings;
        voiceSettingsId?: UserVoiceSettings;
    };
    files: Record<string, {
        contentType: string;
        fileType?: string;
        label: string;
        name: string;
    }>;
    firstName: string;
    hideInCompanyDirectory: boolean;
    hideInDirectory: boolean;
    hometabs: HomeTabs;
    inboundCallDurationNotification: boolean;
    inboundCallHoldNotification: boolean;
    inboundEmailDurationNotification: boolean;
    inboundExtensionCallDurationNotification: boolean;
    inboundSMSDurationNotification: boolean;
    languageId: string;
    lastName: string;
    mSTeamsEnabled?: boolean;
    name: string;
    oAuthProfileAssignmentFromExternalRole: boolean;
    outboundCallDurationNotification: boolean;
    outboundCallHoldNotification: boolean;
    outboundEmailDurationNotification: boolean;
    outboundExtensionCallDurationNotification: boolean;
    outboundSMSDurationNotification: boolean;
    passwordModifiedAt: number;
    personalInboxCampaignId?: string;
    personalInboxNumber?: string;
    predictiveCallDurationNotification: boolean;
    predictiveSMSDurationNotification: boolean;
    progressiveCallDurationNotification: boolean;
    pseudonym: string;
    queues: Queues;
    recordingAnalysisPercentage: number;
    ringOnLogout: boolean;
    ringPhoneOnOffer: boolean;
    scrubOnDial: boolean;
    sendToVoicemailOnBusy?: boolean;
    settings: Settings;
    showWebrtcNotification: boolean;
    socialDurationNotification: boolean;
    status?: number;
    statusId?: string;
    telephony: TelephonyConfig;
    tenantId: string;
    timezone: string;
    useReactWorkitemLayout: string;
    useSideBarHeader: string;
    userClientSettingsId: string;
    userId: string;
    userProfileId: string;
    username: string;
    verifyConsentOnDial: boolean;
    verifyConsentOnSMS: boolean;
}
export interface UserVoiceCallSettingsPayload {
    anonymousCallRejectionSettings?: BaseUserSetting;
    callForwardingSettings?: CallForwardingSettings;
    callWaitingSettings?: BaseUserSetting;
    numberOfRingsBeforeCallBounce?: number;
    voicemailSettings?: BaseUserSetting;
}
export interface CallForwardingSettings {
    always?: {
        destinationNumber?: string;
        enabled?: boolean;
    };
    busy?: {
        destinationNumber?: string;
        enabled: boolean;
    };
    unanswered?: {
        destinationNumber?: string;
        enabled: boolean;
    };
    unreachable?: {
        destinationNumber?: string;
        enabled: boolean;
    };
}
export interface BaseUserSetting {
    enabled?: boolean;
}
export interface UserProfileSettings {
    _id: string;
    allowCampaignSelection: boolean;
    authoritySetId: string;
    autoLoginToQueues: boolean;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    disableDisposition: boolean;
    externalId: string;
    label: string;
    localizations: LocalizationEntry;
    logicalId: string;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    networkregionId: string;
    objectType: string;
    tenantId: string;
    userprofileId: string;
}
export interface UserVoiceSettings {
    _id: string;
    anonymousCallRejectionSettings: BaseUserSetting;
    callForwardingSettings: CallForwardingSettings;
    callWaitingSettings: BaseUserSetting;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    modifiedAt: number;
    modifiedBy: string;
    numberOfRingsBeforeCallBounce: number;
    objectType: string;
    referenceType: string;
    tenantId: string;
    voicemailSettings: BaseUserSetting;
}
export interface UserLanguageSettings {
    _id: string;
    code: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    localizations: LocalizationEntry;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: string;
    tenantId: string;
    url: string;
}
export interface UserNetworkRegionSettings {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    iceTransportPolicy: 'all' | 'relay';
    localizations: LocalizationEntry;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    networkregionId: string;
    objectType: string;
    region: string;
    tenandId: string;
    voicestunturnlb: string;
    webrtclb: string;
}
export interface UserPersonalInboxCampaignSettings {
    _id: string;
    addresses: unknown[];
    autoDispositionDelay: number;
    autoDispositionId: string;
    campaignId: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    enableRealtimeTranscriptionFreeswitch: boolean;
    localizations: LocalizationEntry;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: string;
    outboundCallFunctionId: string;
    realtimeAnalysisServiceId: string[];
    recordAnalysisEndTime: number;
    recordAnalysisMaxDuration: number;
    recordAnalysisPercentage: number;
    recordAnalysisServiceId: string;
    recordingPercentage: number;
    tenantId: string;
    type: string;
    useForExtension: boolean;
    useForOutbound: boolean;
    useForSMS: boolean;
    workflowid: string;
}
export interface TextToSpeechRequestBody {
    languageCode: string;
    text: string;
    voiceGender: string;
    voiceName: string;
}
/**
 * @deprecated interface `TextToSpeechRequestBody` will be used
 */
export interface TextToSpeechPayload {
    languageCode: string;
    text: string;
    userId: string;
    voiceGender: string;
    voiceName: string;
}
export interface VoiceMailGreeting {
    contentType: string;
    signedURL: string;
}
interface Channels {
    count: number;
    objects: Channel[];
    total: number;
}
export interface UserProfile {
    [key: string]: unknown;
    allowChangingView: boolean;
    allowDualView: boolean;
    authoritySetId: string;
    autoDispositionId: string;
    callCompleteNotification: boolean;
    callRingingNotification: boolean;
    channels: Channels;
    disableDisposition: boolean | null | undefined;
    edgeId?: string;
    hometabs: HomeTabs;
}
export interface UserClientSettings {
    _id: string;
    tenantId: string;
    userId: string;
    userclientsettingsId: string;
}
export interface RealTimeUser {
    avatar: string;
    dnis: string;
    extension: string;
    firstName: string;
    hideInCompanyDirectory: boolean;
    lastName: string;
    name: string;
    personalInboxNumber?: string;
    pseudonym?: string;
    queues: string[];
    signedAvatarURL?: string;
    status: StatusType;
    statusId: string;
    userId: string;
    username: string;
    workingOn: string;
}
export interface RealTimeInbox extends BaseSchemaObject {
    assignmentType?: string;
    availableAgents: number;
    blended?: boolean;
    campaignId?: string;
    chatSLA: string;
    defaultResolveStatus?: string;
    description?: string;
    emailSLA: string;
    emoji?: string;
    hideInCompanyDirectory: boolean;
    lifo?: boolean;
    modifiedAt: number;
    modifiedBy: string;
    objectType: 'queue';
    outboundChannels?: OutboundChannel[];
    playAnnouncementPromptId?: string;
    pushQueueDataInRealTime?: boolean;
    queueId: string;
    realtimeAssignment: boolean;
    slaCalculation: string;
    socialSLA: string;
    tenantId: string;
    users?: string[];
    voiceSLA: string;
}
export interface RealTimeTopic {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: string;
    tenantId: string;
    topicId: string;
    users: string;
}
export type UsersById = Record<string, RealTimeUser>;
export type InboxesById = Record<string, RealTimeInbox>;
export type TopicsById = Record<string, RealTimeTopic>;
export interface InternalCompanyDirectoryEventData {
    queues: InboxesById;
    topics: TopicsById;
    users: UsersById;
}
export interface CompanyDirectoryEventData {
    queues: RealTimeInbox[];
    topics: RealTimeTopic[];
    users: RealTimeUser[];
}
export interface FetchSurveysRequestParams {
    q: string;
}
export type FetchSurveysResponse = PaginatedResponse<Survey>;
export interface History {
    count: number;
    objects: Workitem[];
}
export type FetchUsersResponseBody = PaginatedResponse<User>;
export interface DialResponse {
    canDial: boolean;
    consentType: number;
    overwriteUserId: string;
    workitemId: string;
}
export interface DialPayload {
    campaignId?: string | null;
    conferenceWorkitemId: string | null;
    contactId?: string | null;
    context: any;
    conversationId?: string | null;
    force: boolean;
    from?: string | null;
    name: string | null;
    option: string;
    queueId?: string | null;
    spoofWorkitemId: string | null;
    ticketId?: string | null;
    to: string;
    workitemId: string | null;
}
export type DialExtensionPayload = {
    campaignId?: string;
    clientContext?: {
        transferContext: {
            sourceWorkitemId: string;
            transferee: {
                id: string;
            };
        };
    };
    userId: string;
} | string;
export interface SendMessageResponse {
    canDial: boolean;
    consentType: number;
}
export interface LoginToACDChannel {
    enabled: boolean;
    limit: number;
    multitasking: boolean;
    priority: number;
}
export interface LoginToACDPayload {
    channels?: Record<string, LoginToACDChannel>;
    queues?: string[];
    status?: {
        status: number;
        statusId: string;
    };
}
export interface ACDLoginNotificationPayload {
    agentid: string;
    createdAt: number;
    id: string;
    name: 'ACDLoginNotification';
    result: string;
    session: UserSession;
    userId: string;
}
export interface ACDLogoutNotificationPayload {
    agentid: string;
    createdAt: number;
    duration: number;
    id: string;
    name: 'ACDLogoutNotification';
    reason?: null | string;
    result: string;
    session: UserSession;
    userId: string;
}
export interface UserHistoryPayload {
    agentId: string;
    agentName?: string;
    rows?: number;
    sort?: {
        field: UserHistorySortType;
        order?: 'asc' | 'desc';
    };
    start?: number;
    type?: WorkitemType;
}
export interface UserHistoryResponse {
    count: number;
    objects: UserHistory[];
    total: number;
}
export interface UserHistory {
    address: string;
    channel: string;
    channelType: WorkitemType;
    createdDate: string;
    createdTime: string;
    fromUser: string;
    ticketId: string;
    toUser: string;
}
export interface DialExtensionResponse {
    canDial: boolean;
    consentType: number;
    workitemId: string;
}
export interface LogoutPayload {
    notifyServer: boolean;
    sendNotification?: boolean;
}
export interface UserTypingPayload {
    contextId: string;
    contextType: StringWithAutocomplete<'CONVERSATION'>;
    source: StringWithAutocomplete<'composing'>;
    startTyping: boolean;
    tenantId: string;
    userId: string;
    userName: string;
}
export interface TypingStatusNotificationData {
    contextId: string;
    contextType: StringWithAutocomplete<'CONVERSATION'>;
    createdAt: number;
    id: string;
    name: 'TypingStatusNotification';
    result: string;
    skipMobileNotification: boolean;
    timestamp: number;
    typingCount: number;
    typingUsers: Array<{
        name: string;
        userId: string;
    }>;
}
export interface DaySlotRange {
    endMinutes: number;
    startMinutes: number;
}
export interface FixedSlotConfigBase {
    configType?: StringWithAutocomplete<'GENERAL' | 'AFTER_HOURS'>;
    createdAt?: number;
    dateRange?: {
        endDate: number;
        startDate: number;
    };
    enabled: boolean;
    id?: string;
    modifiedAt?: number;
    name?: string;
    priority: number;
    recurringSchedule?: {
        daySlots: Record<StringWithAutocomplete<'FRIDAY' | 'MONDAY' | 'SATURDAY' | 'SUNDAY' | 'THURSDAY' | 'TUESDAY' | 'WEDNESDAY'>, DaySlotRange[]>;
    };
    replyMessage: string;
    status: StringWithAutocomplete<'ACTIVE' | 'SCHEDULED' | 'INACTIVE'>;
    timePeriodType?: StringWithAutocomplete<'DATE_RANGE' | 'RECURRING'>;
    triggers: Array<StringWithAutocomplete<'SMS' | 'MISSED_CALL'>>;
    userId: string;
}
export interface FixedSlotConfig extends FixedSlotConfigBase {
    createdAt: number;
    id: string;
    modifiedAt: number;
}
export type FixedSlotConfigPayload = Omit<FixedSlotConfigBase, 'status'>;
export type UserAutoReplyConfigFixedSlotsPayload = Record<StringWithAutocomplete<'afterHours' | 'general'>, FixedSlotConfigPayload>;
export type UserAutoReplyConfigFixedSlotsSetEnabled = Record<StringWithAutocomplete<'afterHours' | 'general'>, boolean>;
export type UserAutoReplyConfigFixedSlots = Record<StringWithAutocomplete<'afterHours' | 'general'>, FixedSlotConfig | undefined>;
interface UserAutoReplyConfigNotificationChangeBase {
    action: 'CREATED' | 'UPDATED' | 'DELETED';
    config?: FixedSlotConfig;
    configId: string;
    configType: StringWithAutocomplete<'GENERAL' | 'AFTER_HOURS'>;
}
interface UserAutoReplyConfigNotificationChangeDelete extends UserAutoReplyConfigNotificationChangeBase {
    action: 'DELETED';
}
interface UserAutoReplyConfigNotificationChangeCreateOrUpdate extends UserAutoReplyConfigNotificationChangeBase {
    action: 'CREATED' | 'UPDATED';
    config: FixedSlotConfig;
}
export type UserAutoReplyConfigNotificationChange = UserAutoReplyConfigNotificationChangeDelete | UserAutoReplyConfigNotificationChangeCreateOrUpdate;
export interface UserAutoReplyConfigNotificationData {
    changes: UserAutoReplyConfigNotificationChange[];
    createdAt: number;
    id: string;
    name: 'UserAutoReplyConfigNotification';
    result: string;
    skipMobileNotification: boolean;
    timestamp: number;
    userId: string;
}
export interface CannedMessageAddFavoritePayload {
    junctionId: string;
    position?: number;
}
export interface CannedMessageAddFavoriteResponse {
    _id: string;
    createdAt: number;
    deletedAt: number;
    junctionId: string;
    modifiedAt: number;
    position: number;
    userId: string;
}
export interface CannedMessageImportResponse {
    errors?: Array<{
        error: string;
        field: string;
        row: number;
    }>;
    failureCount?: number;
    successCount?: number;
    totalRows?: number;
}
export interface UserQueues {
    count: number;
    objects?: UserQueue[];
    total: number;
}
export interface UserQueue {
    _id?: string;
    createdAt?: number;
    createdBy?: string;
    deletedAt?: number;
    description?: string;
    expansions?: {
        queueId: Partial<QueueObject>;
        userId: Partial<User>;
    };
    label?: string;
    modifiedAt?: number;
    modifiedBy?: string;
    name?: string;
    objectType?: 'userqueue';
    queueId: string;
    tenantId?: string;
    userId: string;
    userQueueId?: string;
}
export {};
//# sourceMappingURL=user.d.ts.map