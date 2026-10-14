export declare const getTime: () => number;
export declare const isValidEmail: (email: string) => boolean;
export declare const generateNewId: () => string;
export declare const getUUID: () => string;
export declare const getUniqueId: () => number;
export declare const getUniqueIdAsString: () => string;
export declare const getCurrentTime: () => number;
export declare const formatDuration: (seconds: number) => string;
export declare const sortNumber: (array: number[], ascending: number) => void;
export declare const sortString: (array: string[], ascending: number) => void;
export declare const sortObject: (array: any[], ascending: number, getter: (value: any) => any) => void;
export declare const adjustComponent: (field: {
    type?: string;
}) => string;
export declare const pick: (obj: any, keys: string[]) => object;
export declare const freezeItem: <T>(item: T) => Readonly<T>;
//# sourceMappingURL=util.d.ts.map