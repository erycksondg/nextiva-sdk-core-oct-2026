export interface DeviceManagementDevice {
    macAddress: string;
    providerId: string;
    providerModelId?: string;
    providerModelName?: string;
    providerTenantId: string;
    providerType: string;
    tenantId: string;
    userId?: string;
}
export type FetchDevicesResponseBody = DeviceManagementDevice[];
export interface UnassignOrDeleteDevicePayload {
    providerId: string;
    providerTenantId: string;
    providerType: string;
    tenantId: string;
}
//# sourceMappingURL=deviceManagement.d.ts.map