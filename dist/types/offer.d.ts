import type { Workitem } from './workitem';
export interface OfferNotificationData {
    offer: Offer;
}
export interface OfferAcceptedNotificationData {
    offerId?: string;
    offerid: string;
}
export interface OfferExpiredNotificationData {
    offerId?: string;
    offerid: string;
}
export interface OfferRejectedNotificationData {
    offerId?: string;
    offerid: string;
}
export interface OfferTerminatedByHangupNotificationData {
    offerId?: string;
    offerid: string;
}
export interface OffersChangedNotificationData {
    offers: Offer[];
}
export interface Offer {
    _id: string;
    createdAt: number;
    modifiedAt: number;
    objectType: string;
    offerId: string;
    offerTimeoutSeconds?: number;
    tenantId: string;
    users: string[];
    workitem: Workitem;
}
export interface RejectOptions {
    offerId: string;
    status?: number;
    statusId?: string;
}
//# sourceMappingURL=offer.d.ts.map