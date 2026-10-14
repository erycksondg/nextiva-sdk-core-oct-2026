import type { SpeedReport } from '../../types';
export declare class SpeedTester {
    private testSize;
    private uploadTime?;
    private downloadTime?;
    private currentSpeedTestCallback?;
    clear(): void;
    speedTest(socket: WebSocket): Promise<SpeedReport | null>;
    private reportSpeedTestEnd;
    /**
     * Returns if the message was handled by this message handler.
     *
     * @param messageEvent Websocket Message during speedtest
     * @returns
     */
    handleOnMessage(messageEvent: MessageEvent): boolean;
}
//# sourceMappingURL=speedTester.d.ts.map