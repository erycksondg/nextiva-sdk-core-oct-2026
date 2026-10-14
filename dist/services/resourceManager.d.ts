import { type InjectionContainer } from '../internal';
export declare class ResourceManager {
    private stateService;
    private telephonyService;
    private userSocketClient;
    private workitemCache;
    private persisterClient;
    private conversationService;
    constructor({ conversationService, persisterClient, stateService, telephonyService, userSocketClient, workitemCache, }: Pick<InjectionContainer, 'stateService' | 'telephonyService' | 'userSocketClient' | 'workitemCache' | 'persisterClient' | 'conversationService'>);
    cleanup(): Promise<void>;
}
//# sourceMappingURL=resourceManager.d.ts.map