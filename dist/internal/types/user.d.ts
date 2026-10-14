import { type EmailAddress } from "../../types";
/**
 * @deprecated Use specific payload interfaces instead
 */
export interface BaseSendMessagePayload<TFile> {
    campaignId?: string;
    contactId: string | null;
    file?: TFile | null;
    files?: TFile[] | null;
    force: boolean;
    from?: string | null;
    message: string;
    name: string;
    option: string | null;
    to: string;
    workitemId: string | null;
}
export interface BaseSendFaxPayload<TFile> {
    campaignId?: string;
    contactId: string | null;
    file?: TFile | null;
    files?: TFile[] | null;
    force: boolean;
    from?: string | null;
    message: string;
    name: string;
    nonAssignedAgentReply?: boolean;
    option: string | null;
    ticketId?: string;
    to: string;
    workitemId: string | null;
}
export interface BaseSendSmsPayload<TFile> {
    campaignId?: string;
    contactId: string | null;
    contactIds?: string[];
    file?: TFile | null;
    files?: TFile[] | null;
    force: boolean;
    from?: string | null;
    fromNumber?: string | null;
    groupSMSParentTicketId?: string;
    message: string;
    name: string;
    nonAssignedAgentReply?: boolean;
    option: string | null;
    ticketId?: string;
    to: string;
    toNumbers?: string[] | null;
    workitemId: string | null;
}
export interface BaseSendEmailPayload<TFile> {
    campaignId?: string | null;
    contactId: string;
    email: {
        message: string;
        subject: string;
    };
    file?: TFile;
    force: boolean;
    from?: string | null;
    name: string;
    nonAssignedAgentReply?: boolean;
    option: string;
    ticketId?: string;
    to: string;
    toAddresses?: EmailAddress[];
    workitemId?: string;
}
//# sourceMappingURL=user.d.ts.map