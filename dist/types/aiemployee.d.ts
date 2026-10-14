/**
 * Represents an AI Employee in the system.
 * AI Employees can be assigned to tickets and queues similar to human users.
 */
export interface AIEmployee {
    /** Unique identifier (MongoDB ObjectId) */
    _id: string;
    /** AI employee unique identifier */
    aiemployeeId: string;
    /** Timestamp when the AI employee was deleted (for cache management) */
    deletedAt?: number;
    /** Optional image filename (present on websocket notifications) */
    image?: string;
    /** Background color for the avatar (hex color) */
    imageBackground: string;
    /** URL to the AI employee's avatar image */
    imageURL: string;
    /** Display name of the AI employee */
    name: string;
    /** Queue/inbox ID that the AI employee belongs to */
    queueId: string;
    /** Current status of the AI employee (e.g., 'draft', 'active', 'inactive') */
    status: string;
}
/**
 * Response structure from the AI employees summary API endpoint.
 * Initial load returns all employees; incremental load (with cursor) returns
 * an acknowledgement plus a new cursor — actual updates arrive via websocket.
 */
export interface AIEmployeeSummaryResponse {
    cursor: number;
    objects: AIEmployee[];
}
/**
 * Websocket payload broadcast on `/topic/{tenantId}` whenever an AI employee's
 * summary fields change.
 */
export interface AiEmployeeUpdatedNotificationData {
    aiemployee: AIEmployee;
    name: 'AiEmployeeUpdatedNotification';
}
//# sourceMappingURL=aiemployee.d.ts.map