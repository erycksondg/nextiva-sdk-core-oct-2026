import { type PaginatedResponse } from './common';
export type FetchFunctionsResponseBody = PaginatedResponse<FunctionModel>;
export interface FunctionModel {
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    description: string;
    functionId: string;
    id: string;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: string;
    showInDashboardOption: boolean;
    states: Record<string, FunctionModelState>;
    tenantId: string;
}
export interface FunctionModelState {
    __gohashid: number;
    _id: string;
    actions: FunctionAction[];
    campaignStateId: string;
    category: string;
    description: string;
    key: string;
    location: string;
    name: string;
    objectType: string;
    transitions: FunctionStateTransition[];
}
export interface FunctionAction {
    _selected: boolean;
    category: string;
    color: string;
    description: string;
    fig: string;
    icon: string;
    name: string;
    properties: FunctionActionProperties;
    svg: string;
    title: string;
    type: string;
}
export interface FunctionActionProperties {
    asObject: number;
    condition: {
        conditionType: string;
        expressions: Array<Record<string, string>>;
    };
    description: string;
    dlpOption: number;
    rightExpression: string;
    variableName: string;
}
export interface FunctionStateTransition {
    __gohashid: string;
    _id: string;
    id: string;
    name: string;
}
//# sourceMappingURL=functions.d.ts.map