import { type InjectionContainer } from '../internal';
import { type Translations } from '../types/translator';
export declare class TranslatorService {
    private translator;
    constructor({ translator }: Pick<InjectionContainer, 'translator'>);
    /**
     * The function `load` takes a language and translations as input and returns the result of loading the
     * translations for that language using a translator.
     * @param {string} language - The `language` parameter in the `load` function represents the language
     * code or identifier for the translations that you want to load. It specifies the language for which
     * the translations should be loaded.
     * @param {Translations} translations - The `translations` parameter is an object that contains the
     * translations for a specific language. It likely includes key-value pairs where the keys represent
     * the original text in the source language and the values represent the translated text in the target
     * language.
     * @returns The `load` method is returning the result of calling the `load` method on the `translator`
     * object with the provided `language` and `translations` parameters. The return type is `unknown`.
     */
    load(language: string, translations: Translations): unknown;
    /**
     * The function `translate` takes a key and parameters, then uses a translator to return the
     * translated string.
     * @param {string} key - The `key` parameter is a string that represents the unique identifier for
     * the translation that needs to be retrieved.
     * @param {unknown[]} params - The `params` parameter in the `translate` function is a rest parameter
     * that allows you to pass an arbitrary number of arguments to the function. In this case, it is used
     * to pass additional parameters that may be needed for the translation process.
     * @returns The `translate` function is returning the result of calling the `translate` method of the
     * `translator` object with the `key` and `params` as arguments.
     */
    translate(key: string, ...params: unknown[]): string;
}
//# sourceMappingURL=translator.d.ts.map