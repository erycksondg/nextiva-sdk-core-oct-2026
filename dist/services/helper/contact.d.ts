import { type DataService } from '../data';
import { Helper, type HelperInterface } from './base';
export declare class HelperContact extends Helper {
    protected language: string;
    protected dataService: DataService;
    private static instance;
    static getInstance(language: string, dataService: DataService): HelperInterface;
    private constructor();
    processData(model: any): void;
}
//# sourceMappingURL=contact.d.ts.map