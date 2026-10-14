import { AbstractTelephony } from '../telephony';
export declare class PSTN extends AbstractTelephony {
    init(): Promise<void>;
    close(): Promise<void>;
    logout(): void;
    activeConnection(): any;
    hangup(): void;
    disconnectAll(): void;
    status(): any;
    dtmf(_digits: string): Promise<void>;
}
//# sourceMappingURL=pstn.d.ts.map