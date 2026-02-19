import { useSidebar } from "~/contexts/SidebarContext";
import SidebarIcon from "../ui/icons/SidebarIcon";
import { useRef } from "react";
import Dropdown from "../ui/Dropdown";
import { useNavigate } from "react-router";
import { useTheme } from "~/contexts/ThemeContext";
import { isTheme, themes } from "~/domain/theme/types";
import type { DropdownOptions } from "../ui/Dropdown";
import SidebarItem from "./SidebarItem";
import { validLanguages } from "~/domain/language/types";
import { isLanguage } from "~/domain/language/utils";
import { useTranslation } from "react-i18next";

export const Sidebar = () => {
    const { sidebarVisible, toggleSidebar } = useSidebar();
    const sidebarRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const { setTheme } = useTheme();
    const { t, i18n } = useTranslation();

    const themeOptions = themes.reduce<DropdownOptions[]>((acc, row) => {
        const option: DropdownOptions = {
            text: t(`themes.${row}`),
            value: row,
        };

        acc.push(option);

        return acc;

    }, []);

    const langOptions = validLanguages.reduce<DropdownOptions[]>((acc, row) => {
        const option: DropdownOptions = {
            text: t(`langOptions.${row}`),
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
                <SidebarItem text={t('header.start')} onClick={() => navigate('/')} />
                <SidebarItem text={t('header.about')} onClick={() => navigate('/about')} />
                <SidebarItem text={t('header.portfolio')} onClick={() => navigate('/portfolio')} />
                <SidebarItem text={t('header.contact')} onClick={() => navigate('/contact')} />
                <Dropdown
                    options={themeOptions}
                    value={t('header.theme')}
                    onClick={v => {
                        if (isTheme(v)) setTheme(v);
                    }}
                    className="text-xl w-full"
                />
                <Dropdown
                    options={langOptions}
                    value={t(`langOptions.${i18n.resolvedLanguage as "ptBR" | "en"}`)}
                    onClick={v => { if (isLanguage(v)) i18n.changeLanguage(v); }}
                    className="text-xl w-full"
                />
            </nav>
        </div>
    );
};

export default Sidebar;