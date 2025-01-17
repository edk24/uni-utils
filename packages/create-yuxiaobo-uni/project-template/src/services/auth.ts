import cache from "./cache";

export function getToken() {
    return cache.get('token');
}

export function setToken(token: string) {
    return cache.set('token', token);
}