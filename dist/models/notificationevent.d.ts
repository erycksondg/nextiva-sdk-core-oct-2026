export declare class NotificationEvent<T = any> {
    readonly name: string;
    readonly data: T;
    constructor(name: string, data: T);
    /**
     * The function `getProperties` returns the data properties of the class in TypeScript.
     * @returns The `data` property is being returned.
     */
    getProperties(): T;
    /**
     * The function `getType` returns the value of the `name` property.
     * @returns The `name` property is being returned.
     */
    getType(): string;
}
//# sourceMappingURL=notificationevent.d.ts.map