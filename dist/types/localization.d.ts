import type { LanguageCode } from "./language";
interface LocalizationLanguageValue {
    language: LanguageCode;
    value: string;
}
type Language = LanguageCode;
/**
 * Use as
 * ```
 * localization: {
 *   name: LocalizationEntry;
 *   description: LocalizationEntry;
 * }
 * ```
 */
export type LocalizationEntry = Record<Language, LocalizationLanguageValue>;
export {};
//# sourceMappingURL=localization.d.ts.map