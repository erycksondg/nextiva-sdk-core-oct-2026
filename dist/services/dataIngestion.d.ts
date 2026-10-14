import type { FetchWelcomeQuestionsParams, FetchWelcomeQuestionsResponse } from '../types/dataIngestion';
export declare class DataIngestionService {
    /**
     * Fetch welcome questions from the Data Ingestion service.
     *
     * @param collectionName - The name of the collection.
     * @param tenantId - The ID of the tenant.
     * @returns A Promise that resolves to the response from the server.
     */
    fetchWelcomeQuestions(params: FetchWelcomeQuestionsParams): Promise<FetchWelcomeQuestionsResponse>;
}
//# sourceMappingURL=dataIngestion.d.ts.map