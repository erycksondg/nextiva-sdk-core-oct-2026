import { SocketState } from '..';
export type Callback = (messageBody: MessageBody) => void;
interface SocketOptions {
    callback: Callback;
    getToken: () => string;
    id: string;
    onSocketStatusChange?: (status: SocketState) => void;
    subscriptionURL: string;
    webSocketURL: string;
}
export interface MessageBody {
    [key: string]: any;
    id?: string;
    name: string;
}
export declare class Socket {
    private stompClient;
    private subscription;
    private callback;
    private onSocketStatusChange;
    private id;
    private getToken;
    private webSocketURL;
    subscriptionURL: string;
    protected datadogService: import("..").BaseDatadogService | null;
    private logger;
    constructor({ callback, getToken, id, onSocketStatusChange, subscriptionURL, webSocketURL, }: SocketOptions);
    connect(): void;
    /**
     * Disconnects the socket connection.
     *
     * @remarks
     * This method logs a message, unsubscribes from any active subscriptions, and deactivates the STOMP client.
     *
     * @returns A promise that resolves once the disconnection is complete.
     */
    disconnect(): Promise<void>;
    private send;
    /**
     * Sends binary data to the specified destination.
     * @param destination - The destination to send the data to.
     * @param data - The binary data to send.
     */
    sendBinary(destination: string, data: Uint8Array): void;
}
export {};
//# sourceMappingURL=socket.d.ts.map