import { NavLink, useNavigate } from "react-router";
import HeaderButton from "./HeaderButton";
import Logo from "../ui/icons/Logo";
import Dropdown, { type DropdownOptions } from "../ui/Dropdown";
import { themes } from "~/domain/theme/types";
import { useTheme } from "~/contexts/ThemeContext";
import { useLang } from "~/contexts/LangContext";
import { langs } from "~/domain/language/types";

import SidebarIcon from "../ui/icons/SidebarIcon";
import Sidebar from "./Sidebar";
import { useSidebar } from "~/contexts/SidebarContext";

export const Header = () => {
    const navigate = useNavigate();

    const { changeTheme } = useTheme();
    const { currentLang, changeLang, translations } = useLang();
    const { toggleSidebar } = useSidebar();

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
        <header id="header" className="header w-full text-sm z-999 h-14 flex items-center justify-evenly px-6 py-3 fixed bg-background border-b border-b-primary-container print:hidden">
            <NavLink to='/' className='logo'>
                <Logo />
            </NavLink>
            <nav className="links hidden md:flex">
                <HeaderButton text={`${translations?.header.start}`} onClick={() => navigate('/')} />
                <HeaderButton text={`${translations?.header.about}`} onClick={() => navigate('/about')} />
                <HeaderButton text={`${translations?.header.portfolio}`} onClick={() => navigate('/portfolio')} />
                <HeaderButton text={`${translations?.header.contact}`} onClick={() => navigate('/contact')} />
                <Dropdown options={themeOptions} value={`${translations?.header.theme}`} onClick={v => changeTheme(v)} className="self-center" />
                <Dropdown options={langOptions} value={currentLang} onClick={v => changeLang(v)} className="self-center" />
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