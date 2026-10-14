import type { RefreshTokenResponse } from '../../types';
import { type InjectionContainer } from '../dependencyInjectionContainer';
import type { EventsService, StateService } from '../../services';
export declare class TokenService {
    private refreshTimeout;
    protected stateService: StateService;
    protected eventsService: EventsService;
    private logger;
    constructor({ eventsService, loggerService, stateService, }: Pick<InjectionContainer, 'stateService' | 'eventsService' | 'loggerService'>);
    /**
     * The `startTokenRefreshCycle` function asynchronously initiates a token refresh cycle by calling the
     * `pollTokenRefresh` method.
     */
    startTokenRefreshCycle(): Promise<void>;
    /**
     * The `stopTokenRefreshCycle` function stops the token refresh cycle by clearing the refresh timeout.
     */
    stopTokenRefreshCycle(): void;
    /**
     * The function `isTokenExpiringSoon` checks if a token's expiration time is less than 1 hour from the
     * current time.
     * @returns The function `isTokenExpiringSoon` returns a boolean value indicating whether the token
     * expiration is less than 1 hour away from the current time. If the token expiration is within the
     * next hour, it returns `true`, otherwise it returns `false`.
     */
    isTokenExpiringSoon(): boolean;
    /**
     * Retrieves the expiration time of a token from its payload.
     * @returns The expiration time of the token in timestamp if it exists
     * and is valid. If the token is not present or the payload cannot be decoded, it returns
     * `undefined`.
     */
    getTokenExpiration(): number | undefined;
    /**
     * The function refreshToken in TypeScript makes a request to refresh a token and updates various
     * data fields accordingly.
     * @returns {Promise<RefreshTokenResponse>} A Promise that resolves with an object containing the new token and location
     */
    refreshToken(): Promise<RefreshTokenResponse>;
    private pollTokenRefresh;
}
//# sourceMappingURL=token.d.ts.map