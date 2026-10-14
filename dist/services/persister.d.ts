import { experimental_createQueryPersister } from '@tanstack/query-persist-client-core';
import { type InjectionContainer } from '../internal';
export type QueryPersister = ReturnType<typeof experimental_createQueryPersister>;
export interface BasePersisterClient {
    createQueryPersister(userID: string, enableEcryption: boolean): QueryPersister;
    dispose(): void;
    getQueryPersister(): QueryPersister | undefined;
}
export declare class PersisterClient {
    private asyncStorageService;
    private persister?;
    constructor({ asyncStorageService }: Pick<InjectionContainer, 'asyncStorageService'>);
    createQueryPersister(userID: string, encrypted: boolean): QueryPersister;
    getQueryPersister(): QueryPersister | undefined;
    dispose(): void;
}
//# sourceMappingURL=persister.d.ts.map