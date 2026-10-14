import { Observable } from 'rxjs';
import { NotificationEvent } from '../models/notificationevent';
import { type ExternalEventTypeMap, type ExternalEventTypeMapKeys, type InternalEventTypeMap, type InternalEventTypeMapKeys } from '../types/events';
/**
 * Filters the source observable by the specified event type and returns a new observable
 * that emits only the events of the specified type.
 *
 * @param eventType - The event type to filter by.
 * @returns A function that takes the source observable and returns a new observable that emits
 * only the events of the specified type.
 */
export declare function ofType<K extends InternalEventTypeMapKeys>(eventType: K): (source: Observable<NotificationEvent>) => Observable<NotificationEvent<InternalEventTypeMap[K]>>;
/**
 * Filters the source Observable by the specified event type.
 *
 * @template K - The type of the event type keys.
 * @param {K[]} eventType - The event type(s) to filter by.
 * @returns {(source: Observable<NotificationEvent>) => Observable<NotificationEvent<EventTypeMap[K[number]]>>} - The filtered Observable.
 */
export declare function ofType<K extends InternalEventTypeMapKeys[]>(eventType: K): (source: Observable<NotificationEvent>) => Observable<NotificationEvent<InternalEventTypeMap[K[number]]>>;
/**
 * Filters the source Observable by the specified event types.
 *
 * @param eventTypes - The event types to filter by. Can be a single event type or an array of event types.
 * @returns A function that takes the source Observable and returns a new Observable that emits only the events of the specified types.
 */
export declare function ofType(eventTypes: string | string[]): (source: Observable<NotificationEvent>) => Observable<NotificationEvent>;
/**
 * Returns a function that filters the source Observable based on the specified eventType and maps the emitted values to the corresponding external event type.
 *
 * @param eventType The type of the external event.
 * @returns A function that takes the source Observable and returns a new Observable with the filtered and mapped values.
 */
export declare function ofExternalType<K extends ExternalEventTypeMapKeys>(eventType: K): (source: Observable<NotificationEvent>) => Observable<NotificationEvent<ExternalEventTypeMap[K]>>;
/**
 * Returns a function that filters and maps the source Observable of NotificationEvent
 * to an Observable of NotificationEvent with a specific external event type.
 *
 * @param eventType - The external event type to filter and map the source Observable.
 * @returns A function that takes the source Observable and returns an Observable of NotificationEvent
 * with the specified external event type.
 */
export declare function ofExternalType<K extends ExternalEventTypeMapKeys[]>(eventType: K): (source: Observable<NotificationEvent>) => Observable<NotificationEvent<ExternalEventTypeMap[K[number]]>>;
/**
 * Returns a function that filters the source Observable based on the specified event types.
 *
 * @param eventTypes The event type(s) to filter. It can be a single event type or an array of event types.
 * @returns A function that takes the source Observable and returns a new Observable with filtered events.
 */
export declare function ofExternalType(eventTypes: string | string[]): (source: Observable<NotificationEvent>) => Observable<NotificationEvent>;
//# sourceMappingURL=rxjs-operators.d.ts.map