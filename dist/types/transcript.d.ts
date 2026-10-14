import { type Contact } from './contact';
export interface Transcript {
    campaignId: string;
    contact: Partial<Contact>;
    content: string;
    contentType: string;
    createdAt: number;
    endedAt: number;
    id: string;
    insertedAt: number;
    objectType: 'transcripts';
    speakerId: string;
    speakerType: string;
    startedAt: number;
    status: string;
    ticketId: string;
    tone: string;
    type: string;
    workitemId: string;
}
//# sourceMappingURL=transcript.d.ts.map