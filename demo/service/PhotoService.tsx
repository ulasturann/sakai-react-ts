import getConfig from 'next/config';
import { API } from '../../types/global';

export class PhotoService {
    contextPath: any;
    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getImages() {
        return fetch(this.contextPath + '/demo/data/photos.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as API.Photo[]);
    }
}
