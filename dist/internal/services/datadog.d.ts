import { type DatadogUser } from '../../types/datadog';
export declare abstract class BaseDatadogService {
    abstract addAction(name: string, context?: object): void;
    abstract addLog(message: string, context?: object, level?: 'debug' | 'info' | 'warn' | 'error'): void;
    abstract setUser(user: DatadogUser): Promise<void> | Promise<unknown>;
}
//# sourceMappingURL=datadog.d.ts.map