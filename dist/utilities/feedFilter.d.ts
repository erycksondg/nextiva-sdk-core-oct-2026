import type { FetchFeedFilter, FetchFeedPayload } from '../types/conversation';
/**
 * Whether a conversation of the given `conversationType` belongs in the given feed `tab`.
 *
 * Used to gate realtime inserts/updates so a live conversation from one tab cannot leak
 * into another tab's cache bucket on the shared per-user WebSocket topic. `filter="all"`
 * means "all channels" — NOT "all conversation types" — so the tab check still applies.
 *
 * Returns `true` (unrestricted) for tabs with no type restriction, or when
 * `conversationType` is unknown (to avoid dropping legitimate conversations).
 */
export declare function tabAllowsConversationType(tab: FetchFeedPayload['tab'], conversationType: string | undefined): boolean;
export declare function normalizeFeedFilter(filter: FetchFeedPayload['filter']): FetchFeedFilter[];
export declare function areFeedFiltersEqual(a: FetchFeedPayload['filter'], b: FetchFeedPayload['filter']): boolean;
export declare function isFetchFeedPayloadEqual(prev: {
    filter: FetchFeedPayload['filter'];
    queueIds?: string;
    tab: FetchFeedPayload['tab'];
}, current: {
    filter: FetchFeedPayload['filter'];
    queueIds?: string;
    tab: FetchFeedPayload['tab'];
}): boolean;
//# sourceMappingURL=feedFilter.d.ts.map