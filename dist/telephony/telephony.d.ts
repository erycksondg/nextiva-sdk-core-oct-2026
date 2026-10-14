import { type InjectionContainer } from '../internal';
import { type LoggerService } from '../services/logger';
import type { MultiloginDevice, TelephonyConfig, UserDetails, UserSession } from '../types/user';
export interface TelephonyInitParams {
    debug: boolean;
    edgeId: string | null;
    multiloginDevice: MultiloginDevice | undefined;
    session: UserSession | undefined;
    telephonyConfig: TelephonyConfig;
    user: UserDetails;
}
export declare abstract class AbstractTelephony {
    protected session: UserSession | undefined;
    protected user: UserDetails | undefined;
    protected multiloginDevice: MultiloginDevice | undefined;
    protected telephonyConfig: TelephonyConfig | undefined;
    protected edgeId: string | null | undefined;
    protected debug: boolean;
    protected isConnected: boolean;
    protected logger: LoggerService;
    protected audioOutputDeviceId?: string;
    protected audioInputDeviceId?: string;
    constructor({ loggerService }: Pick<InjectionContainer, 'loggerService'>);
    abstract init({ debug, edgeId, multiloginDevice, session, telephonyConfig, user, }: TelephonyInitParams): Promise<void>;
    abstract activeConnection(): void;
    abstract close(): Promise<void>;
    abstract logout(): void;
    abstract hangup(): void;
    abstract disconnectAll(): void;
    abstract status(): void;
    abstract dtmf(digits: string): Promise<void>;
    /**
     * Resolves if able to switch the audio input device to the one specified by `deviceId`.
     * Throws when unsupported or error opening the MediaStream for the device.
     *
     * `deviceId` can be obtained from the list of devices provided by `NcxSdk.getTelephonyService().events$`
     * observable, or through the `useAvailableAudioDevices()` React hook that consumes that observable.
     *
     * @param deviceId - identifies the device to be selected as audio input
     */
    updateAudioInputDevice(_deviceId: string): Promise<void>;
    /**
     * Resolves if able to switch the audio output device to the one specified by `deviceId`.
     * Throws when unsupported or error opening the MediaStream for the device.
     *
     * `deviceId` can be obtained from the list of devices provided by `NcxSdk.getTelephonyService().events$`
     * observable, or through the `useAvailableAudioDevices()` React hook that consumes that observable.
     *
     * @param deviceId - identifies the device to be selected as audio output
     */
    updateAudioOutputDevice(_deviceId: string): Promise<void>;
    protected refreshTelephonyToken(): Promise<unknown>;
    getSocketStatus(): {
        isConnected: boolean;
        state: string;
    };
    reconnectSocket(): void;
    networkReconnection(): void;
    set isOnline(value: boolean);
    get isOnline(): boolean;
    checkToken(): Promise<boolean>;
}
//# sourceMappingURL=telephony.d.ts.map