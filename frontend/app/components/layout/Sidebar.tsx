import { useSidebar } from "~/contexts/SidebarContext";
import SidebarIcon from "../ui/icons/SidebarIcon";
import { useEffect, useRef } from "react";
import HeaderButton from "./HeaderButton";
import Dropdown from "../ui/Dropdown";
import { useNavigate } from "react-router";
import { useTheme } from "~/contexts/ThemeContext";
import { useLang } from "~/contexts/LangContext";
import { themes } from "~/domain/theme/types";
import { langs } from "~/domain/language/types";
import type { DropdownOptions } from "../ui/Dropdown";
import SidebarItem from "./SidebarItem";

export const Sidebar = () => {
    const { sidebarVisible, toggleSidebar } = useSidebar();
    const sidebarRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const { currentTheme, changeTheme } = useTheme();
    const { currentLang, changeLang, translations } = useLang();

    const themeOptions = themes.reduce<DropdownOptions[]>((acc, row) => {
        const option: DropdownOptions = {
            text: translations?.themes[row],
            value: row,
        };

        acc.push(option);

        return acc;

    }, []);

    const langOptions = langs.reduce<DropdownOptions[]>((acc, row) => {
        const option: DropdownOptions = {
            text: translations?.lang_options[row],
            value: row,
        };

        acc.push(option);

        return acc;

    }, []);


    return (
        <div
            className={
                `fixed w-full h-screen top-0 px-8 py-4 bg-background-container 
                items-start ${sidebarVisible ? 'flex translate-x-0' : 'hidden translate-x-full'} flex-col
                md:hidden`
            }
            ref={sidebarRef}
        >
            <button
                onClick={() => toggleSidebar(false)}
                className="cursor-pointer hover:opacity-80 active:opacity-50 self-end"
                title="close sidebar"
            >
                <SidebarIcon open={false} className="h-7" />
            </button>
            <nav className="flex flex-col items-left w-full text-xl mt-4">
                <SidebarItem text={translations?.header.start} onClick={() => navigate('/')} />
                <SidebarItem text={translations?.header.about} onClick={() => navigate('/about')} />
                <SidebarItem text={translations?.header.portfolio} onClick={() => navigate('/portfolio')} />
                <SidebarItem text={translations?.header.contact} onClick={() => navigate('/contact')} />
                <Dropdown options={themeOptions} value={translations?.header.theme} onClick={v => changeTheme(v)} className="text-xl w-full" />
                <Dropdown options={langOptions} value={currentLang} onClick={v => changeLang(v)} className="text-xl w-full" />
            </nav>
        </div>
    );
};

export default Sidebar;