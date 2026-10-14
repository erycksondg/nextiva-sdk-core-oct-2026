import { type InjectionContainer } from '../internal';
import type { Recording, RecordingPayload } from '../types';
export declare class RecordingsService {
    private stateService;
    private eventsService;
    private logger;
    constructor({ eventsService, loggerService, stateService, }: Pick<InjectionContainer, 'stateService' | 'eventsService' | 'loggerService'>);
    private handleCallRecordingNotificationEvent;
    /**
     * This function fetches a recording for a specific recordingId.
     * @param {string} recordingId - The recordingId to fetch the transcript for
     * @returns {Promise<Recording>} - A Promise that resolves to the transcript for the recording
     */
    fetchRecording(recordingId: string): Promise<Recording>;
    /**
     * This function fetches recordings foor the specific userId, if no userId is provided it will fetch all recordings.
     * @param {RecordingPayload = {}} - Payload including rangeType, rangeFrom, rangeTo, rows, start, q
     * @returns {Promise<RecordingResponse>} - A Promise that resolves to a list of recordings
     */
    fetchMyRecordings({ q, rangeFrom, rangeTo, rangeType, rows, start, }?: Partial<RecordingPayload>): Promise<{
        objects: Recording[];
        count: number;
        total: number;
    }>;
    /**
     * This function fetches recordings foor the specific userId, if no userId is provided it will fetch all recordings.
     * @param {RecordingPayload = {}} - Payload including rangeType, rangeFrom, rangeTo, rows, start, q, userId
     * @returns {Promise<RecordingResponse>} - A Promise that resolves to a list of recordings
     */
    fetchRecordings({ q, rangeFrom, rangeTo, rangeType, rows, start, userId, }?: Partial<RecordingPayload>): Promise<{
        objects: Recording[];
        count: number;
        total: number;
    }>;
}
//# sourceMappingURL=recordings.d.ts.map