import { type LogLevel } from './logger';
import { type ITranslator } from './translator';
export type DomainEnvironment = 'ncc' | 'ncx';
export interface SSOLoginResponse {
    location: string;
    token: string;
}
export interface SessionConfig {
    baseURL?: string;
    deviceId?: string;
    domainEnvironment?: DomainEnvironment;
    isSSO?: boolean;
    token?: string;
}
export interface Device {
    appVersionCode?: string;
    appleServicesEnvironment?: 'production' | 'sandbox';
    pushKitToken?: string;
    token: string;
}
export interface SDKConfig {
    baseURL: string;
    cacheSetup?: {
        conversations?: boolean;
        copilot?: boolean;
        tickets?: boolean;
    };
    /**
     * @deprecated pass logLevel
     */
    debug?: boolean;
    /**
     * @deprecated
     */
    domainEnvironment?: DomainEnvironment;
    keepAlive?: boolean;
    language: string;
    logLevel?: LogLevel | false;
    /**
     * Optional platform identifier sent as the `Nextiva-Platform` HTTP header on all requests.
     * Only sent when provided (e.g. `'next2'`).
     */
    nextivaPlatform?: string;
    persister?: {
        enabled?: boolean;
        encrypted?: boolean;
    };
    translator: ITranslator;
}
export type Platform = 'web' | 'android' | 'ios' | 'msteams';
/**
 * Simplify360 configuration for the active environment.
 *
 * @property cdnUrl - The Simplify360 CDN base URL.
 * @property key - The Simplify360 API key.
 */
export interface Simplify360Config {
    cdnUrl: string;
    key: string;
}
//# sourceMappingURL=sdk.d.ts.map