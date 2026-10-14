import { type InjectionContainer } from '../internal';
import type { Workitem } from '../types';
export declare class WorkitemCache {
    private workitemsCache;
    private interval;
    private terminationTimeouts;
    private logger;
    constructor({ loggerService }: Pick<InjectionContainer, 'loggerService'>);
    start(): void;
    stop(): void;
    /**
     * Adds or updates a workitem to the cache, updating its expiration time.
     * @param workitem - The workitem to add.
     */
    upsertWorkitem(workitem: Workitem): void;
    /**
     * Retrieves a workitem from the cache by ID.
     * @param workitemId - ID of the workitem to retrieve.
     * @returns A `Workitem` if it exists, otherwise `undefined`.
     */
    getWorkitem(workitemId: string): Workitem | undefined;
    /**
     * Deletes a workitem from the cache by ID.
     * @param workitemId - ID of the workitem to delete.
     */
    deleteWorkitem(workitemId: string): void;
    /**
     * Clears the termination timeout for a workitem, call when the actual
     * WorkitemTerminatedNotification is received.
     * @param workitemId - ID of the workitem to clear termination timeout for.
     */
    clearTerminationTimeout(workitemId: string): void;
    /**
     * Clears any local overwrite for a workitem in the cache.
     * @param workitemId - ID of the workitem to clear overwrite for.
     */
    clearWorkitemOverwrite(workitemId: string): void;
    /**
     *
     * Store a local overwrite for a workitem in the cache.
     * @param workitemId - ID of the workitem to set overwrite for.
     * @param overwrite - Partial workitem data to overwrite locally
     */
    setWorkitemLocalOverwrite(workitemId: string, overwrite: Partial<Workitem>): void;
    /**
     * Applies any local overwrite to a workitem
     * @param workitem - The workitem to apply local overwrite.
     * @returns The updated workitem if data was found.
     */
    applyWorkitemLocalOverwrite(workitem: Workitem): Workitem;
    setLocalWorkitemAsTerminated(workitemId: string, onTimeout?: () => void): void;
    /**
     * Cleans up expired workitems from the cache.
     */
    private cleanUpCache;
}
//# sourceMappingURL=workitemCache.d.ts.map