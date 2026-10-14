import { type Simplify360Config } from '../types/sdk';
/**
 * Resolves the Simplify360 config for the given NCX base URL.
 *
 * @param baseURL - The active environment's NCX base URL (with or without a
 * trailing slash).
 * @returns The Simplify360 config for that environment, falling back to the
 * dogfood/dev config for unrecognized environments.
 */
export declare const resolveSimplify360Config: (baseURL?: string) => Simplify360Config;
//# sourceMappingURL=simplify360Config.d.ts.map