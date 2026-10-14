import { type InjectionContainer } from '../internal';
import { type StateService } from './state';
import { type TranslatorService } from './translator';
import { type Translations } from '../types';
import { type InternalStateManagementService } from './internalStateManagement';
export declare class LanguageService {
    protected stateService: StateService;
    private eventsService;
    protected translatorService: TranslatorService;
    protected internalStateManagementService: InternalStateManagementService;
    private dataService;
    private logger;
    constructor({ dataService, eventsService, internalStateManagementService, loggerService, stateService, translatorService, }: Pick<InjectionContainer, 'stateService' | 'translatorService' | 'eventsService' | 'internalStateManagementService' | 'dataService' | 'loggerService'>);
    changeLanguage(language: string): Promise<Translations>;
    private refreshData;
}
//# sourceMappingURL=language.d.ts.map