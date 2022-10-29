import getConfig from 'next/config';
import { API } from '../../types/global';

export class CountryService {
    contextPath: any;

    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getCountries() {
        return fetch(this.contextPath + '/demo/data/countries.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as API.Country[]);
    }
}
