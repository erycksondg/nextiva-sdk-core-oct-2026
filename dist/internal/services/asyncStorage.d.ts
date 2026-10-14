import { type AsyncStorage, type PersistedQuery } from '@tanstack/query-persist-client-core';
export interface CreateAsyncStorageOptions {
    encryptionKey?: string;
    name: string;
}
export declare abstract class BaseAsyncStorageService {
    abstract createAsyncStorage(options: CreateAsyncStorageOptions): AsyncStorage<PersistedQuery>;
}
//# sourceMappingURL=asyncStorage.d.ts.map