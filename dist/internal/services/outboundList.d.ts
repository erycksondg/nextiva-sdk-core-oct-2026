import { type StateService } from '../../services';
import type { OutboundListDetails } from '../../types';
import type { BaseCreateOutboundListPayload } from '../types';
import { type InjectionContainer } from '../dependencyInjectionContainer';
import { type EventsService } from '../../services';
import { type LoggerService } from '../../services/logger';
export declare abstract class BaseOutboundListService {
    protected stateService: StateService;
    protected eventsService: EventsService;
    protected logger: LoggerService;
    constructor({ eventsService, loggerService, stateService, }: Pick<InjectionContainer, 'stateService' | 'eventsService' | 'loggerService'>);
    /**
     * Resets all callbacks from an outbound list.
     *
     * @param listId - The ID of the list.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs while resetting all callbacks .
     */
    resetAllCallbacks(listId: string): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * Resets callbacks from selected types.
     *
     * @param attempts - The number of attempts
     * @param listId - The ID of the list.
     * @param typesSelected - An object than contains the types to be used on the API call.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs while resetting the callbacks .
     */
    resetCallbacksByType({ abandoned, agentCallbacks, answeringMachine, attempts, busy, errorDialing, listId, noAnswer, }: ResetOutboundListByTypeProps): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * Resets callbacks from selected dispositions.
     *
     * @param listId - The ID of the list.
     * @param dispositionIds - An array than contains the ids of the dispositions to be used on the API call.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs while resetting the callbacks .
     */
    resetCallbacksByDisposition(listId: string, dispositionIds: string[]): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * Starts or stops a list.
     *
     * @param listId - The ID of the list.
     * @param active - A boolean value to update the status of the list. True to start the list, false to stop it.
     * @returns A Promise that resolves to the response from the server.
     * @throws If an error occurs while resetting the callbacks .
     * @deprecated sdk.getSchemaTypeClient().update("outboundlist", { id: "...", data: {...} })
     */
    updateOutboundListStatus(listId: string, active: boolean): Promise<import("axios").AxiosResponse<any, any, {}>>;
    protected createOutboundList({ file, ...rest }: BaseCreateOutboundListPayload<{
        name?: string;
    }>): Promise<OutboundListDetails>;
    private handleCampaignTotalsNotification;
}
interface ResetOutboundListByTypeProps {
    abandoned: boolean;
    agentCallbacks: boolean;
    answeringMachine: boolean;
    attempts: number;
    busy: boolean;
    errorDialing: boolean;
    listId: string;
    noAnswer: boolean;
}
export {};
//# sourceMappingURL=outboundList.d.ts.map