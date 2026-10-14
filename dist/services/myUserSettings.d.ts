import { type InjectionContainer } from '../internal';
import { type UserDetails, type Queues } from '../types';
export declare class MyUserSettingsService {
    private stateService;
    private schemaTypeClient;
    constructor({ schemaTypeClient, stateService, }: Pick<InjectionContainer, 'stateService' | 'schemaTypeClient'>);
    /**
     * The `isFlagEnabledInUserOrUserProfile` function resolves a flag-like setting to a strict boolean.
     * It first evaluates the value stored on the user and, when the user does not define the flag, falls
     * back to the user profile. Values such as `'on'`/`'off'`, `'true'`/`'false'` and real booleans are
     * normalized, defaulting to `false` when the flag is missing or unrecognized.
     * @param key The `key` parameter is the name of the flag to evaluate.
     * @returns The `isFlagEnabledInUserOrUserProfile()` method returns `true` when the flag is enabled, otherwise `false`.
     */
    private isFlagEnabledInUserOrUserProfile;
    /**
     * The `saveUser` function saves the modified fields in the user settings.
     * @param fieldModifiers The `fieldModifiers` parameter is a record of field modifiers that are to be updated.
     * @param id The `id` parameter is the ID of the user whose settings are to be updated.
     * @returns The `saveUser()` method returns the updated user object.
     */
    saveUser(fieldModifiers: Partial<UserDetails>): Promise<{}>;
    /**
     * The `getUser` function returns the user data stored in the `data` object.
     * @returns The `getUser()` method is returning the `User` object stored in the data map with the key
     * 'user'.
     */
    getUser(): UserDetails | undefined;
    /**
     * The `getProfileInfo` function returns the user profile information.
     * @returns The `getProfileInfo()` method is returning the user profile information stored in the `User` object.
     * The profile information includes the user's avatar, email, first name, language identifier, last name, and timezone.
     */
    getProfileInfo(): {
        avatar: Record<string, {
            contentType: string;
            fileType?: string;
            label: string;
            name: string;
        }> | undefined;
        email: string | undefined;
        firstName: string | undefined;
        languageIdentifier: string | undefined;
        lastName: string | undefined;
        timezone: string | undefined;
    };
    /**
     * The `getFirstName` function returns the user's first name.
     * @returns The `getFirstName()` method is returning the first name of the user.
     */
    getFirstName(): string | undefined;
    /**
     * The `getLastName` function returns the user's last name.
     * @returns The `getLastName()` method is returning the last name of the user.
     */
    getLastName(): string | undefined;
    /**
     * The `getEmail` function returns the user profile information.
     * @returns The `getEmail()` method is returning the email of the user.
     */
    getEmail(): string | undefined;
    /**
     * The `getFiles` function returns the user's stored files.
     * @returns The `getFiles()` method is returning the files of the user.
     */
    getFiles(): Record<string, {
        contentType: string;
        fileType?: string;
        label: string;
        name: string;
    }> | undefined;
    /**
     * The `getAvatar` function returns the user's avatar file name.
     * @returns The `getAvatar()` method is returning the avatar file name of the user.
     */
    getAvatar(): string | undefined;
    /**
     * The `getLanguageIdentifier` function returns the user's language identifier.
     * @returns The `getLanguageIdentifier()` method is returning the language identifier of the user.
     */
    getLanguageIdentifier(): string | undefined;
    /**
     * The 'getTimezone' function returns the user's timezone.
     * @returns The `getTimezone()` method is returning the timezone of the user.
     */
    getTimezone(): string | undefined;
    /**
     * The 'getacdAutoAccept' function returns the user's option  acdAutoAccept.
     * @returns The `getacdAutoAccept()` method is returning the option getacdAutoAccept of the user.
     */
    getacdAutoAccept(): boolean | undefined;
    /**
     * The 'getacdAutoLogin' function returns the user's option acdAutoLogin.
     * @returns The `getacdAutoLogin()` method is returning the option getacdAutoLogin of the user. If true, the user is automatically logged in to the ACD.
     */
    getacdAutoLogin(): boolean | undefined;
    /**
     * The 'getacdAutoLogout' function returns the user's option acdAutoLogout.
     * @returns The `getacdAutoLogout()` method is returning the option getacdAutoLogout of the user. If true, the user's ACD option can be modified.
     */
    getAllowAcdChanges(): boolean | undefined;
    /**
     * The 'getAllowClientTracing' function returns the user's allowClientTracing field.
     * @returns The `getAllowClientTracing()` method is returning the allowClientTracing field of the user.
     * */
    getAllowClientTracing(): boolean | undefined;
    /**
     * The 'getAllowServerTracing' function returns the user's allowServerTracing field.
     * @returns The `getAllowServerTracing()` method is returning the allowServerTracing field of the user.
     * */
    getAllowServerTracing(): boolean | undefined;
    /**
     * The 'getAlwaysDurationWebNotification' function returns the user's alwaysDurationWebNotification field.
     * @returns The `getAlwaysDurationWebNotification()` method is returning the alwaysDurationWebNotification field of the user.
     * */
    getAlwaysDurationWebNotification(): boolean | undefined;
    /**
     * The 'getAlwaysHoldWebNotification' function returns the user's alwaysHoldWebNotification field.
     * @returns The `getAlwaysHoldWebNotification()` method is returning the alwaysHoldWebNotification field of the user.
     * */
    getAlwaysHoldWebNotification(): boolean | undefined;
    /**
     * The 'getCallDurationNotification' function returns the user's callDurationNotification field.
     * @returns The `getCallDurationNotification()` method is returning the callDurationNotification field of the user.
     * */
    getCallFailedNotification(): boolean | undefined;
    /**
     * The 'getChatDurationNotification' function returns the user's chatDurationNotification.
     * @returns The `getChatDurationNotification()` method is returning the chatDurationNotification field of the user.
     * */
    getChatDurationNotification(): boolean | undefined;
    /**
     * The 'getConfirmDisposition' function returns whether the user's confirmDisposition flag is enabled.
     * @returns The `getConfirmDisposition()` method is returning a boolean indicating if the confirmDisposition flag is enabled for the user.
     * */
    getConfirmDisposition(): boolean;
    /**
     * The 'getContentType' function returns the user's content type field.
     * @returns The `getContentType()` method is returning the content type field of the user.
     * */
    getContentType(): unknown;
    /**
     * The `getCreatedAt` function returns the date and time when the user settings were created.
     * @returns The `getCreatedAt()` method is returning the date and time when the user settings were created.
     * */
    getCreatedAt(): number | undefined;
    /**
     * The `getCreatedBy` function returns the user who created the user settings.
     * @returns The `getCreatedBy()` method is returning the user who created the user settings.
     * */
    getCreatedBy(): string | undefined;
    /**
     * The `getCredentialsExpired` function returns the credentialsExpired field.
     * @returns The `getCredentialsExpired()` method is returning the credentialsExpired field of the user.
     * */
    getcredentialsNonExpired(): boolean | undefined;
    /**
     * The `getDefaultAcdLoginStatus` function returns the defaultAcdLoginStatus field.
     * @returns The `getDefaultAcdLoginStatus()` method is returning the defaultAcdLoginStatus field of the user.
     * */
    getDefaultAcdLoginStatus(): string | undefined;
    /**
     * The `getDeletedAt` function returns the date and time when the user settings were deleted.
     * @returns The `getDeletedAt()` method is returning the date and time when the user settings were deleted.
     * */
    getDeletedAt(): number | undefined;
    /**
     * The `getDeletedBy` function returns the user who deleted the user settings.
     * @returns The `getDeletedBy()` method is returning the user who deleted the user settings.
     * */
    getDialConfirmation(): boolean | undefined;
    /**
     * The `getDisableDisposition` function returns whether the disableDisposition flag is enabled.
     * @returns The `getDisableDisposition()` method is returning a boolean indicating if the disableDisposition flag is enabled for the user.
     * */
    getDisableDisposition(): boolean;
    /**
     * The `getDisableEmailNotification` function returns the disableEmailNotification field.
     * @returns The `getDisableEmailNotification()` method is returning the disableEmailNotification field of the user.
     * */
    getDisableEmailNotification(): boolean | undefined;
    /**
     * The `getDisableStartRecording` function returns the disableStartRecording field.
     * @returns The `getDisableStartRecording()` method is returning the disableStartRecording field of the user.
     * */
    getDisableStartRecording(): boolean | undefined;
    /**
     * The `getDisableStopRecording` function returns the disableStopRecording field.
     * @returns The `getDisableStopRecording()` method is returning the disableStopRecording field of the user.
     * */
    getDisableStopRecording(): boolean | undefined;
    /**
     * The `getDispositionNotification` function returns the dispositionNotification field.
     * @returns The `getDispositionNotification()` method is returning the dispositionNotification field of the user.
     * */
    getDispositionNotification(): boolean | undefined;
    /**
     * The `getEnableDurationWebNotification` function returns the enableDurationWebNotification field.
     * @returns The `getEnableDurationWebNotification()` method is returning the enableDurationWebNotification field of the user.
     */
    getEnableDurationWebNotification(): boolean | undefined;
    /**
     * The `getEnableHoldWebNotification` function returns the enableHoldWebNotification field.
     * @returns The `getEnableHoldWebNotification()` method is returning the enableHoldWebNotification field of the user.
     * */
    getEnableHoldWebNotification(): boolean | undefined;
    /**
     * The `getEnableRealtimeTranscription` function returns whether the enableRealtimeTranscription flag is enabled.
     * @returns The `getEnableRealtimeTranscription()` method is returning a boolean indicating if the enableRealtimeTranscription flag is enabled for the user.
     * */
    getEnableRealtimeTranscription(): boolean;
    /**
     * The `getEnabled` function returns the enabled field of the user.
     * @returns The `getEnabled()` method is returning the enabled field of the user.
     * */
    getEnabled(): boolean | undefined;
    /**
     * The `getExpansions` function returns the expansions field of the user.
     * @returns The `getExpansions()` method is returning the expansions field of the user.
     * */
    getExpansions(): {
        languageId?: import("..").UserLanguageSettings;
        networkregionId?: import("..").UserNetworkRegionSettings;
        personalInboxCampaignId?: import("..").UserPersonalInboxCampaignSettings;
        userProfileId?: import("..").UserProfileSettings;
        voiceSettingsId?: import("..").UserVoiceSettings;
    } | undefined;
    /**
     * The `getGroups` function returns the groups field of the user.
     * @returns The `getGroups()` method is returning the groups field of the user.
     * */
    getGroups(): unknown;
    /**
     * The `getHideInCompanyDirectory` function returns the hideInCompanyDirectory field.
     * @returns The `getHideInCompanyDirectory()` method is returning the hideInCompanyDirectory field of the user.
     * */
    getHideInCompanyDirectory(): boolean | undefined;
    /**
     * The `getHomeTabs` function returns the homeTabs field.
     * @returns The `getHomeTabs()` method is returning the homeTabs field of the user.
     * */
    getHomeTabs(): unknown;
    /**
     * The `getInboundCallDurationNotification` function returns the inboundCallDurationNotification field.
     * @returns The `getInboundCallDurationNotification()` method is returning the inboundCallDurationNotification field of the user.
     * */
    getInboundCallDurationNotification(): boolean | undefined;
    /**
     * The `getInboundCallHoldNotification` function returns the inboundCallHoldNotification field.
     * @returns The `getInboundCallHoldNotification()` method is returning the inboundCallHoldNotification field of the user.
     * */
    getInboundCallHoldNotification(): boolean | undefined;
    /**
     * The `getInboundEmailDurationNotification` function returns the inboundEmailDurationNotification field.
     * @returns The `getInboundEmailDurationNotification()` method is returning the inboundEmailDurationNotification field of the user.
     * */
    getInboundEmailDurationNotification(): boolean | undefined;
    /**
     * The `getInboundExtensionCallDurationNotification` function returns the inboundExtensionCallDurationNotification field.
     * @returns The `getInboundExtensionCallDurationNotification()` method is returning the inboundExtensionCallDurationNotification field of the user.
     * */
    getInboundExtensionCallDurationNotification(): boolean | undefined;
    /**
     * The `getInboundSMSDurationNotification` function returns the inboundSMSDurationNotification field.
     * @returns The `getInboundSMSDurationNotification()` method is returning the inboundSMSDurationNotification field of the user.
     * */
    getInboundSMSDurationNotification(): boolean | undefined;
    /**
     * The `getLanguageId` function returns the language ID of the user.
     * @returns The `getLanguageId()` method is returning the language ID of the user.
     * */
    getLanguageId(): string | undefined;
    /**
     * The `getMSTeamsEnabled` function returns the mSTeamsEnabled field.
     * @returns The `getMSTeamsEnabled()` method is returning the mSTeamsEnabled field of the user.
     * */
    getMSTeamsEnabled(): boolean | undefined;
    /**
     * The `getModifiedAt` function returns the date and time when the user settings were last modified.
     * @returns The `getModifiedAt()` method is returning the date and time when the user settings were last modified.
     * */
    getModifiedAt(): number | undefined;
    /**
     * The `getModifiedBy` function returns the user who last modified the user settings.
     * @returns The `getModifiedBy()` method is returning the user who last modified the user settings.
     * */
    getModifiedBy(): string | undefined;
    /**
     * The `getName` function returns the user's name.
     * @returns The `getName()` method is returning the name of the user.
     * */
    getName(): string | undefined;
    /**
     * The `getNetworkRegionId` function returns the network region ID of the user.
     * @returns The `getNetworkRegionId()` method is returning the network region ID of the user.
     * */
    getNetworkRegionId(): import("..").UserNetworkRegionSettings | undefined;
    /**
     * The `getOAuthProfileAssignmentFromExternalRole` function returns the oAuthProfileAssignmentFromExternalRole field.
     * @returns The `getOAuthProfileAssignmentFromExternalRole()` method is returning the oAuthProfileAssignmentFromExternalRole field of the user.
     * */
    getOAuthProfileAssignmentFromExternalRole(): boolean | undefined;
    /**
     * The `getObjectId` function returns the object ID of the user.
     * @returns The `getObjectId()` method is returning the object ID of the user.
     * */
    getObjectType(): string | undefined;
    /**
     * The `getOutboundCallDurationNotification` function returns the outboundCallDurationNotification field.
     * @returns The `getOutboundCallDurationNotification()` method is returning the outboundCallDurationNotification field of the user.
     * */
    getOutboundCallDurationNotification(): boolean | undefined;
    /**
     * The `getOutboundCallHoldNotification` function returns the outboundCallHoldNotification field.
     * @returns The `getOutboundCallHoldNotification()` method is returning the outboundCallHoldNotification field of the user.
     * */
    getOutboundCallHoldNotification(): boolean | undefined;
    /**
     * The `getOutboundEmailDurationNotification` function returns the outboundEmailDurationNotification field.
     * @returns The `getOutboundEmailDurationNotification()` method is returning the outboundEmailDurationNotification field of the user.
     * */
    getOutboundEmailDurationNotification(): boolean | undefined;
    /**
     * The `getOutboundExtensionCallDurationNotification` function returns the outboundExtensionCallDurationNotification field.
     * @returns The `getOutboundExtensionCallDurationNotification()` method is returning the outboundExtensionCallDurationNotification field of the user.
     * */
    getOutboundExtensionCallDurationNotification(): boolean | undefined;
    /**
     * The `getOutboundSMSDurationNotification` function returns the outboundSMSDurationNotification field.
     * @returns The `getOutboundSMSDurationNotification()` method is returning the outboundSMSDurationNotification field of the user.
     * */
    getOutboundSMSDurationNotification(): boolean | undefined;
    /**
     * The `getPasswordModifiedAt` function returns the passwordModifiedAt field.
     * @returns The `getPasswordModifiedAt()` method is returning the passwordModifiedAt field of the user.
     *  */
    getPasswordModifiedAt(): number | undefined;
    /**
     * The `getPbxUser` function returns the pbxUser field.
     * @returns The `getPbxUser()` method is returning the pbxUser field of the user.
     * */
    getPbxUser(): unknown;
    /**
     * The `getPersonalInboxCampaignId` function returns the personalInboxCampaignId field.
     * @returns The `getPersonalInboxCampaignId()` method is returning the personalInboxCampaignId field of the user.
     * */
    getPersonalInboxCampaignId(): string | undefined;
    /**
     * The `getPredictiveCallDurationNotification` function returns the predictiveCallDurationNotification field.
     * @returns The `getPredictiveCallDurationNotification()` method is returning the predictiveCallDurationNotification field of the user.
     * */
    getPredictiveCallDurationNotification(): boolean | undefined;
    /**
     * The `getPredictiveSMSDurationNotification` function returns the predictiveSMSDurationNotification field.
     * @returns The `getPredictiveSMSDurationNotification()` method is returning the predictiveSMSDurationNotification field of the user.
     * */
    getPredictiveSMSDurationNotification(): boolean | undefined;
    /**
     * The `getProgressiveCallDurationNotification` function returns the progressiveCallDurationNotification field.
     * @returns The `getProgressiveCallDurationNotification()` method is returning the progressiveCallDurationNotification field of the user.
     * */
    getProgressiveCallDurationNotification(): boolean | undefined;
    /**
     * The `getPseudonym` function returns the user's pseudonym.
     * @returns The `getPseudonym()` method is returning the pseudonym of the user.
     * */
    getPseudonym(): string | undefined;
    /**
     * The `getQueues` function returns the queues that the user is a member of.
     * @returns The `getQueues()` method is returning the queues of the user.
     * */
    getQueues(): Queues | undefined;
    /**
     * The `getRecordingAnalysisPercentage` function returns the recordingAnalysisPercentage field.
     * @returns The `getRecordingAnalysisPercentage()` method is returning the recordingAnalysisPercentage field of the user.
     * */
    getRecordingAnalysisPercentage(): number | undefined;
    /**
     * The `getRecordingAnalysisPercentage` function returns the recordingAnalysisPercentage field.
     * @returns The `getRecordingAnalysisPercentage()` method is returning the recordingAnalysisPercentage field of the user.
     * */
    getReminderTime(): unknown;
    /**
     * The `getRingOnLogout` function returns the ringOnLogout field.
     * @returns The `getRingOnLogout()` method is returning the ringOnLogout field of the user.
     * */
    getRingOnLogout(): boolean | undefined;
    /**
     * The `getRingPhoneOnOffer` function returns the ringPhoneOnOffer field.
     * @returns The `getRingPhoneOnOffer()` method is returning the ringPhoneOnOffer field of the user.
     * */
    getRingPhoneOnOffer(): boolean | undefined;
    /**
     * The `getSalesforceUserTokens` function returns the salesforceUserTokens field.
     * @returns The `getSalesforceUserTokens()` method is returning the salesforceUserTokens field of the user.
     * */
    getSalesforceUserTokens(): unknown;
    /**
     * The `getScrubOnDial` function returns the scrubOnDial field.
     * @returns The `getScrubOnDial()` method is returning the scrubOnDial field of the user.
     * */
    getScrubOnDial(): boolean | undefined;
    /**
     * The `getSettings` function returns the settings field.
     * @returns The `getSettings()` method is returning the settings field of the user.
     * */
    getSettings(): import("..").Settings | undefined;
    /**
     * The `getShowWebrtcNotification` function returns the showWebrtcNotification field.
     *  @returns The `getShowWebrtcNotification()` method is returning the showWebrtcNotification field of the user.
     * */
    getShowWebrtcNotification(): boolean | undefined;
    /**
     * The `getSkills` function returns the skills field.
     * @returns The `getSkills()` method is returning the skills field of the user.
     * */
    getSkills(): unknown;
    /**
     * The `getSocialDurationNotification` function returns the socialDurationNotification field.
     * @returns The `getSocialDurationNotification()` method is returning the socialDurationNotification field of the user.
     */
    getSocialDurationNotification(): boolean | undefined;
    /**
     * The `getSupervisedCampaigns` function returns the campaigns that the user supervises.
     * @returns The `getSupervisedCampaigns()` method is returning the supervised campaigns of the user.
     */
    getSupervisedCampaigns(): unknown;
    /**
     * The `getSupervisedQueues` function returns the supervised queues field.
     * @returns The `getSupervisedQueues()` method is returning the supervised queues field of the user.
     * */
    getSupervisedQueues(): unknown;
    /**
     * The `getSupervisedUsers` function returns the supervised users field.
     * @returns The `getSupervisedUsers()` method is returning the supervised users field of the user.
     * */
    getSupervisedUsers(): unknown;
    /**
     * The `getSupervisorQueueUsers` function returns the supervisor queue users field.
     * @returns The `getSupervisorQueueUsers()` method is returning the supervisor queue users field of the user.
     * */
    getSupervisorQueueUsers(): unknown;
    /**
     * The `getSupervisors` function returns the supervisors field.
     * @returns The `getSupervisors()` method is returning the supervisors field of the user.
     * */
    getSupervisors(): unknown;
    /**
     * The `getTelephony` function returns the telephony field.
     * @returns The `getTelephony()` method is returning the telephony field of the user.
     * */
    getTelephony(): import("..").TelephonyConfig | undefined;
    /**
     * The `getTenantId` function returns the tenant ID of the user.
     * @returns The `getTenantId()` method is returning the tenant ID of the user.
     */
    getTenantId(): string | undefined;
    /**
     * The `getUseReactWorkitemLayout` function returns whether the useReactWorkitemLayout flag is enabled.
     * @returns The `getUseReactWorkitemLayout()` method is returning a boolean indicating if the useReactWorkitemLayout flag is enabled for the user.
     * */
    getUseReactWorkitemLayout(): boolean;
    /**
     * The `getUseSideBarHeader` function returns whether the useSideBarHeader flag is enabled.
     * @returns The `getUseSideBarHeader()` method is returning a boolean indicating if the useSideBarHeader flag is enabled for the user.
     * */
    getUseSideBarHeader(): boolean;
    /**
     * The `getUserClientSettingsId` function returns the user's client settings ID.
     *  @returns The `getUserClientSettingsId()` method is returning the client settings ID of the user.
     * */
    getUserClientSettingsId(): string | undefined;
    /**
     * The `getUserId` function returns the user's ID.
     * @returns The `getUserId()` method is returning the ID of the user.
     * */
    getUserId(): string | undefined;
    /**
     * The `getUserProfileId` function returns the user's profile ID.
     * @returns The `getUserProfileId()` method is returning the profile ID of the user.
     * */
    getUserProfileId(): string | undefined;
    /**
     * The `getVerifyConsentOnDial` function returns the verifyConsentOnDial field.
     *  @returns The `getVerifyConsentOnDial()` method is returning the verifyConsentOnDial field of the user.
     * */
    getVerifyConsentOnDial(): boolean | undefined;
    /**
     * The `getVerifyConsentOnSMS` function returns the verifyConsentOnSMS field.
     * @returns The `getVerifyConsentOnSMS()` method is returning the verifyConsentOnSMS field of the user.
     * */
    getVerifyConsentOnSMS(): boolean | undefined;
    /**
     * The `getVoiceSettingsId` function returns the user's voice settings ID.
     * @returns The `getVoiceSettingsId()` method is returning the voice settings ID of the user.
     * */
    getVoiceSettingsId(): unknown;
    /**
     * The `getId` function returns the user's ID.
     * @returns The `getId()` method is returning the ID of the user.
     * */
    getId(): string | undefined;
    /**
     * The 'getSignature' function returns the user's email signature.
     * @returns The `getSignature()` method is returning the email signature of the user.
     */
    getEmailSignature(): unknown;
}
//# sourceMappingURL=myUserSettings.d.ts.map