import CallIcon from "./icons/CallIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import { LocationIcon } from "./icons/LocationIcon";
import MailIcon from "./icons/MailIcon";
import { useTranslation } from "react-i18next";

export const CvSection = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col min-[500px]:flex-row">
            <div className="flex flex-col text-on-background w-fit pl-10 max-w-80">
                <div className="cv-name flex flex-col mb-2">
                    <h2 className="text-xl">André Carvalho Filho</h2>
                    <h3 className="text-sm">{t('cv.role')}</h3>
                </div>
                <div>
                    <h2 className="flex items-center text-xl text-nowrap my-5">
                        {t('cv.contact')}
                        <span className="bg-on-background h-0.5 w-full ml-4"></span>
                    </h2>
                    <p className="text-sm gap-x-1 flex items-center pr-5 mb-2"><CallIcon className="fill-on-background-container w-6" />+55 41 99678-5605</p>
                    <p className="text-sm gap-x-1 flex items-center pr-5 mb-2"><MailIcon className="fill-on-background-container w-6 inline" />contato@andrecarvalho.io</p>
                    <p className="text-sm gap-x-1 flex items-center pr-5"><LocationIcon className="fill-on-background-container w-6 inline" />{t('cv.location.value')}</p>
                </div>
                <div>
                    <h2 className="flex items-center text-xl my-5">
                        Social
                        <span className="bg-on-background h-0.5 w-full ml-4"></span>
                    </h2>
                    <p className="text-sm gap-x-1 flex items-center pr-5 mb-2"><GithubIcon className="fill-on-background! w-6!" />github.com/andrec2709</p>
                    <p className="text-sm gap-x-1 flex items-center pr-5"><LinkedinIcon className="fill-on-background w-6" />/in/andrecarvalhofilho</p>
                </div>
                <div>
                    <h2 className="flex items-center text-xl my-5 text-nowrap">
                        {t('cv.techSkills.heading')}
                        <span className="bg-on-background h-0.5 w-full ml-4"></span>
                    </h2>
                    <h3 className="text-lg">{t('cv.techSkills.langs.label')}</h3>
                    <p className="text-xs">{t('cv.techSkills.langs.value')}</p>
                    <h3 className="text-lg">{t('cv.techSkills.fws.label')}</h3>
                    <p className="text-xs">{t('cv.techSkills.fws.value')}</p>
                    <h3 className="text-lg">{t('cv.techSkills.dbs.label')}</h3>
                    <p className="text-xs">{t('cv.techSkills.dbs.value')}</p>
                    <h3 className="text-lg">{t('cv.techSkills.othTools.label')}</h3>
                    <p className="text-xs">{t('cv.techSkills.othTools.value')}</p>
                </div>
            </div>
            <div className="flex flex-col w-full px-5 gap-y-10">
                <div>
                    <h2 className="flex items-center text-xl mb-10 text-nowrap">
                        {t('cv.proSumm.heading')}
                        <span className="bg-on-background h-0.5 w-full ml-4"></span>
                    </h2>
                    <p className="text-sm">{t('cv.proSumm.p1')}</p>
                    &nbsp;
                    <p className="text-sm">{t('cv.proSumm.p2')}</p>
                </div>
                <div>
                    <h2 className="flex items-center text-xl mb-10 text-nowrap">
                        {t('cv.proExp.heading')}
                        <span className="bg-on-background h-0.5 w-full ml-4"></span>
                    </h2>
                    <div className="mb-10">
                        <p className="italic font-semibold">{t('cv.proExp.firstItem.company')} {t('cv.proExp.firstItem.startDate')}{' - '}{t('cv.proExp.firstItem.endDate')}</p>
                        <p className="italic font-light">{t('cv.proExp.firstItem.role')}</p>
                        <br />
                        <p className="text-sm">{t('cv.proExp.firstItem.p1')}</p>
                        <br />
                        <p className="text-sm">{t('cv.proExp.firstItem.p2')}</p>
                        <br />
                        <p className="text-sm">{t('cv.proExp.firstItem.p3')}</p>
                    </div>
                    <div>
                        <p className="italic font-semibold">{t('cv.proExp.secondItem.company')} {t('cv.proExp.secondItem.startDate')}{' - '}{t('cv.proExp.secondItem.endDate')}</p>
                        <p className="italic font-light">{t('cv.proExp.secondItem.role')}</p>
                        <br />
                        <p className="text-sm">{t('cv.proExp.secondItem.p1')}</p>
                        <br />
                        <p className="text-sm">{t('cv.proExp.secondItem.p2')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CvSection;