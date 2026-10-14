import type { ChatMessageSource, ChatMessageState, ChatStatus, WorkitemState } from '../models';
import { type ConversationStatus, type Participant } from './conversation';
import { type UserDetails } from './user';
import { type StringWithAutocomplete } from './util';
import { type Workitem } from './workitem';
export interface FileAttachment {
    contentType: string;
    name: string;
    size: number;
}
export interface Message {
    attachments?: Attachment[];
    conversationId?: string;
    draftMsg?: string;
    fileAttachments?: FileAttachment[];
    fileContentSize: number;
    fileContentType: string;
    filename: string;
    from?: string;
    fromId: string;
    id: string;
    isEmail?: boolean;
    mentionedUsers?: string[];
    modifiedAt?: number;
    name?: string;
    priority: boolean;
    signedURL?: string;
    smsId?: string;
    state?: ChatMessageState;
    textMsg: string;
    timestamp: number;
    toAddresses?: string[];
    toId: string;
    transcript?: {
        content: string;
        contentType: string;
        createdAt: string;
        endedAt: number;
        id: string;
        modifiedAt: string;
        objectType: 'transcript';
        startedAt: number;
        status: string;
        tone: string;
        type: string;
    };
    type: ChatMessageSource;
    viewedBy?: Array<{
        status: ChatStatus;
        timestamp: number;
        userId: string;
    }>;
    yes?: boolean;
}
export interface Attachment {
    fileContentSize: number;
    filename: string;
    imgSrc: string;
}
export interface MessageAttachment {
    mediaMimeType: string;
    mediaPath: string;
    mediaSize: number;
    mediaType: string;
    /**
     * @deprecated Use sdk.getWorkitemService().buildSignedURL()
     */
    signedURL: string;
    title: string;
}
export interface ChatMessage {
    attachments?: MessageAttachment[];
    channel: string;
    channelId: string;
    createdAt: number;
    createdBy: string;
    fromUser: {
        name: string;
        userId?: string;
        userName: string;
    };
    id: string;
    message: string;
    messageId: string;
    messageMediaType: string;
    messageStatus: Array<{
        status: string;
        statusTimeStamp: number;
    }>;
    messageType: string;
    modifiedAt: number;
    modifiedBy: string;
    searchText: string;
    sourceId: string;
    toUser: {
        userId: string;
    };
    uid: string;
    userType: string;
    workitemId: string;
}
export interface CurrentSMSMessage {
    attachments?: MessageAttachment;
    channel: 'SMS';
    channelId: string;
    createdAt: number;
    fileAttachments?: string[] | FileAttachment[];
    fromId?: string;
    fromUser: {
        name: string;
        userId: string;
    };
    id: string;
    message: string;
    messageId: string;
    messageMediaType: string;
    messageStatus: [
        {
            status: string;
            statusTimeStamp: number;
        }
    ];
    messageType: string;
    modifiedAt: number;
    searchText: string;
    sourceId: 'chat_sms';
    textMsg?: string;
    toAddresses?: string[];
    toId?: string;
    toUser: {
        name: string;
        userId: string;
    };
    type: ChatMessageSource;
    uid: string;
    userType: string;
    viewedBy?: Array<{
        phoneNumber?: string;
        sender?: boolean;
        status: ChatStatus;
        timestamp: number;
        userId: string;
    }>;
    workitemId: string;
    yes?: boolean;
}
export interface ConversationWatermark {
    addedParticipants?: string[];
    allParticipants?: string[];
    archivedChannel?: boolean;
    channelName?: string;
    createdBy: string;
    leaveChannel?: boolean;
    mentionedUserIds?: string[];
    newChannelName?: string;
    oldChannelName?: string;
    removedParticipants?: string[];
    type: string;
    unArchivedChannel?: boolean;
    users: Record<string, Partial<UserDetails> & {
        addresses?: string[];
    }>;
}
export interface SMSEngagementData extends BaseEngagementData {
    channel: 'SMS';
    fromUser: {
        name: string;
        userId: string;
    };
    sourceId: 'chat_sms';
    toUser: {
        name: string;
        userId: string;
    };
}
export interface InstagramEngagementData extends BaseEngagementData {
    channel: 'INSTAGRAM';
    fromUser: {
        brandName?: string;
        brandUserName?: string;
        name: string;
        profilePicUrl: string;
        userId: string;
    };
    sourceId: 'chat_ig';
}
export interface EmailEngagementData extends BaseEngagementData {
    channel: 'EMAIL';
    contentModifiedAt?: string;
    contentModifiedBy?: string;
    fromUser: {
        name?: string;
        userId: string;
    };
    repliedToMessageId?: string;
    sourceId: 'eml';
    toAddresses?: string[];
}
export interface ChatEngagementData extends BaseEngagementData {
    channel: 'CHAT';
    fromUser: {
        name: string;
        username: string;
    };
    isDraft?: boolean;
    mentionedUserIds?: string[];
    repliedToMessageId?: string;
    sourceId: 'chat';
    toAddresses?: string[];
    toUser: {
        brandName: string;
        brandSocialId: string;
        brandUserName: string;
    };
}
export interface VoiceEngagementData extends BaseEngagementData {
    channel: 'VOICE';
    fromUser: {
        name: string;
        userId: string;
    };
    participants?: Participant[];
    sourceId: 'voice';
    toUser: {
        userId: string;
    };
}
export interface VideoMeetingEngagementData extends BaseEngagementData {
    channel: 'VIDEO_MEETING';
    fromUser: {
        name: string;
        userId: string;
    };
    sourceId: 'video_meeting';
    toUser: {
        userId?: string;
    };
}
export type EngagementData = ChatEngagementData | EmailEngagementData | InstagramEngagementData | SMSEngagementData | VideoMeetingEngagementData | VoiceEngagementData;
export interface BaseEngagementData {
    _id?: string;
    active?: boolean;
    archived?: boolean;
    assignedAt?: number;
    attachments?: MessageAttachment[];
    channelId: string;
    contactId?: string;
    content?: string;
    conversationId?: string;
    conversationName?: string;
    conversationTopicName?: string;
    conversationType?: string;
    conversationWatermark?: ConversationWatermark;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    draftSent?: boolean;
    forwardedWorkitems?: unknown[];
    fromAddress?: string;
    id: string;
    isDraft?: boolean;
    message: string;
    messageHtml?: string;
    messageId: string;
    messageMediaType: string;
    messageStatus: EngagementDataMessageStatus[];
    messageSubType?: string;
    messageType: string;
    modifiedAt: number;
    modifiedBy: string;
    name?: string;
    ownerId?: string;
    parentMessageId?: string;
    parentTicketId?: string;
    parentWorkitemIds?: string[];
    parentWorkitems?: Workitem[];
    participants?: Participant[];
    record?: unknown;
    sharedInboxId?: string;
    sharedInboxName?: string;
    state?: WorkitemState;
    status: ConversationStatus;
    tenantId?: string;
    terminationMetadata?: string;
    toBCCEmailIds: string[];
    toCCEmailIds: string[];
    toEmailIds: string[];
    topicName?: string;
    uid: string;
    unreadCount?: number;
    userType: string;
    videoMeetingId?: string;
    voicemailDuration?: unknown;
    voicemailFileName?: string;
    voicemailSaveWorkitemId?: string;
    voicemailTranscript?: string;
    workitemId: string;
}
export interface MessageNotificationData {
    engagementData?: EngagementData;
    message?: Message;
    messageId: string;
    workitemId: string;
}
/**
 * @deprecated
 */
export interface MessagesEventData {
    message?: Message;
    messageId?: string;
    workitem: Workitem;
    workitems: Workitem[];
}
export type EngagementDataStatus = StringWithAutocomplete<'SENT' | 'PENDING' | 'DELIVERED' | 'RECEIVED'>;
export interface EngagementDataMessageStatus {
    status: EngagementDataStatus;
    statusTimeStamp: number;
}
export interface EngagementDataStatusUpdateNotificationData {
    agentid: string;
    createdAt: number;
    /**
     * Information for `messageStatus` field in an `engagementData` array entry
     */
    engagementDataPayloadList: EngagementDataMessageStatus[];
    /**
     * Partial match to an `engagementData` array entry's `id` field
     */
    engagementDataUid: string;
    id: string;
    name: 'EngagementDataStatusUpdateNotification';
    result: string;
    userId: string;
    workitemId: string;
}
//# sourceMappingURL=message.d.ts.map