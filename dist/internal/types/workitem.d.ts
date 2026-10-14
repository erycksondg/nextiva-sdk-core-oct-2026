export interface BaseCreateEmailWorkitemAttachmentsPayload<TFile = Parameters<FormData['append']>[1]> {
    data: Record<string, unknown>;
    files: TFile[];
    workitemId: string;
}
//# sourceMappingURL=workitem.d.ts.map