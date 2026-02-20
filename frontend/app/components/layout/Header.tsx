import { NavLink, useNavigate } from "react-router";
import HeaderButton from "./HeaderButton";
import Logo from "../ui/icons/Logo";
import Dropdown, { type DropdownOptions } from "../ui/Dropdown";
import { isTheme, themes } from "~/domain/theme/types";
import { useTheme } from "~/contexts/ThemeContext";
import { validLanguages, type Language } from "~/domain/language/types";

import SidebarIcon from "../ui/icons/SidebarIcon";
import Sidebar from "./Sidebar";
import { useSidebar } from "~/contexts/SidebarContext";
import { isLanguage } from "~/domain/language/utils";
import { useTranslation } from "react-i18next";

export const Header = () => {
    const navigate = useNavigate();

    const { setTheme } = useTheme();
    const { t, i18n } = useTranslation();
    const { toggleSidebar } = useSidebar();

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
        <header id="header" className="header w-full text-sm z-999 h-14 flex items-center justify-evenly px-6 py-3 fixed top-0 bg-background border-b border-b-primary-container print:hidden">
            <NavLink to='/' className='logo'>
                <Logo />
            </NavLink>
            <nav className="links hidden md:flex">
                <HeaderButton text={t('header.start')} onClick={() => navigate('/')} />
                <HeaderButton text={t('header.about')} onClick={() => navigate('/about')} />
                <HeaderButton text={t('header.portfolio')} onClick={() => navigate('/portfolio')} />
                <HeaderButton text={t('header.contact')} onClick={() => navigate('/contact')} />
                <Dropdown
                    options={themeOptions}
                    value={t('header.theme')}
                    onClick={v => {
                        if (isTheme(v)) setTheme(v);
                    }}
                    className="self-center"
                />
                <Dropdown
                    options={langOptions}
                    value={t(`langOptions.${i18n.resolvedLanguage as Language}`)}
                    onClick={v => {
                        if (isLanguage(v)) i18n.changeLanguage(v);
                    }}
                    className="self-center"
                />
            </nav>
            <button
                className="h-full cursor-pointer hover:opacity-80 active:opacity-50"
                onClick={() => toggleSidebar(true)}
                title="open sidebar"
            >
                <SidebarIcon className="block md:hidden h-7" />
            </button>
            <Sidebar />
        </header>
    );
};

export default Header;