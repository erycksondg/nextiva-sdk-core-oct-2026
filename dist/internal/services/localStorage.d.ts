export declare class BaseLocalStorageService {
    getValue(_key: string): Promise<string | null>;
    setValue(_key: string, _value: string): Promise<void>;
    upsertObjectValue<T>(key: string, value: Partial<T>): Promise<Partial<T> | null>;
    getObjectValue(key: string): Promise<Record<string, unknown> | null>;
    setObjectValue(key: string, value: Record<string, unknown>): Promise<void>;
}
//# sourceMappingURL=localStorage.d.ts.map