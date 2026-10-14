import type { WorkItemPriority, TimeEventType } from '../models';
export interface TimeEvent {
    duration: number;
    endtime: number;
    offerDuration?: number;
    priority?: WorkItemPriority;
    queues?: string;
    startime: number;
    type: TimeEventType;
    userId: string;
}
//# sourceMappingURL=time-event.d.ts.map