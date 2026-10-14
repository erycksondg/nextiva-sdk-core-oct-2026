import { type InjectionContainer } from '../internal';
import type { RejectOptions } from '../types';
export declare class ACDService {
    private eventsService;
    private stateService;
    private logger;
    constructor({ eventsService, loggerService, stateService, }: Pick<InjectionContainer, 'eventsService' | 'stateService' | 'loggerService'>);
    /**
     * Accepts an offer with the specified offer ID.
     * @param offerId - The ID of the offer to accept.
     * @returns A Promise that resolves to the response from the server.
     */
    accept(offerId: string): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * Rejects an offer.
     *
     * @param offerId - The ID of the offer to reject.
     * @param status - The status of the rejection.
     * @param statusId - The ID of the rejection status.
     * @returns A promise that resolves to the response from the server.
     */
    reject({ offerId, status, statusId }: RejectOptions): Promise<import("axios").AxiosResponse<any, any, {}>>;
    /**
     * Marks an offer as expired.
     *
     * @param offerId - The ID of the offer to mark as expired.
     * @param status - The status of the offer.
     * @param statusId - The ID of the status.
     * @returns A Promise that resolves to the response from the server.
     */
    expired({ offerId, status, statusId }: RejectOptions): Promise<import("axios").AxiosResponse<any, any, {}>>;
    private handleOfferNotification;
    private handleOfferRemovedNotification;
    private addOffer;
    private removeOffer;
}
//# sourceMappingURL=acd.d.ts.map