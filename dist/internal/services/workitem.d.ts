import { type WorkItemPriority } from '../../models';
import { type AddToConferenceOptions, type AssignContactPayload, type BuildEmailSignedURLPayload, type BuildMessageSignedURLPayload, type BuildRecordingSignedURLPayload, type BuildTwitterSignedURLPayload, type BuildVoicemailSignedURLPayload, type BuildWorkitemSignedURLPayload, type CreateConferenceWithWorkitemsPayload, type DeleteEmailWorkitemAttachmentPayload, type FetchTranscriptsPayload, type FetchTranscriptsResponse, type RemoveFromConferencePayload, type ReserveAgentInInboxPayload, type SchemaTypeSearchPayload, type TransferToAgentPayload, type TransferToExternalPayload, type TransferToInboxPayload, type TransferToQueuePayload, type WarmTransferPayload } from '../../types';
import { type GetWorkitemFn, type SendEmailResponsePayload, type Workitem } from '../../types/workitem';
import type { SaveSurveyResultPayload } from '../../types/survey';
import type { InjectionContainer } from '..';
import type { BaseCreateEmailWorkitemAttachmentsPayload } from '../types/workitem';
export declare class BaseWorkitemsService {
    private workitems;
    private getWorkitemFn;
    private eventsService;
    private stateService;
    private datadogService;
    private schemaTypeClient;
    private workitemCache;
    private logger;
    constructor({ datadogService, eventsService, loggerService, schemaTypeClient, stateService, workitemCache, }: Pick<InjectionContainer, 'schemaTypeClient' | 'stateService' | 'eventsService' | 'datadogService' | 'workitemCache' | 'loggerService'>);
    setGetWorkitemFn(fn?: GetWorkitemFn | null): void;
    private handleConferenceStateNotification;
    private handleUpdateTicketNotification;
    private handleEngagementDataStatusUpdateNotification;
    /**
     * The function `handleWorkitemStateChangeNotification` listens for internal
     * events related to work item state changes, processes the notification, and
     * emits an external event with updated work item information.
     */
    private handleWorkitemStateChangeNotification;
    private handleWorkitemVoicemailNotification;
    /**
     * The function `handleWorkItemMessageNotification` handles subscription to PersonalInbox Messages Type.
     * It is being added separately to avoid disrupting work on MessageNotification type
     */
    private handleWorkitemConversationMessageNotification;
    /**
     * The function `handleWorkitemDirectConnectNotification` subscribes to internal
     * events for a specific type and performs various operations on workitems.
     */
    private handleWorkitemDirectConnectNotification;
    /**
     * The function `handleWorkitemRemovedNotification` listens for a specific
     * internal event related to work item removal, processes the event data, removes
     * the corresponding work item, and emits an external event notifying of the
     * change in work items.
     */
    private handleWorkitemRemovedNotification;
    /**
     * The function `handleWorkitemDeletedNotification` listens for a specific
     * internal event related to draft work item delete, processes the event data, removes
     * the corresponding work item, and emits an external event notifying of the
     * change in work items.
     */
    private handleWorkitemDeletedNotification;
    /**
     * The function `handleWorkitemTerminatedNotification` listens for a specific
     * event and updates the workitem accordingly.
     */
    private handleWorkitemTerminatedNotification;
    /**
     * The function `handleCallExternalTransferNotification` listens for internal
     * events related to work item calls transferred to an external number, processes
     * the notification, and emits an external event with updated work item information.
     */
    private handleCallExternalTransferNotification;
    private handleLiveTranscriptionNotification;
    private handleWorkitemSummaryNotification;
    private handleWorkitemProgressiveNotification;
    private handleWorkitemPredictiveNotification;
    private handleWorkitemFailedNotification;
    /**
     * Re-emits the AISummaryNotification into our external events with correct typing.
     */
    private handleAISummaryNotification;
    /**
     * The function "active" in the WorkitemsService class logs the model ID and then
     * makes a POST request to a specific endpoint using axiosInstance.
     * @param {Workitem} model - The `model` parameter in the `active` function is of
     * type `Workitem`. It seems to be an object that contains information related to
     * a work item. The function logs a message using `Logger.log` and then makes a
     * POST request using `axiosInstance` to a specific endpoint related to
     * @returns The `active` method is returning the result of the
     * `axiosInstance.post` call, which is a Promise. This Promise will resolve with
     * the response data from the POST request to the specified endpoint
     * `/users/api/calls/${model._id}/bridge`.
     */
    active(model: Workitem | string): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * This TypeScript function sends a POST request to hold a work item using
     * axiosInstance.
     * @param {Workitem} model - The `model` parameter in the `hold` function is of
     * type `Workitem`. It is used to pass information about the work item that needs
     * to be put on hold.
     * @returns The `hold` method is returning the result of the `axiosInstance.post`
     * call, which is a Promise. This Promise will resolve with the response data
     * from the POST request to the specified endpoint
     * `/users/api/calls/${model._id}/hold`.
     */
    hold(model: Workitem | string): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * This TypeScript function hangs up a call for a specific work item by sending a
     * POST request to the specified endpoint.
     * @param {Workitem} model - The `model` parameter in the `hangUp` function is of
     * type `Workitem`. It seems to contain information related to a work item,
     * possibly including an `_id` property used to identify the specific work item.
     * The function logs a message using `Logger.log` and then makes a POST
     */
    hangUp(model: Workitem | string): Promise<any>;
    /**
     * This TypeScript function hangs up a call for a specific work item by making a
     * POST request to the specified endpoint.
     * @param {Workitem} model - The `model` parameter in the `hangUp` function is of
     * type `Workitem`. It seems to contain information related to a work item,
     * possibly including an `_id` property used to identify the work item.
     */
    stopRecording(model: Workitem): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * The function `startRecording` logs an action and sends a POST request to start
     * recording for a specific work item.
     * @param {Workitem} model - The `model` parameter in the `startRecording`
     * function is of type `Workitem`.
     * @returns The `startRecording` function is returning a promise that resolves to
     * the result of the POST request made using `axiosInstance.post()`.
     */
    startRecording(model: Workitem): Promise<import("axios").AxiosResponse<any, any, {}>>;
    mute(model: Workitem): Promise<import("axios").AxiosResponse<any, any, {}>>;
    unMute(model: Workitem): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * The function `voicemail` sends a voicemail message with a predefined message
     * to a specific user's call ID using Axios in TypeScript.
     * @param {Workitem} model - The `model` parameter in the `voicemail` function is
     * of type `Workitem`. It seems to represent an object or data structure that
     * contains information related to a work item. The function uses this `model`
     * object to extract the `_id` property and include it in the request to the
     * @returns The `axiosInstance.post` method is being returned, which sends a POST
     * request to `/users/api/calls/${model._id}/voicemail` with the `properties`
     * object as the request body.
     */
    voicemail(model: Workitem): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * This TypeScript function transfers a work item to an external system using
     * axios for HTTP requests.
     * @param {Workitem} extendedWork - The `extendedWork` parameter in the
     * `transferToExternal` function is a boolean value that indicates whether the
     * work item should be transferred to an external system with extended work
     * information.
     * @param {Workitem} workItem - The `workItem` parameter in the
     * `transferToExternal` function is an object of type `Workitem`. It likely
     * contains information related to a specific work item or task that needs to be
     * transferred to an external system or service.
     * @param payload - The `payload` parameter in the `transferToExternal` function
     * contains the following properties:
     * @returns The `transferToExternal` function is returning a Promise that
     * resolves to the result of the `axiosInstance.post` call. This call is making a
     * POST request to the endpoint
     * `/users/api/calls/${workItem._id}/externaltransfer` with the provided `data`
     * object as the request body.
     */
    transferToExternal({ extendedWork, workitemId, ...payload }: TransferToExternalPayload): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * The function `transferToAgent` transfers a work item to a specific agent using
     * axios POST request.
     * @param {Workitem} workItem - The `workItem` parameter represents an object
     * that contains information about a specific work item. It likely includes
     * details such as the work item ID, status, and other relevant data related to
     * the work being processed.
     * @param data - The `data` parameter in the `transferToAgent` function contains
     * the following properties:
     * @returns The `transferToAgent` function is returning the result of the
     * `axiosInstance.post` call, which is a Promise. This Promise will resolve with
     * the response data from the POST request to the specified endpoint
     * `/users/api/calls/${workItem._id}/usertransfer/${data.userId}` with the
     * provided `data` object.
     */
    transferToAgent({ eventName, recording, survey, userId, workitemId, }: TransferToAgentPayload): Promise<import("axios").AxiosResponse<any, any, {}>>;
    private isRingAllOnTransfer;
    /**
     * @deprecated transferToQueue() is deprecated, use transferToInbox() instead
     */
    transferToQueue({ eventName, queueId, recording, ringAll, survey, workitemId, }: TransferToQueuePayload): Promise<any>;
    transferToInbox({ eventName, inboxId, recording, ringAll, survey, workitemId, }: TransferToInboxPayload): Promise<any>;
    reserveAgentInInbox({ eventName, inboxId, recording, ringAll, surveyResult, workitemId, }: ReserveAgentInInboxPayload): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * The `warmTransfer` function in TypeScript initiates a warm transfer call with specified options.
     * @param {WarmTransferOptions}  - The `warmTransfer` function takes in an object with the following
     * properties as its parameter:
     * @param {string} dispositionId - The `dispositionId` parameter in the `warmTransfer` function is a
     * string value that represents the ID of the disposition associated with the warm transfer call.
     * @param {string} eventName - The `eventName` parameter in the `warmTransfer` function is a string
     * value that represents the name of the event associated with the warm transfer call.
     * @param {boolean} extendedWork - The `extendedWork` parameter in the `warmTransfer` function is a
     * boolean value that indicates whether the warm transfer call should include extended work information.
     * @param {boolean} recording - The `recording` parameter in the `warmTransfer` function is a boolean
     * value that indicates whether the warm transfer call should be recorded.
     * @param {string} surveyResult - The `survey` parameter in the `warmTransfer` function is a string value
     * that represents the survey result associated with the warm transfer call.
     * @returns The `warmTransfer` function is returning the result of a POST request made using Axios to
     * the endpoint '/users/api/calls/active/warmtransfer' with the payload data provided in the `payload`
     * object.
     */
    warmTransfer({ dispositionId, eventName, extendedWork, recording, surveyResult, workitemIds, }: WarmTransferPayload): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * The `voicemailPlayed` function in TypeScript logs the action and makes a POST request to mark a
     * workitem as read or unread based on the `played` parameter.
     * @param {Workitem} model - The `model` parameter in the `voicemailPlayed` function represents a
     * Workitem object. It is used to identify the specific work item for which the voicemail status is
     * being updated.
     * @param {boolean} played - The `played` parameter in the `voicemailPlayed` function is a boolean
     * value that indicates whether a voicemail has been played or not. If `played` is `true`, the function
     * will mark the voicemail as read by sending a POST request to `/users/api/workitems/${model._
     * @returns The `voicemailPlayed` function is returning a Promise. The Promise will resolve with the
     * result of the axios POST request being made based on the `played` parameter. If `played` is true, it
     * will post to mark the voicemail as read, otherwise it will post to mark the voicemail as unread.
     */
    voicemailPlayed(model: Workitem, played: boolean): Promise<any>;
    /**
     * This TypeScript function handles marking a missed call as read or unread based on the 'played'
     * parameter.
     * @param {any} model - The `model` parameter in the `missedCallDialed` function is typically an
     * object that represents a missed call or a work item. It likely contains information such as the ID
     * of the work item, caller details, timestamp, and any other relevant data related to the missed
     * call.
     * @param {boolean} played - The `played` parameter in the `missedCallDialed` function is a boolean
     * value that indicates whether the missed call has been played or not. If `played` is `true`, it
     * means the missed call has been played, and if `played` is `false`, it means the
     * @returns A Promise is being returned. The Promise will resolve with the result of the
     * axiosInstance.post() call, which will either mark the work item as read or unread based on the
     * value of the 'played' parameter.
     */
    missedCallDialed(model: Workitem, played: boolean): Promise<any>;
    private patchWorkitem;
    private handleMessageNotification;
    private handleMessageStatusNotification;
    private handleWorkitemReadNotification;
    fetchWorkitems(payload?: SchemaTypeSearchPayload): Promise<import("../..").FetchWorkitemsResponseBody>;
    fetchWorkitem(id: string): Promise<Workitem>;
    /**
     * This function sends an email response for a specific work item using Axios in TypeScript.
     * @param {string} workitemId - The `workitemId` parameter is a string that represents the unique
     * identifier of a work item. It is used to identify the specific work item for which the email
     * response is being sent.
     * @param {SendEmailResponsePayload} properties - The `properties` parameter in the `sendEmailResponse`
     * function is of type `SendEmailResponsePayload`. This parameter likely contains the necessary data
     * and configuration for sending an email response related to a specific work item identified by the
     * `workitemId`. The structure and content of the `SendEmailResponsePayload
     * @returns The `sendEmailResponse` function is returning a Promise that resolves to a `Workitem`
     * object.
     */
    sendEmailResponse(workitemId: string, properties: SendEmailResponsePayload): Promise<Workitem>;
    /**
     * Changes the priority of a work item given a value.
     * @param workItemId - The ID of the workitem.
     * @param priority - A number that goes from 1 to 5, a higher number means a higher priority..
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs during the request.
     */
    changePriority(workItemId: string, priority: WorkItemPriority): Promise<object>;
    private upsertWorkItem;
    private removeWorkitem;
    private getIndex;
    exist(workitemId: string): boolean;
    createEmailWorkitemAttachments({ data, files, workitemId, }: BaseCreateEmailWorkitemAttachmentsPayload): Promise<Workitem>;
    deleteEmailWorkitemAttachment({ attachmentId, workitemId, }: DeleteEmailWorkitemAttachmentPayload): Promise<Workitem>;
    /**
     * This TypeScript function retrieves a specific workitem by its ID if it exists,
     * otherwise it throws an error.
     * @param {string} workitemId - The `workitemId` parameter is a string that
     * represents the unique identifier of a work item that you want to retrieve.
     * @returns The `getWorkitem` function is returning a `Workitem` object. If the
     * workitem with the specified `workitemId` exists, it retrieves the workitem
     * from the list of workitems and returns it.
     */
    getWorkitem(workitemId: string): Workitem | undefined;
    /**
     * This function returns an array of Workitem objects.
     * @returns An array of Workitem objects is being returned.
     */
    getWorkitems(): Workitem[];
    /**
     * @deprecated refreshWorkitems() will be removed in a future version, use fetchWorkitems() instead.
     */
    refreshWorkitems(): Promise<Workitem[]>;
    createConference(): Promise<object>;
    createConferenceWithWorkitems(payload: CreateConferenceWithWorkitemsPayload): Promise<object>;
    addToConference(workitemId: string, options?: AddToConferenceOptions): Promise<Workitem>;
    removeFromConference({ action, workitemId }: RemoveFromConferencePayload): Promise<any>;
    private getOrFetchWorkitem;
    private workitemSwitchMap;
    /**
     * The dtmf function sends a DTMF digit to a specific call identified by workitemId and returns the
     * updated workitem data.
     * @param {string} workitemId - The `workitemId` parameter is a unique identifier for a specific work
     * item or call in the system. It is used to identify and perform actions on a specific work item or
     * call, such as sending DTMF tones in this case.
     * @param {string} digit - The `digit` parameter in the `dtmf` function is a string that represents the
     * DTMF (Dual-Tone Multi-Frequency) digit that you want to send during a call.
     * @returns The `dtmf` function is returning a `Promise` that resolves to a `Workitem` object.
     */
    dtmf(workitemId: string, digit: string): Promise<Workitem>;
    buildSignedURL(payload: BuildWorkitemSignedURLPayload | BuildMessageSignedURLPayload | BuildVoicemailSignedURLPayload | BuildRecordingSignedURLPayload | BuildEmailSignedURLPayload | BuildTwitterSignedURLPayload): string;
    private handleWorkitemTransferNotification;
    private handleExtensionWorkitemNotification;
    private handleSupervisorNotification;
    private handleBackfillWorkitemsNotification;
    private handleWorkitemsAISummaryNotification;
    private handleMonitorWorkitemNotification;
    private handleMessageTypingNotification;
    private handleInformationNotification;
    /**
     *
     * Save survey results for a ticket
     * @param payload - Required data to save survey results
     * @param payload.workitemId - The workitem ID
     * @param payload.ticketId - The ticket ID, setting this parameter makes the request go to `surveyResultWithTicketId` schema.
     * @param payload.data - The data associated with the survey results.
     * @param payload.data.currentSurveyId - The current survey ID, there should be another entry in data with this value for the actual survey results.
     * @example { workitemId: '0000-0000', data: {currentSurveyId: '00ID', 00ID: { ...surveyResults }} }
     *
     * @returns A Promise that resolves to an empty object `{}`
     */
    saveSurveyResult(payload: SaveSurveyResultPayload): Promise<Record<string, unknown>>;
    /**
     * Fetch transcripts related to a workitem.
     *
     * @param payload - Required data to fetch transcripts
     * @param payload.workitemId - The workitem ID
     */
    fetchTranscripts(payload: FetchTranscriptsPayload): Promise<FetchTranscriptsResponse>;
    assignContact({ contact, workitemId }: AssignContactPayload): Promise<void>;
}
//# sourceMappingURL=workitem.d.ts.map