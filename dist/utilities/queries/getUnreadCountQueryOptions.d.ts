export declare function getUnreadCountQueryOptions(): {
    queryFn: () => Promise<{
        categories: {
            latestActivity?: import("../..").EngagementData[];
            unreadContactMessages?: import("../..").EngagementData[];
            unreadInternalMessages?: import("../..").EngagementData[];
            unreadTeamMessages?: import("../..").EngagementData[];
            unreadVoicemails?: import("../..").EngagementData[];
        };
        totalUnreadCount: number;
        totalUnreadCountByFilter: {
            unreadContactMessages: number;
            unreadInternalMessages: number;
            unreadTeamMessages: number;
            unreadVoicemails: number;
        };
    }>;
    queryKey: string[];
};
//# sourceMappingURL=getUnreadCountQueryOptions.d.ts.map