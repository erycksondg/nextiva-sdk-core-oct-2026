import type { IRTCStatsGetter, ITwilioRTCStatsGetter } from '../../types/rtc-stats';
/**
 * Handles monitoring the quality of an ongoing call by setting an interval to collect
 * and evaluate the RTC Peer connection's stats.
 *
 * Exposes public methods to start or stop the interval.
 */
declare class RTCCallQualityMonitor {
    private previousRTCStatsParsed;
    private previousTwilioRTCStatsParsed;
    private qualityMetricsInterval;
    private datadogInterval;
    private initialDelayTimeout;
    private rtcStatsGetter;
    private twilioRTCStatsGetter;
    private samplePool;
    private audioQualityServiceInstance;
    private eventsService;
    private activeAlarms;
    private datadogService;
    private logger;
    constructor(rtcStatsGetter?: IRTCStatsGetter, twilioRTCStatsGetter?: ITwilioRTCStatsGetter);
    /**
     * Starts the quality metrics interval, populate the sample pool
     * and evaluate the quality of the call
     *
     * Includes an initial delay to allow the connection to stabilize before
     * starting aggressive stats collection, reducing noise from transitional states.
     */
    startQualityMetricsMonitor(callId: string): void;
    /**
     * Stops the quality metrics interval if running and discards the collected samples
     */
    stopMonitor(): void;
    private generateCallQualityStats;
    private generateTwilioCallQualityStats;
    private verifySampleQuality;
}
export { RTCCallQualityMonitor };
//# sourceMappingURL=rtc-quality-monitor.d.ts.map