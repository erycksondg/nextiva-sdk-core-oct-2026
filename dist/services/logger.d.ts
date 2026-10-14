import { type InjectionContainer } from '../internal';
import { type LogLevel } from '../types/logger';
export declare class LoggerService {
    level?: LogLevel | false;
    private datadogService;
    private stateService;
    constructor({ datadogService, stateService, }: Pick<InjectionContainer, 'datadogService' | 'stateService'>);
    trace(...args: Parameters<typeof console.trace>): void;
    debug(...args: Parameters<typeof console.debug>): void;
    info(...args: Parameters<typeof console.info>): void;
    warn(...args: Parameters<typeof console.warn>): void;
    error(...args: Parameters<typeof console.error>): void;
    fatal(...args: Parameters<typeof console.error>): void;
    setLevel(level: LogLevel): void;
    private log;
    private shouldLog;
    private getLogLevelStyles;
}
//# sourceMappingURL=logger.d.ts.map