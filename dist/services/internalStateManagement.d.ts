import { type InjectionContainer } from '../internal';
import { type StateService } from './state';
export declare class InternalStateManagementService {
    protected stateService: StateService;
    constructor({ stateService }: Pick<InjectionContainer, 'stateService'>);
    upsertValueFromAPI(name: string, url: string, fields?: string[]): Promise<import("axios").AxiosResponse<any, any, {}>>;
}
//# sourceMappingURL=internalStateManagement.d.ts.map