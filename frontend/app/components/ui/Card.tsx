import { useTranslation } from "react-i18next";
import type { RepoCard } from "../../domain/github/repos/types";
import GithubIcon from "./icons/GithubIcon";
import OpenNewIcon from "./icons/OpenNewIcon";

export const Card = ({ className, id, repoData }: { className?: string; id?: string; repoData: RepoCard }) => {
    const { t, i18n } = useTranslation();

    const noDescriptionText = i18n.resolvedLanguage === 'ptBR' ? 'Descrição não disponível' : 'No description available';
    let repoDescription = repoData?.description ?? noDescriptionText;
    repoDescription = repoDescription.length < 50 ? repoDescription : repoDescription.substring(0, 50) + '...';



    const dt = new Date(repoData.updated_at);
    const locale = i18n.resolvedLanguage === 'ptBR' ? 'pt-BR' : 'en-US';
    const formattedDate = dt.toLocaleString(locale, { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    return (
        <div
            className={`card-item w-[220px] h-[350px] relative select-none border border-card-border shrink-0 snap-center flex flex-col p-4 bg-card-background text-card-on-background rounded-xl transition-transform duration-200 ease shadow-[2px_2px_6px_rgba(0,0,0,0.2)] hover:scale-105 ${className}`}
            id={id}
        >
            <div className="card-section">
                <h2 className="card-heading">{t('cards.project')}</h2>
                <p className="card-text">{repoData?.repo_name}</p>
            </div>
            <div className="card-section">
                <h2 className="card-heading">{t('cards.description')}</h2>
                <p className="card-text">{repoDescription}</p>
            </div>
            <div className="card-section">
                <h2 className="card-heading">{t('cards.commits')}</h2>
                <p className="card-text">{repoData?.commits}</p>
            </div>
            <div className="card-section">
                <h2 className="card-heading">{t('cards.updatedAt')}</h2>
                <p className="card-text">{formattedDate}</p>
            </div>
            <GithubIcon className="self-center mt-auto select-none aspect-square" />
            <a className="absolute self-end w-fit" href={`https://github.com/andrec2709/${repoData.repo_name}`} target="_blank">
                <OpenNewIcon className="fill-card-links" hoverText={t('cards.goToGithubHoverTxt')} />
            </a>
        </div>
    );
};


export default Card;