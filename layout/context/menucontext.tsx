import React, { useState, createContext } from 'react';
import { Context, ILayoutProps } from '../../types/global';

export const MenuContext = createContext({} as Context.MenuContext);

export const MenuProvider = ({ children }: ILayoutProps) => {
    const [activeMenu, setActiveMenu] = useState('');

    const value = {
        activeMenu,
        setActiveMenu
    };

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
