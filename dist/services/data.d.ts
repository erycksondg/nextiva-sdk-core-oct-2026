import { type SchemaType, SchemaLayout } from '../models';
import { type HelperInterface } from './helper';
import type { Campaign } from '../types';
import { type Template } from '../types/template';
import { type Skill } from '../types/skills';
import { type InjectionContainer } from '../internal';
export declare class DataService {
    private eventsService;
    private translatorService;
    private stateService;
    private schemaTypeClient;
    private internalStateManagementService;
    private persisterClient;
    private logger;
    constructor({ eventsService, internalStateManagementService, loggerService, persisterClient, schemaTypeClient, stateService, translatorService, }: Pick<InjectionContainer, 'stateService' | 'schemaTypeClient' | 'eventsService' | 'translatorService' | 'internalStateManagementService' | 'persisterClient' | 'localStorageService' | 'loggerService'>);
    private handleUserMessagesNotification;
    private handleCompanyDirectoryNotification;
    private processCompanyDirectory;
    private handleStatusChangedNotification;
    private handleDynamicChangeNotification;
    private getObjectType;
    private getRelationFieldname;
    private handleCreateV2;
    private handleUpdateV2;
    private handleDeleteV2;
    private handleCreate;
    private handleDelete;
    private handleUpdate;
    /**
     * The function `getTenantEx` retrieves tenant data asynchronously based on certain conditions.
     * @returns The `getTenantEx` function is returning the `tenant` object. If the `tenant` object is
     * already stored in the `data` property, it will return that object directly. If not, it will
     * retrieve the `tenant` object using the `tenantSchemaType.retrieve` method and store it in the
     * `data` property before returning it.
     * @deprecated getTenantEx is deprecated, use sdk.getStateService().getTenant()
     */
    getTenantEx(): Promise<import("../types/tenant").Tenant | undefined>;
    /**
     * The function `getSchemaTypes` returns the schema type from the data.
     * @returns The `schemaType` value from the `data` object is being returned.
     * @deprecated getSchemaTypes is deprecated, use sdk.getStateService().getSchemaTypes()
     */
    getSchemaTypes(): import("..").ISchemaType[] | undefined;
    /**
     * The function `getSchemaType` returns the SchemaType corresponding to a given
     * schema type name or null if not found.
     * @param {string} schemaTypeName - The `schemaTypeName` parameter is a string
     * that represents the name of a schema type.
     * @returns The function `getSchemaType` is returning the `SchemaType`
     * corresponding to the `schemaTypeName` provided as a parameter. If a matching
     * `SchemaType` is found in the `SchemaTypes` collection, it is returned.
     * Otherwise, `null` is returned.
     * @deprecated Use sdk.getSchemaTypeClient()
     */
    getSchemaType(schemaTypeName: string): SchemaType | null;
    /**
     * This function retrieves a schema type model based on a given schema type ID.
     * @param {string} schemaTypeId - The `schemaTypeId` parameter in the `getSchemaTypeModel` function
     * is a string that represents the unique identifier of a schema type. The function retrieves the
     * schema type model based on this identifier from a list of schema types.
     * @returns The `getSchemaTypeModel` function is returning the schema type object that matches the
     * provided `schemaTypeId`. If a matching schema type is found in the array returned by
     * `this.getSchemaTypes()`, it will be returned. Otherwise, `null` will be returned.
     * @deprecated Use sdk.getSchemaTypeClient()
     */
    getSchemaTypeModel(schemaTypeId: string): any;
    /**
     * This function retrieves a schema type model by its name from a list of schema types.
     * @param {string} schemaTypeName - The `schemaTypeName` parameter is a string that represents the
     * name of a schema type. The `getSchemaTypeModelByName` method is used to retrieve a schema type
     * model based on the provided schema type name.
     * @returns The `getSchemaTypeModelByName` function is returning the schema type model that matches
     * the provided `schemaTypeName`. It searches for a schema type with a name that matches
     * `schemaTypeName` within the list of schema types obtained from `this.getSchemaTypes()`. If a
     * matching schema type is found, it is returned; otherwise, `null` is returned.
     * @deprecated Use sdk.getSchemaTypeClient()
     */
    getSchemaTypeModelByName(schemaTypeName: string): import("..").ISchemaType | undefined;
    /**
     * The function `getSchemaLayouts` retrieves schema layouts if not already loaded and returns the
     * values of the schema layouts.
     * @returns The function `getSchemaLayouts` is returning the values of the `SchemaLayouts` object
     * after checking if the data has been loaded and loading it if necessary.
     * @deprecated Use sdk.getStateService().getSchemaLayouts()
     */
    getSchemaLayouts(): Promise<SchemaLayout[]>;
    /**
     * This function retrieves a schema layout model based on a given schema layout ID.
     * @param {string} schemaLayoutId - The `schemaLayoutId` parameter is a string that represents the
     * unique identifier of a schema layout. This function retrieves the schema layout model based on the
     * provided `schemaLayoutId`.
     * @returns The `getSchemaLayoutModel` function is returning the schema layout object that matches
     * the provided `schemaLayoutId`. It first retrieves the `schemaLayout` data from `this.data`, then
     * uses the `find` method to search for a schema layout object with an `_id` property that matches
     * `schemaLayoutId`. If a matching schema layout object is found, it is returned; otherwise, `
     * @deprecated Use sdk.getStateService().getSchemaLayout()
     */
    getSchemaLayoutModel(schemaLayoutId: string): import("..").SchemaLayout | undefined;
    /**
     * This function retrieves a schema layout model by its name from a data source.
     * @param {string} schemaLayoutName - The `schemaLayoutName` parameter is a string that represents
     * the name of a schema layout model that you want to retrieve from the data.
     * @returns The `getSchemaLayoutModelByName` function returns the schema layout model object that has
     * a name matching the `schemaLayoutName` parameter. If a matching schema layout is found, it is
     * returned; otherwise, `null` is returned.
     * @deprecated Use sdk.getStateService().getSchemaLayout()
     */
    getSchemaLayoutModelByName(schemaLayoutName: string): import("..").SchemaLayout | undefined;
    /**
     * This function retrieves a schema layout by name or returns null if not found.
     * @param {string} schemaLayoutName - The `schemaLayoutName` parameter is a string that represents
     * the name of a schema layout. This function `getSchemaLayout` takes this parameter and returns the
     * corresponding `SchemaLayout` object if it exists in the `SchemaLayouts` collection. If the schema
     * layout does not exist, it returns
     * @returns The `getSchemaLayout` function is returning a `SchemaLayout` object corresponding to the
     * provided `schemaLayoutName` if it exists in the `SchemaLayouts` collection. If the
     * `schemaLayoutName` is not found in the collection, it returns `null`.
     * @deprecated Use sdk.getStateService().getSchemaLayout()
     */
    getSchemaLayout(schemaLayoutName: string): SchemaLayout | null;
    /**
     * This function returns an array of languages from the data.
     * @returns An array of Language objects is being returned.
     * @deprecated Use sdk.getStateService().getLanguages()
     */
    getLanguages(): import("..").Language[] | undefined;
    /**
     * The function `getDispositions` asynchronously retrieves dispositions from data, handling errors
     * using promises in TypeScript.
     * @returns An asynchronous function `getDispositions()` is being returned. This function returns a
     * Promise that resolves to an array of type `any[]`. The function first checks if the data has a key
     * 'disposition'. If it does not, it calls the `fetchDispositions()` method to load the dispositions.
     * Once the dispositions are loaded, it resolves the Promise with the data stored under the '
     * @deprecated Use sdk.getStateService().getDispositions()
     */
    getDispositions(): Promise<any[]>;
    /**
     * This TypeScript function asynchronously retrieves surveys from data storage and returns a Promise
     * containing an array of survey data.
     * @returns An array of type `any` is being returned asynchronously.
     * @deprecated Use sdk.getStateService().getSurveys()
     */
    getSurveys(): Promise<any[]>;
    /**
     * This function asynchronously retrieves compliances data and returns a promise that resolves with
     * an array of any type.
     * @returns The `getCompliances` function is returning a Promise that resolves to an array of type
     * `any[]`. The function first checks if the data has already been loaded, and if not, it calls the
     * `loadCompliances` method to load the data. Once the data is loaded, it resolves the Promise with
     * the compliance data. If there is an error during the process, it rejects
     * @deprecated Use sdk.getStateService().getComplianceDispositions()
     */
    getCompliances(): Promise<any[]>;
    /**
     * @deprecated Use sdk.getStateService().getCampaignScripts()
     */
    getAgentScripts(): Promise<any[]>;
    /**
     * Asynchronously retrieves templates from the data storage.
     * If the templates are not already loaded, it loads them first.
     *
     * @returns {Promise<any[]>} A promise that resolves to an array of templates.
     *
     * @remarks
     * This function checks if the 'templates' key exists in the data storage.
     * If it does not exist, it calls the `loadTemplates
     * @deprecated Use sdk.getStateService().getTemplates()
     */
    getTemplates(): Promise<Template[]>;
    /**
     * Asynchronously retrieves a list of campaigns, optionally filtered by type.
     *
     * @param {string} [type] - The type of campaigns to filter by. Possible values include 'Email', 'Extension', 'Fax', 'Outbound', 'Predictive', 'Progressive', and 'SMS'.
     * @returns {Promise<any[]>} A promise that resolves to an array of campaign objects. Each campaign object contains `id`, `label`, and `name` properties.
     * @throws Will throw an error if the campaigns cannot be loaded or processed.
     * @deprecated Use sdk.getStateService().getCampaigns()
     */
    getCampaigns(type?: string): Promise<Campaign[]>;
    /**
     * Asynchronously retrieves a list of skills from the data storage.
     * If the skills are not already loaded, it loads them first.
     *
     * @returns {Promise<Skill[]>} A promise that resolves to an array of skills.
     * @throws Will throw an error if the skills cannot be loaded or processed.
     * @deprecated Use sdk.getStateService().getCampaigns()
     */
    getSkills(): Promise<Skill[]>;
    /**
     * @deprecated Use sdk.getStateService().getScoreCards()
     */
    getScoreCards(): Promise<any[]>;
    /**
     * Retrieves the regex data from the service.
     * @returns A promise that resolves to an array of regex data.
     * @deprecated Use sdk.getStateService().getRegexes()
     */
    getRegex(): Promise<any[]>;
    /**
     * Retrieves the classifications from the data service.
     * @returns A promise that resolves to an array of classifications.
     * @deprecated Use sdk.getStateService().getClassifications()
     */
    getClassifications(): Promise<any[]>;
    /**
     * TODO
     * This could return an array or an object, need to formalize the return
     * @deprecated Use sdk.getStateService().get()
     */
    getData(name: string): any;
    /**
     * Translates the given key using the translator service.
     * @param key - The key to be translated.
     * @param params - Optional parameters to be used in the translation.
     * @returns The translated string.
     */
    translate(key: string, params?: any): string;
    /**
     * Adjusts the label based on the specified language.
     * If the label is an object with language-specific values, it returns the value for the specified language.
     * If the label is a string, it returns the translated version of the label.
     * If the label is null or undefined, it returns null.
     * If an error occurs during the translation process, it returns the default label or 'Error in label'.
     *
     * @param language - The language code for which to adjust the label.
     * @param label - The label to adjust.
     * @param defaultLabel - The default label to use if the label is not found or an error occurs.
     * @returns The adjusted label or null.
     */
    adjustLabel(language: string, label: any, defaultLabel: string): string | null;
    /**
     * Loads provider data and performs necessary operations.
     * @returns A promise that resolves with the response from the server.
     * @throws Throws an error if there is an error while loading provider data.
     */
    loadProviderData(): Promise<import("axios").AxiosResponse<any, any, {}>>;
    private loadSchemaLayouts;
    private loadDispositions;
    private loadSurveys;
    private loadCompliances;
    private loadAgentScripts;
    private loadTemplates;
    private loadCampaigns;
    private loadSkills;
    private loadScoreCards;
    private loadRegex;
    private loadClassifications;
    /**
     * The function `loadData` asynchronously loads data from a specified URL, logs the delay, and
     * processes the data.
     * @param {string} objectType - The `objectType` parameter in the `loadData` function represents the
     * type of object that you are loading data for. It could be a string value such as "user", "product",
     * "order", etc.
     * @param {string} url - The `url` parameter in the `loadData` function is a string that represents the
     * URL from which data will be fetched for the specified `objectType`.
     * @param [fields] - The `fields` parameter in the `loadData` function is an optional parameter of type
     * `Array<string>`. It allows you to specify an array of field names that you want to retrieve for the
     * given `objectType`. If `fields` is provided, only the specified fields will be fetched and
     */
    private loadData;
    /**
     * The function `loadMandatoryData` asynchronously loads essential data such as languages, schema
     * types, user information, and widgets, handling errors and logging the delay in milliseconds.
     */
    loadMandatoryData(): Promise<void>;
    loadMandatoryUserData(): Promise<void>;
    private fetchCompanyDirectory;
    /**
     * Fetches AI employees from the API and caches them.
     * AI employees are loaded in parallel with other mandatory data.
     * Errors are caught and logged but don't prevent SDK initialization.
     * @returns A promise that resolves when AI employees are loaded.
     */
    private fetchAIEmployees;
    /**
     * Fetches the languages from the API.
     * @returns A promise that resolves to the fetched languages.
     */
    fetchLanguages(): Promise<import("..").Language[]>;
    /**
     * Fetches the statuses from the API.
     *
     * @returns {Promise<any>} A promise that resolves with the fetched statuses.
     */
    fetchStatuses(): Promise<import("..").Status[]>;
    /**
     * Fetches the schema types from the API.
     *
     * @returns A Promise that resolves to the fetched schema types.
     */
    fetchSchemaTypes(): Promise<import("..").ISchemaType[]>;
    private fetchSchemaLayouts;
    /**
     * Fetches the widgets for the user's home tabs.
     *
     * @returns An array of widgets.
     */
    fetchWidgets(): Promise<import("..").Widget[] | undefined>;
    /**
     * For testing only
     */
    private loadSystemData;
    processArrayData(name: string, arr: any[], afterRowProcessed?: (param: any) => void): void;
    private processData;
    /**
     * Retrieves the appropriate helper instance based on the provided objectType.
     *
     * @param objectType - The type of object for which the helper instance is needed.
     * @returns The helper instance corresponding to the objectType.
     */
    getHelper(objectType: string): HelperInterface;
    /**
     * Adjusts the name of the model based on the current language.
     * @param model - The model object to adjust the name for.
     */
    private adjustName;
    /**
     * Prints all the layout values of the SchemaLayouts enum.
     */
    printLayouts(): void;
    /**
     * Generates a signed URL for accessing a user's avatar image.
     *
     * @param {string} userId - The ID of the user whose avatar URL needs to be generated.
     * @returns {string} The signed URL for the user's avatar image.
     * @deprecated use sdk.getUserService().buildAvatarSignedURL()
     */
    buildAvatarSignedURL({ userId }: {
        userId: string;
    }): string;
}
//# sourceMappingURL=data.d.ts.map