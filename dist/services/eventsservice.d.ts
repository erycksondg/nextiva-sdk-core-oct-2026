import { NotificationEvent } from '../models';
export declare class EventsService {
    private externalSubject;
    private internalSubject;
    private statisticsWebSocketSubject;
    externalEvents$: import("rxjs").Observable<NotificationEvent<any>>;
    internalEvents$: import("rxjs").Observable<NotificationEvent<any>>;
    statisticWebSocketEvents$: import("rxjs").Observable<NotificationEvent<any>>;
    /**
     * Emits an internal event with the specified name and optional data.
     *
     * @template T - The type of the data being emitted.
     * @param name - The name of the event.
     * @param data - The optional data to be associated with the event.
     */
    emitInternal(name: string, data?: unknown): void;
    /**
     * Emits a statistic event with the given name and optional data.
     *
     * @template T - The type of the optional data.
     * @param {string} name - The name of the statistic event.
     * @param {T} [data] - The optional data associated with the event.
     */
    emitStatistic(name: string, data?: unknown): void;
    /**
     * Emits an external event with the given name and optional data.
     * @param name - The name of the event.
     * @param data - Optional data associated with the event.
     * @typeparam T - The type of the data.
     */
    emitExternal(name: string, data?: unknown): void;
}
//# sourceMappingURL=eventsservice.d.ts.map