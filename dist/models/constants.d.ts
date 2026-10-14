/**
 * All errors that can be retured by the API
 */
export declare const Errors: {
    ACDLoginError: {
        code: number;
        message: string;
        name: string;
    };
    InvalidEmailAddress: {
        code: number;
        name: string;
    };
    InvalidUsernamePassword: {
        code: number;
        message: string;
        name: string;
    };
    LogoutNotification: {
        code: number;
        message: string;
        name: string;
    };
    TwilioRefreshTokenError: {
        code: number;
        message: string;
        name: string;
    };
    Unknown: {
        code: number;
        name: string;
    };
};
/**
 * All information messages that can be returned by the API
 */
export declare const Info: {
    ACDLoginSuccessful: {
        code: number;
        message: string;
        name: string;
    };
    LoginSuccessful: {
        code: number;
        message: string;
        name: string;
    };
    TwilioRefreshTokenSuccessful: {
        code: number;
        message: string;
        name: string;
    };
};
export declare const RangeTypes: {
    /**
     * @deprecated Use RangeTypes.DateRange
     */
    readonly DataRange: "daterange";
    readonly DateRange: "daterange";
    readonly Last30Days: "last30days";
    readonly Last3Days: "last3days";
    readonly Last7Days: "last7days";
    readonly LastMonth: "lastmonth";
    readonly LastWeek: "lastweek";
    readonly ThisMonth: "thismonth";
    readonly ThisWeek: "thisweek";
    readonly Today: "today";
    readonly Yesterday: "yesterday";
};
export type RangeType = (typeof RangeTypes)[keyof typeof RangeTypes];
export declare const WorkitemStates: {
    readonly Accepted: "accepted";
    readonly Active: "active";
    readonly Conference: "conference";
    readonly DirectConnect: "directconnect";
    readonly Dispositioned: "dispositioned";
    readonly History: "history";
    readonly Hold: "hold";
    readonly InQueue: "inqueue";
    readonly InReview: "inreview";
    readonly Offered: "offered";
    readonly Terminated: "terminated";
    readonly Transfer: "transfer";
    readonly Voicemail: "voicemail";
};
export type WorkitemState = (typeof WorkitemStates)[keyof typeof WorkitemStates];
export declare const ChatMessageStates: {
    readonly CONFIRMED: "confirmed";
    readonly DELIVERED: "delivered";
    readonly FAILED: "failed";
    readonly PENDING: "pending";
    readonly SENDING: "sending";
    readonly SENT: "sent";
    readonly TYPING: "typing";
    readonly UNDELIVERED: "undelivered";
    readonly WAITING: "waiting";
};
export type ChatMessageState = (typeof ChatMessageStates)[keyof typeof ChatMessageStates];
export declare const WorkitemTypes: {
    readonly Chat: "Chat";
    readonly ConversationMessage: "ConversationMessage";
    readonly ConversationWatermark: "ConversationWatermark";
    readonly Facebook: "Facebook";
    readonly InboundCall: "InboundCall";
    readonly InboundEmail: "Email";
    readonly InboundExtensionCall: "InboundExtensionCall";
    readonly InboundFax: "InboundFax";
    readonly InboundSMS: "InboundSMS";
    readonly Instagram: "Instagram";
    readonly OutboundCall: "OutboundCall";
    readonly OutboundEmail: "OutboundEmail";
    readonly OutboundExtensionCall: "OutboundExtensionCall";
    readonly OutboundFax: "OutboundFax";
    readonly OutboundSMS: "OutboundSMS";
    readonly OutboundVideoMeeting: "OutboundVideoMeeting";
    readonly PredictiveCall: "PredictiveCall";
    readonly PredictiveSMS: "PredictiveSMS";
    readonly PreviewCall: "PreviewCall";
    readonly ProgressiveCall: "ProgressiveCall";
    readonly Survey: "Survey";
    readonly SystemCall: "SystemCall";
    readonly Twitter: "Twitter";
    readonly Unrecognized: "Unrecognized";
    readonly Whatsapp: "Whatsapp";
    readonly Workflow: "Workflow";
    readonly Youtube: "Youtube";
};
export type WorkitemType = (typeof WorkitemTypes)[keyof typeof WorkitemTypes];
export declare const MediaTypes: {
    readonly Chat: "Chat";
    readonly Email: "Email";
    readonly InboundCall: "InboundCall";
    readonly InboundExtensionCall: "InboundExtensionCall";
    readonly InboundSMS: "InboundSMS";
    readonly OutboundCall: "OutboundCall";
    readonly OutboundExtensionCall: "OutboundExtensionCall";
    readonly OutboundSMS: "OutboundSMS";
    readonly PredictiveCall: "PredictiveCall";
    readonly PredictiveSMS: "PredictiveSMS";
    readonly ProgressiveCall: "ProgressiveCall";
};
export type MediaType = (typeof MediaTypes)[keyof typeof MediaTypes];
export declare const TelephonyTypes: {
    readonly PSTN: "PSTN";
    readonly SIP: "SIP";
    readonly WebRTC: "WEBRTC";
};
export type TelephonyType = (typeof TelephonyTypes)[keyof typeof TelephonyTypes];
export declare const WebRTCProviders: {
    readonly Nextiva: "nextiva";
    readonly Thrio: "thrio";
    readonly Twilio: "twilio";
};
export type WebRTCProvider = (typeof WebRTCProviders)[keyof typeof WebRTCProviders];
export declare const ChatStatuses: {
    readonly DELIVERED: "delivered";
    readonly FAILED: "failed";
    readonly PENDING: "pending";
    readonly UNDELIVERED: "undelivered";
};
export type ChatStatus = (typeof ChatStatuses)[keyof typeof ChatStatuses];
export declare const DialTypes: {
    Campaign: number;
    Locked: number;
    State: number;
    User: number;
};
export declare const PhoneStates: {
    readonly OffHook: "offHook";
    readonly OnHook: "onHook";
    readonly Ringing: "ringing";
};
export type PhoneState = (typeof PhoneStates)[keyof typeof PhoneStates];
export declare const ChannelTypes: {
    readonly CHAT: "chat";
    readonly CONVERSATION: "conversation";
    readonly EMAIL: "email";
    readonly FAX: "fax";
    readonly SMS: "sms";
    readonly SOCIAL: "social";
    readonly VIDEO_MEETING: "videoMeeting";
    readonly VOICE: "voice";
};
export type ChannelType = (typeof ChannelTypes)[keyof typeof ChannelTypes];
export declare const OutboundChannelCategories: {
    readonly COMPANY: "COMPANY";
    readonly DIRECT: "DIRECT";
};
export type OutboundChannelCategory = (typeof OutboundChannelCategories)[keyof typeof OutboundChannelCategories];
export declare const ChatTypes: {
    AGENT: string;
    CHAT: string;
    CLIENT: string;
    DIRECTORY: string;
    INSTAGRAM: string;
    MESSENGER: string;
    SMS: string;
    SURVEY: string;
    THRIO: string;
    TWITTER: string;
    USER: string;
    WHATSAPP: string;
};
export type ChatType = (typeof ChatTypes)[keyof typeof ChatTypes];
export declare const WorkItemPriorities: {
    readonly High: 4;
    readonly Highest: 5;
    readonly Low: 2;
    readonly Lowest: 1;
    readonly Standard: 3;
};
export type WorkItemPriority = (typeof WorkItemPriorities)[keyof typeof WorkItemPriorities];
export declare const TimeEventTypes: {
    readonly ActiveForUser: "useractive";
    readonly AnsweredByUserInQueue: "answered";
    readonly AssignedToUser: "assigned";
    readonly DispositionedByUser: "userdisposition";
    readonly DroppedInQueue: "dropped";
    readonly OutboundCallConnected: "outboundconnected";
    readonly OutboundCallStarted: "startoutboundcall";
    readonly StartACDCallback: "startacdcb";
    readonly StartACDVoicemail: "startacdvm";
    readonly TerminatedByCustomer: "terminated";
    readonly TerminatedByUser: "userterminated";
    readonly UserStartRecording: "userstartrecording";
    readonly UserStopRecording: "userstoprecording";
    readonly VideoMeetingCreated: "video_meeting_created";
    readonly VideoMeetingParticipantConnected: "video_meeting_participant_connected";
    readonly VideoMeetingParticipantDisconnected: "video_meeting_participant_disconnected";
    readonly VideoMeetingStarted: "video_meeting_started";
    readonly VideoMeetingTerminated: "video_meeting_terminated";
};
export type TimeEventType = (typeof TimeEventTypes)[keyof typeof TimeEventTypes];
export declare const WorkitemActions: {
    readonly ACTIVE: "active";
    readonly CONFERENCE: "conference";
    readonly DIAL: "dial";
    readonly DISPOSITIONED: "dispositioned";
    readonly DTMF: "dtmf";
    readonly FORWARD: "forward";
    readonly HOLD: "hold";
    readonly MUTE: "mute";
    readonly NONE: "none";
    readonly REPLY: "reply";
    readonly REPLYALL: "replyAll";
    readonly STARTRECORDING: "startRecording";
    readonly STOPRECORDING: "stopRecording";
    readonly TERMINATE: "hangup";
    readonly TERMINATED: "terminated";
    readonly TRANSFER: "transfer";
    readonly UNMUTE: "unMute";
    readonly VOICEMAIL: "voicemail";
};
export type WorkitemAction = (typeof WorkitemActions)[keyof typeof WorkitemActions];
export declare const OutboundModes: {
    readonly NotLoggedIn: 0;
    readonly Predictive: 2;
    readonly Progressive: 1;
    readonly Quarterback: 3;
};
export type OutboundMode = (typeof OutboundModes)[keyof typeof OutboundModes];
/**
 * @deprecated prefer WorkitemConversationTypes, we might remove this in a future version
 */
