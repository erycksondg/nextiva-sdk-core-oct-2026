import { type DataService } from '../data';
import { type SchemaType } from '../../models';
export interface HelperInterface {
    adjustName(model: any): void;
    loadAvatar(): void;
    processData(model: any): void;
}
export declare abstract class Helper implements HelperInterface {
    protected language: string;
    protected dataService: DataService;
    abstract processData(schemaType: SchemaType): void;
    protected constructor(language: string, dataService: DataService);
    adjustName(model: any): void;
    loadAvatar(): void;
    getHelper(_objectType: string): HelperInterface | null;
}
//# sourceMappingURL=base.d.ts.map