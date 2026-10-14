import type { StringWithAutocomplete } from './util';
export type SSOProviderName = StringWithAutocomplete<'google' | 'azure' | 'salesforce' | 'serviceNow' | 'okta' | 'oidc' | 'saml'>;
export interface SSOProvider {
    name: SSOProviderName;
    redirectUrl: string;
}
//# sourceMappingURL=sso.d.ts.map