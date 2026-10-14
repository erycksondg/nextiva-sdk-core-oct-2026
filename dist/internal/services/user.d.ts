import { type AxiosResponse } from 'axios';
import { type HistoryTypeProperties } from '../../utilities';
import { type EventsService, type StateService } from '../../services';
import { type RangeType, type BaseSchemaTypeClient } from '../../models';
import type { BaseUserSetting, CallForwardingSettings, Channel, Device, DialExtensionResponse, DialExtensionPayload, DialPayload, DialResponse, FetchSurveysRequestParams, FetchSurveysResponse, FetchUsersResponseBody, History, LoginToACDPayload, Platform, Queue, SchemaTypeSearchPayload, SendMessageResponse, TextToSpeechPayload, TokenResponse, UserDetails, UserHistoryPayload, UserHistoryResponse, UserSession, UserVoiceCallSettingsPayload, UserVoiceSettings, VoiceMailGreeting, Workitem, LogoutPayload, UserTypingPayload, CannedMessageAddFavoriteResponse, CannedMessageAddFavoritePayload, CannedMessageImportResponse } from '../../types';
import { type BaseSendFaxPayload, type BaseSendSmsPayload, type BaseSendEmailPayload } from '../types';
import { type TokenService } from './token';
import { type InjectionContainer } from '../dependencyInjectionContainer';
import { type BaseTelephonyService } from './telephony';
export declare class BaseUserService {
    private widget;
    private acdLoginAt;
    private inConference;
    private inRecording;
    private users;
    private topics;
    private queues;
    private speedDials;
    protected eventsService: EventsService;
    protected telephonyService: BaseTelephonyService;
    protected stateService: StateService;
    protected tokenService: TokenService;
    protected schemaTypeClient: BaseSchemaTypeClient;
    private resourceManager;
    private datadogService;
    private logger;
    private keepAliveTimer;
    /**
     * Constructs a new instance of the BaseUserService class.
     * @param data - The initial data for the BaseUserService.
     */
    constructor({ datadogService, eventsService, loggerService, resourceManager, schemaTypeClient, stateService, telephonyService, tokenService, widgetService, }: Pick<InjectionContainer, 'stateService' | 'resourceManager' | 'schemaTypeClient' | 'tokenService' | 'eventsService' | 'widgetService' | 'telephonyService' | 'datadogService' | 'loggerService'>);
    /**
     * Logs in a user with the provided username and password.
     * @param {string} username The username of the user.
     * @param {string} password The password of the user.
     * @returns {Promise<object>} A Promise that resolves with an object representing the result of the login attempt.
     * The resolved object will pass the object LoginSuccessful (TODO not sure we should pass the location and / or token).
     *
     * Succcess
     * - Info.LoginSuccessful
     *
     * If login fails, the Promise is rejected with an error object indicating InvalidUsernamePassword.
     *
     * Failure
     * - Errors.InvalidUsernamePassword
     *
     */
    login(username: string, password: string): Promise<TokenResponse>;
    /**
     * The `logout` function logs out the user, optionally notifying the server, and removes the
     * Authorization header.
     * @param {boolean} notifyServer - The `notifyServer` parameter in the `logout` function is a boolean
     * value that determines whether the server should be notified when the user logs out. If
     * `notifyServer` is `true`, a POST request is sent to the server's `/users/api/logout` endpoint
     * using axiosInstance.
     */
    logout(payload: boolean | LogoutPayload): Promise<void>;
    /**
     * The function refreshToken in TypeScript makes a request to refresh a token and updates various
     * data fields accordingly.
     * @returns {Promise<RefreshTokenResponse>} A Promise that resolves with an object containing the new token and location
     */
    refreshToken(): Promise<import("../..").RefreshTokenResponse>;
    /**
     * Retrieves the expiration time of a token from its payload.
     * @returns The expiration time of the token in timestamp if it exists
     * and is valid. If the token is not present or the payload cannot be decoded, it returns
     * `undefined`.
     */
    getTokenExpiration(): number | undefined;
    initSession({ appVersionCode, appleServicesEnvironment, deviceToken, platform, pushKitToken, }: {
        appVersionCode?: Device['appVersionCode'];
        appleServicesEnvironment?: Device['appleServicesEnvironment'];
        deviceToken?: string;
        platform: Platform;
        pushKitToken?: string;
    }): Promise<{
        device: import("../..").MultiloginDevice | undefined;
        session: UserSession;
    }>;
    fetchSession(deviceId: string | undefined, { appVersionCode, appleServicesEnvironment, deviceToken, platform, pushKitToken, }: {
        appVersionCode?: Device['appVersionCode'];
        appleServicesEnvironment?: Device['appleServicesEnvironment'];
        deviceToken?: string;
        platform: Platform;
        pushKitToken?: string;
    }): Promise<{
        device: import("../..").MultiloginDevice | undefined;
        session: UserSession;
    }>;
    /**
     * Checks if a user is logged in.
     * @returns {boolean} True if the user is logged in, otherwise false.
     */
    isloggedIn(): boolean;
    /**
     * TODO
     * Allow the use to login to the ACD and start receiving ACD interactions. The ACD Status of the user will be
     * received in the form of an event
     * @param _properties
     *
     * TODO Define properties, it's a complexe object that need to be simplify
     */
    loginToAcd(payload: LoginToACDPayload): Promise<{
        loginAt: number;
    }>;
    /**
     * This TypeScript function logs out a user from an ACD system using an axios
     * delete request.
     * @returns The `logoutFromAcd` function is returning a promise that resolves to
     * the result of the `axiosInstance.delete` call, which is a request to delete
     * the user's session from the ACD (Automatic Call Distributor) system.
     */
    logoutFromAcd(): Promise<any>;
    /**
     * Check if the user has the ability to disposition a workitem or not. Will verify first in the user profile since the user setting takes precedence.
     *
     * @returns a boolean value (true or false) if the user can disposition or not a workitem.
     */
    hasDispositionEnabled(): boolean;
    private sendLoadDirectoryDataRequest;
    private handleSocketConnectedNotification;
    /**
     * Handles the logout event by updating the logged-in status, disconnecting the socket,
     * emitting a logout notification event, and throwing a LogoutNotification error.
     */
    private handleSocketNotification;
    /**
     * Automatically logs in to the ACD (Automatic Call Distributor) system.
     * If auto login to ACD is not enabled, it returns undefined.
     *
     * @returns A promise that resolves to the result of the login operation.
     */
    autoLoginToAcd(): Promise<{
        loginAt: number;
    } | undefined>;
    /**
     * Handles the session change notification event.
     */
    private handleSessionChangeNotification;
    /**
     * The function `addDirectoryItem` adds an item to an array based on the type and ID provided.
     * @param {string} type - The `type` parameter in the `addDirectoryItem` function represents the type
     * of directory item being added. It could be a category, folder, or any other classification for the
     * item.
     * @param {string} id - The `id` parameter in the `addDirectoryItem` function represents the unique
     * identifier of the directory item that you want to add to the directory.
     */
    addDirectoryItem(type: string, id: string): void;
    private getArray;
    /**
     * The function `saveDirectoryData` saves directory data including queues, topics, and users.
     */
    saveDirectoryData(): void;
    private saveUserInformation;
    /**
     * Adds a speed dial entry for a user.
     * @param to - The phone number to add as a speed dial.
     * @param name - The name associated with the speed dial entry.
     */
    addSpeedDial(to: string, name: string): void;
    /**
     * This function will
     *
     * @Param None
     *
     * @returns None
     */
    getSpeedDials(): any[];
    /**
     *
     * @param acdLoginAt
     * @deprecated Use sdk.getStateService().setACDLoggedInAt(acdLoginAt: number)
     */
    private setLoggedInToACD;
    /**
     * This TypeScript function logs the value of `acdLoginAt` and returns it.
     * @returns The `acdLoginAt` property is being returned from the `isLoggedInToACD` method.
     * @deprecated Use sdk.getStateService().isLoggedInToACD()
     */
    isLoggedInToACD(): number;
    /**
     * The function `setInConference` logs a message, updates the `inConference` property, and
     * potentially emits an external notification event.
     * @param {boolean} inConference - The `inConference` parameter is a boolean value that indicates
     * whether a user is currently in a conference or not.
     */
    private setInConference;
    /**
     * This TypeScript function returns a boolean value indicating whether the object is in a conference.
     * @returns The method `isInConference` returns the value of the `inConference` property, which is a
     * boolean value indicating whether the object is currently in a conference.
     */
    isInConference(): boolean;
    /**
     *
     * @param isRecording
     */
    private setIsRecording;
    /**
     *
     * @returns
     */
    isRecording(): boolean;
    /**
     * Initiates a call to a user's extension. The method supports two types of payloads:
     * a string representing the user ID or an object containing additional details.
     *
     * @param payload - The payload for dialing the extension. It can either be:
     *   - A string representing the user ID.
     *   - An object containing the following properties:
     *     - `campaignId` (optional): The ID of the campaign associated with the call.
     *     - `userId` (required): The ID of the user to be called.
     * @returns A promise that resolves to a `DialResponse` object containing the result of the call.
     */
    dialExtension(payload: DialExtensionPayload): Promise<DialExtensionResponse>;
    private getProperties;
    private sendAction;
    dial(payload: DialPayload): Promise<DialResponse>;
    protected email(payload: BaseSendEmailPayload<any>): Promise<any>;
    protected sms(payload: BaseSendSmsPayload<any>): Promise<SendMessageResponse>;
    protected fax(payload: BaseSendFaxPayload<any>): Promise<SendMessageResponse>;
    /**
     * This function will connect the caller to the server by having the server call his phone configured in his settings
     *
     * @Param None
     *
     * @returns None
     */
    connectToServer(): Promise<AxiosResponse<any, any, {}>>;
    /**
     * This function will disconnect the caller from the server. Any calls in process will be disconnected.
     *
     * @Param None
     *
     * @returns None
     */
    disconnectFromServer(): Promise<AxiosResponse<any, any, {}>>;
    /**
     * This function will reset the agent line. Any calls in process will be disconnected.
     *
     * @Param None
     *
     * @returns None
     */
    reset(): Promise<AxiosResponse<any, any, {}>>;
    /**
     * This function will mute the agent's phone, confirmation will be sent on the socket in PhoneStateNotification event
     *
     * @returns 200 OK if successfull
     */
    mute(): Promise<AxiosResponse<any, any, {}>>;
    /**
     * This function will unmute the agent's phone, confirmation will be sent on the socket in PhoneStateNotification event
     *
     * @returns 200 OK if successfull
     */
    unMute(): Promise<AxiosResponse<any, any, {}>>;
    /**
     * This function sends a POST request to enter a conference and logs the success or error response.
     * @returns The `enterConference` function is returning the response from the POST request made to
     * the '/users/api/calls/conference' endpoint using axiosInstance.
     */
    enterConference(): Promise<any>;
    /**
     * Exits the conference.
     *
     * @returns A promise that resolves to the response from the server.
     * @throws If an error occurs during the API call.
     */
    exitConference(): Promise<any>;
    /**
     * Sends a keep-alive signal to the server.
     *
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs while making the request.
     */
    keepAlive(): Promise<AxiosResponse<any, any, {}>>;
    startKeepAlive(): void;
    stopKeepAlive(): void;
    /**
     * Listens for updates related to a specific user.
     *
     * @param userId - The ID of the user to listen for updates.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs while making the request.
     */
    listen(userId: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Joins a user with the specified userId.
     *
     * @param userId - The ID of the user to join.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs while joining the user.
     */
    join(userId: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Assigns a coach to a user.
     *
     * @param userId - The ID of the user to assign a coach to.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs while assigning the coach.
     */
    coach(userId: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Records the user with the specified userId.
     * @param userId - The ID of the user to be recorded.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs while recording the user.
     */
    record(userId: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Retrieves the work items on a specific user.
     *
     * @param userId - The ID of the user.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs while retrieveing the work items.
     */
    workitems(userId: string): Promise<AxiosResponse<Workitem, any, {}>>;
    /**
     * Changes the status of an user logged to ACD.
     *
     * @param userId - The ID of the user.
     * @param statusId - The ID of the new status.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs when changing the status.
     */
    changeStatus(userId: string, statusId?: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Resets the compliance value of an user.
     *
     * @param userId - The ID of the user.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs when reseting the compliance of an user..
     */
    resetCompliance(userId: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Terminates a user.
     * @param userId - The ID of the user to terminate.
     * @returns A Promise that resolves to the response from the termination API.
     * @throws If an error occurs during the termination process.
     */
    terminate(userId: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Forces a user logout by sending a POST request to the server.
     *
     * @param userId - The ID of the user to force logout.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs during the logout process.
     */
    forceLogout(userId: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Forces logout and disables a user.
     * @param userId - The ID of the user to force logout and disable.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs during the request.
     */
    forceLogoutAndDisable(userId: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Terminates a workitem.
     * @param workitemId - The ID of the workitem to terminate.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs during the termination process.
     */
    terminateWorkitem(workitemId: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Transfers a workitem to the queue.
     * @param workitemId - The ID of the workitem to be transferred.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs during the transfer process.
     */
    transferWorkitem(workitemId: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Transfers a workitem to a function.
     * @param workitemId - The ID of the workitem to transfer.
     * @param functionId - The ID of the function to transfer the workitem to.
     * @param properties - Additional properties to include in the transfer request.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs during the transfer process.
     */
    transferToFunction(workitemId: string, functionId: string, properties: any): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Terminates a workitem with the specified disposition.
     * @param {string} workitemId - The ID of the workitem to terminate.
     * @param {string} dispositionId - The ID of the disposition to assign to the terminated workitem.
     * @returns {Promise<any>} - A promise that resolves to the response from the server.
     * @throws {Error} - If an error occurs while terminating the workitem.
     */
    terminateWorkitemWithDisposition(workitemId: string, dispositionId: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Stops supervising the user.
     *
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs during the request.
     */
    stopSupervising(): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Subscribes for Microsoft Teams presence.
     *
     * @returns {Promise<any>} A promise that resolves with the response from the server.
     * @throws {Error} If an error occurs during the subscription process.
     */
    subscribeForMSTeamsPresence(): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Starts supervision for a user with the specified ID and workitem ID.
     * @param userId - The ID of the user to start supervision for.
     * @param workitemId - The ID of the workitem to monitor.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs while sending the request.
     */
    supervisionStarted(userId: string, workitemId: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Starts monitoring for a workItem with the specified ID.
     * @param workitemId - The ID of the workitem to monitor.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs while sending the request.
     */
    monitorWorkitem(workitemId: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Stops monitoring for a workitem with the specified workitemId.
     * @param workitemId - The ID of the workitem to stop monitoring.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs while sending the request.
     */
    stopMonitorWorkitem(workitemId: string): Promise<AxiosResponse<any, any, {}>>;
    /**
     * Starts monitoring a user's ticket with the specified user ID and ticket ID.
     * @param userId - The ID of the user to monitor.
     * @param ticketId - The ID of the ticket to monitor.
     * @returns A Promise that resolves to the empty response.
     * @throws If an error occurs while sending the request.
     */
    monitorUserTicket({ ticketId, userId, }: {
        ticketId: string;
        userId: string;
    }): Promise<void>;
    /**
     * Sends a notification to a user.
     *
     * @param userId - The ID of the user to send the notification to.
     * @param type - The type of the notification.
     * @param message - The message content of the notification.
     * @param duration - The duration of the notification in milliseconds.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs while sending the notification.
     */
    sendNotification(userId: string, type: string, message: string, duration: number): Promise<AxiosResponse<any, any, {}>>;
    /**
     * This function retrieves voicemails based on the specified range type and whether to include only new
     * voicemails.
     * @param {RangeType} rangeType - The `rangeType` parameter is used to specify the type of range for
     * which voicemails should be retrieved. It could be a specific time range, such as "today", "this
     * week", "this month", etc.
     * @param {boolean} newOnly - The `newOnly` parameter is a boolean flag that indicates whether only new
     * voicemails should be retrieved. If `newOnly` is set to `true`, only new voicemails will be returned.
     * If `newOnly` is set to `false`, all voicemails within the specified
     * @returns The `getVoicemails` method is being returned, which is a promise that resolves to the
     * result of calling the `getVoicemails` method on the `widget` object with the specified `rangeType`
     * and `newOnly` parameters.
     */
    getVoicemails(rangeType: RangeType, newOnly: boolean): Promise<Workitem[]>;
    /**
     * This TypeScript function retrieves missed calls based on the specified range type and whether to
     * include only new missed calls.
     * @param {RangeType} rangeType - The `rangeType` parameter in the `getMissedCalls` method likely
     * specifies the type of range for which missed calls should be retrieved. This could be a specific
     * time range, such as "today", "yesterday", "last 7 days", or a custom date range. The actual
     * @param {boolean} newOnly - The `newOnly` parameter is a boolean value that indicates whether you
     * want to retrieve only new missed calls or all missed calls. If `newOnly` is set to `true`, the
     * method will return only new missed calls. If `newOnly` is set to `false`, the method will
     * @returns The `getMissedCalls` method is being returned, which is a promise that resolves to the
     * result of calling the `getMissedCalls` method on the `widget` object with the provided `rangeType`
     * and `newOnly` parameters.
     */
    getMissedCalls(rangeType: RangeType, newOnly: boolean): Promise<(object | Workitem)[]>;
    /**
     * This function asynchronously retrieves historical data based on the specified range type.
     * @param {RangeType} rangeType - The `rangeType` parameter in the `getHistory` method is of type
     * `RangeType`. It is used to specify the type of range for which you want to retrieve history data.
     * @returns The `getHistory` method is being returned, which is a promise that resolves to the result
     * of calling `this.widget.getHistory(rangeType)`.
     */
    getHistory(rangeType: RangeType): Promise<Workitem[]>;
    /**
     * This TypeScript function retrieves contact history data based on specified parameters and returns a
     * promise with processed work items or SMS messages.
     * @param {string} contactId - The `contactId` parameter is a string that represents the unique
     * identifier of a contact for which you want to retrieve the contact history. This function fetches
     * the contact history data based on the provided `contactId`, `rangeType`, `q`, `rows`, and `start`
     * parameters.
     * @param {RangeType} rangeType - The `rangeType` parameter in the `getContactHistory` function is used
     * to specify the type of range for filtering the contact history data. It is of type `RangeType`,
     * which likely indicates that it can have specific values such as 'daily', 'weekly', 'monthly', etc.
     * The
     * @param {HistoryTypeProperties} mergeProperties - The `mergeProperties` parameter in the
     * `getContactHistory` function is an object that specifies the properties to merge for different
     * history types. It is used to determine which properties to include when merging the history data
     * for different types of work items or SMS messages. The `mergeProperties` object
     * @param {object} [dateRange] - The `dateRange` parameter in the `getContactHistory` function is an
     * optional object that specifies the date range for filtering the contact history data. It contains
     * the `from` and `to` properties, which represent the start and end dates for the date range. If
     * provided, the function will retrieve the contact history data within the specified date range.
     * @param [q=*] - The `q` parameter in the `getContactHistory` method is a search query parameter. It
     * is used to specify a search query to filter the results based on a specific criteria. In this case,
     * the default value for `q` is set to `'*'`, which means that if no
     * @param [rows=1000] - The `rows` parameter in the `getContactHistory` function specifies the maximum
     * number of items to retrieve in a single request. In this case, it is set to a default value of 1000,
     * meaning that the function will retrieve up to 1000 items unless specified otherwise.
     * @param [start=0] - The `start` parameter in the `getContactHistory` function is used to specify the
     * starting index from which to retrieve the contact history data. It determines the offset for the
     * query results, allowing you to paginate through the data by fetching a subset of records starting
     * from the specified index.
     * @returns The `getContactHistory` method is returning a Promise that resolves to an array of either
     * `ProcessedWorkitem` or `ProcessedSMSMessage` objects.
     */
    getHistoryByContactId({ contactId, dateRange, mergeProperties, q, rangeType, rows, start, }: {
        contactId: string;
        dateRange?: {
            from: Date;
            to: Date;
        };
        mergeProperties?: HistoryTypeProperties;
        q?: string;
        rangeType: RangeType;
        rows?: number;
        start?: number;
    }): Promise<History>;
    /**
     * The function `mergeHistory` takes an array of workitems and returns an array of processed
     * workitems or SMS messages based on the type of each workitem.
     * @param {Workitem[]} workitems - The `mergeHistory` function takes an array of `Workitem` objects
     * as input. The function processes each `Workitem` based on its type and returns an array of either
     * `ProcessedWorkitem` or `ProcessedSMSMessage` objects.
     * @returns An array of either ProcessedWorkitem objects or ProcessedSMSMessage objects, depending on
     * the type of workitem passed into the function.
     */
    private mergeHistory;
    /**
     * This function asynchronously retrieves callbacks based on a specified range type.
     * @param {RangeType} rangeType - The `rangeType` parameter is a variable that specifies the type of
     * range for which callbacks are being retrieved. It is used to determine the specific callbacks
     * associated with that range type.
     * @returns The `getCallbacks` method is being returned, which is a promise that resolves to the
     * callbacks for the specified `rangeType`.
     */
    getCallbacks(rangeType: RangeType): Promise<object[]>;
    hasAutoLoginToACD(): boolean;
    /**
     * This TypeScript function retrieves an array of queue IDs associated with a user.
     * @returns An array of queue IDs is being returned.
     */
    getUserQueues(): Queue[];
    private getUserQueueIdsForACD;
    /**
     * Retrieves the user profile channels.
     * @returns An array of Channel objects representing the user profile channels.
     */
    getUserProfileChannels(): Channel[] | undefined;
    private getUserProfileChannelsForACD;
    private getStatusForAcdLogin;
    fetchSurveys(params: FetchSurveysRequestParams): Promise<FetchSurveysResponse>;
    /**
     * @deprecated Use sdk.getSchemaTypeClient().search('user')
     */
    fetchUsers(payload?: SchemaTypeSearchPayload): Promise<FetchUsersResponseBody>;
    /**
     * @deprecated Use sdk.getSchemaTypeClient().retrieve('user', { id: "..." })
     */
    fetchUser(id: string): Promise<UserDetails>;
    /**
     * Create default settings for a user ID. Passing an empty object will create default settings.
     *
     * @param userId - The ID of the user to fetch.
     * @returns A promise that resolves to the fetched settings.
     */
    private createDefaultUserVoiceSettings;
    /**
     * Updates Call Forwarding setting for a user ID.
     *
     * @param userId - The ID of the user to update.
     * @returns A promise that resolves to the updated settings.
     * @deprecated Will be removed in a future version. Use updateUserVoiceSettings instead.
     */
    updateUserCallForwardingVoiceSetting(userId: string, setting: CallForwardingSettings): Promise<UserVoiceSettings>;
    /**
     * Updates Call waiting setting for a user ID.
     *
     * @param userId - The ID of the user to update.
     * @returns A promise that resolves to the updated settings.
     * @deprecated Will be removed in a future version. Use updateUserVoiceSettings instead.
     */
    updateUserCallWaitingVoiceSetting(userId: string, setting: BaseUserSetting): Promise<UserVoiceSettings>;
    /**
     * Updates Voicemail setting for a user ID.
     *
     * @param userId - The ID of the user to update.
     * @returns A promise that resolves to the updated settings.
     * @deprecated Will be removed in a future version. Use updateUserVoiceSettings instead.
     */
    updateUserVoicemailVoiceSetting(userId: string, setting: BaseUserSetting): Promise<UserVoiceSettings>;
    /**
     * Deletes a voicemail greeting for a specified user.
     *
     * @param userId - The ID of the user whose voicemail greeting is to be deleted.
     * @param fileKey - The key of the file representing the voicemail greeting to be deleted.
     * @returns A promise that resolves to the user's voice settings after the voicemail greeting has been deleted.
     * @deprecated Use instead: `schemaTypeClient.request('user', 'deleteFileByKey', { method: 'DELETE', replacements: { fileKey, id }});`
     */
    deleteVoicemailGreeting(userId: string, fileKey: string): Promise<UserVoiceSettings>;
    /**
     * Updates voice settings for a user ID.
     *
     * @param userId - The ID of the user to update.
     * @param {UserVoiceCallSettingsPayload} - The 'settingPayload' parameter is a object that specifies the call settings properites.
     * @returns A promise that resolves to the updated settings.
     * @deprecated User schemaTypeClient.request method instead.
     */
    updateUserVoiceSettings(userId: string, settingPayload: UserVoiceCallSettingsPayload): Promise<UserVoiceSettings>;
    /**
     * Creates a voicemail greeting from text.
     *
     * @param {TextToSpeechPayload} - The `textToSpeechPayload` parameter is a object that specifies the properites of
     * of the greeting being created. It contains the `languageCode`, `text`, `userId`, `voiceGender`, and `voiceName`.
     * @returns A promise that resolves to a VoiceMailGreeting object.
     * @throws If an error occurs during the creation process.
     * @deprecated Use schemaTypeClient.request method instead.
     */
    convertTextToSpeech({ languageCode, text, userId, voiceGender, voiceName, }: TextToSpeechPayload): Promise<VoiceMailGreeting>;
    /**
     * Generates a TTS voicemail greeting and returns it as a `Blob`.
     *
     * Calls the `vmgreetingtts` action to synthesize speech and obtain a signed URL,
     * then fetches the audio from that URL and returns the raw binary data.
     * Use this instead of {@link convertTextToSpeech} when you need the audio file
     * (e.g. to create an object URL for playback or to upload the greeting).
     *
     * @param payload - The text-to-speech parameters.
     * @param payload.languageCode - BCP-47 language code for the synthesized voice (e.g. `"en-US"`).
     * @param payload.text - The greeting text to convert to speech.
     * @param payload.userId - The ID of the user the greeting belongs to.
     * @param payload.voiceGender - Gender of the synthesized voice (`"MALE"` or `"FEMALE"`).
     * @param payload.voiceName - Name of the specific voice to use.
     * @returns A `Promise` that resolves to a `Blob` containing the synthesized audio.
     * @throws If the API request fails or the signed-URL fetch returns a non-2xx status.
     */
    generateTtsGreetingBlob({ languageCode, text, userId, voiceGender, voiceName, }: TextToSpeechPayload): Promise<Blob>;
    handleACDLoginNotifications(): void;
    fetchUserHistory({ agentId, agentName, rows, sort, start, type, }: UserHistoryPayload): Promise<UserHistoryResponse>;
    triggerAllUserMessages(): Promise<void>;
    /**
     * Sets the user's typing status for the provided context.
     * @param payload Payload containing the typing status information.
     * @param payload.startTyping Whether the user has started typing (true) or stopped typing (false).
     * @param payload.contextId The ID of the object referred to in contextType (conversationId).
     * @param payload.contextType The type of the context where the user is typing ('CONVERSATION').
     * @param payload.source The source of the typing status update (e.g., 'composing').
     * @param payload.tenantId The ID of the current tenant.
     * @param payload.userId The ID of the user that is typing.
     * @param payload.userName The name of the user.
     * @returns Promise that resolves to empty body.
     */
    setUserTyping(payload: UserTypingPayload): Promise<AxiosResponse<any, any, {}>>;
    private handleTypingStatusNotification;
    private handleUserAutoReplyConfigNotification;
    protected updateAppVersionCode(appVersionCode: string): Promise<Record<string, unknown>>;
    protected updateFirebaseToken(firebaseToken: string): Promise<Record<string, unknown>>;
    protected updatePushKitToken(pushKitToken: string): Promise<Record<string, unknown>>;
    /**
     * Generates a signed URL for accessing a user's avatar image.
     *
     * @param {string} userId - The ID of the user whose avatar URL needs to be generated.
     * @returns {string} The signed URL for the user's avatar image.
     */
    buildAvatarSignedURL({ userId }: {
        userId: string;
    }): string | undefined;
    /**
     * Add a canned message to user's favorites.
     * @param payload The payload containing the details of the canned message to be added to favorites.
     * @param payload.junctionId The ID that links the user to the canned message.
     * @param payload.position The position of the canned message in the favorites list (optional).
     * @returns The response containing the details of the canned message added to favorites.
     */
    addFavoriteCannedMessage(payload: CannedMessageAddFavoritePayload): Promise<CannedMessageAddFavoriteResponse>;
    /**
     * Delete a canned message from the user's favorites
     * @param junctionId The ID that links the user to the canned message to be removed from favorites.
     * @returns A promise that resolves when the deletion is successful.
     */
    deleteFavoriteCannedMessage(junctionId: string): Promise<void>;
    protected importCannedMessages(id: string, file: unknown): Promise<CannedMessageImportResponse>;
    private handleCannedMessageEvents;
}
//# sourceMappingURL=user.d.ts.map