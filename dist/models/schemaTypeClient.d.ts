import type { SchemaTypeSearchPayload, SchemaTypeRetrievePayload, SchemaTypeLinkName, SchemaTypeLink, SchemaTypeName, SearchableSchemaType, RetrievableSchemaType, Replacements, SchemaTypeSearchResponseBody, SchemaTypeRetrieveResponseBody, SchemaTypeDeletePayload, BaseSchemaTypeUpdatePayload, BaseSchemaTypeCreatePayload, SchemaTypeUpdateResponseBody, UpdatableSchemaType, CreatableSchemaType, SchemaTypeCreateResponseBody, ISchemaType, DeletableSchemaType, SchemaTypeDeleteResponseBody, SchemaTypeDownloadPayload, SchemaTypeDownloadResponseBody, DownloadableSchemaType, SchemaTypeRequestResponseBody, BaseSchemaTypeRequestOptions, SchemaTypeRequestLinkNames } from '../types';
import { type InjectionContainer } from '../internal';
export declare class BaseSchemaTypeClient {
    private stateService;
    private localStorageService;
    private persisterClient;
    private logger;
    constructor({ localStorageService, loggerService, persisterClient, stateService, }: Pick<InjectionContainer, 'stateService' | 'localStorageService' | 'persisterClient' | 'loggerService'>);
    has(name: string): boolean;
    search<TResponse = void, const TName extends SearchableSchemaType = SearchableSchemaType>(name: TName, payload?: SchemaTypeSearchPayload): Promise<SchemaTypeSearchResponseBody<TName, TResponse>>;
    search<TResponse = void, const TName extends string = string>(name: TName, payload?: SchemaTypeSearchPayload): Promise<SchemaTypeSearchResponseBody<TName, TResponse>>;
    create<TResponse = void, const TName extends CreatableSchemaType = CreatableSchemaType>(name: TName, payload: BaseSchemaTypeCreatePayload): Promise<SchemaTypeCreateResponseBody<TName, TResponse>>;
    create<TResponse = void, const TName extends string = string>(name: TName, payload: BaseSchemaTypeCreatePayload): Promise<SchemaTypeCreateResponseBody<TName, TResponse>>;
    retrieve<TResponse = void, const TName extends RetrievableSchemaType = RetrievableSchemaType>(name: TName, payload: SchemaTypeRetrievePayload): Promise<SchemaTypeRetrieveResponseBody<TName, TResponse>>;
    retrieve<TResponse = void, const TName extends string = string>(name: TName, payload: SchemaTypeRetrievePayload): Promise<SchemaTypeRetrieveResponseBody<TName, TResponse>>;
    download<TResponse = void, const TName extends DownloadableSchemaType = DownloadableSchemaType>(name: TName, payload: SchemaTypeDownloadPayload): Promise<SchemaTypeDownloadResponseBody<TName, TResponse>>;
    download<TResponse = void, const TName extends string = string>(name: TName, payload: SchemaTypeDownloadPayload): Promise<SchemaTypeDownloadResponseBody<TName, TResponse>>;
    delete<TResponse = void, const TName extends DeletableSchemaType = DeletableSchemaType>(name: TName, payload: SchemaTypeDeletePayload): Promise<SchemaTypeDeleteResponseBody<TName, TResponse>>;
    delete<TResponse = void, const TName extends string = string>(name: TName, payload: SchemaTypeDeletePayload): Promise<SchemaTypeDeleteResponseBody<TName, TResponse>>;
    update<TResponse = void, const TName extends UpdatableSchemaType = UpdatableSchemaType>(name: TName, payload: BaseSchemaTypeUpdatePayload): Promise<SchemaTypeUpdateResponseBody<TName, TResponse>>;
    update<TResponse = void, const TName extends string = string>(name: TName, payload: BaseSchemaTypeUpdatePayload): Promise<SchemaTypeUpdateResponseBody<TName, TResponse>>;
    getLink(schemaTypeName: SchemaTypeName, linkName: SchemaTypeLinkName): SchemaTypeLink | undefined;
    getLink(schemaTypeName: string, linkName: string): SchemaTypeLink | undefined;
    getLinkURI(schemaTypeName: SchemaTypeName, linkName: SchemaTypeLinkName, replacements?: Replacements): string;
    getLinkURI(schemaTypeName: string, linkName: string, replacements?: Replacements): string;
    getLinkContentType(schemaTypeName: SchemaTypeName, linkName: SchemaTypeLinkName): string;
    getLinkContentType(schemaTypeName: string, linkName: string): string;
    /**
     * Perform a request defined in the links of a Schema.
     *
     * @param schemaTypeName - The Schema's name, e.g. `contact`, `workitem`
     * @param linkName - The Schema link that will give the URI for the request. **Common links** include `create`, `retrieve`, `update`, `delete`, `search` and `download`. Other links are **custom**.
     * @param options - Options for the request. Different options are used for custom and common links.
     * @param options.data - The body to be sent in the request. Only for **custom links**.
     * @param options.files - Any files to be attached to the request body, will change the request body to FormData and append each file as `file`. Only for **custom links**.
     * @param options.queryParams - The query parameters to be sent in the request. Only for **custom links**.
     * @param options.replacements - The replacements to be made in the link URI. Only for **custom links**.
     * @param options.headers - The headers to be sent in the request. Only for **custom links**.
     * @param options.method - The HTTP method to be used. Only for **custom links**.
     * @param options.payload - The payload for the request. Only for **common links** specified above.
     *
     * @returns The response body of the request.
     */
    request<TResponse = void, const TName extends SchemaTypeName = SchemaTypeName, const TSchemaTypeLinkName extends SchemaTypeRequestLinkNames<TName> = SchemaTypeRequestLinkNames<TName>, TFile = Parameters<FormData['append']>[1]>(schemaTypeName: TName, linkName: TSchemaTypeLinkName, options: BaseSchemaTypeRequestOptions<TName, TSchemaTypeLinkName, TFile>): Promise<SchemaTypeRequestResponseBody<TName, TSchemaTypeLinkName, TResponse>>;
    request<TResponse = void, const TName extends string = string, const TSchemaTypeLinkName extends string = string, TFile = Parameters<FormData['append']>[1]>(schemaTypeName: TName, linkName: TSchemaTypeLinkName, options: BaseSchemaTypeRequestOptions<TName, TSchemaTypeLinkName, TFile>): Promise<SchemaTypeRequestResponseBody<TName, TSchemaTypeLinkName, TResponse>>;
    get(schemaTypeName: string): ISchemaType;
    private fixLocalizableFields;
}
//# sourceMappingURL=schemaTypeClient.d.ts.map