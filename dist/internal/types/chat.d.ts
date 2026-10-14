import { type ChatMessageSource } from '../../models';
export interface BaseChatSendMessagePayload<TFile> {
    files?: TFile[];
    fromId: string;
    priority?: boolean;
    textMsg: string;
    toId: string;
    type: ChatMessageSource;
}
//# sourceMappingURL=chat.d.ts.map