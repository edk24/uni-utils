declare class Cache {
    private readonly prefix;
    constructor(prefix?: string);
    /**
     * Set cache value with optional expiration
     * @param key Cache key
     * @param value Value to store
     * @param expire Expiration time in seconds
     */
    set(key: string, value: any, expire?: number): void;
    /**
     * Get cached value
     * @param key Cache key
     * @returns Cached value or null if expired/not found
     */
    get(key: string): any | null;
    /**
     * Remove cached value
     * @param key Cache key
     */
    remove(key: string): void;
    /**
     * Get current timestamp in seconds
     * @returns Current timestamp
     */
    private time;
    /**
     * Get full storage key with prefix
     * @param key Base key
     * @returns Prefixed key
     */
    private getKey;
}
export default Cache;
