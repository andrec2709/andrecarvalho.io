import { createContext, useContext, useState } from "react";

type SidebarContextValue = {
    sidebarVisible: boolean;
    toggleSidebar: (state?: boolean) => void;
};

export const SidebarContext = createContext<SidebarContextValue | null>(null);

export const useSidebar = () => {
    const ctx = useContext(SidebarContext);

    if (!ctx) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }

    return ctx;
};

export const SidebarProvider = ({ children } : { children: React.ReactNode }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = (state: boolean = !sidebarVisible) => {
        setSidebarVisible(state);
    };

    return (
        <SidebarContext.Provider value={{ sidebarVisible, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );

};