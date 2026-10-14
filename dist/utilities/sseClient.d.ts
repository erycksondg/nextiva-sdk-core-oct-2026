import { Observable } from 'rxjs';
/**
 * A parsed SSE event following the W3C Server-Sent Events specification.
 * @see https://html.spec.whatwg.org/multipage/server-sent-events.html
 */
export interface SseEvent {
    /** Raw data payload (may be multiline). Consumer is responsible for JSON.parse if needed. */
    data: string;
    /** Event type. Defaults to "message" if the server omits the `event:` field. */
    event: string;
    /** Optional event ID. Servers use this for reconnection via `Last-Event-ID`. */
    id?: string;
    /** Optional retry interval in milliseconds (hint from server). */
    retry?: number;
}
export interface SseClientOptions {
    /** Additional headers to send with the request (merged with axios defaults). */
    headers?: Record<string, string>;
    /** URL query parameters. */
    params?: Record<string, string | string[] | boolean | number>;
    /** AbortSignal for external cancellation. Unsubscribing from the Observable also aborts. */
    signal?: AbortSignal;
}
/**
 * Creates an RxJS Observable that connects to an SSE endpoint and emits parsed events.
 *
 * Uses the axios instance (with `adapter: 'fetch'` and `responseType: 'stream'`) so all
 * configured defaults are inherited: baseURL, Authorization, cookies (withCredentials),
 * Deviceid, Nextiva-Platform, Accept-Language, etc.
 *
 * The stream is automatically aborted when the Observable is unsubscribed, or when the
 * consumer-provided `signal` fires.
 *
 * @param path - URL path relative to the axios base URL (e.g., `/v2/search/stream`)
 * @param options - Headers, query params, and abort signal
 * @returns Observable that emits SseEvent objects, completes when stream ends, errors on failure
 *
 * @example
 * ```typescript
 * const abort = new AbortController();
 * const stream$ = createSseStream('/v2/search/stream', {
 *   params: { q: 'Robert', pageSize: 5 },
 *   signal: abort.signal,
 * });
 *
 * const subscription = stream$.subscribe({
 *   next: (event) => {
 *     const payload = JSON.parse(event.data);
 *     if (event.event === 'results') handleResults(payload);
 *     if (event.event === 'done') handleDone(payload);
 *   },
 *   error: (err) => console.error('Stream failed', err),
 *   complete: () => console.log('Stream ended'),
 * });
 *
 * // Cancel on query change:
 * abort.abort();
 * // Or unsubscribe (also aborts):
 * subscription.unsubscribe();
 * ```
 */
export declare function createSseStream(path: string, options?: SseClientOptions): Observable<SseEvent>;
//# sourceMappingURL=sseClient.d.ts.map