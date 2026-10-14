import type { WorkItemPriority, ChannelType, WorkitemAction, WorkitemState, WorkitemType, WorkitemRecordingOption, ChatType, ChatMessageState } from '../models';
import type { Contact, ContactDetails } from './contact';
import { type Conversation } from './conversation';
import type { ConversationWatermark, CurrentSMSMessage, EngagementData, Message } from './message';
import type { ConversationCallRecordingData } from './recordings';
import type { Ticket } from './ticket';
import type { TimeEvent } from './time-event';
import type { CalendarSystem, MeetingStatus, MeetingType, VideoMeetingSourceEvent, VideoParticipant } from './video';
export interface VoicemailMessageDetail {
    createdAt?: number;
    duration?: number;
    filename?: string;
    formattedCreatedAtDate?: string;
    formattedCreatedAtTime?: string;
    saveWorkitemId?: string;
    timezone?: string;
}
export interface VoicemailData {
    messageRecorded?: number;
    retries?: number;
    voicemail?: VoicemailMessageDetail;
    workitemId?: string;
}
export interface WorkitemOwner {
    /**
     * Resolved display name for the owning agent (pseudonym / name / "First Last" /
     * username), when the owner is found in the company directory. `undefined` when the
     * directory has not loaded or the owner is not a directory user.
     */
    displayName?: string;
    /** Owning user's id — mirrors `Workitem.ownedById`. */
    id: string;
    /** Owning user's username/email — mirrors `Workitem.agentUsername`. */
    username: string;
}
export interface Workitem {
    [key: string]: unknown;
    _id: string;
    actionCount: number;
    actions: WorkitemAction[];
    actualQueuedAt: number;
    agentUsername: string;
    assignedAt: number;
    businessEvents: Record<string, boolean>;
    callId: string;
    callRecordingData?: ConversationCallRecordingData;
    callback?: {
        callbackTime: number;
        type: string;
        workitemId: string;
    };
    campaignId: string;
    channelType: ChannelType;
    chatMessages?: Message[];
    chatType?: ChatType;
    cnam?: string;
    contact?: ContactDetails;
    contactId: string;
    contacts?: Contact[];
    conversation?: Conversation;
    conversationId?: string;
    conversationIds?: string[] | null;
    conversationMessage?: Message;
    conversationWatermark?: ConversationWatermark;
    createdAt: number;
    currentChatMessage?: Message;
    currentEngagementData?: EngagementData;
    currentSMSMessage?: CurrentSMSMessage;
    currentStateName: string;
    data?: Record<string, unknown> & VoicemailData;
    dialedAt: number;
    displayName?: string;
    dispositionedAt?: number;
    dlpCleanUp: string[];
    dlpFlag: boolean;
    email?: {
        bodyParts: Record<string, EmailBodyPart>;
        from: string;
        inReplyToHeader?: string;
        messageIdHeader?: string;
        referencesHeader?: string;
        subject: string;
        threadId?: string;
        to: string;
    };
    engagementData?: EngagementData[];
    errorMessage?: string;
    forwardedWorkitems?: Workitem[];
    from: string;
    fromAddress?: string;
    fromExtension?: string;
    fromId: string;
    isDraft: boolean;
    isMissedCall?: boolean;
    isOpen: boolean;
    isVoicemail?: boolean;
    mentionedUsers?: string[];
    modifiedAt?: number;
    mute: number;
    offeredAt: number;
    ownedBy: string;
    ownedById: string;
    /**
     * Normalized owner of the workitem, resolved once by the SDK from `ownedById` /
     * `agentUsername`. Present on agent-owned legs (REST + websocket); `undefined` for
     * queue/ivr/unowned legs. Prefer this over reading `ownedById`/`agentUsername` directly.
     */
    owner?: WorkitemOwner;
    parentWorkitemIds?: string[];
    parentWorkitems?: Workitem[];
    priority: WorkItemPriority;
    queuedAt: number;
    queues?: string[];
    read?: boolean;
    record: number;
    regionId: string;
    ringAll: boolean;
    selectedQueue: string;
    selectedQueueName?: string;
    skills: string;
    skimpedEngagementDataList?: SkimpedEngagementData[];
    smsMessageStatus?: ChatMessageState | 200;
    smsMessages?: Message[];
    state: WorkitemState;
    summary?: string;
    tenantId: string;
    terminatedAt: number;
    ticket?: Ticket;
    ticketId?: string;
    time: {
        currentDayOfMonth: number;
        currentDayOfWeek: number;
        currentHour: number;
        currentMin: number;
        currentSec: number;
        currentYear: number;
    };
    timeEvents?: TimeEvent[];
    to: string;
    toAddresses?: string[];
    totalUnReadCount?: number;
    transcriptionMessages?: Message[];
    type: WorkitemType;
    videoMeetingInformation?: {
        conferencePhoneNumber: string;
        eventInfo: {
            calendarSystem: CalendarSystem;
            description: string;
            eventId: string;
            location: string;
            meetingUrl: string;
        };
        hostAgentName: string;
        hostLanguageCode: string;
        hostTimeZone: string;
        meetingCode: string;
        meetingId: string;
        meetingName: string;
        meetingToken: string;
        participants: VideoParticipant[];
        sequence: number;
        sourceEvent: VideoMeetingSourceEvent;
        status: MeetingStatus;
        type: MeetingType;
        validFrom: number;
        validUntil: number;
        videoCallObjectId: string;
        videoMeetingUrl: string;
    };
    vmStatus?: number;
    voicemailFile?: VoiceMailFile;
    voicemailTranscript?: string;
    withACDService: number;
    workitemId: string;
    workitemVoicemailData?: {
        firstName: string;
        missCallNotification: boolean;
        userEmailAddress: string;
        userId: string;
        voicemailFunctionId: string;
    };
}
export interface VoiceMailFile {
    duration: number;
    filename: string;
    saveWorkitemId?: string;
    signedURL: string;
    status: number;
}
interface MessageStatus {
    status?: string;
    statusTimeStamp?: number;
    userId?: string;
    userType?: string;
}
interface SkimpedEngagementData {
    createdAt?: number;
    fromUser?: {
        addresses?: string[];
    };
    id?: string;
    message?: string;
    messageStatus?: MessageStatus[];
    modifiedAt?: number;
    objectType?: string;
    toUser?: {
        addresses?: string[];
    };
    userType?: string;
}
export interface WorkitemStateChangedNotificationData {
    conversationId?: string;
    conversationIds?: string[] | null;
    workitem?: Workitem;
    workitemId: string;
}
export interface WorkitemTerminatedNotificationData {
    workitem: Workitem;
    workitemId: string;
}
export interface WorkitemDeletedNotificationData {
    agentid?: string;
    conversationId?: string;
    draftToText?: boolean;
    userId?: string;
    workitemId: string;
}
export interface CallExternalTransferNotificationData {
    destinationNumber: string;
    workitemId: string;
}
export interface UpdateTicketNotificationData {
    workitem?: Workitem;
    workitemId: string;
}
export interface InternalWorkitemPredictiveNotificationData {
    createdAt: number;
    id: string;
    name: string;
    result: string;
    workitem?: Workitem;
    workitemId: string;
}
export interface WorkitemPredictiveNotificationData {
    createdAt: number;
    id: string;
    name: string;
    result: string;
    workitem: Workitem;
    workitemId: string;
}
export interface WorkitemProgressiveNotificationData {
    createdAt: number;
    id: string;
    name: string;
    result: string;
    workitem: Workitem;
    workitemId: string;
}
export interface InternalWorkitemConversationMessageNotificationData {
    workitem?: Workitem;
    workitemId: string;
}
export interface WorkitemConversationMessageNotificationData {
    workitem: Workitem;
    workitemId: string;
}
export type IvrRecordingsType = 'T_IVR_RECORDING' | 'T_VM_RECORDING' | 'T_SCREEN_RECORDING' | 'T_SCREEN_AND_VOICE_RECORDING';
export type Callback = object;
export interface SendEmailResponsePayload {
    bccAddresses: string[] | EmailAddress[];
    bodyParts: Record<string, EmailBodyPart>;
    ccAddresses: string[] | EmailAddress[];
    createdAt: number;
    from: string;
    subject: string;
    to: string;
    toAddresses: string[] | EmailAddress[];
}
export interface EmailAddress {
    email: string;
    name: string;
}
export interface EmailBodyPart {
    content: string;
    id: string;
    secureAttachment: number;
    type: string;
}
export type WorkitemTicket = Omit<Ticket, 'contactId'> & {
    expansions: {
        agentId: Record<string, unknown>;
        surveyId: Record<string, unknown>;
    };
};
export type GetWorkitemFn = (id: string) => Workitem | null | undefined;
export interface WorkitemRemovedEventData {
    conversationId?: string;
    conversationIds?: string[] | null;
    workitemId: string;
}
export interface FetchWorkitemsResponseBody {
    count: number;
    objects?: Workitem[];
    total: number;
}
export interface WorkitemsChangedEventData {
    workitems: Workitem[];
}
export interface TransferToAgentPayload {
    eventName?: string;
    recording?: WorkitemRecordingOption;
    survey?: unknown;
    userId: string;
    workitemId: string;
}
export interface TransferToExternalPayload {
    campaignId?: string;
    dispositionId?: string;
    eventName?: string;
    extendedWork?: boolean;
    number: string;
    recording?: WorkitemRecordingOption;
    surveyResult?: unknown;
    workitemId: string;
}
/**
 * @deprecated
 */
