import { createContext, useContext, useRef, useState } from "react";
import type { ToolTipType } from "~/domain/tooltip/types";

type ToolTipContextValue = {
    message: string;
    visible: boolean;
    type: ToolTipType;
    showMessage: (message: string, type: ToolTipType, duration?: number) => void;
};

export const ToolTipContext = createContext<ToolTipContextValue | null>(null);

export const useToolTip = () => {
    const ctx = useContext(ToolTipContext);

    if (!ctx) {
        throw new Error('useToolTip must be inside ToolTipProvider');
    }

    return ctx;

};

type Props = {
    children: React.ReactNode;
};

export const ToolTipProvider = ({ children }: Props) => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('Copied!');
    const [type, setType] = useState<ToolTipType>('ok');
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

    function showMessage(message: string, type: ToolTipType, duration = 2000) {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        
        setMessage(message);
        setType(type)
        setVisible(true);
        
        timeoutRef.current = setTimeout(() => setVisible(false), duration);
    }

    return (
        <ToolTipContext.Provider value={{ message, visible, type, showMessage }}>
            {children}
        </ToolTipContext.Provider>
    );
}