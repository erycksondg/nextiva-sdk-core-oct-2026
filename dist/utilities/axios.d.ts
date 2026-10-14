/**
 * Axios instance for making HTTP requests.
 */
export declare const axiosInstance: import("axios").AxiosInstance;
/**
 * Upserts the default request header with the specified header and value.
 * @param header - The header to be updated.
 * @param value - The value to be set for the header.
 */
export declare const upsertDefaultRequestHeader: (header: string, value: string) => void;
/**
 * Returns the current value of a default request header, or undefined if not set.
 * @param header - The name of the header to read.
 */
export declare const getDefaultRequestHeader: (header: string) => string | undefined;
/**
 * Deletes the default request header with the specified name.
 * @param header - The name of the header to delete.
 */
export declare const deleteDefaultRequestHeader: (header: string) => void;
/**
 * Configures the Axios instance with the provided base URL and language.
 * @param options - The configuration options.
 * @param options.baseURL - The base URL for the Axios instance.
 * @param options.language - The language to be set in the 'Accept-Language' header.
 */
export declare const configureAxios: (options: {
    baseURL?: string;
    language?: string;
}) => void;
//# sourceMappingURL=axios.d.ts.map