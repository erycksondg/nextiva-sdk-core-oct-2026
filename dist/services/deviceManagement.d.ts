import { type InjectionContainer } from '../internal';
import type { DeviceManagementDevice, FetchDevicesResponseBody, UnassignOrDeleteDevicePayload } from '../types';
export declare class DeviceManagementService {
    private logger;
    constructor({ loggerService }: Pick<InjectionContainer, 'loggerService'>);
    /**
     * Fetches the list of devices from the device management API.
     */
    fetchDevices(): Promise<FetchDevicesResponseBody>;
    /**
     *
     * Unassigns a device from a user, this will remove `userId` from the device.
     *
     * @param payload The required attributes of a device to unassign or delete.
     * @returns The device that was unassigned
     */
    unassignDevice(payload: UnassignOrDeleteDevicePayload): Promise<DeviceManagementDevice>;
    /**
     *
     * Completely deletes a device.
     *
     * @param payload The required attributes of a device to unassign or delete.
     * @returns The device that was deleted
     */
    deleteDevice(payload: UnassignOrDeleteDevicePayload): Promise<DeviceManagementDevice>;
}
//# sourceMappingURL=deviceManagement.d.ts.map