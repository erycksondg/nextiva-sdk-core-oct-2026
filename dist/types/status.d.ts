import { type StatusType } from '../models';
import { type BaseSchemaObject } from './schemaType';
export type UserStatusRecord = Record<string, string>;
export interface StatusChangedEventData {
    statuses: UserStatusRecord;
}
export interface Status extends BaseSchemaObject {
    duration?: number;
    objectType: 'status';
    presentToAgent: boolean;
    status: StatusType;
    statusId: string;
    teamsActivity?: string;
    time?: number;
}
export interface StatusChangedNotificationData extends Status {
    idleReason?: string;
    idleStartedAt?: number;
    userDuration?: 0;
}
export interface SetUserStatusCustomFields {
    availableTimer?: number;
    customStatusMessage?: {
        emoji: string;
        message: string;
    };
    duration?: Date | number;
    idleReason?: string;
}
export type SetUserStatusRequestBody = SetUserStatusCustomFields & {
    status: number;
    statusId: string;
};
export type SetUserStatusResponse = SetUserStatusRequestBody & {
    createdAt: number;
    modifiedAt: number;
    objectType: string;
};
//# sourceMappingURL=status.d.ts.map