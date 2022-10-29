import getConfig from 'next/config';
import { API } from '../../types/global';

export class EventService {
    contextPath: any;
    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getEvents() {
        return fetch('/demo/data/events.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as API.Event);
    }
}
