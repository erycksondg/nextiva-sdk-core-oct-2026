import { type DataService } from '../data';
import { Helper, type HelperInterface } from './base';
export declare class HelperUser extends Helper {
    protected language: string;
    protected dataService: DataService;
    private static instance;
    private settings;
    static getInstance(language: string, dataService: DataService): HelperInterface;
    private constructor();
    processData(model: any): void;
}
//# sourceMappingURL=user.d.ts.map