import { type BaseSchemaObject } from './schemaType';
export interface SchemaLayout extends BaseSchemaObject {
    group: string;
    list: {
        actions2: Array<{
            authority: {
                domain: string;
                objectType: string;
                permission: string;
            };
            disable: boolean | string;
            hover: string;
            icon: string;
            label: string;
            type: string;
            visible: string[];
        }>;
        descriptionField: string;
        fields: Array<{
            filter?: {
                type: string;
                use: boolean;
            };
            format?: string;
            name: string;
            sorted?: number;
            visible?: boolean;
        }>;
        nameField: string;
        otherField: string;
        searches: Array<{
            action: string;
            default?: boolean;
            label: string;
            rows: number;
        }>;
        timeField: string;
    };
    objectType: 'schemalayout';
    panels: SchemaLayoutPanel[];
    position: number;
    schemaTypeName: string;
    search: {
        noResult: boolean;
        q: string;
        type: string;
    };
    showFooter: boolean;
    showInSideMenu: boolean;
    synonyms?: string;
}
export interface BaseSchemaLayoutPanel {
    layout: {
        column: number;
        fields: SchemaLayoutPanelField[];
    };
    position: number;
    showOnNew: boolean;
    type: 'form' | 'data';
}
export interface SchemaLayoutPanelForm extends BaseSchemaLayoutPanel {
    layout: {
        column: number;
        fields: SchemaLayoutPanelField[];
    };
    title: {
        label: string;
    };
    type: 'form';
}
export interface BaseSchemaLayoutPanelDataFieldAction {
    patch: string;
    type: 'slider';
}
export interface SchemaLayoutPanelDataFieldActionSlider extends BaseSchemaLayoutPanelDataFieldAction {
    max: number;
    min: number;
    step: number;
    type: 'slider';
}
export type SchemaLayoutPanelDataFieldAction = SchemaLayoutPanelDataFieldActionSlider;
export interface SchemaLayoutPanelDataField {
    action?: SchemaLayoutPanelDataFieldAction;
    format: string;
    label: string;
    name: string;
    object: string;
    sorted?: number;
    visible?: boolean;
}
export interface SchemaLayoutPanelData extends BaseSchemaLayoutPanel {
    data: {
        actions: Array<{
            disable: boolean | string;
            icon: string;
            label: string;
            type: string;
        }>;
        fieldname: string;
        fields: SchemaLayoutPanelDataField[];
        showSearch: boolean;
    };
    title: {
        actions: Array<{
            disable: boolean | string;
            hover: string;
            icon: string;
            type: string;
        }>;
    };
    type: 'data';
}
export type SchemaLayoutPanel = SchemaLayoutPanelForm | SchemaLayoutPanelData;
export interface SchemaLayoutPanelField {
    name: string;
    schema: string;
}
export declare const isSchemaLayoutPanelData: (value: SchemaLayoutPanel) => value is SchemaLayoutPanelData;
export declare const isSchemaLayoutPanelForm: (value: SchemaLayoutPanel) => value is SchemaLayoutPanelForm;
//# sourceMappingURL=schemaLayout.d.ts.map