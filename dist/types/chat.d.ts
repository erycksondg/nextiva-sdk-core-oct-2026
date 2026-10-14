import type { ChatMessageSource } from '../models';
export interface ChatMessagePayload {
    fromId: string;
    priority?: boolean;
    textMsg: string;
    toId: string;
    type: ChatMessageSource;
}
export interface ChatMessageResponse {
    channel: string;
    createdAt: number;
    fromUser: {
        name: string;
        userName: string;
    };
    id: string;
    message: string;
    messageId: string;
    messageType: string;
    searchText: string;
    sourceId: string;
    uid: string;
    userType: string;
    workitemId: string;
}
export interface ChatViewedPayload {
    messageId: string;
    toId: string;
}
//# sourceMappingURL=chat.d.ts.map