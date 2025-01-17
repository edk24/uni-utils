export class Cache {
    private readonly prefix: string;

    constructor(prefix: string = 'app_') {
        this.prefix = prefix;
    }

    /**
     * Set cache value with optional expiration
     * @param key Cache key
     * @param value Value to store
     * @param expire Expiration time in seconds
     */
    set(key: string, value: any, expire?: number): void {
        const storageKey = this.getKey(key);
        const data = {
            expire: expire ? this.time() + expire : null,
            value
        };

        try {
            uni.setStorageSync(storageKey, JSON.stringify(data));
        } catch (e) {
            console.error('Cache set error:', e);
        }
    }

    /**
     * Get cached value
     * @param key Cache key
     * @returns Cached value or null if expired/not found
     */
    get(key: string): any | null {
        const storageKey = this.getKey(key);
        try {
            const data = uni.getStorageSync(storageKey);
            if (!data) return null;

            const { value, expire } = JSON.parse(data);
            if (expire && expire < this.time()) {
                this.remove(key);
                return null;
            }
            return value;
        } catch (e) {
            console.error('Cache get error:', e);
            return null;
        }
    }

    /**
     * Remove cached value
     * @param key Cache key
     */
    remove(key: string): void {
        const storageKey = this.getKey(key);
        uni.removeStorageSync(storageKey);
    }

    /**
     * Get current timestamp in seconds
     * @returns Current timestamp
     */
    private time(): number {
        return Math.floor(Date.now() / 1000);
    }

    /**
     * Get full storage key with prefix
     * @param key Base key
     * @returns Prefixed key
     */
    private getKey(key: string): string {
        return `${this.prefix}${key}`;
    }
}