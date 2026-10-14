import type { RelatedArticlesV2Response, RelatedArticleRequest, RelatedArticlesResponse } from '../types/relatedArticles';
/**
 * Represents a service for managing related articles.
 */
export declare class RelatedArticlesService {
    /**
     * Creates an article in the Related Articles service.
     *
     * @param article - The article to create.
     * @returns A Promise that resolves to the response from the server.
     */
    createArticle(article: RelatedArticleRequest): Promise<string>;
    /**
     * Creates a post-processed article in the Related Articles service.
     *
     * @param article - The article to create.
     * @param version - The version is to target api version. Defaults to 'v1'.
     * @returns A Promise that resolves to the response from the server.
     */
    createPostProcessedArticle(article: RelatedArticleRequest, version?: "v1"): Promise<RelatedArticlesResponse>;
    createPostProcessedArticle(article: RelatedArticleRequest, version: "v2"): Promise<RelatedArticlesV2Response>;
    /**
     * Fetches an article by its ID from the related articles service.
     *
     * @param {string} articleId - The unique identifier of the article to fetch.
     * @returns {Promise<string>} - A promise that resolves to the article content as a string.
     */
    getArticle(articleId: string): Promise<string>;
}
//# sourceMappingURL=relatedArticles.d.ts.map