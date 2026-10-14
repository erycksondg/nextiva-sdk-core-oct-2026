export interface CreateVideoMeetingPayload {
    context?: Context;
    eventInfo?: EventInfo;
    invitees: Invitee[];
    meetingOptions: MeetingOptions;
    name: string;
    personalizedMessage?: string;
    type: MeetingType;
}
export interface VideoPagination {
    currentPage?: number;
    itemsPerPage: number;
    order: 'ASC' | 'DESC';
    page: number;
    sort: string;
    totalItems?: number;
    totalPages?: number;
}
export interface FetchMeetingsResponse {
    pagination: VideoPagination;
    queryParameters?: QueryParameters;
    videoMeetings: VideoMeeting[];
}
export interface QueryParameters {
    conversationId?: string | null;
    pagination?: VideoPagination;
    statuses?: MeetingStatus[];
    type?: MeetingType;
    userIds?: string[];
    validFrom?: string | null;
    validUntil?: {
        after: string | null;
        before: string | null;
    };
}
export interface PstnBridge {
    callId?: string;
    meetingId: string;
    phoneNumber: string;
    pin: string;
}
export interface VideoMeeting {
    context: Context;
    eventInfo?: EventInfo;
    id: string;
    meetingOptions: MeetingOptions;
    meetingToken: string;
    name: string;
    participants: VideoParticipant[];
    pstnBridge?: PstnBridge;
    status: MeetingStatus;
    type: MeetingType;
}
export interface VideoTokenResponse {
    expiration: string;
    token: string;
}
export interface refreshVideoQueryParameters {
    updateSession?: boolean;
}
export declare const ContextTypes: {
    readonly NONE: "NONE";
    readonly PERSONAL_INBOX: "PERSONAL_INBOX";
    readonly SHARED_INBOX: "SHARED_INBOX";
};
export type ContextType = (typeof ContextTypes)[keyof typeof ContextTypes];
export interface Context {
    campaignId?: string;
    contactId?: string;
    contextType?: ContextType;
    conversationId?: string;
    workitemId?: string;
}
export interface MeetingOptions {
    duration: number;
    validFrom: string;
    validUntil: string;
}
export declare const ParticipantRoles: {
    readonly BOT: "BOT";
    readonly GUEST: "GUEST";
    readonly HOST: "HOST";
    readonly REGULAR: "REGULAR";
};
export type ParticipantRole = (typeof ParticipantRoles)[keyof typeof ParticipantRoles];
export interface Invitee {
    id: string;
    role: ParticipantRole;
}
export interface EventInfo {
    description?: string;
    location?: string;
    meetingUrl?: string;
}
export declare const ParticipantStatuses: {
    readonly ADDED: "ADDED";
    readonly CONNECTED: "CONNECTED";
    readonly DISCONNECTED: "DISCONNECTED";
    readonly INVITED: "INVITED";
    readonly MISSED_MEETING: "MISSED_MEETING";
    readonly REMOVED: "REMOVED";
    readonly TERMINATED: "TERMINATED";
};
export type ParticipantStatus = (typeof ParticipantStatuses)[keyof typeof ParticipantStatuses];
export interface VideoParticipant {
    azureIdentity: {
        azureUserId: string;
    };
    channels: Array<{
        channel: string;
        channelId: string;
    }>;
    email?: string;
    fullName: string;
    id: string;
    invitationResponse?: ParticipantResponseAction;
    role: ParticipantRole;
    status: ParticipantStatus;
}
export declare const MeetingStatuses: {
    readonly ACTIVE: "ACTIVE";
    readonly CANCELLED: "CANCELLED";
    readonly CLOSING: "CLOSING";
    readonly COMPLETED: "COMPLETED";
    readonly DISABLED: "DISABLED";
    readonly ENABLED: "ENABLED";
};
export type MeetingStatus = (typeof MeetingStatuses)[keyof typeof MeetingStatuses];
export declare const MeetingTypes: {
    readonly INSTANT: "INSTANT";
    readonly OPEN: "OPEN";
    readonly SCHEDULED: "SCHEDULED";
};
export type MeetingType = (typeof MeetingTypes)[keyof typeof MeetingTypes];
export interface ParticipantResponsePayload {
    action: ParticipantResponseAction;
    meetingId: string;
    timestamp?: string;
}
export declare const ParticipantResponseActions: {
    readonly ACCEPTED: "ACCEPTED";
    readonly DECLINED: "DECLINED";
    readonly NO_RESPONSE: "NO_RESPONSE";
};
export type ParticipantResponseAction = (typeof ParticipantResponseActions)[keyof typeof ParticipantResponseActions];
export declare const VideoMeetingSourceEvents: {
    readonly OutboundVideoMeetingChatTranscriptionReady: "OutboundVideoMeetingChatTranscriptionReady";
    readonly OutboundVideoMeetingCreated: "OutboundVideoMeetingCreated";
    readonly OutboundVideoMeetingDeleted: "OutboundVideoMeetingDeleted";
    readonly OutboundVideoMeetingDisposed: "OutboundVideoMeetingDisposed";
    readonly OutboundVideoMeetingEnded: "OutboundVideoMeetingEnded";
    readonly OutboundVideoMeetingForceDisposeEvent: "OutboundVideoMeetingForceDisposeEvent";
    readonly OutboundVideoMeetingParticipantAdded: "OutboundVideoMeetingParticipantAdded";
    readonly OutboundVideoMeetingParticipantDeclined: "OutboundVideoMeetingParticipantDeclined";
    readonly OutboundVideoMeetingParticipantDismissMeetingEvent: "OutboundVideoMeetingParticipantDismissMeetingEvent";
    readonly OutboundVideoMeetingParticipantMissed: "OutboundVideoMeetingParticipantMissed";
    readonly OutboundVideoMeetingParticipantOnHoldEvent: "OutboundVideoMeetingParticipantOnHoldEvent";
    readonly OutboundVideoMeetingParticipantRemoved: "OutboundVideoMeetingParticipantRemoved";
    readonly OutboundVideoMeetingParticipantResumeEvent: "OutboundVideoMeetingParticipantResumeEvent";
    readonly OutboundVideoMeetingRecordingReady: "OutboundVideoMeetingRecordingReady";
    readonly OutboundVideoMeetingRecordingStarted: "OutboundVideoMeetingRecordingStarted";
    readonly OutboundVideoMeetingRecordingStopped: "OutboundVideoMeetingRecordingStopped";
    readonly OutboundVideoMeetingStarted: "OutboundVideoMeetingStarted";
    readonly OutboundVideoMeetingUpdated: "OutboundVideoMeetingUpdated";
};
export type VideoMeetingSourceEvent = (typeof VideoMeetingSourceEvents)[keyof typeof VideoMeetingSourceEvents];
export declare const CalendarSystems: {
    readonly GOOGLE: "GOOGLE";
    readonly MS_OUTLOOK: "MS_OUTLOOK";
    readonly NONE: "NONE";
};
export type CalendarSystem = (typeof CalendarSystems)[keyof typeof CalendarSystems];
//# sourceMappingURL=video.d.ts.map