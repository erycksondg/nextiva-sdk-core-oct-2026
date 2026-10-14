/**
 * Handles the warnings related to the call quality described by the
 * `WebRTC` peer connection and report them to the BE service.
 *
 * Exposes public methods to handle the Twilio warning subscription API.
 */
declare class TwilioStatsCompilation {
    private warnings;
    private audioQualityServiceInstance;
    private logger;
    constructor();
    /**
     * Report to the `TwilioStatsCompilation` that a new warning has been raised
     * @param warningName one of `high-jitter`, `high-packet-loss`, `high-rtt`, `low-mos`
     */
    handleWebRTCWarning(warningName: string): void;
    /**
     * Report to the `TwilioStatsCompilation` that a previously reported warning has been cleared
     * @param warningName one of `high-jitter`, `high-packet-loss`, `high-rtt`, `low-mos`
     */
    handleWebRTCWarningCleared(warningName: string): void;
    private sendWarnings;
}
export { TwilioStatsCompilation };
//# sourceMappingURL=twilio-stats-compilation.d.ts.map