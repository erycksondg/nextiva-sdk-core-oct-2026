import { type AgentAssistConversation } from '../types/agentAssistConversation';
import { type TextDecoration } from '../types/textDecoration';
import { type SuggestionResponse } from '../types/suggestionResponse';
import { type AgentConversation } from '../types/conversation';
import { type TextDecorationResponse } from '../types/textDecorationResponse';
import type { InjectionContainer } from '../internal';
export declare class AgentAssistService {
    private logger;
    constructor({ loggerService }: Pick<InjectionContainer, 'loggerService'>);
    /**
     * Posts a conversation to the Agent Assist service.
     *
     * @param conversation - The conversation to post.
     * @returns A Promise that resolves to the response from the server.
     */
    createConversation(conversation: AgentAssistConversation): Promise<void>;
    /**
     * Updates a conversation in the Agent Assist service.
     *
     * @param conversation - The conversation to update.
     * @returns A Promise that resolves to the response from the server.
     */
    updateConversation(conversation: AgentAssistConversation): Promise<void>;
    /**
     * Gets a conversation from the Agent Assist service.
     *
     * @param conversationId - The ID of the conversation to get.
     * @param tenantId - The ID of the tenant.
     * @returns A Promise that resolves to the response from the server.
     */
    getConversation(conversationId: string, tenantId: string): Promise<AgentConversation>;
    /**
     * Gets a suggestion from the Agent Assist service.
     *
     * @param conversation - The conversation to get a suggestion for.
     * @param version - The version is to target api version. Defaults to 'v1'.
     * @returns A Promise that resolves to the response from the server.
     */
    getSuggestion(conversation: AgentAssistConversation, version?: "v1" | "v2"): Promise<SuggestionResponse>;
    /**
     * Decorates text using the Agent Assist service.
     *
     * @param options - The options to use when decorating the text.
     * @returns A Promise that resolves to the response from the server.
     */
    decorateText(options: TextDecoration): Promise<TextDecorationResponse>;
}
//# sourceMappingURL=agentAssist.d.ts.map