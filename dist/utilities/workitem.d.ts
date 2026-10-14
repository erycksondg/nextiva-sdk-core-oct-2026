import { type WorkitemType, WorkitemTypes } from '../models';
import type { EngagementData, RealTimeUser, Workitem, WorkitemOwner } from '../types';
type ValidSMSWorkitemTypes = typeof WorkitemTypes.InboundSMS | typeof WorkitemTypes.OutboundSMS | typeof WorkitemTypes.PredictiveSMS;
export declare function validateSMSWorkitemType(workitemType: WorkitemType): workitemType is ValidSMSWorkitemTypes;
type ValidCallWorkitemTypes = typeof WorkitemTypes.InboundCall | typeof WorkitemTypes.OutboundCall | typeof WorkitemTypes.InboundExtensionCall | typeof WorkitemTypes.OutboundExtensionCall | typeof WorkitemTypes.PredictiveCall | typeof WorkitemTypes.ProgressiveCall | typeof WorkitemTypes.SystemCall;
export declare function validateCallWorkitemType(workitemType: WorkitemType): workitemType is ValidCallWorkitemTypes;
interface BuildSignedURLOptions {
    baseUrl: string;
    fileName: string;
    messageId: string;
    token?: string;
}
export declare const buildSignedURL: ({ baseUrl, fileName, messageId, token }: BuildSignedURLOptions) => string;
/**
 * Resolve the normalized owner (the agent who owned/answered the leg) from the
 * authoritative `ownedById` / `agentUsername` fields the backend sends on every workitem.
 * `ownedBy` is one of `agent` | `queue` | `offer` | `ivr` | `""`; only agent-owned legs
 * (or legs with an agent id/username but an unset `ownedBy`) produce an owner so that
 * queue/ivr ids are never surfaced as an agent.
 */
export declare const resolveWorkitemOwner: (workitem: Workitem, users: RealTimeUser[] | undefined) => WorkitemOwner | undefined;
interface FixAttachmentOptions {
    baseURL: string;
    token?: string;
    workitemId: string;
}
/**
 * @deprecated Use sdk.getWorkitemService().buildSignedURL()
 */
export declare const fixEngagementDataItem: (engagementData: EngagementData, options: FixAttachmentOptions) => EngagementData;
/**
 * @deprecated Use sdk.getWorkitemService().buildSignedURL()
 */
export declare const fixEngagementData: (engagementData: EngagementData[], options: FixAttachmentOptions) => EngagementData[];
interface FixWorkItemOptions {
    baseUrl: string;
    token?: string;
    users: RealTimeUser[] | undefined;
}
export declare const fixWorkitem: (workitem: Workitem, options: FixWorkItemOptions) => Workitem;
export declare const DefaultMergeProperties: {
    Default: string[];
    InboundCall: string[];
    InboundSMS: string[];
    OutboundSMS: string[];
};
export type HistoryTypeProperties = Record<string, string[]>;
export {};
//# sourceMappingURL=workitem.d.ts.map