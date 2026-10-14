import type { RangeType } from '../models';
import type { FetchWidgetDataPayload } from '../types/widget';
import type { Callback, Workitem } from '../types';
import { type InjectionContainer } from '../internal';
export declare class WidgetService {
    private eventsService;
    private logger;
    private widgets;
    constructor({ eventsService, loggerService, }: Pick<InjectionContainer, 'eventsService' | 'loggerService'>);
    private handleWidgetsDataNotification;
    private loadData;
    private loadByType;
    private getType;
    /**
     * This TypeScript function retrieves voicemails based on a specified date range and new only flag.
     * @param {DateRange} dateRange - The `dateRange` parameter is used to specify a range of dates for
     * filtering voicemails. It likely includes a start date and an end date to retrieve voicemails within
     * that specific time frame. Possible values are
     * @param {boolean} newOnly - The `newOnly` parameter is a boolean flag that indicates whether to
     * retrieve only new voicemails or all voicemails within the specified date range. If `newOnly` is set
     * to `true`, the method will return only new voicemails; if set to `false`, it will
     * @returns An array of Workitem objects is being returned.
     */
    getVoicemails(rangeType: RangeType, newOnly: boolean): Promise<Workitem[]>;
    /**
     * The function `getMissedCalls` retrieves missed calls based on a specified date range and whether
     * they are new or not.
     * @param {DateRange} dateRange - The `dateRange` parameter in the `getMissedCalls` function is used to
     * specify a range of dates for which missed calls should be retrieved. It likely represents a period
     * of time, such as today, this week, this month, etc., within which the missed calls occurred.
     * @param {boolean} newOnly - The `newOnly` parameter is a boolean flag that indicates whether to
     * retrieve only new missed calls or all missed calls within the specified date range. If `newOnly` is
     * set to `true`, the function will return only new missed calls; if set to `false`, it will return all
     * missed
     * @returns An array of Workitem objects or Callback objects is being returned.
     */
    getMissedCalls(rangeType: RangeType, newOnly: boolean): Promise<Array<Workitem | Callback>>;
    /**
     * Retrieves the history of workitems based on the specified range type.
     * @param rangeType The range type for filtering the workitem history.
     * @returns A promise that resolves to an array of Workitem objects representing the workitem history.
     */
    getHistory(rangeType: RangeType): Promise<Workitem[]>;
    /**
     * Retrieves the callbacks for a given range type.
     * @param rangeType - The range type for which to retrieve the callbacks.
     * @returns A promise that resolves to an array of Callback objects.
     */
    getCallbacks(rangeType: RangeType): Promise<Callback[]>;
    fetchWidgetData<TWidgetData = unknown>({ id, rangeFrom, rangeTo, rangeType, ...params }: FetchWidgetDataPayload): Promise<TWidgetData>;
}
//# sourceMappingURL=widget.d.ts.map