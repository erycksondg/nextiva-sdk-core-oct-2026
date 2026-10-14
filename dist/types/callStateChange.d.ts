type CallState = 'new' | 'requesting' | 'trying' | 'recovering' | 'ringing' | 'answering' | 'early' | 'active' | 'held' | 'hangup' | 'destroy' | 'purge';
export interface ActiveCallStateChangeNotificationData {
    callId: string;
    callState: CallState;
}
export {};
//# sourceMappingURL=callStateChange.d.ts.map