export declare const ConversationTypes: {
    readonly Agent: "agent";
    readonly Chat: "CHAT";
    readonly Client: "client";
    readonly Directory: "directory";
    readonly SMS: "SMS";
    readonly User: "user";
};
/**
 * @deprecated prefer WorkitemConversationType, we might remove this in a future version
 */
export type ConversationType = (typeof ConversationTypes)[keyof typeof ConversationTypes];
export declare const ConversationSources: {
    readonly Bot: "BOT";
    readonly Client: "CLIENT";
    readonly File: "FILE";
    readonly MonitoringEnded: "MONITORING_ENDED";
    readonly MonitoringStarted: "MONITORING_STARTED";
    readonly Queue: "QUEUE";
    readonly Supervisor: "SUPERVISOR";
    readonly Topic: "TOPIC";
    readonly User: "USER";
};
export type ConversationSource = (typeof ConversationSources)[keyof typeof ConversationSources];
export declare const TransferTypes: {
    readonly Agent: "agent";
    readonly External: "external";
    readonly Queue: "queue";
    readonly Reserve: "reserve";
    readonly Warm: "warm";
};
export type TransferType = (typeof TransferTypes)[keyof typeof TransferTypes];
export declare const CallbackTypes: {
    readonly ACDCallback: "ACDCALLBACK";
    readonly Callback: "CALLBACK";
    readonly PersonalCallback: "PERSONALCALLBACK";
    readonly WebCallback: "WEBCALLBACK";
};
export type CallbackType = (typeof CallbackTypes)[keyof typeof CallbackTypes];
export declare const StatusTypes: {
    readonly Available: 0;
    readonly Busy: 3;
    readonly DoNotDisturb: 6;
    readonly Login: 1;
    readonly Logout: 2;
    readonly NoAnswer: 4;
    readonly OnCall: -3;
    readonly Pause: 5;
    readonly Working: -1;
    readonly Wrapup: -2;
};
export type StatusType = (typeof StatusTypes)[keyof typeof StatusTypes];
export declare const StatusTypesToLabel: {
    readonly 0: "Available";
    readonly 3: "Busy";
    readonly 1: "Login";
    readonly 2: "Logout";
    readonly 4: "No Answer";
    readonly [-1]: "Working";
    readonly [-2]: "Wrapup";
    readonly 5: "Pause";
    readonly 6: "Do not Disturb";
    readonly [-3]: "On Call";
};
export type StatusTypeLabel = (typeof StatusTypesToLabel)[keyof typeof StatusTypesToLabel];
export declare const SupervisingStates: {
    readonly Coach: 3;
    readonly Join: 2;
    readonly Listen: 1;
    readonly Monitor: 5;
    readonly MonitorWorkitem: 6;
    readonly None: 0;
    readonly Recording: 4;
};
export type SupervisingState = (typeof SupervisingStates)[keyof typeof SupervisingStates];
export declare const StatisticTypes: {
    readonly Campaigns: "campaigns";
    readonly Dashboards: "dashboards";
    readonly OutboundLists: "outboundlists";
    readonly Queues: "queues";
    readonly Supervision: "supervision";
    readonly Users: "users";
    readonly Workitems: "workitems";
};
export type StatisticType = (typeof StatisticTypes)[keyof typeof StatisticTypes];
export declare const WidgetTypes: {
    readonly AgentGoal: "agentGoal";
    readonly AgentKPI: "agentKPI";
    readonly Custom: "custom";
    readonly Dashboard: "dashboard";
    readonly GamificationAgentTotal: "gamificationAgentTotal";
    readonly GamificationDispositionTotal: "gamificationDispositionTotal";
    readonly GoogleDataStudio: "googleDataStudio";
    readonly Grid: "grid";
    readonly MissedCalls: "missedCalls";
    readonly MyHistory: "myhistory";
    readonly Occupancy: "occupancy";
    readonly PersonalCallbacks: "personalCallbacks";
    readonly SupervisorQueueKPI: "supervisorQueueKPI";
    readonly SupervisorQueueSLA: "supervisorQueueSLA";
    readonly SupervisorQueueTime: "supervisorQueueTime";
    readonly Voicemail: "voicemail";
};
export type WidgetType = (typeof WidgetTypes)[keyof typeof WidgetTypes];
export declare const FileStates: {
    readonly Cancelled: "UPLOAD_CANCELLED";
    readonly Commited: "UPLOAD_COMMITED";
    readonly Error: "TERMINATED_ERROR";
    readonly FileTooLarge: "FILE_TOO_LARGE";
    readonly Success: "TERMINATED_SUCCESS";
    readonly Uploading: "UPLOADING";
};
export type FileState = (typeof FileStates)[keyof typeof FileStates];
export declare const DuplicateStrategies: {
    readonly LastNameOrEmail: "LastNameOrEmail";
    readonly NumbersAcrossLists: "NumbersAcrossLists";
    readonly NumbersAcrossListsRemoveFromCurrent: "NumbersAcrossListsRemoveFromCurrent";
    readonly NumbersAcrossListsSameCampaign: "NumbersAcrossListsSameCampaign";
    readonly NumbersAcrossListsSameCampaignRemoveFromCurrent: "NumbersAcrossListsSameCampaignRemoveFromCurrent";
    readonly NumbersOnly: "NumbersOnly";
};
export type DuplicateStrategy = (typeof DuplicateStrategies)[keyof typeof DuplicateStrategies];
export declare const CHAT_MSG_SOURCE: {
    readonly BOT: "BOT";
    readonly CLIENT: "CLIENT";
    readonly FILE: "FILE";
    readonly MONITORING_ENDED: "MONITORING_ENDED";
    readonly MONITORING_STARTED: "MONITORING_STARTED";
    readonly QUEUE: "QUEUE";
    readonly RATE: "RATE";
    readonly SUPERVISOR: "SUPERVISOR";
    readonly TOPIC: "TOPIC";
    readonly USER: "USER";
};
export type ChatMessageSource = (typeof CHAT_MSG_SOURCE)[keyof typeof CHAT_MSG_SOURCE];
export declare const WORKITEM_RECORDING_OPTIONS: {
    readonly KEEP_ACTION: "keepCurrent";
    readonly START_RECORDING: "startRecording";
    readonly STOP_RECORDING: "stopRecording";
};
export type WorkitemRecordingOption = (typeof WORKITEM_RECORDING_OPTIONS)[keyof typeof WORKITEM_RECORDING_OPTIONS];
export declare const DispositionActions: {
    readonly AnswerMachine: "answerMachine";
    readonly Busy: "busy";
    readonly ConnectedCallback: "connectedCallback";
    readonly ConnectedHandled: "connectedHandled";
    readonly ConnectedPersonalCallback: "connectedPersonalCallback";
    readonly InvalidNumber: "invalidNumber";
};
export type DispositionActionOption = (typeof DispositionActions)[keyof typeof DispositionActions];
export declare const TOKEN_REFRESH_INTERVAL: number;
export declare const UserHistorySortTypes: {
    readonly Address: "address";
    readonly Channel: "channel";
    readonly ChannelType: "channelType";
    readonly CreatedDate: "createdDate";
    readonly CreatedTime: "createdTime";
    readonly FromUser: "fromUser";
    readonly TicketId: "ticketId";
    readonly ToUser: "toUser";
};
export type UserHistorySortType = (typeof UserHistorySortTypes)[keyof typeof UserHistorySortTypes];
export declare const AcdTypes: {
    readonly ADVANCED: "ADVANCED";
    readonly SIMPLE: "SIMPLE";
};
export type AcdType = (typeof AcdTypes)[keyof typeof AcdTypes];
export declare const WorkitemConversationTypes: {
    /** Internal conversation, new participants can be added without creating a new conversation */
    readonly CHANNEL: "channel";
    /** External conversation, will be unique for the participants array,
     * if you need to change the participant list a new conversation will be created
     * */
    readonly CONTACT_BASED: "contact_based";
    /** Internal conversation, will be unique for the participants array,
     * if you need to change the participant list a new conversation will be created
     * */
    readonly INTERNAL_CHAT: "internal_chat";
    /** External conversation, will be unique for the participants array,
     * if you need to change the participant list a new conversation will be created
     * */
    readonly QUEUE_CONTACT: "queue_contact";
    /** Internal conversation, new participants can be added without creating a new conversation */
    readonly SHARED_INBOX_INTERNAL: "shared_inbox_internal";
};
export type WorkitemConversationType = (typeof WorkitemConversationTypes)[keyof typeof WorkitemConversationTypes];
export declare const CACHE_BUSTER_VERSION = 1;
//# sourceMappingURL=constants.d.ts.map