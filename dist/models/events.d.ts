/**
 * Internal notification
 */
export declare const InternalEvents: {
    readonly ACDLoginNotification: "ACDLoginNotification";
    readonly ACDLogoutNotification: "ACDLogoutNotification";
    readonly AISummaryNotification: "AISummaryNotification";
    readonly AiEmployeeUpdatedNotification: "AiEmployeeUpdatedNotification";
    readonly BackfillWorkitemsNotification: "BackfillWorkitemsNotification";
    readonly CallExternalTransferNotification: "CallExternalTransferNotification";
    readonly CallRecordingNotification: "CallRecordingNotification";
    readonly CampaignTotalsNotification: "CampaignTotalsNotification";
    readonly CannedMessageCollectionEvent: "CannedMessageCollectionEvent";
    readonly CannedResponseTemplateEvent: "CannedResponseTemplateEvent";
    readonly CannedResponseTemplateImportEvent: "CannedResponseTemplateImportEvent";
    readonly ChangeStatusNotification: "ChangeStatusNotification";
    readonly CompanyDirectoryNotification: "CompanyDirectoryNotification";
    readonly ConferenceStateNotification: "ConferenceStateNotification";
    readonly ContactImportFailureNotificationEvent: "ContactImportFailureNotificationEvent";
    readonly ContactImportNotificationEvent: "ContactImportNotificationEvent";
    readonly ConversationEngagementDataNotification: "ConversationEngagementDataNotification";
    readonly ConversationFeedPushNotification: "ConversationFeedPushNotification";
    readonly ConversationStatusEvent: "ConversationStatusEvent";
    readonly ConversationWorkitemFeedPushNotification: "ConversationWorkitemFeedPushNotification";
    readonly CopilotSessionCreatedNotification: "CopilotSessionCreatedNotification";
    readonly CopilotSessionDeletedNotification: "CopilotSessionDeletedNotification";
    readonly CopilotSessionUpdatedNotification: "CopilotSessionUpdatedNotification";
    readonly CopilotStreamChunkNotification: "CopilotStreamChunkNotification";
    readonly CopilotStreamDoneNotification: "CopilotStreamDoneNotification";
    readonly CopilotStreamErrorNotification: "CopilotStreamErrorNotification";
    readonly CopilotStreamStartNotification: "CopilotStreamStartNotification";
    readonly DynamicChangeNotification: "DynamicChangeNotification";
    readonly DynamicStatusChangeNotification: "DynamicStatusChangeNotification";
    readonly EngagementDataStatusUpdateNotification: "EngagementDataStatusUpdateNotification";
    readonly ExtensionWorkitemNotification: "ExtensionWorkitemNotification";
    readonly InformationNotification: "InformationNotification";
    readonly LiveTranscriptionNotification: "LiveTranscriptionNotification";
    readonly LoadMandatoryData: "LoadMandatoryData";
    readonly LoadSystemData: "LoadSystemData";
    readonly LogoutNotification: "LogoutNotification";
    readonly MandatoryDataLoaded: "MandatoryDataLoaded";
    readonly MandatoryDataReceived: "MandatoryDataReceived";
    readonly MessageNotification: "MessageNotification";
    readonly MessageStatusNotification: "MessageStatusNotification";
    readonly MessageTypingNotification: "MessageTypingNotification";
    readonly MuteStateNotification: "MuteStateNotification";
    readonly NewTicketNotification: "NewTicketNotification";
    readonly OfferAcceptedNotification: "OfferAcceptedNotification";
    readonly OfferExpiredNotification: "OfferExpiredNotification";
    readonly OfferNotification: "OfferNotification";
    readonly OfferRejectedNotification: "OfferRejectedNotification";
    readonly OfferTerminatedByHangupNotification: "OfferTerminatedByHangupNotification";
    readonly PhoneStateNotification: "PhoneStateNotification";
    readonly ProactiveAgentAssistNotification: "ProactiveAgentAssistNotification";
    readonly SessionChange: "SessionChange";
    readonly SessionChangeNotification: "SessionChangeNotification";
    readonly SocketClosedNotification: "SocketClosedNotification";
    readonly SocketConnectedNotification: "SocketConnectedNotification";
    readonly SocketConnectionNotification: "SocketConnectionNotification";
    readonly SocketDisconnectedNotification: "SocketDisconnectedNotification";
    readonly SocketErrordNotification: "SocketErrordNotification";
    readonly SocketStateChangedNotification: "SocketStateChangedNotification";
    readonly StatusChangedNotification: "StatusChangedNotification";
    readonly SupervisorNotification: "SupervisorNotification";
    readonly SupervisorStatsNotification: "SupervisorStatsNotification";
    readonly SupervisorTicketUpdateNotification: "SupervisorTicketUpdateNotification";
    readonly SystemDataLoaded: "SystemDataLoaded";
    readonly TypingStatusNotification: "TypingStatusNotification";
    readonly UnreadCountNotification: "UnreadCountNotification";
    readonly UpdateTicketNotification: "UpdateTicketNotification";
    readonly UserAutoReplyConfigNotification: "UserAutoReplyConfigNotification";
    readonly UserMessagesNotification: "UserMessagesNotification";
    readonly UserRemovedFromChannelNotification: "UserRemovedFromChannelNotification";
    readonly WallboardNotification: "WallboardNotification";
    readonly WebSocketSubscriptionStatusNotification: "WebSocketSubscriptionStatusNotification";
    readonly WidgetsDataNotification: "WidgetsDataNotification";
    readonly WorkitemConversationMessageNotification: "WorkitemConversationMessageNotification";
    readonly WorkitemDeletedNotification: "WorkitemDeletedNotification";
    readonly WorkitemDirectConnectNotification: "WorkitemDirectConnectNotification";
    readonly WorkitemFailedNotification: "WorkitemFailedNotification";
    readonly WorkitemPredictiveNotification: "WorkitemPredictiveNotification";
    readonly WorkitemProgressiveNotification: "WorkitemProgressiveNotification";
    readonly WorkitemReadNotification: "WorkitemReadNotification";
    readonly WorkitemRemovedNotification: "WorkitemRemovedNotification";
    readonly WorkitemStateChangeNotification: "WorkitemStateChangeNotification";
    readonly WorkitemSummaryNotification: "WorkitemSummaryNotification";
    readonly WorkitemTerminatedNotification: "WorkitemTerminatedNotification";
    readonly WorkitemTransferNotification: "WorkitemTransferNotification";
    readonly WorkitemVoicemailNotification: "WorkitemVoicemailNotification";
    readonly WorkitemsAISummaryNotification: "WorkitemsAiSummaryNotification";
};
/**
 * All notifications that can be raised thru events
 */
