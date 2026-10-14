import { type SetUserStatusCustomFields, type SetUserStatusResponse, type Status } from '../types';
import { type InjectionContainer } from '../internal';
export declare class StatusService {
    private eventsService;
    private current;
    private stateService;
    private logger;
    constructor({ eventsService, loggerService, stateService, }: Pick<InjectionContainer, 'stateService' | 'eventsService' | 'loggerService'>);
    /**
     * Handles the change status notification event.
     */
    private handleChangeStatusNotification;
    private handleDynamicChangeNotification;
    /**
     * Retrieves the current status.
     * If the current status is not set, it sets the status based on the session's status ID.
     * @returns The current status, or null if it is not set.
     */
    getCurrentStatus(): Status | null;
    /**
     * Retrieves the name of the current status.
     * If the current status is not set, it sets the status based on the session's status ID.
     * @returns The name of the current status, or undefined if the current status is not set.
     */
    getCurrentStatusName(): string | undefined;
    /**
     * Retrieves the name of a status based on its ID.
     * If the status is not found, returns 'Unknown'.
     *
     * @param statusId - The ID of the status.
     * @returns The name of the status, or 'Unknown' if not found.
     */
    getStatusName(statusId: string): string;
    /**
     * Retrieves the statuses that should be presented to the user.
     * Only the statuses with the `presentToAgent` property set to true will be returned.
     *
     * @returns An array of `StatusState` objects representing the statuses to present to the user.
     */
    getStatusesToPresentToUser(): Status[];
    updateCurrent(status: Status): Status;
    /**
     * Sets the status of the service.
     *
     * @param statusId - The ID of the status to set.
     */
    setStatus(statusId: string, optionalFields?: SetUserStatusCustomFields): Promise<SetUserStatusResponse | undefined>;
}
//# sourceMappingURL=statuses.d.ts.map