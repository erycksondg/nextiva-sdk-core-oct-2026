import { type LocalizationEntry } from "./localization";
import type { UserProfile, User } from "./user";
import type { Widget } from "./widget";
export interface HomeTab {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    hometabId: string;
    localizations: {
        name: LocalizationEntry;
    };
    logicalId: string;
    modifiedAt: number;
    modifiedBy: string;
    name: string;
    objectType: "hometab";
    position: number;
    tenantId: string;
    userprofiles?: {
        count: number;
        objects?: UserProfileHomeTab[];
        total: number;
    };
    users?: {
        count: number;
        objects?: UserHomeTab[];
        total: number;
    };
    widgets?: {
        count: number;
        objects?: HomeTabWidget[];
        total: number;
    };
}
export interface UserHomeTab {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    expansions?: {
        userId: User;
    };
    hometabId: string;
    modifiedAt: number;
    modifiedBy: string;
    objectType: "userhometab";
    tenantId: string;
    userId: string;
}
export interface UserProfileHomeTab {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    expansions?: {
        userprofileId: UserProfile;
    };
    hometabId: string;
    modifiedAt: number;
    modifiedBy: string;
    objectType: "userprofilehometab";
    tenantId: string;
    userprofileId: string;
}
export interface HomeTabWidget {
    _id: string;
    createdAt: number;
    createdBy: string;
    deletedAt: number;
    expansions?: {
        widgetId: Widget;
    };
    hometabId: string;
    hometabWidgetId: string;
    logicalId: string;
    modifiedAt: number;
    modifiedBy: string;
    objectType: "hometabwidget";
    tenantId: string;
    widgetId: string;
}
//# sourceMappingURL=homeTab.d.ts.map