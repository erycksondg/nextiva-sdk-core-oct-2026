import { type CountryCode } from 'libphonenumber-js';
export interface PhoneNumber {
    country: string | undefined;
    countryCallingCode: string;
    nationalNumber: string;
    number: string;
}
export type PhoneNumberFormat = 'NATIONAL' | 'INTERNATIONAL' | 'E.164';
/**
 * Formats a phone number to E.164 format.
 * @param {string} phoneNumber - The phone number to format.
 * @param {CountryCode} countryCode - The country code of the phone number. By defult , its US.
 * @returns {string | null} - The formatted phone number in E.164 format or null if the number is invalid.
 */
export declare const formatPhoneNumberEx: (phoneNumber: string, countryCode?: CountryCode) => string | null;
export declare const formatPhoneNumber: (phoneNumber: string, format?: PhoneNumberFormat) => string | null;
/**
 * Formats a phone number to E.164 format.
 * @param {string} phoneNumber - The phone number to format.
 * @returns {string | null} - The formatted phone number in E.164 format or null if the number is invalid.
 */
export declare const parsePhoneNumber: (phoneNumber: string) => PhoneNumber | null;
//# sourceMappingURL=formatPhoneNumber.d.ts.map