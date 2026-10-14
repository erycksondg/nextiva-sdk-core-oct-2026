import { type AbstractTelephony } from '../../telephony';
import { type TelephonyImplementationType } from '../../types';
import { type InjectionContainer } from '../dependencyInjectionContainer';
export declare class BaseTelephonyService {
    protected selectedImplementation: AbstractTelephony | null | undefined;
    private stateService;
    private eventsService;
    private logger;
    constructor({ eventsService, loggerService, stateService, }: Pick<InjectionContainer, 'stateService' | 'eventsService' | 'loggerService'>);
    /**
     * Retrieves the PSTN (Public Switched Telephone Network) object.
     *
     * @returns The PSTN object.
     */
    getPSTN(): AbstractTelephony;
    /**
     * Retrieves the Twilio instance.
     * @returns The Twilio instance.
     */
    getTwilio(): AbstractTelephony;
    /**
     * Retrieves the Freeswitch instance.
     * @returns The Freeswitch instance.
     */
    getFreeswitch(): AbstractTelephony;
    /**
     * Gets the selected implementation.
     *
     * @returns The selected implementation.
     */
    getSelectedImplementation(): AbstractTelephony | null | undefined;
    /**
     * Changes the telephony implementation based on the provided type.
     *
     * @param telephonyImplementationType - The type of telephony implementation to change to.
     * @param options - Optional parameters for changing telephony implementation.
     * @param options.isTelephonyInitAllowed - Indicates whether the telephony implementation should be initialized immediately after changing. If set to `false`, the initialization will be deferred until it is explicitly requested. This can be useful in scenarios where additional setup or configuration is needed before initializing telephony.
     * @returns A promise that resolves when the telephony implementation is changed.
     * @throws An error if the provided telephony type is unsupported or if the required implementations have not been added.
     */
    changeTelephony(telephonyImplementationType: TelephonyImplementationType, options?: {
        isTelephonyInitAllowed?: boolean;
    }): Promise<void>;
    /**
     * Changes the telephony implementation and initializes it with the provided session, user, edgeId, and debug flag.
     * If the selected implementation is already the same as the provided telephony, no action is taken.
     * If there is a previously selected implementation, it is closed before changing to the new implementation.
     *
     * @param telephony - The new telephony implementation to be set.
     * @returns A promise that resolves when the new telephony implementation is initialized.
     */
    private _changeTelephony;
    close(): Promise<void>;
}
//# sourceMappingURL=telephony.d.ts.map