export declare const ExternalEvents: {
    readonly ACDSessionChangeNotification: "ACDSessionChangeNotification";
    readonly AISummaryNotification: "AISummaryNotification";
    readonly ActiveCallStateChangeNotification: "ActiveCallStateChangeNotification";
    readonly AuthenticationSuccess: "AuthenticationSuccess";
    readonly BackfillWorkitemsNotification: "BackfillWorkitemsNotification";
    readonly CallRecordingNotification: "CallRecordingNotification";
    readonly CampaignTotalsNotification: "CampaignTotalsNotification";
    readonly CampaignsChangedNotification: "CampaignsChangedNotification";
    readonly CannedMessageCollectionEvent: "CannedMessageCollectionEvent";
    readonly CannedResponseTemplateEvent: "CannedResponseTemplateEvent";
    readonly CannedResponseTemplateImportEvent: "CannedResponseTemplateImportEvent";
    readonly ChangeStatusNotification: "ChangeStatusNotification";
    readonly CompanyDirectoryNotification: "CompanyDirectoryNotification";
    readonly ConferenceStateNotification: "ConferenceStateNotification";
    readonly ContactImportFailureNotificationEvent: "ContactImportFailureNotificationEvent";
    readonly ContactImportNotificationEvent: "ContactImportNotificationEvent";
    readonly ConversationEngagementDataNotification: "ConversationEngagementDataNotification";
    readonly ConversationStatusEvent: "ConversationStatusEvent";
    readonly ConversationWorkitemsFeedErrorChanged: "ConversationWorkitemsFeedErrorChanged";
    readonly ConversationWorkitemsFeedLoadingChanged: "ConversationWorkitemsFeedLoadingChanged";
    readonly ConversationWorkitemsQueryUpdated: "ConversationWorkitemsQueryUpdated";
    readonly ConversationsFeedErrorChanged: "ConversationsFeedErrorChanged";
    readonly ConversationsFeedLoadingChanged: "ConversationsFeedLoadingChanged";
    readonly ConversationsFeedQueryUpdated: "ConversationsFeedQueryUpdated";
    readonly CopilotSessionCreatedNotification: "CopilotSessionCreatedNotification";
    readonly CopilotSessionDeletedNotification: "CopilotSessionDeletedNotification";
    readonly CopilotSessionLoadingChanged: "CopilotSessionLoadingChanged";
    readonly CopilotSessionQueryUpdated: "CopilotSessionQueryUpdated";
    readonly CopilotSessionUpdatedNotification: "CopilotSessionUpdatedNotification";
    readonly CopilotSessionsLoadingChanged: "CopilotSessionsLoadingChanged";
    readonly CopilotSessionsQueryUpdated: "CopilotSessionsQueryUpdated";
    readonly CopilotStreamChunkNotification: "CopilotStreamChunkNotification";
    readonly CopilotStreamDoneNotification: "CopilotStreamDoneNotification";
    readonly CopilotStreamErrorNotification: "CopilotStreamErrorNotification";
    readonly CopilotStreamStartNotification: "CopilotStreamStartNotification";
    readonly DynamicChangeNotification: "DynamicChangeNotification";
    readonly DynamicCompanyDirectoryChangeNotification: "DynamicCompanyDirectoryChangeNotification";
    readonly EngagementDataStatusUpdateNotification: "EngagementDataStatusUpdateNotification";
    readonly ExpiredTokenNotification: "ExpiredTokenNotification";
    readonly ExtensionWorkitemNotification: "ExtensionWorkitemNotification";
    readonly InformationNotification: "InformationNotification";
    readonly InitAutoLoginToAcd: "InitAutoLoginToAcd";
    readonly InitAutoLoginToAcdEnabled: "InitAutoLoginToAcdEnabled";
    readonly InitAutoLoginToAcdError: "InitAutoLoginToAcdError";
    readonly InitChangeTelephonyImplementation: "InitChangeTelephonyImplementation";
    readonly InitChangeTelephonyImplementationError: "InitChangeTelephonyImplementationError";
    readonly InitChangeTelephonyImplementationFreeswitch: "InitChangeTelephonyImplementationFreeswitch";
    readonly InitChangeTelephonyImplementationPSTN: "InitChangeTelephonyImplementationPSTN";
    readonly InitChangeTelephonyImplementationTwilio: "InitChangeTelephonyImplementationTwilio";
    readonly InitConnectStatisticsSocket: "InitConnectStatisticsSocket";
    readonly InitConnectStatisticsSocketError: "InitConnectStatisticsSocketError";
    readonly InitConnectStatisticsSocketSuccess: "InitConnectStatisticsSocketSuccess";
    readonly InitConnectUserSocket: "InitConnectUserSocket";
    readonly InitConnectUserSocketError: "InitConnectUserSocketError";
    readonly InitConnectUserSocketSuccess: "InitConnectUserSocketSuccess";
    readonly InitDataDogServiceLoadMandatoryData: "InitDataDogServiceLoadMandatoryData";
    /**
     * @deprecated InitDataDogServiceSetUser will be removed in a future version
     */
    readonly InitDataDogServiceSetUser: "InitDataDogServiceSetUser";
    readonly InitError: "init_error";
    readonly InitFetchWidgets: "InitFetchWidgets";
    readonly InitFetchWidgetsError: "InitFetchWidgetsError";
    readonly InitFetchWidgetsSuccess: "InitFetchWidgetsSuccess";
    /**
     * @deprecated InitRefreshToken will be removed in a future version
     */
    readonly InitRefreshToken: "InitRefreshToken";
    /**
     * @deprecated InitRefreshTokenCycleStarted will be removed in a future version
     */
    readonly InitRefreshTokenCycleStarted: "InitRefreshTokenCycleStarted";
    readonly InitRefreshTokenError: "InitRefreshTokenError";
    /**
     * @deprecated InitRefreshTokenSuccess will be removed in a future version
     */
    readonly InitRefreshTokenSuccess: "InitRefreshTokenInitRefreshTokenSuccess";
    /**
     * @deprecated InitResolveSession will be removed in a future version
     */
    readonly InitResolveSession: "InitResolveSession";
    readonly InitRetrieveLocalStorageDevices: "InitRetrieveLocalStorageDevices";
    /**
     * @deprecated InitRetrieveLocalStorageDevicesError will be removed in a future version
     */
    readonly InitRetrieveLocalStorageDevicesError: "InitRetrieveLocalStorageDevicesError";
    /**
     * @deprecated InitRetrieveLocalStorageDevicesSuccess will be removed in a future version
     */
    readonly InitRetrieveLocalStorageDevicesSuccess: "InitRetrieveLocalStorageDevicesSuccess";
    readonly InitStatusNotification: "InitStatusNotification";
    readonly InitSuccess: "init_success";
    readonly LanguageLoaded: "LanguageLoaded";
    readonly LiveTranscriptionCompletedNotification: "LiveTranscriptionCompletedNotification";
    readonly LiveTranscriptionNotification: "LiveTranscriptionNotification";
    readonly LoginSuccess: "LoginSuccess";
    readonly LogoutNotification: "LogoutNotification";
    readonly MessageNotification: "MessageNotification";
    readonly MessageTypingNotification: "MessageTypingNotification";
    /**
     * @deprecated MessagesNotification will be removed in a future version
     */
    readonly MessagesNotification: "MessagesNotification";
    readonly MonitorWorkitemNotification: "MonitorWorkitemNotification";
    readonly NetWorkStateChangedNotification: "NetWorkStateChangedNotification";
    readonly NewTicketNotification: "NewTicketNotification";
    readonly OffersChangedNotification: "OffersChangedNotification";
    readonly PhoneStateNotification: "PhoneStateNotification";
    readonly ProactiveAgentAssistNotification: "ProactiveAgentAssistNotification";
    readonly QualityWarningsChangedNotification: "QualityWarningsChangedNotification";
    readonly Ready: "ready";
    readonly SessionChangeNotification: "SessionChangeNotification";
    readonly SessionStateUpdateNotification: "SessionStateUpdateNotification";
    readonly StatusChangedNotification: "StatusChangedNotification";
    readonly SupervisorNotification: "SupervisorNotification";
    readonly SupervisorStatsNotification: "SupervisorStatsNotification";
    readonly SupervisorTicketUpdateNotification: "SupervisorTicketUpdateNotification";
    readonly TicketDetailLoadingChanged: "TicketDetailLoadingChanged";
    readonly TicketLinkedWorkitemsLoadingChanged: "TicketLinkedWorkitemsLoadingChanged";
    readonly TicketLinkedWorkitemsQueryUpdated: "TicketLinkedWorkitemsQueryUpdated";
    readonly TicketNotesLoadingChanged: "TicketNotesLoadingChanged";
    readonly TicketsLoadingChanged: "TicketsLoadingChanged";
    readonly TicketsQueryUpdated: "TicketsQueryUpdated";
    readonly TokenRefreshNotification: "TokenRefreshNotification";
    readonly TypingStatusNotification: "TypingStatusNotification";
    readonly UnreadCountNotification: "UnreadCountNotification";
    readonly UpdateTicketNotification: "UpdateTicketNotification";
    readonly UserAutoReplyConfigNotification: "UserAutoReplyConfigNotification";
    readonly UserMessagesNotification: "UserMessagesNotification";
    readonly UserRemovedFromChannelNotification: "UserRemovedFromChannelNotification";
    readonly UserSocketStateChangedNotification: "UserSocketStateChangedNotification";
    readonly UsersChangedNotification: "UsersChangedNotification";
    readonly WallboardNotification: "WallboardNotification";
    readonly WebRTCClientReady: "WebRTCClientReady";
    readonly WebRTCConnectionState: "WebRTCConnectionState";
    readonly WebRTCNotification: "WebRTCNotification";
    readonly WebRTCSocketStatusNotification: "WebRTCSocketStatusNotification";
    readonly WorkitemConversationMessageNotification: "WorkitemConversationMessageNotification";
    readonly WorkitemDeletedNotification: "WorkitemDeletedNotification";
    readonly WorkitemFailedNotification: "WorkitemFailedNotification";
    readonly WorkitemPredictiveNotification: "WorkitemPredictiveNotification";
    readonly WorkitemProgressiveNotification: "WorkitemProgressiveNotification";
    readonly WorkitemReadNotification: "WorkitemReadNotification";
    readonly WorkitemRemovedNotification: "WorkitemRemovedNotification";
    readonly WorkitemStateChangeNotification: "WorkitemStateChangeNotification";
    readonly WorkitemSummaryNotification: "WorkitemSummaryNotification";
    readonly WorkitemTerminatedNotification: "WorkitemTerminatedNotification";
    readonly WorkitemTerminationFailedNotification: "WorkitemTerminationFailedNotification";
    readonly WorkitemTransferNotification: "WorkitemTransferNotification";
    readonly WorkitemVoicemailNotification: "WorkitemVoicemailNotification";
    readonly WorkitemsAISummaryNotification: "WorkitemsAiSummaryNotification";
    readonly WorkitemsChangedNotification: "WorkitemsChangedNotification";
};
//# sourceMappingURL=events.d.ts.map