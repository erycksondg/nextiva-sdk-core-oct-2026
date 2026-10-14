import type { Device, Platform, SessionConfig, SDKConfig, UserSession, MultiloginDevice, UserDetails } from '../../types';
export interface CoreSDKConfig extends SDKConfig {
    platform: Platform;
}
export interface CoreInitConfig {
    device?: Device;
    isLoadMandatoryDataAllowed?: boolean;
    /**
     * Indicates whether the SDK should initialize the telephony implementation during the SDK initialization process.
     *
     * If set to `true`, the SDK will attempt to initialize the telephony implementation immediately after setting up the core services.
     *
     * If set to `false`, the SDK will defer the initialization of the telephony implementation until it is explicitly requested by calling the `initializeTelephony` method. This option can be useful when you want to have more control over when the telephony implementation is initialized, such as when you need to perform additional setup or configuration before initializing telephony.
     *
     * @default true
     */
    isTelephonyInitAllowed?: boolean;
    isTokenRefreshAllowed?: boolean;
    isWebRTCAllowed?: boolean;
    isWebSocketAllowed?: boolean;
    session?: SessionConfig;
    shouldWidgetInit?: boolean;
    state?: SDKState;
}
export interface SDKState {
    device?: MultiloginDevice;
    session?: UserSession;
    user?: UserDetails;
}
//# sourceMappingURL=sdk.d.ts.map