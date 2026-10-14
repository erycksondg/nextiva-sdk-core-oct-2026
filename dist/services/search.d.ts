import type { Observable } from 'rxjs';
import type { InjectionContainer } from '../internal';
import type { AgenticSearchOptions, AttentionResponse, Contact, NCXObjectType, QuickSearchPayload, QuickSearchResponseBody, QuickSearchUsersAndContactsPayload, RealTimeUser, RecentSearchesResponse, SearchFeedbackPayload, SearchFeedbackResponse, SearchOptions, SearchResponseBody, SearchStreamOptions } from '../types';
import { type SseEvent } from '../utilities';
export declare const isNCXObjectTypeContact: (value: NCXObjectType) => value is Contact;
export declare class SearchService {
    private stateService;
    private logger;
    constructor({ loggerService, stateService, }: Pick<InjectionContainer, 'stateService' | 'loggerService'>);
    /**
     * Performs a search based on the provided search options.
     *
     * @param {SearchOptions} options - The search options.
     * @returns {Promise<SearchResponseBody>} - A promise that resolves to the search response body.
     */
    search(options: SearchOptions): Promise<SearchResponseBody>;
    private transformSearchParams;
    /**
     * Retrieves search suggestions.
     * @returns A promise that resolves to the search suggestions.
     */
    suggestions(): Promise<SearchResponseBody>;
    quickSearch(params: QuickSearchPayload): Promise<QuickSearchResponseBody>;
    /**
     * Uses SearchService to search for contacts and filters users from local memory to
     * deliver a combined list of contacts and users matching the provided filter
     *
     * @param payload
     * @param payload.apiLimit - The maximum number of Contact rows to return from the Search API.
     * @param payload.maxSize - The maximum number of combined results to return. The result may have less rows than the max size, depending on the search criteria and API limit.
     * @param payload.q - Query string to search for contacts and filter users.
     * @returns A combined list of contacts and users matching the provided query.
     */
    quickSearchUsersAndContacts(payload: QuickSearchUsersAndContactsPayload): Promise<(Contact | RealTimeUser)[]>;
    /**
     * Executes agentic search constrained to a single collection.
     *
     * @param params - Request options
     * @param params.q - Query string for lexical/semantic search
     * @param params.alpha - Optional blend factor for semantic vs lexical scoring (inclusive 0-1)
     * @param params.pageSize - Number of results to return per page
     * @param params.start - Pagination offset
     * @param params.type - The collection to search within
     * @returns SearchResponseBody with results for the specified collection
     */
    agenticSearch(params: AgenticSearchOptions): Promise<SearchResponseBody>;
    private static readonly V2_BASE;
    /**
     * Opens an SSE stream for typed-query search.
     * Returns an RxJS Observable that emits raw SSE events.
     * Consumer is responsible for parsing `event.data` as JSON.
     *
     * @param options - Search query and options
     * @param signal - Optional AbortSignal for cancellation
     * @returns Observable of SSE events (results, done, recent_searches, error)
     */
    searchStream(options: SearchStreamOptions, signal?: AbortSignal): Observable<SseEvent>;
    /**
     * Fetches "Needs Attention" items for the default dropdown (empty query).
     */
    fetchAttention(): Promise<AttentionResponse>;
    /**
     * Fetches recent searches for the current user.
     */
    fetchRecentSearches(): Promise<RecentSearchesResponse>;
    /**
     * Clears all recent searches for the current user.
     */
    clearRecentSearches(): Promise<void>;
    /**
     * Submits thumbs up/down feedback for a search session.
     */
    submitSearchFeedback(payload: SearchFeedbackPayload): Promise<SearchFeedbackResponse>;
}
//# sourceMappingURL=search.d.ts.map