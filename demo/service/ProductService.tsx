import getConfig from 'next/config';
import { API } from '../../types/global';

export class ProductService {
    contextPath: any;

    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getProductsSmall() {
        return fetch(this.contextPath + '/demo/data/products-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as API.Product[]);
    }

    getProducts() {
        return fetch(this.contextPath + '/demo/data/products.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as API.Product[]);
    }

    getProductsWithOrdersSmall() {
        return fetch(this.contextPath + '/demo/data/products-orders-small.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.data as API.Product[]);
    }
}
