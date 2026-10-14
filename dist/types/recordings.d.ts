import type { RangeType } from '../models';
export interface Recording {
    _id: string;
    callId: string;
    campaignId: string;
    createdAt: number;
    deletedAt: string;
    duration: number;
    filename: string;
    from: string;
    fromAddress: string;
    id: string;
    name: string;
    objectType: string;
    recordingId: string;
    recordingURL: string;
    to: string;
    toAddress: string;
    type: string;
    userId: string;
    users: string;
}
export interface RecordingPayload {
    q?: string;
    rangeFrom?: number;
    rangeTo?: number;
    rangeType: RangeType;
    rows?: number;
    start?: number;
    userId?: string;
}
export interface RecordingResponse {
    count: number;
    objects: Recording[];
    total: number;
}
export interface CallRecordingNotificationData {
    agentid: string;
    callRecordingData: {
        callRecording: Recording;
    };
    conversationId: string;
    createdAt: number;
    id: string;
    name: string;
    result: string;
    skipMobileNotification: boolean;
    userId: string;
    workitemId: string;
}
export interface ConversationCallRecordingData {
    callId: string;
    duration: number;
    filename: string;
    id: string;
    type: string;
}
//# sourceMappingURL=recordings.d.ts.map