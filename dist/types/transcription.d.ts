import type { Message } from './message';
import type { Workitem } from './workitem';
export interface LiveTranscriptionNotificationData {
    createdAt: number;
    id: string;
    message: Message;
    name: 'LiveTranscriptionNotification';
    result: string;
    workitem?: Workitem;
    workitemId: string;
}
//# sourceMappingURL=transcription.d.ts.map