import { type InjectionContainer } from '../internal';
import type { CreateVideoMeetingPayload, ParticipantResponsePayload, QueryParameters, VideoMeeting, FetchMeetingsResponse, refreshVideoQueryParameters, VideoTokenResponse } from '../types/video';
export declare class VideoService {
    private logger;
    constructor({ loggerService }: Pick<InjectionContainer, 'loggerService'>);
    /**
     * The function createMeeting sends a POST request to create a video meeting using the provided
     * payload.
     * @param {CreateVideoMeetingPayload} payload - The `payload` parameter in the `createMeeting` function
     * is of type `CreateVideoMeetingPayload`. It is used to provide the necessary data and configuration
     * for creating a video meeting.
     * @returns The `createMeeting` function is returning a Promise that resolves to a `VideoMeeting`
     * object.
     */
    createMeeting(payload: CreateVideoMeetingPayload): Promise<VideoMeeting>;
    /**
     * This TypeScript function reads a video meeting by its ID using an HTTP GET request.
     * @param {string} id - The `id` parameter in the `readMeeting` function is a string that represents
     * the unique identifier of the video meeting that you want to retrieve.
     * @returns The `readMeeting` function is returning a Promise that resolves to a `VideoMeeting` object
     * fetched from the specified endpoint `/video-meetings/api/video/meeting/` using an HTTP GET
     * request.
     */
    readMeeting(id: string): Promise<VideoMeeting>;
    /**
     * This TypeScript function updates a video meeting with the specified ID using the provided payload.
     * @param {string} id - The `id` parameter in the `updateMeeting` function is a string that represents
     * the unique identifier of the meeting that needs to be updated.
     * @param {CreateVideoMeetingPayload} payload - The `payload` parameter in the `updateMeeting` function
     * is of type `CreateVideoMeetingPayload`. It contains the data needed to update a video meeting, such
     * as the meeting title, participants, date, and any other relevant information for the meeting.
     * @returns The `updateMeeting` function returns a Promise that resolves to a `VideoMeeting` object.
     */
    updateMeeting(id: string, payload: CreateVideoMeetingPayload): Promise<VideoMeeting>;
    /**
     * This TypeScript function deletes a meeting by its ID using an HTTP DELETE request.
     * @param {string} id - The `id` parameter in the `deleteMeeting` function is a string that represents
     * the unique identifier of the meeting that needs to be deleted.
     */
    deleteMeeting(id: string): Promise<void>;
    /**
     * This function responds to a meeting invitation and returns a video meeting object.
     * @param {ParticipantResponsePayload}  - The `respondInvitation` method takes in a
     * `ParticipantResponsePayload` object as a parameter, which includes the following properties:
     * @returns The `respondInvitation` function returns a Promise that resolves to a `VideoMeeting`
     * object.
     */
    respondInvitation({ action, meetingId, timestamp, }: ParticipantResponsePayload): Promise<VideoMeeting>;
    /**
     * This TypeScript function fetches meetings data by sending a POST request to a specific endpoint and
     * returns the response data.
     * @param {QueryParameters} [payload] - The `fetchMeetings` function is an asynchronous function that
     * fetches meetings using a POST request to a specific endpoint. The function takes an optional
     * `payload` parameter of type `QueryParameters`. The `payload` parameter is used as the data sent in
     * the POST request body.
     * @returns The `fetchMeetings` function is returning the `data` received from the POST request to the
     * '/video-meetings/api/video/meeting/query' endpoint using axiosInstance. The `data` is of type
     * `FetchMeetingsResponse`.
     */
    fetchMeetings(payload?: QueryParameters): Promise<FetchMeetingsResponse>;
    /**
     * The `refreshToken` function in TypeScript asynchronously retrieves a new video token for a user
     * session.
     * @param {refreshVideoQueryParameters} [payload] - The `payload` parameter in the `refreshToken`
     * function is an optional parameter of type `refreshVideoQueryParameters`. It is used to pass
     * additional data to the function if needed. In this case, it is being used to potentially update a
     * session when refreshing a video token.
     * @returns The `refreshToken` function is returning the `data` object received from the API call made
     * to `/video-meetings/api/identity/user/token`.
     */
    refreshToken(payload?: refreshVideoQueryParameters): Promise<VideoTokenResponse>;
}
//# sourceMappingURL=video.d.ts.map