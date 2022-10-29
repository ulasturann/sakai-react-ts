import getConfig from 'next/config';
import { API } from '../../types/global';

export class CustomerService {
    contextPath: any;
    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getCustomersMedium() {
        return fetch(this.contextPath + '/demo/data/customers-medium.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as API.Customer[]);
    }

    getCustomersLarge() {
        return fetch(this.contextPath + '/demo/data/customers-large.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as API.Customer[]);
    }
}
