type RTCPeerConnectionState = 'new' | 'connecting' | 'connected' | 'disconnected' | 'failed' | 'closed';
export interface WebRTCData {
    isError: boolean;
    state: RTCPeerConnectionState;
}
export interface WebRTCClientReadyData {
    isReady: boolean;
}
export interface WebRTCSocketStatusNotificationData {
    isConnected: boolean;
    state: 'open' | 'closed' | 'error';
}
export {};
//# sourceMappingURL=webrtc.d.ts.map