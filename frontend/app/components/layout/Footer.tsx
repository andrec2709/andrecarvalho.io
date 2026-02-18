import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer
            className="flex flex-col h-60 w-full max-w-150 p-5 print:hidden"
        >
            <nav className="flex flex-col md:flex-row gap-x-5 gap-y-2 md:justify-center items-end md:items-start underline">
                <Link to='/contact' >{t('footer.contact')}</Link>
                <Link to='/cv' >{t('footer.cv')}</Link>
                <Link to='/portfolio' >{t('footer.portfolio')}</Link>
            </nav>
            <p className="m-auto">© 2025 Andre Carvalho</p>

        </footer>
    );
};

export default Footer;