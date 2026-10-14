import type { MessageAttachment } from './message';
import type { StringWithAutocomplete } from './util';
export type SocialActionMediaType = StringWithAutocomplete<'TEXT'>;
export type SocialMediaActionType = StringWithAutocomplete<'COMMENT_REPLY'>;
export type SocialChannel = StringWithAutocomplete<'INSTAGRAM' | 'FACEBOOK'>;
export interface ReplySocialMessagePayload {
    actionMediaType: SocialActionMediaType;
    actionType: SocialMediaActionType;
    attachments?: MessageAttachment[];
    channel: SocialChannel;
    message: string;
    sentTimeStamp: number;
    workitemId: string;
}
export type SocialAttachment = Omit<MessageAttachment, 'signedURL'>;
export interface UploadSocialAttachmentsResponse {
    attachments: SocialAttachment[];
    createdAt: string;
    modifiedAt: string;
}
//# sourceMappingURL=social.d.ts.map