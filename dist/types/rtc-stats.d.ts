/**
 * This Sample interface matches Twilio's API
 */
export interface AudioQualityStatsSample {
    audioInputLevel: number;
    audioOutputLevel: number;
    bytesReceived: number;
    bytesSent: number;
    codecName: string;
    jitter: number;
    mos: number;
    packetsLost: number;
    packetsLostFraction: number;
    packetsReceived: number;
    packetsSent: number;
    rtt: number;
    timestamp: number;
    totals: {
        bytesReceived: number;
        bytesSent: number;
        packetsLost: number;
        packetsLostFraction: number;
        packetsReceived: number;
        packetsSent: number;
    };
}
export type AudioQualityNumericStat = keyof Omit<AudioQualityStatsSample, 'codecName' | 'timestamp' | 'totals'>;
export interface ParsedRemoteInboundStreamStats {
    clockRate: number;
    codecId: string;
    fractionLost: number;
    id: string;
    jitter: number;
    kind: string;
    localId: string;
    mimeType: string;
    packetsLost: number;
    payloadType: number;
    roundTripTime: number;
    roundTripTimeMeasurements: number;
    ssrc: number;
    timestamp: number;
    totalRoundTripTime: number;
    transportId: string;
    type: string;
}
export interface ParsedRemoteOutboundStreamStats {
    bytesSent: number;
    clockRate: number;
    codecId: string;
    id: string;
    kind: string;
    localId: string;
    mimeType: string;
    packetsSent: number;
    payloadType: number;
    remoteTimestamp: number;
    reportsSent: number;
    roundTripTimeMeasurements: number;
    ssrc: number;
    timestamp: number;
    totalRoundTripTime: number;
    transportId: string;
    type: string;
}
export interface ParsedConnectionStats {
    availableOutgoingBitrate: number;
    bytesReceived: number;
    bytesSent: number;
    currentRoundTripTime: number;
    id: string;
    local: IceCandidateConnectionStats;
    packetsReceived: number;
    packetsSent: number;
    remote: IceCandidateConnectionStats;
    state: string;
    totalRoundTripTime: number;
    transportId: string;
    type: string;
}
export interface IceCandidateConnectionStats {
    address: string;
    candidateType: string;
    id: string;
    ip: string;
    isRemote: boolean;
    networkType?: string;
    port: number;
    priority: number;
    protocol: 'udp' | 'tcp';
    timestamp: number;
    transportId: string;
    type: 'local-candidate' | 'remote-candidate';
}
export interface ParsedInboundAudioStreamStats {
    audioLevel: number;
    bitrate: number;
    bytesReceived: number;
    clockRate: number;
    codecId: string;
    concealedSamples: number;
    concealmentEvents: number;
    fecPacketsDiscarded: number;
    fecPacketsReceived: number;
    headerBytesReceived: number;
    id: string;
    insertedSamplesForDeceleration: number;
    jitter: number;
    jitterBufferDelay: number;
    jitterBufferEmittedCount: number;
    kind: 'audio';
    lastPacketReceivedTimestamp: number;
    mediaType: string;
    mimeType: string;
    packetRate: number;
    packetsDiscarded: number;
    packetsLost: number;
    packetsReceived: number;
    payloadType: number;
    remoteId: string;
    removedSamplesForAcceleration: number;
    silentConcealedSamples: number;
    ssrc: number;
    timestamp: number;
    totalAudioEnergy: number;
    totalSamplesDuration: number;
    totalSamplesReceived: number;
    track: {
        audioLevel: number;
        concealedSamples: number;
        concealmentEvents: number;
        detached: boolean;
        ended: boolean;
        id: string;
        insertedSamplesForDeceleration: number;
        jitterBufferDelay: number;
        jitterBufferEmittedCount: number;
        kind: 'audio';
        remoteSource: boolean;
        removedSamplesForAcceleration: number;
        silentConcealedSamples: number;
        timestamp: number;
        totalAudioEnergy: number;
        totalSamplesDuration: number;
        totalSamplesReceived: number;
        trackIdentifier: string;
        type: string;
    };
    trackId: string;
    transportId: string;
}
export interface ParsedOutboundAudioStreamStats {
    bitrate: number;
    bytesSent: number;
    clockRate: number;
    codecId: string;
    headerBytesSent: number;
    id: string;
    kind: string;
    mediaSourceId: string;
    mediaType: string;
    mimeType: string;
    nackCount: number;
    packetRate: number;
    packetsSent: number;
    payloadType: number;
    remoteId: string;
    retransmittedBytesSent: number;
    retransmittedPacketsSent: number;
    ssrc: number;
    targetBitrate: number;
    timestamp: number;
    track: {
        audioLevel: number;
        echoReturnLoss: number;
        echoReturnLossEnhancement: number;
        id: string;
        kind: string;
        timestamp: number;
        totalAudioEnergy: number;
        totalSamplesDuration: number;
        trackIdentifier: string;
        type: string;
    };
    trackId: string;
    transportId: string;
}
export interface ParsedRTCStats {
    audio: {
        inbound: ParsedInboundAudioStreamStats[];
        outbound: ParsedOutboundAudioStreamStats[];
    };
    codec: string;
    connection: ParsedConnectionStats;
    remote: {
        audio: {
            inbound: ParsedRemoteInboundStreamStats[];
            outbound: ParsedRemoteOutboundStreamStats[];
        };
    };
}
export interface ParsedTwilioRTCStats {
    availableIncomingBitrate: number;
    availableOutgoingBitrate: number;
    codec: string;
    currentRoundTripTime: number;
    localAudioLevel: number;
    localJitter: number;
    localPacketsLost: number;
    localTimestamp: number;
    packetsReceived: number;
    packetsSent: number;
    remoteAudioLevel: number;
    remoteJitter: number;
    remotePacketsLost: number;
    remoteTimestamp: number;
    totalRoundTripTime: number;
}
export interface AudioQualityStatsSample {
    audioInputLevel: number;
    audioOutputLevel: number;
    bitrateIncoming: number;
    bitrateOutgoing: number;
    bytesReceived: number;
    bytesSent: number;
    codecName: string;
    jitter: number;
    mos: number;
    packetsLost: number;
    packetsLostFraction: number;
    packetsReceived: number;
    packetsSent: number;
    rtt: number;
    timestamp: number;
    totals: {
        bytesReceived: number;
        bytesSent: number;
        packetsLost: number;
        packetsLostFraction: number;
        packetsReceived: number;
        packetsSent: number;
    };
}
interface TwilioLocalAudioTrackStats {
    audioLevel: number;
    codec: string;
    jitter: number;
    packetsLost: number;
    packetsSent: number;
    ssrc: string;
    timestamp: number;
    trackId: string;
}
interface TwilioRemoteAudioTrackStats {
    audioLevel: number;
    codec: string;
    jitter: number;
    packetsLost: number;
    packetsReceived: number;
    ssrc: string;
    timestamp: number;
    trackId: string;
}
interface TwilioIceCandidateStats {
    candidateType: string;
    deleted: boolean;
    ip: string;
    isRemote: boolean;
    port: number;
    priority: number;
    protocol: string;
    transportId: string;
    url: string;
}
interface TwilioIceCandidatePairStats {
    activeCandidatePair: boolean;
    availableIncomingBitrate: number;
    availableOutgoingBitrate: number;
    currentRoundTripTime: number;
    localCandidateId: string;
    localCandidateIp: string;
    nominated: boolean;
    readable: boolean;
    relayProtocol: string;
    remoteCandidateId: string;
    remoteCandidateIp: string;
    state: string;
    totalRoundTripTime: number;
    transportId: string;
    writeable: boolean;
}
export interface TwilioRTCStatsReport {
    iceCandidatePairStats: TwilioIceCandidatePairStats[];
    iceCandidateStats: TwilioIceCandidateStats[];
    localAudioTrackStats: TwilioLocalAudioTrackStats[];
    peerConnectionId: string;
    remoteAudioTrackStats: TwilioRemoteAudioTrackStats[];
}
export type RTCStatsReport = ReadonlyMap<string, any>;
export type RTCStatsType = 'candidate-pair' | 'inbound-rtp' | 'outbound-rtp' | 'remote-outbound-rtp' | 'remote-inbound-rtp' | 'transport' | 'codec' | 'certificate' | 'data-channel' | 'local-candidate' | 'media-playout' | 'media-source' | 'peer-connection' | 'remote-candidate';
export interface IRTCStatsGetter {
    connectionState?: 'closed' | 'connected' | 'connecting' | 'disconnected' | 'failed' | 'new';
    getStats(): Promise<RTCStatsReport>;
    iceConnectionState?: 'closed' | 'connected' | 'disconnected' | 'failed' | 'new' | 'checking' | 'completed';
}
export interface ITwilioRTCStatsGetter {
    getStats(): Promise<TwilioRTCStatsReport[]>;
}
/**
 * This interface matches Twilio's API
 */
export interface QualityWarning {
    name: string;
    samples: AudioQualityStatsSample[];
    threshold: {
        name: string;
        value: number;
    };
    values: number[];
}
export interface QualityWarnings {
    highJitter: boolean;
    highPacketLoss: boolean;
    highRtt: boolean;
    lowMos: boolean;
}
export interface SpeedReport {
    downloadKbps: number;
    downloadTime: number;
    uploadKbps: number;
    uploadTime: number;
}
export {};
//# sourceMappingURL=rtc-stats.d.ts.map