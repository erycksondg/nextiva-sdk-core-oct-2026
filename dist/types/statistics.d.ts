import { type MediaType, type MediaTypes, type StatusType, type WorkitemType } from '../models';
import { type Workitem } from './workitem';
export interface CampaignStatistics {
    alarms: unknown[];
    availableAgents: number;
    avgDropRateLast15: number;
    avgDropRateLast30: number;
    avgLeadsDialedLast15: number;
    avgLeadsDialedLast30: number;
    avgWaitTimeLast15: number;
    avgWaitTimeLast30: number;
    callback30FilterLeads: number;
    callback60FilterLeads: number;
    callbackFilterLeads: number;
    callbackNowFilterLeads: number;
    callbacks: number;
    callbacks30: number;
    callbacks60: number;
    callbacksNow: number;
    completed: number;
    currentLeadsDialed: number;
    dialRatio: number;
    dialerErrors: number;
    dropRate: number;
    filter: string;
    groupId: string;
    groupName: string;
    id: string;
    loggedAgents: number;
    maxDialRatio: number;
    maxWaitTime: number;
    maxWaitTimeLast30: number;
    media: Record<Exclude<MediaType, 'OutboundExtensionCall'>, {
        avgHandleTime: number;
        maxHandleTime: number;
        totalAnswered: number;
        totalDropped: number;
        totalHandleTime: number;
        totalTransfered: number;
    }>;
    name: string;
    notDialed: number;
    notDialed30: number;
    notDialed30FilterLeads: number;
    notDialed60: number;
    notDialed60FilterLeads: number;
    notDialedFilterLeads: number;
    notDialedNow: number;
    notDialedNowFilterLeads: number;
    percentageDone: number;
    startSessionTime: number;
    totalFilterLeads: number;
    totalInList: number;
    totalLeadsDialedLast15: number;
    totalLeadsDialedLast30: number;
    transcriptionUsage: string;
}
export interface OutboundListStatistics {
    abandon: number;
    active: boolean;
    alarms: unknown[];
    answeringMachine: number;
    busy: number;
    callback30FilterLeads: number;
    callback60FilterLeads: number;
    callbackFilterLeads: number;
    callbackNowFilterLeads: number;
    callbacks: number;
    callbacks30: number;
    callbacks60: number;
    callbacksNow: number;
    completed: number;
    dialerErrors: number;
    fax: number;
    filter: string;
    human: number;
    id: string;
    invalidNumber: number;
    name: string;
    noAnswer: number;
    notDialed: number;
    notDialed30: number;
    notDialed30FilterLeads: number;
    notDialed60: number;
    notDialed60FilterLeads: number;
    notDialedFilterLeads: number;
    notDialedNow: number;
    notDialedNowFilterLeads: number;
    percentageDone: number;
    totalFilterLeads: number;
    totalInList: number;
}
export interface QueueStatistics {
    alarms: unknown[];
    availableAgents: number;
    busyAgents: number;
    id: string;
    loggedInAgents: number;
    media: {
        [MediaTypes.InboundCall]: {
            avgDroppedTime: number;
            avgHandleTime: number;
            avgHoldTime: number;
            avgQueueTime: number;
            avgTalkTime: number;
            avgWrapupTime: number;
            currentMaxQueueTime: number;
            maxQueueTime: number;
            sla1: number;
            sla2: number;
            sla3: number;
            total: number;
            totalActive: number;
            totalAnswered: number;
            totalAnsweredAfterThreashold: number;
            totalAnsweredWithinThreashold: number;
            totalDropped: number;
            totalDroppedAfterThreashold: number;
            totalDroppedWithinThreashold: number;
            totalQueueTime: number;
            totalTalkTime: number;
            totalTransfered: number;
        };
        name: string;
        noAnswerAgents: number;
        startSessionTime: number;
        users: Array<{
            status: StatusType;
            statusId: string;
            userId: string;
        }>;
        workingAgents: number;
        wrapupAgents: number;
    };
}
export interface StatusStatistics {
    duration: number;
    percentage: number;
}
export interface ServerStatusStatistics extends StatusStatistics {
    className: string;
    ids: string[];
}
export interface UserStatistics {
    alarms: unknown[];
    channelType: string;
    compliance: string;
    defaultAcdLoginStatus: string;
    extension: string;
    failedScorecards: number;
    groupId: string;
    groupName: string;
    highJitter: boolean;
    highPacketLoss: boolean;
    highRtt: boolean;
    host: string;
    id: string;
    leadId: string;
    listName: string;
    loginTime: number;
    lowMos: boolean;
    media: Record<MediaType, {
        avgHandleTime: number;
        avgHoldTime: number;
        avgTalkTime: number;
        avgWrapupTime: number;
        maxHandleTime: number;
        totalActive: number;
        totalAnswered: number;
        totalHandleTime: number;
        totalHold: number;
        totalHoldTime: number;
        totalNotAnswered: number;
        totalTalkTime: number;
        totalTransfered: number;
        totalWrapupTime: number;
    }>;
    name: string;
    outboundCampaign: string;
    passedScorecards: number;
    queues: unknown[];
    skills: unknown[];
    statisticsByStatusId: StatisticsByStatusId;
    status: StatusType;
    statusDuration: number;
    statusId: string;
    statusTime: number;
    statuses: {
        available: StatusStatistics;
        busy: StatusStatistics;
        loggedIn: StatusStatistics;
        loggedOut: StatusStatistics;
        noAnswer: StatusStatistics;
        working: StatusStatistics;
        wrapup: StatusStatistics;
    };
    supervisedType: number;
    transcriptionUsage: string;
    voiceQualityIssues: number;
}
export type StatisticsByStatusId = Record<string, StatusStatistics>;
export interface ServerUserStatistic extends UserStatistics {
    statisticsByStatusId: Record<string, ServerStatusStatistics>;
}
export interface WorkItemStatistics {
    agentName: string;
    alarms: unknown[];
    campaign: string;
    compliance: string;
    createdAt: number;
    duration: number;
    from: string;
    id: string;
    mandatorySkills: unknown[];
    optionalSkills: unknown[];
    originalState: string;
    originalType: WorkitemType;
    priority: number;
    queueTime: number;
    queues: unknown[];
    state: string;
    stateDuration: number;
    subject: string;
    surveyId: string;
    talkTime: number;
    to: string;
    type: string;
}
export type CampaignStatisticsById = Record<string, CampaignStatistics>;
export type OutboundListStatisticsById = Record<string, OutboundListStatistics>;
export type QueueStatisticsById = Record<string, QueueStatistics>;
export type UserStatisticsById = Record<string, ServerUserStatistic>;
export type WorkItemStatisticsById = Record<string, WorkItemStatistics>;
export interface Statistics {
    campaigns: CampaignStatisticsById;
    outboundlists: OutboundListStatisticsById;
    queues: QueueStatisticsById;
    users: UserStatisticsById;
    workitems: WorkItemStatisticsById;
}
export interface InternalSupervisorStatsNotificationData {
    agentid: string;
    createdAt: number;
    stats: Statistics;
    userId: string;
}
export interface SupervisorStatsNotificationData {
    campaigns: CampaignStatistics[];
    outboundlists: OutboundListStatistics[];
    queues: QueueStatistics[];
    users: UserStatistics[];
    workitems: WorkItemStatistics[];
}
export interface InternalSupervisorNotificationData {
    type: number;
    workitem?: Workitem;
    workitemId?: string;
}
//# sourceMappingURL=statistics.d.ts.map