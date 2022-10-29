import React, { useState, createContext } from 'react';
import { IMenuContext, ILayoutProps } from '../../types/global';

export const MenuContext = createContext({} as IMenuContext);

export const MenuProvider = ({ children }: ILayoutProps) => {
    const [activeMenu, setActiveMenu] = useState('');

    const value = {
        activeMenu,
        setActiveMenu
    };

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
