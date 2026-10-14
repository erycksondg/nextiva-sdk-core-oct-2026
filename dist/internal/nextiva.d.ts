import { type Observable } from 'rxjs';
import type { AudioQualityService, StatusService, EventsService, PhoneStatesService, ProvisioningService, DataService, TranslatorService, StateService, DispositionService, ACDService, StatisticsService, SearchService, OutboundModeService, CampaignService, AgentAssistService, ProactiveAgentAssistService, RelatedArticlesService, ContactService, FunctionsService, RecordingsService, MyUserSettingsService, VideoService, IntegrationsService, DataIngestionService, WidgetService, EntitlementsService } from '../services';
import type { BaseOutboundListService, BaseTelephonyService, BaseTicketService, BaseUserService, BaseConversationService, BaseChatService, BaseCopilotService, BaseDatadogService, BaseWorkitemsService, BaseSocialService } from './services';
import { type NotificationEvent, type BaseSchemaTypeClient } from '../models';
import type { SSOProvider, UserDetails, Simplify360Config } from '../types';
import type { CoreInitConfig, CoreSDKConfig } from './types';
import { type LanguageService } from '../services/language';
import { type DeviceManagementService } from '../services/deviceManagement';
import { type LoggerService } from '../services/logger';
export declare abstract class BaseNextiva {
    coreSDKVersion: string;
    private audioQualityService;
    private dataService;
    protected datadogService: BaseDatadogService | null;
    private phoneStatesService;
    private provisioningService;
    private statusService;
    private eventsService;
    private translatorService;
    private stateService;
    private dispositionService;
    private acdService;
    private statisticsService;
    private userSocketClient;
    private searchService;
    private outboundModeService;
    /**
     * @deprecated campaignService is deprecated
     */
    private campaignService;
    private agentAssistService;
    private proactiveAgentAssistService;
    private dataIngestionService;
    private relatedArticleService;
    private contactService;
    /**
     * @deprecated functionsService is deprecated
     */
    private functionsService;
    private tokenService;
    private resourceManager;
    private recordingsService;
    private myUserSettingsService;
    private languageService;
    private videoService;
    private integrationsService;
    private workitemCache;
    private entitlementsService;
    protected loggerService: LoggerService;
    axios: import("axios").AxiosInstance;
    private isPersisterEnabled;
    private isPersisterEncrypted;
    private isConversationCacheEnabled;
    private isCopilotCacheEnabled;
    private isTicketsCacheEnabled;
    private isKeepAliveEnabled;
    /**
     * The constructor function initializes various services and sets configuration
     * parameters based on the provided input in a TypeScript class.
     * @param {Config}  - The constructor function you provided takes in a `Config`
     * object with the following parameters:
     */
    constructor(options: CoreSDKConfig);
    setBaseURL(baseURL: string): void;
    changeConversationCacheEnabled(status: boolean): void;
    get checkConversationCacheEnabled(): boolean;
    changeCopilotCacheEnabled(status: boolean): void;
    get checkCopilotCacheEnabled(): boolean;
    changeTicketsCacheEnabled(status: boolean): void;
    get checkTicketsCacheEnabled(): boolean;
    /**
     * The function `login` logs the username and then calls the `login` method of
     * the `userService` with the provided username and password.
     * @param {string} username - The `username` parameter is a string that
     * represents the username of the user trying to log in.
     * @param {string} password - The `password` parameter in the `login` function
     * is a string type, which is used to store the password input provided by the
     * user during the login process.
     * @returns The `login` method is returning the result of calling the `login`
     * method of the `userService` with the provided `username` and `password`
     * parameters.
     */
    login(username: string, password: string): Promise<import("..").TokenResponse>;
    /**
     * The `init` function in TypeScript initializes the Nextiva module and calls the
     * `init` function of the userService.
     * @returns The `init` function is returning the result of calling the `init`
     * function of the `userService`.
     * The `init` function is called to initialize the Nextiva NCX and the `userService`.     *
     */
    init(options?: CoreInitConfig): Promise<void>;
    /**
     * Initializes the telephony implementation based on current user session settings.
     *
     * If the SDK instance was initialized without WebRTC allowed, this function will not initialize WebRTC telephony even if the user session settings specify it, and will log a warning instead.
     *
     * This function can be used to initialize telephony after the SDK instance was initialized, for example in cases where WebRTC was not allowed during initialization but needs to be initialized later.
     */
    initializeTelephony(): Promise<void>;
    /**
     * The function `updateLanguage` updates the current language in the
     * application data and loads provider data using DataService.
     * @param {string} language - The `language` parameter in the `updateLanguage`
     * function is a string that represents the new language to be set in the
     * application data.
     */
    updateLanguage(language: string): void;
    /**
     * The `forgetPassword` function in TypeScript is an asynchronous method that
     * sends a password reset request to a provider using the provided email
     * address.
     * @param {string} email - The `forgetPassword` function is an asynchronous
     * function that takes an email address as a parameter. The function first logs
     * a message indicating that the forgetPassword function is being called with
     * the provided email address. It then checks if the email address is valid
     * using the `Util.isValidEmail` function. If the
     */
    forgetPassword(email: string): Promise<void>;
    /**
     * Completes a password reset using the token from the email reset link.
     * @param {string} password - The new password to set for the user.
     * @param {string} token - The password reset token.
     */
    resetPassword(password: string, token: string): Promise<void>;
    /**
     * The function `setClientTracing` sets the client tracing option and updates
     * the data accordingly.
     * @param {boolean} allowClientTracing - The `allowClientTracing` parameter is
     * a boolean value that determines whether client tracing is allowed or not.
     * When set to `true`, client tracing is enabled, and when set to `false`,
     * client tracing is disabled.
     */
    setClientTracing(allowClientTracing: boolean): void;
    /**
     * The function hasClientTracing checks if client tracing is allowed and
     * returns a boolean value.
     * @returns The method `hasClientTracing` is returning the value of
     * `this.allowClientTracing`.
     */
    hasClientTracing(): boolean;
    /**
     *
     * @param username - The login username
     * @returns A list of SSO providers identified by `name` with a `redirectUrl`
     */
    fetchSSOProviders(username: string): Promise<SSOProvider[]>;
    getUserService(): BaseUserService;
    getWorkitemsService(): BaseWorkitemsService;
    getSocialService(): BaseSocialService;
    getTelephonyService(): BaseTelephonyService;
    getTicketService(): BaseTicketService;
    getOutboundListService(): BaseOutboundListService;
    getConversationService(): BaseConversationService;
    getCopilotService(): BaseCopilotService;
    getChatService(): BaseChatService;
    getSchemaTypeClient(): BaseSchemaTypeClient;
    /**
     * The function getAudioQualityService() returns the AudioQualityService
     * instance.
     * @returns The `AudioQualityService` instance is being returned.
     */
    getAudioQualityService(): AudioQualityService;
    /**
     * The function `getDataService` returns the `DataService` object.
     * @returns The `getDataService()` method is returning an instance of the
     * `DataService` class.
     */
    getDataService(): DataService;
    /**
     * The function getRelatedArticlesService() returns the RelatedArticlesService
     * instance.
     * @returns The `RelatedArticlesService` instance is being returned.
     */
    getRelatedArticlesService(): RelatedArticlesService;
    /**
     * The function getPhoneStatesService() returns the PhoneStatesService
     * instance.
     * @returns An instance of the `PhoneStatesService` class is being returned.
     */
    getPhoneStatesService(): PhoneStatesService;
    /**
     * The function `getProvisioningService()` returns the ProvisioningService
     * instance.
     * @returns The `ProvisioningService` instance.
     */
    getProvisioningService(): ProvisioningService;
    /**
     * The function `getStatusService` returns the `StatusService` instance.
     * @returns The `getStatusService()` method is returning an instance of the
     * `StatusService` class.
     */
    getStatusService(): StatusService;
    /**
     * The function getTranslatorService() returns the TranslatorService instance.
     * @returns The `TranslatorService` instance is being returned.
     */
    getTranslatorService(): TranslatorService;
    getStateService(): StateService;
    /**
     * Returns the Simplify360 config ({ cdnUrl, key }) for the active
     * environment, derived from the SDK's current base URL.
     *
     * Clients should call this instead of hardcoding the environment-to-CDN/key
     * mapping, so new environments and rotated configs ship via the SDK rather
     * than a client release.
     *
     * @returns The Simplify360 config for the active environment.
     */
    getSimplify360Config(): Simplify360Config;
    /**
     * The function getMyUserSettingsService() returns the MyUserSettingsService instance.
     * @returns The `MyUserSettingsService` instance is being returned.
     */
    getMyUserSettingsService(): MyUserSettingsService;
    getDispositionService(): DispositionService;
    getACDService(): ACDService;
    getStatisticsService(): StatisticsService;
    getSearchService(): SearchService;
    getAgentAssistService(): AgentAssistService;
    getProactiveAgentAssistService(): ProactiveAgentAssistService;
    getDataIngestionService(): DataIngestionService;
    getOutboundModeService(): OutboundModeService;
    /**
     * @deprecated getCampaignService is deprecated
     */
    getCampaignService(): CampaignService;
    getContactService(): ContactService;
    /**
     * @deprecated getFunctionsService is deprecated
     */
    getFunctionsService(): FunctionsService;
    getVideoService(): VideoService;
    /**
     * The `getUser` function returns the user data obtained from the
     * `dataService`.
     * @returns The `getUser()` method is being called on the `dataService` object
     * and its return value is being returned by the `getUser()` method of the
     * current object.
     */
    getUser(): UserDetails | undefined;
    /**
     * The `getUserSettings` function returns the user settings using data service in
     * TypeScript.
     * @returns The `getUserSettings` function is returning the user settings data
     * obtained from the `dataService`.
     */
    getUserSettings(): import("..").Settings | undefined;
    /**
     * The `getUserProfile` function returns the user profile data obtained from
     * the data service.
     * @returns The `getUserProfile` function is returning the user profile data
     * obtained from the `dataService`.
     */
    getUserProfile(): import("..").UserProfile | undefined;
    /**
     *
     * The function `getSchemaType` retrieves a schema type using the `dataService`
     * service.
     * @param {string} schemaType - The `schemaType` parameter in the
     * `getSchemaType` function is a string that represents the type of schema
     * being requested. It is used as an input to retrieve the corresponding schema
     * type from the `dataService`.
     * @returns The `getSchemaType` function is returning the result of calling the
     * `getSchemaType` method of the `dataService` object with the `schemaType`
     * parameter.
     * @deprecated Use sdk.getSchemaTypeClient()
     */
    getSchemaType(schemaType: string): import("..").SchemaType | null;
    /**
     * The function `getAvatarUrl` retrieves the avatar URL for a user based on
     * certain conditions and returns the complete URL using Axios.
     * @returns The `getAvatarUrl` function returns the URL for the user's avatar
     * image if all necessary data is available and the download URL is
     * successfully retrieved. If any required data is missing or if the download
     * URL is not available, the function returns `null`.
     * @deprecated use sdk.getUserService().buildAvatarSignedURL()
     */
    getAvatarUrl(): string | null;
    _sendTestNotification(token: string, title: string, body: string, data: unknown, ios: boolean): Promise<void>;
    getEventService(): EventsService;
    getRecordingsService(): RecordingsService;
    getEntitlementsService(): EntitlementsService;
    get events$(): Observable<NotificationEvent>;
    /**
     * The function `initWithSSOToken` initializes a session using an Okta SSO token and tenant ID.
     * @param {string} ssoToken - The `ssoToken` parameter is a string that represents the single sign-on
     * token used for authentication with Okta. It is typically generated by the identity provider (Okta)
     * and passed to the application for authentication purposes.
     * @param {string} tenantId - The `tenantId` parameter typically refers to a unique identifier for a
     * tenant or organization within a multi-tenant system. It helps differentiate between different
     * entities using the same system. In the context of your `initWithSSOToken` function, the `tenantId` is
     * used to retrieve specific information related to
     * @returns The `initWithSSOToken` method is returning a Promise that resolves to void.
     */
    initWithSSOToken(_payload: {
        ssoToken: string;
        tenantId: string;
    }): Promise<void>;
    getLanguageService(): LanguageService;
    getIntegrationsService(): IntegrationsService;
    getDeviceManagementService(): DeviceManagementService;
    getWidgetService(): WidgetService;
    getLoggerService(): LoggerService;
    cleanup(): Promise<void>;
}
//# sourceMappingURL=nextiva.d.ts.map