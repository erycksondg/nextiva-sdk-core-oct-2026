import { type InjectionContainer } from '../internal';
export declare class StatisticsService {
    private eventsService;
    private stateService;
    private logger;
    private isSocketStarted;
    constructor({ eventsService, loggerService, stateService, }: Pick<InjectionContainer, 'eventsService' | 'stateService' | 'loggerService'>);
    /**
     * Starts the statistics service.
     *
     * @param options - The options for starting the statistics service.
     * @returns A promise that resolves to the response from the server.
     */
    start(options: StartStatisticsOptions): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * Stops the statistics service.
     *
     * @returns {Promise<void>} A promise that resolves when the service is stopped.
     */
    stop(): Promise<import("axios").AxiosResponse<any, any, {}>>;
    private handleSocketDisconnectedNotification;
    private handleSocketConnectedNotification;
    private handleSupervisorStatsNotification;
}
interface StartStatisticsOptions {
    campaigns?: boolean;
    outboundLists?: boolean;
    queues?: boolean;
    users?: boolean;
    workItems?: boolean;
}
export {};
//# sourceMappingURL=statistics.d.ts.map