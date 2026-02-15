import { useLang } from "~/contexts/LangContext";
import CallIcon from "./icons/CallIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import { LocationIcon } from "./icons/LocationIcon";
import MailIcon from "./icons/MailIcon";

export const CvSidebar = () => {
    const { translations } = useLang();
    
    return (
        <div className="flex flex-col min-[500px]:flex-row">
            <div className="flex flex-col text-on-background w-fit pl-10 max-w-80">
                <div className="cv-name flex flex-col mb-2">
                    <h2 className="text-xl">André Carvalho Filho</h2>
                    <h3 className="text-sm">{translations?.cv.role}</h3>
                </div>
                <div>
                    <h2 className="flex items-center text-xl text-nowrap my-5">
                        Contact
                        <span className="bg-on-background h-0.5 w-full ml-4"></span>
                    </h2>
                    <p className="text-sm gap-x-1 flex items-center pr-5 mb-2"><CallIcon className="fill-on-background-container w-6" />+55 41 99678-5605</p>
                    <p className="text-sm gap-x-1 flex items-center pr-5 mb-2"><MailIcon className="fill-on-background-container w-6 inline" />contato@andrecarvalho.io</p>
                    <p className="text-sm gap-x-1 flex items-center pr-5"><LocationIcon className="fill-on-background-container w-6 inline" />{translations?.cv.location_val}</p>
                </div>
                <div>
                    <h2 className="flex items-center text-xl my-5">
                        Social
                        <span className="bg-on-background h-0.5 w-full ml-4"></span>
                    </h2>
                    <p className="text-sm gap-x-1 flex items-center pr-5 mb-2"><GithubIcon className="fill-on-background! w-6!" />github.com/andrec2709</p>
                    <p className="text-sm gap-x-1 flex items-center pr-5"><LinkedinIcon className="fill-on-background w-6"/>/in/andrecarvalhofilho</p>
                </div>
                <div>
                    <h2 className="flex items-center text-xl my-5 text-nowrap">
                        {translations?.cv.tech_skills}
                        <span className="bg-on-background h-0.5 w-full ml-4"></span>
                    </h2>
                    <h3 className="text-lg">{translations?.cv.langs}</h3>
                    <p className="text-xs">{translations?.cv.langs_val}</p>
                    <h3 className="text-lg">Frameworks</h3>
                    <p className="text-xs">React, Electron</p>
                    <h3 className="text-lg">{translations?.cv.dbs}</h3>
                    <p className="text-xs">{translations?.cv.dbs_val}</p>
                    <h3 className="text-lg">{translations?.cv.oth_tools}</h3>
                    <p className="text-xs">{translations?.cv.oth_tools_val}</p>
                </div>
            </div>
            <div className="flex flex-col w-full px-5 gap-y-10">
                <div>
                    <h2 className="flex items-center text-xl mb-10 text-nowrap">
                        {translations?.cv.pro_sum}
                        <span className="bg-on-background h-0.5 w-full ml-4"></span>
                    </h2>
                    <p className="text-sm">{translations?.cv.pro_sum_desc_part1}</p>
                    &nbsp;
                    <p className="text-sm">{translations?.cv.pro_sum_desc_part2}</p>
                </div>
                <div>
                    <h2 className="flex items-center text-xl mb-10 text-nowrap">
                        {translations?.cv.pro_exp}
                        <span className="bg-on-background h-0.5 w-full ml-4"></span>
                    </h2>
                    <div className="mb-10">
                        <p className="italic font-semibold">{translations?.cv.item1_company} {translations?.cv.item1_date}</p>
                        <p className="italic font-light">{translations?.cv.item1_role}</p>
                        <br />
                        <p className="text-sm">{translations?.cv.item1_desc_part1}</p>
                        <br />
                        <p className="text-sm">{translations?.cv.item1_desc_part2}</p>
                        <br />
                        <p className="text-sm">{translations?.cv.item1_desc_part3}</p>
                    </div>
                    <div>
                        <p className="italic font-semibold">{translations?.cv.item2_company} {translations?.cv.item2_date}</p>
                        <p className="italic font-light">{translations?.cv.item2_role}</p>
                        <br />
                        <p className="text-sm">{translations?.cv.item2_desc_part1}</p>
                        <br />
                        <p className="text-sm">{translations?.cv.item2_desc_part2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CvSidebar;