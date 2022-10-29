import getConfig from 'next/config';
import { API } from '../../types/global';

export class IconService {
    icons: API.Icon[];
    selectedIcon: API.Icon | undefined;
    contextPath: any;
    constructor() {
        this.icons = [];
        this.selectedIcon = {};
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getIcons() {
        return fetch(this.contextPath + '/demo/data/icons.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.icons as API.Icon[]);
    }

    getIcon(id: number) {
        if (this.icons) {
            this.selectedIcon = this.icons.find((x: API.Icon) => x.properties?.id === id);
            return this.selectedIcon;
        }
    }
}
