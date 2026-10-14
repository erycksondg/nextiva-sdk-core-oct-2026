/**
 * The type `Translations` is a recursive type that represents a collection of
 * key-value pairs where the values can be strings or nested `Translations`
 * objects.
 * @property {string | Translations} [key: string | Translations] - The
 * `Translations` type you provided is a recursive type definition that represents
 * a nested structure of key-value pairs where the keys are strings and the values
 * are either strings or nested `Translations` objects.
 */
export interface Translations {
    [key: string]: string | Translations;
}
export interface ITranslator {
    load(language: string, translations: Translations): unknown;
    translate(key: string, ...params: unknown[]): string;
}
//# sourceMappingURL=translator.d.ts.map