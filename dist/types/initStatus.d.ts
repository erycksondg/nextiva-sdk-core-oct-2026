export interface InitStatus {
    error?: string;
    isFailure: boolean;
    isTokenInit: boolean;
    shouldLogout: boolean;
}
type Step = 'start' | 'fetchLocalDevices' | 'fetchSession' | 'loadMandatoryData' | 'refreshTokenStarted' | 'refreshTokenCycleStarted' | 'WebRTCInitialization' | 'initSuccess' | 'initError';
export interface InitStepStatus {
    status: InitStatus;
    step: Step;
}
export interface InitStatusDataNotification {
    currentStep: InitStepStatus;
    steps: InitStepStatus[];
}
export {};
//# sourceMappingURL=initStatus.d.ts.map