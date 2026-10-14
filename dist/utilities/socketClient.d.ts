import { type SocketState } from '..';
import { Socket } from '../utilities';
import { type Callback } from './socket';
interface ConnectOptions {
    callback: Callback;
    onSocketStatusChange?: (status: SocketState) => void;
    subscriptionURL: string;
}
declare abstract class SocketClient {
    protected socket: Socket | null;
    protected eventsService: import("..").EventsService;
    protected stateService: import("..").StateService;
    protected _connect({ callback, onSocketStatusChange, subscriptionURL }: ConnectOptions): Promise<void>;
    disconnect(): Promise<void>;
    isSocketInitiated(): boolean;
}
export declare class UserSocketClient extends SocketClient {
    /**
     * Connects to the socket server.
     *
     * @returns A promise that resolves when the connection is established.
     */
    connect(): Promise<void>;
}
export declare class StatisticsSocketClient extends SocketClient {
    /**
     * Connects to the server and establishes a WebSocket connection.
     *
     * @returns A Promise that resolves when the connection is established.
     */
    connect(): Promise<void>;
}
/**
 * Disconnects all socket clients.
 *
 * @returns A promise that resolves when all clients are disconnected.
 */
export declare const disconnectAll: () => Promise<void[]>;
export {};
//# sourceMappingURL=socketClient.d.ts.map