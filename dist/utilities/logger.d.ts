/**
 * @deprecated Use `LoggerService`
 */
export declare const Logger: {
    error(message?: any, ...optionalParams: any[]): void;
    force(message?: any, ...optionalParams: any[]): void;
    group(...args: Parameters<typeof console.group>): void;
    groupEnd(): void;
    info(message?: any, ...optionalParams: any[]): void;
    isTracing(): boolean;
    log(message?: any, ...optionalParams: any[]): void;
    setTracing(trace: boolean): void;
    trace: boolean;
    warn(message?: any, ...optionalParams: any[]): void;
};
//# sourceMappingURL=logger.d.ts.map