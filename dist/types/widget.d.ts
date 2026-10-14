import { type RangeType, type WidgetType, type WorkitemType } from '../models';
export interface Widget {
    [key: string]: unknown;
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    label: string;
    mediaTypes: WorkitemType[];
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    newOnly: boolean;
    objectType: string;
    refreshRate: number;
    tenantId: string;
    timeInterval: string;
    type: WidgetType;
    widgetId: string;
}
export interface FetchWidgetDataPayload {
    [x: string]: unknown;
    id: string;
    q?: string;
    rangeFrom?: number;
    rangeTo?: number;
    rangeType?: RangeType;
}
//# sourceMappingURL=widget.d.ts.map