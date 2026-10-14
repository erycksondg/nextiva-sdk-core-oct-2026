import { type InjectionContainer } from '../internal';
import type { DispositionOptions, FetchDispositionsResponse } from '../types/disposition';
export declare class DispositionService {
    private logger;
    constructor({ loggerService }: Pick<InjectionContainer, 'loggerService'>);
    /**
     * This TypeScript function handles the disposition of a work item by sending
     * relevant data to an API endpoint using axios.
     * @param {Workitem} model - The `model` parameter in the `disposition` function
     * represents a Workitem object. It is used to pass information about the work
     * item for which the disposition is being set.
     * @param {string} dispositionId - The `dispositionId` parameter in the
     * `disposition` function represents the unique identifier associated with the
     * disposition of a work item. It is used to specify the particular disposition
     * action that needs to be taken for the work item.
     * @param {string} action - The `action` parameter in the `disposition` function
     * represents the action that will be taken for the work item. It could be a
     * string indicating the specific action to be performed on the work item, such
     * as "complete", "reassign", "escalate", etc.
     * @param {number} callbackDate - The `callbackDate` parameter in the
     * `disposition` function represents the date for a callback. It is of type
     * `number` and is used to specify the date on which a callback should be
     * scheduled.
     * @param {number} callbackTime - The `callbackTime` parameter in the
     * `disposition` function represents the time at which a callback is scheduled.
     * It is a number value that typically represents the time in milliseconds or
     * seconds when the callback is supposed to occur. This parameter is used to
     * specify the exact time for the callback to be initiated
     * @param {string} phone - The `phone` parameter in the `disposition` function
     * represents the phone number associated with the work item. It is a string type
     * parameter where you would provide the phone number to be used for the
     * disposition action.
     * @param {string} mediaType - The `mediaType` parameter in the `disposition`
     * function represents the type of media through which the interaction is taking
     * place. This could be a phone call, email, chat, or any other communication
     * channel used for the work item.
     * @param queues - The `queues` parameter in the `disposition` function is an
     * array of strings that represents the queues to which the work item will be
     * assigned. Each string in the array corresponds to a specific queue where the
     * work item will be processed or handled.
     * @param skills - The `skills` parameter in the `disposition` function
     * represents an array of strings that contain the skills associated with the
     * work item being processed. These skills typically refer to the abilities or
     * expertise required to handle the work item effectively. The `skills` array
     * allows you to specify multiple skills that may be
     * @param {boolean} useCallbackNumberOnly - The parameter useCallbackNumberOnly
     * is a boolean flag that indicates whether only the callback phone number should
     * be used during the disposition process. If useCallbackNumberOnly is set to
     * true, it means that only the phone number provided should be used for any
     * callback actions or follow-ups. If it is set to false,
     * @param {boolean} connectAgain - The `connectAgain` parameter in the
     * `disposition` function is a boolean flag that indicates whether the user wants
     * to connect again after the disposition action is completed. If `connectAgain`
     * is set to `true`, it means that the user wants to establish a connection
     * again, whereas if it is
     * @param {any} survey - The `survey` parameter in the `disposition` function is
     * of type `any`, which means it can accept any data type. This parameter is used
     * to pass survey-related information to the function. You can use it to provide
     * details about the survey associated with the work item being processed.
     * @param {any} summary - The `summary` parameter in the `disposition` function
     * is used to provide a summary or additional information related to the work
     * item disposition. It is of type `any`, which means it can hold any type of
     * data. This parameter allows you to include any relevant details or notes that
     * should be associated
     * @returns The `disposition` function is returning a Promise that resolves to
     * the result of a POST request made using axiosInstance to the endpoint
     * `/users/api/workitems/${model._id}/disposition` with the properties provided
     * as the request body.
     */
    disposition({ action, callbackDate, callbackTime, connectAgain, dispositionId, mediaType, phoneNumber, queues, skills, summary, survey, useCallbackNumberOnly, workitemId, }: DispositionOptions): Promise<import("axios").AxiosResponse<any, any, {}>>;
    fetchDispositions(): Promise<import("axios").AxiosResponse<FetchDispositionsResponse, any, {}>>;
}
//# sourceMappingURL=disposition.d.ts.map