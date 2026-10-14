import { type InjectionContainer } from '../internal';
import type { ContactDetails, FetchContactsResponseBody, SchemaTypeSearchPayload } from '../types';
export declare class ContactService {
    private eventsService;
    private schemaTypeClient;
    private logger;
    constructor({ eventsService, loggerService, schemaTypeClient, }: Pick<InjectionContainer, 'eventsService' | 'schemaTypeClient' | 'loggerService'>);
    private handleContactImportNotification;
    private handleContactImportFailureNotification;
    /**
     * Blocks or unblocks a contact based on the provided block parameter (true to block, false to unblock).
     * @param block - Whether to block or unblock the contact.
     * @param contactId - The ID of the contact.
     */
    block({ block, contactId }: {
        block: boolean;
        contactId: string;
    }): Promise<void>;
    /**
     * @deprecated Use sdk.getSchemaTypeClient().search('contact')
     */
    fetchContacts(payload?: SchemaTypeSearchPayload): Promise<FetchContactsResponseBody>;
    /**
     * @deprecated Use sdk.getSchemaTypeClient().retrieve('contact', { id })
     */
    fetchContact(id: string): Promise<ContactDetails>;
}
//# sourceMappingURL=contact.d.ts.map