import type { ParsedRTCStats, AudioQualityStatsSample, ParsedTwilioRTCStats } from '../../types/rtc-stats';
export declare const calculateTwilioQualityMetrics: (data: ParsedTwilioRTCStats, previousStats?: ParsedTwilioRTCStats) => AudioQualityStatsSample | undefined;
export declare const calculateQualityMetrics: (data: ParsedRTCStats, previousStats?: ParsedRTCStats) => AudioQualityStatsSample | undefined;
//# sourceMappingURL=quality.d.ts.map