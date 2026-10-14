import type { IRTCStatsGetter, ParsedRTCStats, ITwilioRTCStatsGetter, ParsedTwilioRTCStats } from '../../types/rtc-stats';
export declare const parseRtcPeerConnectionStats: (rtcPeerConnection: IRTCStatsGetter) => Promise<ParsedRTCStats | undefined>;
export declare const parseTwilioRTCReportStats: (twilioRtcStatsGetter: ITwilioRTCStatsGetter) => Promise<ParsedTwilioRTCStats | undefined>;
//# sourceMappingURL=parser.d.ts.map