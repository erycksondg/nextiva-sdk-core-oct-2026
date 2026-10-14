import type { LocalizationEntry } from './localization';
import { type BaseSchemaObject } from './schemaType';
export type LanguageCode = 'en' | 'fr' | 'es' | 'pt';
export interface Language extends BaseSchemaObject {
    code: string;
    description: string;
    localizations: LocalizationEntry;
    objectType: 'language';
    url: string;
}
//# sourceMappingURL=language.d.ts.map