import { Link } from "react-router";
import { useLang } from "~/contexts/LangContext";

export const Footer = () => {
    const { i18n } = useLang();

    return (
        <footer
            className="flex flex-col h-60 w-full max-w-150 p-5 print:hidden"
        >
            <nav className="flex flex-col md:flex-row gap-x-5 gap-y-2 md:justify-center items-end md:items-start underline">
                <Link to='/contact' >{i18n.t('footer.contact')}</Link>
                <Link to='/cv' >{i18n.t('footer.cv')}</Link>
                <Link to='/portfolio' >{i18n.t('footer.portfolio')}</Link>
            </nav>
            <p className="m-auto">© 2025 Andre Carvalho</p>

        </footer>
    );
};

export default Footer;