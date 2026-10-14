import { type AbstractTelephony } from '../telephony';
export interface TelephonyImplementations {
    freeswitch: AbstractTelephony;
    twilio: AbstractTelephony;
}
export type TelephonyImplementationType = 'freeswitch' | 'twilio' | 'pstn';
//# sourceMappingURL=telephony.d.ts.map