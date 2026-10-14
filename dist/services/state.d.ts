import { type SocketState } from '..';
import { type OutboundMode } from '../models';
import type { Authority, Campaign, RealTimeTopic, Disposition, Offer, Status, UserDetails, UserProfile, UserSession, Platform, MultiloginDevice, CampaignType, Translations, DomainEnvironment, Message, UserEntitlements, TenantEntitlement, RealTimeUser } from '../types';
import { type CampaignScript } from '../types/campaignScript';
import type { Language } from '../types/language';
import { type SchemaLayout } from '../types/schemaLayout';
import { type SchemaTypeLinkName, type SchemaTypeName, type ISchemaType } from '../types/schemaType';
import { type Skill } from '../types/skills';
import { type UserStatusRecord } from '../types/status';
import { type Survey } from '../types/survey';
import { type Template } from '../types/template';
import { type Tenant } from '../types/tenant';
export declare const PERMISSIONS: {
    readonly ALL: "*";
    readonly CREATE: "create";
    readonly DELETE: "delete";
    readonly HIDDEN: "hidden";
    readonly HIDE: "hide";
    readonly IMPORT: "import";
    readonly LISTEN: "listen";
    readonly LISTEN_MINE: "listen-mine";
    readonly SEARCH: "search";
    readonly SHOW: "show";
    readonly UPDATE: "update";
    readonly UPDATE_MINE: "update-mine";
    readonly VIEW: "view";
    readonly VIEW_MINE: "view-mine";
};
export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
export declare class StateService {
    private _state;
    clear(): void;
    get(key: string): unknown;
    delete(key: string): void;
    set(key: string, value: unknown): void;
    getMap(): Map<string, any>;
    /**
     * The function `getTelephonyConfig` returns the telephony configuration from the current session.
     * @returns The `telephony` configuration from the current session is being returned.
     */
    getTelephonyConfig(): import("..").TelephonyConfig | undefined;
    /**
     * The function `getLanguage` returns the language stored in the data object, defaulting to 'en' if not
     * found.
     * @returns The `getLanguage` method is returning the value of the 'language' key from the `data`
     * object, or 'en' if the 'language' key is not found in the `data` object.
     */
    getLanguage(): string;
    /**
     * Sets the language for the application.
     * @param language - The language to set.
     */
    setLanguage(language: string): void;
    getPlatform(): Platform | undefined;
    setPlatform(platform: Platform): void;
    /**
     * Retrieves the token from the state.
     * @returns The token as a string.
     */
    getToken(): string | undefined;
    setToken(token: string): void;
    /**
     * Retrieves the User Socket State from the state.
     * @returns The socket state as enum or undefined.
     */
    getUserSocketState(): SocketState | undefined;
    setUserSocketState(socketState: SocketState): void;
    /**
     * This TypeScript function retrieves the user ID from a session object stored in the data property.
     * @returns The `getUserId` method is returning the `userId` property from the `session` object if it
     * exists, otherwise it returns `null`.
     */
    getUserId(): string | undefined;
    /**
     * The function `getTenant` returns the value associated with the key 'tenant' from the data object.
     * @returns The `getTenant` method is returning the value of the 'tenant' key from the `data` object.
     */
    getTenant(): Tenant | undefined;
    /**
     * The function `getTenantId` retrieves the tenant ID from a session object, returning null if the
     * tenant ID is not found.
     * @returns The `getTenantId` method is returning the `tenantId` property from the `session` object if
     * it exists, otherwise it will return `null`.
     */
    getTenantId(): string | undefined;
    /**
     * The `getSession` function returns the UserSession stored in the data map.
     * @returns The `getSession()` method is returning the `UserSession` object stored in the data map with
     * the key 'session'.
     */
    getSession(): UserSession | undefined;
    setSession(session: UserSession): void;
    /**
     * @param {GetUserOptions}  options - The filter options.
     * @returns {(RealTimeUser | undefined)} the corresponding user or undefined if it wasn't found.
     */
    getUser(options: GetUserOptions): RealTimeUser | undefined;
    /**
     * @returns {UserDetails} the user that is currently logged in.
     */
    getUser(): UserDetails | undefined;
    getPersonalInboxId(): string | undefined;
    getPersonalInboxNumber(): string | null | undefined;
    /**
     * The function `getUserProfile` returns the user profile data stored in the `data` object.
     * @returns The `getUserProfile()` method is returning the `UserProfile` object stored in the data map
     * with the key 'userprofile'.
     */
    getUserProfile(): UserProfile | undefined;
    /**
     * This function retrieves the user profile ID from the session data.
     * @returns The `userProfileId` from the `session` object is being returned.
     */
    getUserProfileId(): string | undefined;
    /**
     * The function `getUserSettings` returns the user client settings from the data or null if not found.
     * @returns The `getUserSettings` method is returning the `UserClientSettings` object stored in the
     * `data` map with the key 'userclientsettings'. If the object is not found, it will return `null`.
     */
    getUserSettings(): import("..").Settings | undefined;
    /**
     * The function `hasClientTracing` returns a boolean value based on whether client tracing is allowed
     * for the user.
     * @returns A boolean value is being returned.
     */
    hasClientTracing(): boolean;
    /**
     * Sets the value of allowClientTracing in the state.
     *
     * @param allowClientTracing - A boolean indicating whether client tracing is allowed.
     */
    setClientTracing(allowClientTracing: boolean): void;
    /**
     * Sets the offers in the state.
     * @param {Offer[]} offers - The offers to be set.
     */
    setOffers(offers: Offer[]): void;
    /**
     * Retrieves the offers from the state.
     * @returns An array of offers or undefined if not found.
     */
    getOffers(): Offer[] | undefined;
    getTopics(): RealTimeTopic[] | undefined;
    setTopics(topics: RealTimeTopic[]): void;
    getInboxes(): import("..").RealTimeInbox[] | undefined;
    getInbox({ id }: {
        id: string;
    }): import("..").RealTimeInbox | undefined;
    getUsers(): RealTimeUser[] | undefined;
    /**
     * gets internal user messages
     * @returns
     */
    getUserMessages(options?: GetUserMessagesOptions): Message[] | undefined;
    /**
     * sets internal user messages
     * @param {Message[]} userMessages - the messages being set
     */
    setUserMessages(userMessages: Message[]): void;
    /**
     * Retrieves the base URL from the state.
     *
     * @returns The base URL as a string.
     */
    getBaseURL(): string | undefined;
    /**
     * Sets the base URL for the service.
     * @param baseURL - The base URL to set.
     */
    setBaseURL(baseURL: string): void;
    getDeviceToken(): string | undefined;
    setDeviceToken(token: string): void;
    /**
     * Retrieves the client location from the state.
     * @returns The client location as a string.
     */
    getClientLocation(): string | undefined;
    /**
     * Sets the client location.
     *
     * @param clientLocation - The client location to set.
     */
    setClientLocation(clientLocation: string): void;
    /**
     * Retrieves a user object from the company directory based on the provided user ID.
     * @param userId - The ID of the user to retrieve.
     * @returns The user object matching the provided user ID, or undefined if not found.
     */
    getUserFromId(userId: string): RealTimeUser | undefined;
    /**
     * Retrieves all AI employees from the cache.
     * AI employees are cached and loaded during SDK initialization.
     * @returns An array of AI employees or undefined if not loaded.
     */
    getAIEmployees(): import("..").AIEmployee[] | undefined;
    /**
     * Retrieves a specific AI employee by ID.
     * @param aiEmployeeId - The ID of the AI employee to retrieve.
     * @returns The AI employee object if found, otherwise undefined.
     */
    getAIEmployeeFromId(aiEmployeeId: string): import("..").AIEmployee | undefined;
    /**
     * Retrieves a queue from the company directory based on the provided queue ID.
     * @param {string} queueId - The ID of the queue to retrieve.
     * @returns {Queue | undefined} - The queue object if found, otherwise undefined.
     */
    getInboxFromId(inboxId: string): import("..").RealTimeInbox | undefined;
    /**
     * Retrieves a topic from the company directory based on its ID.
     * @param topicId - The ID of the topic to retrieve.
     * @returns The topic object if found, otherwise undefined.
     */
    getTopicFromId(topicId: string): RealTimeTopic | undefined;
    /**
     * Retrieves the user status record from the state.
     * @returns The user status record.
     */
    getUserStatusRecord(): UserStatusRecord | undefined;
    /**
     * Sets the user status record.
     *
     * @param record - The user status record to set.
     */
    setUserStatusRecord(record: UserStatusRecord): void;
    /**
     * Retrieves the authorities from the state.
     * @returns An array of authorities or undefined if not found.
     */
    getAuthorities(): Authority[] | undefined;
    /**
     * Sets the authorities in the state.
     * @param authorities - The array of authorities to set.
     */
    setAuthorities(authorities: Authority[]): void;
    /**
     * Checks if the user has the specified permission for the given domain and type.
     * @param domain - The domain to check permission for.
     * @param type - The type to check permission for.
     * @param permission - The permission to check.
     * @returns A boolean indicating whether the user has the specified permission.
     */
    hasPermission(domain: string, type: string, permission: Permission): boolean;
    /**
     * The function `canCreate` checks if a user has permission to create a specific type.
     * @param {string} type - The `type` parameter in the `canCreate` function represents the type of
     * entity or resource for which the permission check is being performed. It could be a string value
     * such as 'user', 'post', 'comment', etc.
     * @returns The function `canCreate` is returning a boolean value based on whether the current user
     * has permission to create an object of the specified type.
     */
    canCreate(type: string): boolean;
    /**
     * The function `canDelete` checks if the user has permission to delete a specific type of item.
     * @param {string} type - The `type` parameter in the `canDelete` function represents the type of
     * entity or resource for which the delete permission is being checked. It is a string value that
     * specifies the type of the entity, such as "user", "post", "comment", etc.
     * @returns The `canDelete` function is returning the result of calling the `hasPermission`
     * function with the parameters `'type'`, `type`, and `PERMISSIONS.DELETE`. The return value of the
     * `hasPermission` function is a boolean, so the `canDelete` function will also return a boolean
     * value.
     */
    canDelete(type: string): boolean;
    /**
     * The function `canImport` checks if the user has permission to import a specific type of item.
     * @param {string} type - The `type` parameter in the `canImport` function represents the type of
     * entity or resource for which the import permission is being checked. It is a string value that
     * specifies the type of the entity, such as "user", "contact" etc.
     * @returns The `canImport` function is returning the result of calling the `hasPermission`
     * function with the parameters `'type'`, `type`, and `PERMISSIONS.IMPORT`. The return value of the
     * `hasPermission` function is a boolean, so the `canImport` function will also return a boolean
     * value.
     */
    canImport(type: string): boolean;
    /**
     * The function `canListen` checks if a user has permission to listen based on the specified type.
     * @param {string} type - The `type` parameter in the `canListen` function represents the type of
     * action or resource for which the permission is being checked. It is used to determine if the
     * user has permission to listen to a specific type of action or resource.
     * @returns A boolean value is being returned.
     */
    canListen(type: string): boolean;
    /**
     * The function `canListenMine` checks if a user has permission to listen to a specific type.
     * @param {string} type - The `type` parameter in the `canListenMine` function is a string that
     * represents the type of permission being checked.
     * @returns The function `canListenMine` is returning a boolean value based on whether the current
     * user has permission to listen to a specific type. It checks if the user has the permission
     * `LISTEN_MINE` for the given type and returns true if the user has the permission, otherwise it
     * returns false.
     */
    canListenMine(type: string): boolean;
    /**
     * The function `canSearch` checks if a user has permission to search based on the specified type.
     * @param {string} type - The `type` parameter in the `canSearch` function represents the type of
     * search operation that the user is trying to perform. It is a string value that specifies the
     * type of search being requested, such as "user", "product", "document", etc.
     * @returns A boolean value is being returned from the `canSearch` function.
     */
    canSearch(type: string): boolean;
    /**
     * The `canShow` function checks if the user has permission to show a specific type of UI element.
     * @param {string} type - The `type` parameter in the `canShow` function is a string that
     * represents the type of UI element or resource for which the permission check is being performed.
     * @returns A boolean value is being returned from the `canShow` function.
     */
    canShow(type: string): boolean;
    /**
     * The function `canUpdate` checks if the user has permission to update a specific type.
     * @param {string} type - The `type` parameter in the `canUpdate` function represents the type of
     * resource or entity that the user is trying to update. This parameter is used to check if the
     * user has permission to update that specific type of resource.
     * @returns A boolean value is being returned from the `canUpdate` function.
     */
    canUpdate(type: string): boolean;
    /**
     * The function `canUpdateMine` checks if the user has permission to update a specific type.
     * @param {string} type - The `type` parameter in the `canUpdateMine` function is a string that
     * represents the type of permission being checked for.
     * @returns The `canUpdateMine` method is returning the result of calling the `hasPermission`
     * method with the parameters `'type'`, `type`, and `PERMISSIONS.UPDATE_MINE`. The return value of
     * the `hasPermission` method will determine the final boolean value returned by the
     * `canUpdateMine` method.
     */
    canUpdateMine(type: string): boolean;
    /**
     * The function `canView` checks if a user has permission to view a specific type.
     * @param {string} type - The `type` parameter in the `canView` function represents the type of
     * resource or entity that the user is trying to view. It is used to check if the user has permission
     * to view that particular type of resource.
     * @returns The `canView` function is returning a boolean value based on whether the current user has
     * permission to view the specified type. It calls the `hasPermission` function with the parameters
     * 'type', the specified type, and the permission level `PERMISSIONS.VIEW`. If the user has permission
     * to view the specified type, it will return `true`, otherwise it will return `false`.
     */
    canView(type: string): boolean;
    /**
     * The function `canViewMine` checks if a user has permission to view their own data of a specific
     * type.
     * @param {string} type - The `type` parameter in the `canViewMine` function represents the type of
     * resource or entity that the user is trying to view. This parameter is used to check if the user
     * has permission to view resources of this specific type.
     * @returns The function `canViewMine` is returning the result of calling the `hasPermission`
     * function with the parameters `'type'`, `type`, and `PERMISSIONS.VIEW_MINE`.
     */
    canViewMine(type: string): boolean;
    /**
     * This function returns an array of languages from the data.
     * @returns An array of Language objects is being returned.
     */
    getLanguages(): Language[] | undefined;
    /**
     * Sets the languages in the state.
     * @param languages - An array of Language objects representing the languages to be set.
     */
    /**
     * The function `getName` retrieves the user's name from a session object, defaulting to 'System
     * Administrator' if the user is a system admin or 'N/A' if no name is found.
     * @returns The `getName` function is returning the name of the user. The name is constructed based on
     * the `session` data, where it first tries to concatenate the `firstName` twice, then falls back to
     * the `username`, and finally defaults to 'System Administrator' if the user is a system admin or
     * 'N/A' otherwise.
     */
    getName(): string;
    /**
     * This TypeScript function retrieves the username from a session object stored in the data property.
     * @returns The `getUsername` method is returning the `username` property from the `session` object
     * stored in the `data` map.
     */
    getUsername(): string | undefined;
    /**
     * Checks if the current user is a system administrator.
     * @returns {boolean} Returns true if the user is a system administrator, false otherwise.
     */
    isSysAdmin(): boolean;
    /**
     * Checks if the current session belongs to the system tenant.
     * @returns {boolean} Returns true if the current session belongs to the system tenant, otherwise returns false.
     */
    isSysTenant(): boolean;
    /**
     * Checks if the user is an agent.
     * @returns {boolean} Returns true if the user is an agent, false otherwise.
     */
    isAgent(): boolean;
    /**
     * The function `getEdgeId` returns the edgeId property from the user object or user profile object,
     * or null if not found.
     * @returns The `getEdgeId` method is returning the `edgeId` property from the `User` object if it
     * exists, otherwise it returns the `edgeId` property from the `UserProfile` object if it exists, or
     * `null` if neither `edgeId` property is found.
     */
    getEdgeId(): string | null;
    /**
     * Checks if the user has auto login enabled for ACD (Automatic Call Distributor).
     * @returns {boolean} True if auto login to ACD is enabled, false otherwise.
     */
    hasAutoLoginToACD(): boolean;
    /**
     * Retrieves the statuses from the state.
     *
     * @returns An array of `Status` objects or `undefined` if not found.
     */
    getStatuses(): Status[] | undefined;
    setStatuses(statuses: Status[]): Map<string, any>;
    /**
     * Retrieves the status with the specified statusId.
     * @param statusId - The ID of the status to retrieve.
     * @returns The status object with the specified statusId, or undefined if not found.
     */
    getStatus(statusId: string): Status | undefined;
    /**
     * Retrieves the name of a status based on its ID.
     * If the status is found, the name is returned.
     * If the status is not found, an "Unknown Status" message with the ID is returned.
     * If an error occurs during the retrieval, an "Unknown Status" message with the ID is returned.
     *
     * @param statusId - The ID of the status.
     * @returns The name of the status if found, otherwise an "Unknown Status" message with the ID.
     */
    getStatusName(statusId: string): string;
    getSchemaTypeMap(): Map<string, ISchemaType>;
    getSchemaLayoutMap(): Map<string, SchemaLayout>;
    /**
     * This function returns the schema types stored in the data object.
     * @returns The `getSchemaTypes` method is returning the value stored in the `schemaType` property of
     * the `data` object.
     */
    getSchemaTypes(): ISchemaType[] | undefined;
    /**
     * Retrieves the schema type with the specified name.
     * @param schemaTypeName - The name of the schema type to retrieve.
     * @returns The schema type object if found, or undefined if not found.
     */
    getSchemaType(schemaTypeName: string): ISchemaType | undefined;
    /**
     * Retrieves the links associated with a specific schema type.
     * @param schemaTypeName - The name of the schema type.
     * @returns The links associated with the specified schema type, or undefined if the schema type does not exist.
     */
    getSchemaTypeLinks(schemaTypeName: SchemaTypeName): Record<string, import("..").SchemaTypeLink> | undefined;
    /**
     * Retrieves the URI of a specific link for a given schema type.
     * @param name - The name of the schema type.
     * @param linkName - The name of the link.
     * @returns The URI of the specified link.
     * @throws Error if the specified link is not found for the given schema type.
     * @deprecated getSchemaTypeLinkURI() is deprecated, use sdk.getSchemaTypeClient() instead
     */
    getSchemaTypeLinkURI({ link, name, replacements }: GetSchemaTypeLinkURIOptions): string;
    /**
     * Retrieves the schema type model with the specified schema type ID.
     * @param schemaTypeId - The ID of the schema type to retrieve.
     * @returns The schema type model matching the specified ID, or undefined if not found.
     */
    getSchemaTypeModel(schemaTypeId: string): ISchemaType | undefined;
    /**
     * Retrieves the schema type model by its name.
     * @param schemaTypeName - The name of the schema type.
     * @returns The schema type model matching the given name, or undefined if not found.
     */
    getSchemaTypeModelByName(schemaTypeName: string): ISchemaType | undefined;
    /**
     * Retrieves the campaigns from the state.
     * @returns An array of campaigns or undefined if not found.
     */
    getCampaigns(): Campaign[] | undefined;
    /**
     * Retrieves the share inboxes from the state.
     * @returns An array of campaigns or undefined if not found.
     */
    getSharedInboxes(types?: CampaignType[]): [] | Campaign[];
    /**
     * Retrieves the personal inboxes from the state.
     * @returns An array of campaigns or undefined if not found.
     */
    getPersonalInboxes(): Campaign[];
    getPersonalInbox(): Campaign | undefined;
    /**
     * Retrieves a campaign by its ID.
     * @param id - The ID of the campaign to retrieve.
     * @returns The campaign object if found, or undefined if not found.
     */
    getCampaign(id: string): Campaign | undefined;
    /**
     * Retrieves the campaign scripts from the state.
     * @returns An array of `CampaignScript` objects or `undefined` if not found.
     */
    getCampaignScripts(): CampaignScript[] | undefined;
    /**
     * Sets the campaign scripts in the state.
     * @param campaignScripts - An array of campaign scripts.
     */
    setCampaignScripts(campaignScripts: CampaignScript[]): void;
    /**
     * Retrieves the surveys from the state.
     * @returns An array of Survey objects or undefined if surveys are not found.
     */
    getSurveys(): Survey[] | undefined;
    /**
     * Sets the surveys in the state.
     * @param surveys - An array of Survey objects.
     */
    setSurveys(surveys: Survey[]): void;
    /**
     * Retrieves the dispositions from the state.
     *
     * @returns An array of dispositions or undefined if not found.
     */
    getDispositions(): Disposition[] | undefined;
    getDisposition({ id }: {
        id: string;
    }): Disposition | undefined;
    /**
     * Sets the dispositions in the state.
     * @param dispositions - An array of dispositions to be set.
     */
    /**
     * Retrieves the compliance dispositions from the state.
     *
     * @returns An array of compliance dispositions, or undefined if not found.
     */
    getComplianceDispositions(): unknown[] | undefined;
    /**
     * Sets the compliance dispositions.
     *
     * @param complianceDispositions - An array of compliance dispositions.
     */
    setComplianceDispositions(complianceDispositions: unknown[]): void;
    /**
     * Retrieves the speed dials from the state.
     * @returns An array of speed dials or undefined if not found.
     */
    getSpeedDials(): unknown[] | undefined;
    /**
     * Sets the speed dials in the state.
     *
     * @param speedDials - An array of speed dials to set.
     */
    setSpeedDials(speedDials: unknown[]): void;
    /**
     * Retrieves the templates from the state.
     * @returns An array of templates or undefined if not found.
     */
    getTemplates(): Template[] | undefined;
    /**
     * Sets the templates in the state.
     * @param templates - An array of templates to set.
     */
    setTemplates(templates: Template[]): void;
    /**
     * Retrieves the classifications from the state.
     * @returns An array of classifications or undefined if not found.
     */
    getClassifications(): unknown[] | undefined;
    /**
     * Sets the classifications in the state.
     *
     * @param classifications - An array of classifications.
     */
    setClassifications(classifications: unknown[]): void;
    /**
     * Retrieves the scorecards from the state.
     * @returns An array of scorecards or undefined if not found.
     */
    getScoreCards(): unknown[] | undefined;
    /**
     * Sets the scorecards in the state.
     *
     * @param scoreCards - An array of scorecards.
     */
    setScoreCards(scoreCards: unknown[]): void;
    /**
     * Retrieves the schema layouts from the state.
     * @returns An array of `SchemaLayout` objects or `undefined` if not found.
     */
    getSchemaLayouts(): SchemaLayout[] | undefined;
    /**
     * Sets the schema layouts for the state.
     *
     * @param schemaLayouts - An array of schema layouts to set.
     */
    /**
     * Retrieves the schema layout with the specified ID.
     * @param id - The ID of the schema layout to retrieve.
     * @returns The schema layout object matching the specified ID, or undefined if not found.
     */
    getSchemaLayout(id: string): SchemaLayout | undefined;
    /**
     * Retrieves the skills from the state.
     * @returns An array of skills or undefined if not found.
     */
    getSkills(): Skill[] | undefined;
    /**
     * Sets the skills in the state.
     * @param skills - An array of skills to set.
     */
    setSkills(skills: Skill[]): void;
    /**
     * Retrieves the regexes from the state.
     * @returns An array of regexes or undefined if not found.
     */
    getRegexes(): unknown[] | undefined;
    /**
     * Sets the regular expressions for the state.
     * @param regexes - An array of regular expressions.
     */
    setRegexes(regexes: unknown[]): void;
    /**
     * Sets the outbound mode for the session if the SDK is
     * initialized. Otherwise does nothing.
     * @param outboundMode outbound mode identifier
     */
    setOutboundMode(outboundMode: OutboundMode): UserSession | undefined;
    /**
     * Sets the multilogin current session's device.
     * @param device - Multilogin device
     */
    setDevice(device: MultiloginDevice): void;
    /**
     *
     * Gets the multilogin current session's device.
     * @returns The current session's device.
     */
    getDevice(): MultiloginDevice | undefined;
    /**
     *
     * Gets all the devices from the session.
     * @returns The list of session's devices.
     */
    getDevices(): [MultiloginDevice] | undefined;
    isLoggedIntoProgressive(): boolean;
    isLoggedIntoPredictive(): boolean;
    isLoggedIntoQuarterback(): boolean;
    isWebRTCAllowed(): boolean;
    setWebRTCAllowed(isWebRTCAllowed: boolean): void;
    isInConference(): boolean;
    setInConference(isInConference: boolean): void;
    getTranslations(language: string): Translations | undefined;
    setTranslations(language: string, translations: Translations): void;
    /**
     * This TypeScript function returns the value of `acdLoginAt`.
     * @returns The `acdLoginAt` property is being returned from the `getACDLoginAt` method.
     */
    getACDLoginAt(): number;
    /**
     * This will check if ACD Logged in is done or not.
     * @returns boolean based on acdLogin timestamp availiable or not.
     */
    isLoggedInToACD(): boolean;
    /**
     * Sets the acdLoginAt for the session if the SDK is
     * initialized. Otherwise does nothing.
     * @param acdLoginAt acd login timestamp or 0 in case logged out
     */
    setACDLoggedInAt(acdLoginAt: number): UserSession | undefined;
    getDomainEnvironment(): DomainEnvironment | undefined;
    /**
     * Stores the user entitlements set in state.
     *
     * @param entitlements - An array of entitlements to set.
     */
    setUserEntitlements(entitlements: UserEntitlements[]): void;
    /**
     * Retrieves the user entitlements set from state.
     *
     * @returns An array of entitlements or undefined if not found.
     */
    getUserEntitlements(): UserEntitlements[] | undefined;
    /**
     * Stores the tenant entitlements set in state.
     */
    setTenantEntitlements(entitlements: TenantEntitlement[]): void;
    /**
     * Retrieves the tenant entitlements set from state.
     */
    getTenantEntitlements(): TenantEntitlement[] | undefined;
    setConversationCacheLimit({ conversations, workitems, }: {
        conversations: number;
        workitems: number;
    }): void;
    getConversationsCacheLimit(): {
        conversations: number;
        workitems: number;
    };
    setIsTelephonyInitialized(initialized: boolean): void;
    isTelephonyInitialized(): boolean;
}
interface GetSchemaTypeLinkURIOptions {
    link: SchemaTypeLinkName;
    name: SchemaTypeName;
    replacements?: Record<string, string>;
}
interface GetUserMessagesOptions {
    userId?: string;
}
interface GetUserOptions {
    id: string;
}
export {};
//# sourceMappingURL=state.d.ts.map