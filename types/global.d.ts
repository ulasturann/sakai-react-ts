import { ChartData, ChartOptions } from 'chart.js';
import { NextPage } from 'next';
import React, { ComponentType, ReactElement, ReactNode, Dispatch, SetStateAction, HTMLAttributeAnchorTarget, ReactHTMLElement } from 'react';

/* Next & Layout Types */
export type Page<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

export interface ILayoutProps {
    children: React.ReactNode;
}

export interface LayoutState {
    staticMenuDesktopInactive: boolean;
    overlayMenuActive: boolean;
    profileSidebarVisible: boolean;
    configSidebarVisible: boolean;
    staticMenuMobileActive: boolean;
    menuHoverActive: boolean;
}

export interface LayoutConfig {
    ripple: boolean;
    inputStyle: string;
    menuMode: string;
    colorScheme: string;
    theme: string;
    scale: number;
}
declare namespace Context {
    export interface LayoutContext {
        layoutConfig: LayoutConfig;
        setLayoutConfig: Dispatch<SetStateAction<LayoutConfig>>;
        layoutState: LayoutState;
        setLayoutState: Dispatch<SetStateAction<LayoutState>>;
        onMenuToggle: () => void;
        showProfileSidebar: () => void;
    }
    export interface MenuContext {
        activeMenu: string;
        setActiveMenu: Dispatch<SetStateAction<string>>;
    }
}

export interface IAppConfigProps {
    simple?: boolean;
}
export interface IAppMenuItemProps {
    item?: MenuModelItem;
    parentKey?: string;
    index?: number;
    root?: boolean;
    className?: string;
}

enum IndexAxis {
    x,
    y
}

interface ICommandProps {
    originalEvent: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
    item: MenuModelItem;
}
export interface MenuModelItem {
    label: string;
    icon?: string;
    to?: string;
    badge?: string;
    badgeClass?: string;
    class?: string;
    preventExact?: boolean;
    url?: string;
    target?: HTMLAttributeAnchorTarget;
    seperator?: boolean;
    visible?: boolean;
    disabled?: boolean;
    replaceUrl?: boolean;
    command?: ({ originalEvent, item }: ICommandProps) => void;
    items?: MenuModelItem[];
}

export type NodeRef = MutableRefObject<ReactNode>;
export interface IAppTopbarRef {
    menubutton?: HTMLButtonElement | null;
    topbarmenu?: HTMLDivElement | null;
    topbarmenubutton?: HTMLButtonElement | null;
}
export interface IAppTopbarProps {}

/* --- Demo Types --- */

declare namespace API {
    //ProductService
    export type Product = {
        id: string;
        code?: string;
        name: string;
        description: string;
        image: string;
        price: number;
        category: string;
        quantity: number;
        inventoryStatus: InventoryStatus;
        rating: number;
        orders?: IProductsOrdersData[];
    };

    export type ProductOrder = {
        id?: string;
        productCode?: string;
        date?: string;
        amount?: number;
        quantity?: number;
        customer?: string;
        status?: Status;
    };

    //CustomerService
    export type Customer = {
        id?: number;
        name?: string;
        country?: ICountryObject;
        company?: string;
        date: Date;
        status?: string;
        activity?: number;
        balance?: number | string;
        verified?: boolean;
        amount?: number;
        price?: number;
        rating?: number;
        image?: string;
        orders?: API.Customer[];
        inventoryStatus?: string;
        representative: {
            name: string;
            image: string;
        };
    };
    export type Photo = {
        title: string;
        itemImageSrc?: string | undefined;
        thumbnailImageSrc?: string | undefined;
        alt?: string | undefined;
    };

    export type Country = {
        name: string;
        code: string;
    };

    export type Icon = {
        icon?: {
            paths?: string[];
            attrs?: [{}];
            isMulticolor?: boolean;
            isMulticolor2?: boolean;
            grid?: number;
            tags?: string[];
        };
        attrs?: [{}];
        properties?: {
            order?: number;
            id: number;
            name: string;
            prevSize?: number;
            code?: number;
        };
        setIdx?: number;
        setId?: number;
        iconIdx?: number;
    };

    export type Event = {
        id: number;
        title: string;
        start: string;
    };
}

interface ShowOptions {
    severity?: string;
    content?: string;
    summary?: string;
    detail?: string;
    life?: number;
}

export interface ChartDataState {
    barData: ChartData;
    pieData: ChartData;
    lineData: ChartData;
    polarData: ChartData;
    radarData: ChartData;
}
export interface ChartOptionsState {
    barOptions: ChartOptions;
    pieOptions: ChartOptions;
    lineOptions: ChartOptions;
    polarOptions: ChartOptions;
    radarOptions: ChartOptions;
}

type InventoryStatus = 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';

type Status = 'DELIVERED' | 'PENDING' | 'RETURNED' | 'CANCELLED';

export type LayoutType = 'list' | 'grid';
export type SortOrderType = 1 | 0 | -1;

export interface CustomEvent {
    status?: 'Ordered' | 'Processing' | 'Shipped' | 'Delivered';
    date?: string;
    icon?: string;
    image?: string;
}
