import { type InjectionContainer } from '../internal';
import { type StatusType } from '../models';
export declare class OutboundModeService {
    private stateService;
    private logger;
    private eventsService;
    constructor({ eventsService, loggerService, stateService, }: Pick<InjectionContainer, 'eventsService' | 'stateService' | 'loggerService'>);
    loginToProgressive(payload: LoginPayload): Promise<void>;
    loginToProgressiveWithCampaigns(payload: LoginWithCampaignsPayload): Promise<void>;
    logoutFromProgressive(): Promise<void>;
    loginToPredictive(payload: LoginPayload): Promise<void>;
    loginToPredictiveWithCampaigns(payload: LoginWithCampaignsPayload): Promise<void>;
    logoutFromPredictive(): Promise<void>;
    loginToQuarterback(payload: LoginPayload): Promise<void>;
    loginToQuarterbackWithCampaigns(payload: LoginWithCampaignsPayload): Promise<void>;
    logoutFromQuarterback(): Promise<void>;
}
interface LoginPayload {
    campaignId: string;
    status: StatusType;
    statusId: string;
}
interface LoginWithCampaignsPayload {
    campaigns: string[];
    status: StatusType;
    statusId: string;
}
export {};
//# sourceMappingURL=outboundMode.d.ts.map