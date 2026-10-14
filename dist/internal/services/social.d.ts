import { type LoggerService } from '../../services/logger';
import type { ReplySocialMessagePayload, UploadSocialAttachmentsResponse } from '../../types';
import { type InjectionContainer } from '../dependencyInjectionContainer';
import type { BaseUploadSocialAttachmentsPayload } from '../types';
export declare class BaseSocialService {
    protected logger: LoggerService;
    constructor({ loggerService }: Pick<InjectionContainer, 'loggerService'>);
    reply(payload: ReplySocialMessagePayload): Promise<void>;
    uploadAttachments({ files, workitemId, }: BaseUploadSocialAttachmentsPayload): Promise<UploadSocialAttachmentsResponse>;
}
//# sourceMappingURL=social.d.ts.map