export default class Service {
    static getAsync(url: string, init?: RequestInit): Promise<Response> {
        const defaults: RequestInit = {
            method: 'GET',
            mode: 'same-origin',
            cache: 'default'
        };

        return fetch(url, defaults)
    }

    static postAsync(url: string, body: any, init?: RequestInit): Promise<Response> {
        const defaults: RequestInit = {
            method: 'POST',
            mode: 'same-origin',
            cache: 'default',
            body: body
        };

        return fetch(url, defaults)
    }
}