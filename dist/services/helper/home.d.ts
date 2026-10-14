import { type DataService } from '../data';
import { Helper, type HelperInterface } from './base';
export declare class HelperHome extends Helper {
    protected language: string;
    protected dataService: DataService;
    private static instance;
    private stateService;
    static getInstance(language: string, dataService: DataService): HelperInterface;
    private constructor();
    processData(model: any): void;
}
//# sourceMappingURL=home.d.ts.map