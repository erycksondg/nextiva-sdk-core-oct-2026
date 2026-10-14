import { type PhoneState } from '../models';
import { type InjectionContainer } from '../internal';
export declare class PhoneStatesService {
    private inMute;
    private deviceId;
    private phoneState;
    private eventsService;
    private logger;
    constructor({ eventsService, loggerService, }: Pick<InjectionContainer, 'eventsService' | 'loggerService'>);
    private handlePhoneStateNotification;
    private handleMuteStateNotification;
    private handleSessionChangeNotification;
    /**
     * When a phone is "off hook" or " on hoold" it means that the receiver (handset) is not resting in its
     * cradle or is lifted from its base. This function returns if the agent device is connected or not
     * to the server. It is possible for the agent to work "Off Hook", to always be connected to the server
     * so calls are connected faster. Possible states are onHook, offHook and ringing.
     * @returns The method `getPhoneState()` is returning the state if the phone, one of the following: onHook,
     * offHook or ringing.
     */
    getPhoneState(): string;
    /**
     * The function `setPhoneState` updates the phone state and emits a notification using an events
     * service in TypeScript.
     * @param {string} phoneState - The `phoneState` parameter in the `setPhoneState` method is a
     * string that represents the state of the phone. This method sets the `phoneState` property of the
     * current object to the provided `phoneState` value and then emits an external notification using
     * the `eventsService` with the
     */
    setPhoneState(phoneState: PhoneState): void;
    /**
     * When a phone is "off hook" or " on hoold" it means that the receiver (handset) is not resting in its
     * cradle or is lifted from its base. This function returns if the agent device is connected or not
     * to the server. It is possible for the agent to work "Off Hook", to always be connected to the server
     * so calls are connected faster. Possible states are onHook, offHook and ringing.
     * @returns The method `isOnHook()` is returning a boolean value based indicating if the user device
     * is connected (true) ot not (false) to the server.
     */
    isOnHook(): boolean;
    /**
     * When a phone is "off hook" or " on hoold" it means that the receiver (handset) is not resting in its
     * cradle or is lifted from its base. This function returns if the agent device is connected or not
     * to the server. It is possible for the agent to work "Off Hook", to always be connected to the server
     * so calls are connected faster. Possible states are onHook, offHook and ringing.
     * @returns The method `isOnHook()` is returning a boolean value based indicating if the user device
     * is connected (true) ot not (false) to the server.
     */
    isOffHook(): boolean;
    isMyDeviceActive(): boolean;
    /**
     * The function `isRinging` returns a boolean indicating if the phone is ringing. Possible states are onHook,
     * offHook and ringing.
     * * @returns The method `isRinging()` returns a boolean value based on whether the device is ringing (true)
     * or not(false).
     */
    isRinging(): boolean;
    /**
     *
     * @param inMute
     */
    private setInMute;
    getCurrentDeviceId(): string | undefined;
    /**
     * This TypeScript function checks if an object is currently muted.
     * @returns The method `isMuted()` is returning the value of the property `inMute`, which is a
     * boolean value indicating whether the object is currently muted or not.
     */
    isMuted(): boolean;
}
//# sourceMappingURL=phone.d.ts.map