export interface TransferToQueuePayload {
    eventName?: string;
    queueId: string;
    recording?: WorkitemRecordingOption;
    ringAll?: boolean;
    survey?: unknown;
    workitemId: string;
}
export interface TransferToInboxPayload {
    eventName?: string;
    inboxId: string;
    recording?: WorkitemRecordingOption;
    ringAll?: boolean;
    survey?: unknown;
    workitemId: string;
}
export interface ReserveAgentInInboxPayload {
    eventName?: string;
    inboxId: string;
    recording?: WorkitemRecordingOption;
    ringAll?: boolean;
    surveyResult?: unknown;
    workitemId: string;
}
export interface WarmTransferPayload {
    dispositionId?: string;
    eventName?: string;
    extendedWork?: boolean;
    recording?: WorkitemRecordingOption;
    surveyResult?: unknown;
    workitemIds?: string[];
}
export interface ConferenceStateNotificationData {
    inconference: boolean;
}
export interface CreateConferenceWithWorkitemsPayload {
    addMe: boolean;
    workitemIds: string[];
}
export interface AddToConferenceOptions {
    beep: boolean;
    music: boolean;
    musicURL: string;
    muted: boolean;
    record: boolean;
}
export interface RemoveFromConferencePayload {
    action?: 'hold' | 'active' | 'hangup';
    workitemId: string;
}
export interface InternalWorkitemTransferNotificationData {
    coldTransfer: boolean | string;
    fromUserFirstName?: string;
    fromUserId: string;
    fromUserLastName?: string;
    workitem?: Workitem;
    workitemId: string;
}
export interface WorkitemTransferNotificationData {
    coldTransfer: boolean;
    fromUserFirstName?: string;
    fromUserId: string;
    fromUserLastName?: string;
    workitem: Workitem;
    workitemId: string;
}
export interface InternalExtensionWorkitemNotificationData {
    agentid: string;
    id: string;
    workitem?: Workitem;
    workitemId?: string;
}
export interface ExtensionWorkitemNotificationData {
    agentid: string;
    id: string;
    workitem: Workitem;
}
export interface WorkitemSummaryNotificationData {
    createdAt: number;
    id: string;
    name: 'WorkitemSummaryNotification';
    result: 'SUCCESS';
    state: 'started' | 'ended' | 'failed';
    summary: string;
    workitem?: Workitem;
    workitemId: string;
}
interface BaseBuildSignedURLPayload {
    fileName?: string;
    type: 'workitem' | 'message' | 'voicemail' | 'recording' | 'email' | 'twitter';
}
export interface BuildWorkitemSignedURLPayload extends BaseBuildSignedURLPayload {
    fileName: string;
    type: 'workitem';
    workitemId: string;
}
export interface BuildVoicemailSignedURLPayload extends BaseBuildSignedURLPayload {
    fileName: string;
    regionId?: string;
    type: 'voicemail';
    workitemId: string;
}
export interface BuildRecordingSignedURLPayload extends BaseBuildSignedURLPayload {
    fileName: string;
    type: 'recording';
}
export interface BuildMessageSignedURLPayload extends BaseBuildSignedURLPayload {
    fileName: string;
    messageId: string;
    type: 'message';
}
export interface BuildEmailSignedURLPayload extends BaseBuildSignedURLPayload {
    fileName: string;
    type: 'email';
    workitemId: string;
}
export interface BuildTwitterSignedURLPayload extends BaseBuildSignedURLPayload {
    brandSocialId: string;
    mediaURL: string;
    type: 'twitter';
}
export declare const isBuildWorkitemSignedURLPayload: (payload: BaseBuildSignedURLPayload) => payload is BuildWorkitemSignedURLPayload;
export declare const isBuildEmailSignedURLPayload: (payload: BaseBuildSignedURLPayload) => payload is BuildEmailSignedURLPayload;
export declare const isBuildTwitterSignedURLPayload: (payload: BaseBuildSignedURLPayload) => payload is BuildTwitterSignedURLPayload;
export declare const isBuildVoicemailSignedURLPayload: (payload: BaseBuildSignedURLPayload) => payload is BuildVoicemailSignedURLPayload;
export declare const isBuildRecordingSignedURLPayload: (payload: BaseBuildSignedURLPayload) => payload is BuildRecordingSignedURLPayload;
export type CampaignType = 'Email' | 'Extension' | 'Fax' | 'Outbound' | 'Predictive' | 'Progressive' | 'SMS';
export interface WorkitemFailedNotificationData {
    agentId?: string;
    agentid?: string;
    createdAt: number;
    id: string;
    name: 'WorkitemFailedNotification';
    reason: string;
    userId?: string;
    workitem?: Workitem;
    workitemId: string;
}
export interface BackfillWorkitemsNotificationData {
    agentId?: string;
    agentid?: string;
    backfillCount: number;
    backfilledWorkitems: Workitem[];
    conversationId: string;
    createdAt: number;
    id: string;
    name: 'BackfillWorkitemsNotification';
    result: string;
    userId: string;
}
export interface WorkitemsAISummaryNotificationData {
    conversationId: string;
    createdAt: number;
    id: string;
    name: 'WorkitemsAiSummaryNotification';
    result: 'SUCCESS';
    skipMobileNotification: boolean;
    summaryList: [
        {
            aiSummary: string;
            workitemId: string;
        }
    ];
}
export interface AISummaryNotificationData {
    agentid: string;
    createdAt: number;
    id: string;
    name: 'AISummaryNotification';
    result: 'SUCCESS';
    skipMobileNotification: boolean;
    summaryList: [
        {
            agentSolution: string;
            callDisposition: string;
            createdAt: number;
            customerIssue: string;
            handoverReason: string;
            id: string;
            modifiedAt: number;
            requestId: string;
            sentiment: string;
            summary: string;
            timeSaved: number;
            topic: string;
        }
    ];
    ticketId: string;
    userId: string;
    workitemId: string;
}
export interface FetchTranscriptsPayload {
    workitemId: string;
}
export interface TranscriptPart {
    fileContentSize: number;
    fileContentType: string;
    filename: string;
    fromId: string;
    id: string;
    priority: boolean;
    textMsg: string;
    timestamp: number;
    type: string;
    viewedBy?: Array<{
        timestamp: number;
        userId: string;
    }>;
}
export type FetchTranscriptsResponse = TranscriptPart[];
export interface AssignContactPayload {
    contact: {
        id: string;
        name: string;
    };
    workitemId: string;
}
export interface DeleteEmailWorkitemAttachmentPayload {
    attachmentId: string;
    workitemId: string;
}
export interface InternalUserMessagesNotificationData {
    agentid: string;
    createdAt: number;
    id: string;
    name: string;
    queryResults: {
        count: number;
        objects: Message[];
        total: number;
    };
    result: string;
    userId: string;
}
export interface WorkitemTerminationFailedNotificationData {
    workitemId: string;
}
export interface MessageTypingNotificationData {
    createdAt: number;
    fromId: string;
    id: string;
    name: 'MessageTypingNotification';
    result: string;
    skipMobileNotification: boolean;
    waitTime: number;
    workitemId: string;
}
export interface InformationNotificationData {
    cancelButton: boolean;
    duration: number;
    message: string;
    okButton: boolean;
    type: string;
    userId: string;
    workitemId: string;
}
export interface WorkitemReadNotificationData {
    affectedCount: number;
    agentid: string;
    conversationId: string;
    createdAt: number;
    id: string;
    name: 'WorkitemReadNotification';
    read: boolean;
    result: string;
    skipMobileNotification: boolean;
    userId: string;
    workitemId: string | null;
}
export interface WorkitemVoicemailNotificationData {
    createdAt: number;
    id: string;
    name: 'WorkitemVoicemailNotification';
    reset: boolean;
    result: string;
    skipMobileNotification: boolean;
    userId: string;
    workitem?: Workitem;
    workitemId: string;
}
export {};
//# sourceMappingURL=workitem.d.ts.map