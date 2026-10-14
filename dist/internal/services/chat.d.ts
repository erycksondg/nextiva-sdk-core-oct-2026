import type { StateService } from '../../services';
import type { Message } from '../../types';
import type { InjectionContainer } from '../dependencyInjectionContainer';
import type { BaseChatSendMessagePayload } from '../types';
import type { ChatMessagePayload, ChatMessageResponse, ChatViewedPayload } from './../../types/chat';
import { type LoggerService } from '../../services/logger';
export declare class BaseChatService {
    protected stateService: StateService;
    protected logger: LoggerService;
    constructor({ loggerService, stateService, }: Pick<InjectionContainer, 'stateService' | 'loggerService'>);
    /**
     * Sends a chat message.
     *
     * @param chatMessage - The chat message to send.
     * @returns A promise that resolves with the response from the server.
     * @deprecated Will be removed in a future version.
     */
    send(chatMessage: ChatMessagePayload): Promise<Message>;
    /**
     * The `typing` function sends a typing indicator message from a workitem to a specified recipient
     * using Axios in TypeScript.
     * @param {string} userId - The `userId` parameter is a string that represents the ID of the
     * user associated with the typing action.
     * @param {string} toId - The `toId` parameter in the `typing` function represents the ID of the
     * recipient to whom the typing indicator message will be sent.
     * @returns The `typing` function is returning the result of the `axiosInstance.post` call, which is a
     * Promise. This Promise will resolve with the response data from the POST request to the specified
     * endpoint `/chats/api/agent/chats/{toId}/typing`.
     */
    typing(userId: string, toId: string): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * Send a message in a live chat.
     * @param {BaseChatSendMessagePayload} params - Message payload
     * @param {File | null} params.files - Files attached
     * @param {string} params.fromId - Sender ID
     * @param {boolean | null} params.priority - Priority should be enabled
     * @param {string} params.textMsg - Message to be sent
     * @param {string} params.toId - Addressee ID
     * @param {ChatMessageSource} params.type - The type of the message's source
     */
    sendMessage(payload: BaseChatSendMessagePayload<unknown>): Promise<ChatMessageResponse>;
    /**
     * Mark a message as viewed by the requesting user. Adds an entry to viewedBy array with the current user's ID and timestamp.
     * @param viewedPayload
     * @param viewedPayload.messageId - ID that identifies the message to mark as viewed.
     * @param viewedPayload.toId - Workitem ID that the message belongs to.
     * @returns
     */
    viewed(viewedPayload: ChatViewedPayload): Promise<import("axios").AxiosResponse<any, any, {}>>;
}
//# sourceMappingURL=chat.d.ts.map