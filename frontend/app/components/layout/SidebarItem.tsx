import { useSidebar } from "~/contexts/SidebarContext";

export const SidebarItem = ({ text, onClick }: {text: string; onClick: () => void}) => {
    const { toggleSidebar } = useSidebar();
    
    return (
        <button
            onClick={() => {
                onClick();
                toggleSidebar(false);
            }}
            className="hover:bg-primary-container hover:text-on-primary-container text-on-background-container text-left p-3 rounded-sm cursor-pointer"
        >
            {text}
        </button>
    );
};

export default SidebarItem;