import type { ConversationMessageType } from '../../types';
import type { EmailAddress } from '../../types/workitem';
interface BaseConversationSendMessageCommonPayload<TFile> {
    campaignId?: string;
    conversationId?: string;
    draftMessage?: string;
    /**
     * @deprecated file is being replaced with multiple files
     */
    file?: TFile;
    files?: TFile[];
    fromAddressOption?: string;
    mentionedUsers?: string[];
    message: string;
    messageType?: ConversationMessageType;
    parentWorkitemIds?: string[];
}
export interface BaseConversationSendMessageToPayload<TFile> extends BaseConversationSendMessageCommonPayload<TFile> {
    campaignId: string;
    external?: false;
    from?: string | null;
    internal?: false;
    to: string;
    toAddresses?: never;
}
export interface BaseConversationSendMessageToAddressesPayload<TFile> extends BaseConversationSendMessageCommonPayload<TFile> {
    campaignId: string;
    external?: false;
    from?: string | null;
    internal?: false;
    to?: never;
    toAddresses: Array<{
        phoneNumber: string;
    }>;
}
interface BaseConversationSendMessageInternalToPayload<TFile> extends BaseConversationSendMessageCommonPayload<TFile> {
    conversationId: string;
    external?: boolean;
    from?: string | null;
    internal: true;
    to?: string;
    toAddresses?: never;
}
interface BaseConversationSendMessageInternalToAddressesPayload<TFile> extends BaseConversationSendMessageCommonPayload<TFile> {
    conversationId: string;
    external?: boolean;
    from?: string | null;
    internal: true;
    to?: never;
    toAddresses?: Array<{
        phoneNumber: string;
    }>;
}
interface BaseConversationSendMessageExternalToPayload<TFile> extends BaseConversationSendMessageCommonPayload<TFile> {
    conversationId: string;
    external: true;
    from?: string | null;
    internal?: false;
    to?: never;
    toAddresses?: Array<{
        phoneNumber: string;
    }>;
}
export interface BaseConversationSendMessageExternalToAddressesPayload<TFile> extends BaseConversationSendMessageCommonPayload<TFile> {
    conversationId: string;
    external: true;
    from?: string | null;
    internal?: false;
    to?: never;
    toAddresses: Array<{
        phoneNumber: string;
    }>;
}
export type BaseConversationSendMessageExternalPayload<TFile> = BaseConversationSendMessageExternalToPayload<TFile> | BaseConversationSendMessageExternalToAddressesPayload<TFile>;
export type BaseConversationSendMessageInternalPayload<TFile> = BaseConversationSendMessageInternalToPayload<TFile> | BaseConversationSendMessageInternalToAddressesPayload<TFile>;
export type BaseConversationSendMessagePayload<TFile> = BaseConversationSendMessageToPayload<TFile> | BaseConversationSendMessageToAddressesPayload<TFile> | BaseConversationSendMessageInternalPayload<TFile> | BaseConversationSendMessageExternalPayload<TFile>;
export interface BaseConversationEditMessagePayload<TFile> extends BaseConversationSendMessageCommonPayload<TFile> {
    conversationId: string;
    external?: boolean;
    internal?: boolean;
    workitemId: string;
}
export type EmailBodyPartType = 'HTML' | 'TEXT';
export interface EmailSendBodyPart {
    content: string;
    id: string;
    order?: number;
    size?: number;
    type: EmailBodyPartType;
}
export interface OutboundEmailDetails {
    bccAddresses: EmailAddress[];
    bodyParts: Record<string, EmailSendBodyPart>;
    ccAddresses: EmailAddress[];
    from: string;
    subject: string;
    to: string;
    toAddresses: EmailAddress[];
}
export interface BaseConversationSendEmailPayload {
    campaignId?: string;
    conversationId?: string;
    emailResponse: OutboundEmailDetails;
    from: string;
    fromAddressOption: number;
    message: string;
    parentWorkitemIds?: string[];
    queueId?: string;
    subject: string;
    to: string;
}
export {};
//# sourceMappingURL=conversation.d.ts.map