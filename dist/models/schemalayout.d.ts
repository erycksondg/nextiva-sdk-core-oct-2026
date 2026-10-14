import { type DataService } from '../services';
import { type SchemaType } from './schematype';
/**
 * @deprecated SchemaLayout is deprecated
 */
export declare class SchemaLayout {
    private model;
    private dataService;
    constructor(model: any, dataService: DataService);
    /**
     * The function `getName` returns the name property of the model object.
     * @returns The `name` property of the `model` object is being returned.
     */
    getName(): string;
    /**
     * This TypeScript function returns the label property of the model object.
     * @returns The `label` property of the `model` object is being returned.
     */
    getLabel(): any;
    /**
     * This function retrieves the schema type from the data service based on the schema type name
     * provided in the model.
     * @returns The `getSchemaType()` method is returning a value of type `SchemaType` or `null`. It
     * calls the `getSchemaType()` method of the `dataService` object with the `schemaTypeName` property
     * of the `model` object casted as a string.
     */
    getModel(): any;
    /**
     * The function `getSchemaType` returns the schema type based on the schema type name retrieved from
     * the data service.
     * @returns The `getSchemaType()` method is returning a value of type `SchemaType` or `null`. It is
     * calling the `getSchemaType()` method of the `dataService` object with the `schemaTypeName`
     * property of the `model` object casted as a string.
     */
    getSchemaType(): SchemaType | null;
    /**
     * The function `getPanels` returns an array of panels from the model.
     * @returns An array of panels is being returned.
     */
    getPanels(): any[];
    /**
     * The `print` function logs the JSON string representation of the `model` property with an
     * indentation of 4 spaces.
     */
    print(): void;
}
//# sourceMappingURL=schemalayout.d.ts.map