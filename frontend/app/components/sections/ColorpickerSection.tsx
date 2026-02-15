import { useLang } from "~/contexts/LangContext";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import { Link } from "react-router";
import AddPaletteImg from '../../assets/images/colorpicker-create-project.png';
import AddColorImg from '../../assets/images/colorpicker-add-color.png';
import RenameColorImg from '../../assets/images/colorpicker-rename-color.png';
import ProjectHeading from "../ui/ProjectHeading";

type Props = {
    classNameContainer?: string;
    classNameContent?: string;
};

export const ColorpickerSection = ({ classNameContainer, classNameContent }: Props) => {
    const { translations } = useLang();

    return (
        <Section classNameContainer={classNameContainer} classNameContent={classNameContent}>
            <ProjectHeading
            id="colorpicker"
            sourceHref="https://github.com/andrec2709/colorpicker-react"
            appHref="https://andrec2709.github.io/colorpicker-react"
            >
                colorpicker-react
            </ProjectHeading>
            <p className="paragraph">{translations?.colorpicker.p1}</p>
            <br />
            <p className="paragraph">{translations?.colorpicker.p2}</p>
            <br />
            <p className="paragraph">{translations?.colorpicker.p3}</p>
            <br />
            <p className="paragraph">{translations?.colorpicker.p4}</p>
            <br />
            <p className="paragraph">{translations?.colorpicker.p5}</p>
            <br />
            <figure className="figure">
                <img src={AddPaletteImg} className="body-img" alt="Example adding a palette inside the colorpicker app." />
                <figcaption>{translations?.colorpicker.add_palette_img_caption}</figcaption>
            </figure>
            <br />
            <p className="paragraph">
                {translations?.colorpicker.p6_part1}{" "}
                <Link to="https://github.com/meodai/color-names" target="_blank" className="body-link">
                    {translations?.colorpicker.p6_color_name_link}
                </Link>
                {translations?.colorpicker.p6_part2}{" "}
            </p>
            <br />
            <figure className="figure">
                <img src={AddColorImg} alt="Showind an example of adding colors to a palette." />
                <figcaption>{translations?.colorpicker.add_color_img_caption}</figcaption>
            </figure>
            <br />
            <p className="paragraph">{translations?.colorpicker.p7}</p>
            <br />
            <figure className="figure">
                <img src={RenameColorImg} alt="Example of renaming a color." />
                <figcaption>{translations?.colorpicker.rename_color_img_caption}</figcaption>
            </figure>
            <br />
            <p className="paragraph">{translations?.colorpicker.p8}</p>
            <br />
            <p className="paragraph">{translations?.colorpicker.p9}{" "}
                <Link
                    to="https://andrec2709.github.io/colorpicker-react/"
                    className="body-link" target="_blank"
                >
                    {translations?.colorpicker.p9_colorpicker_link}
                </Link>
            </p>
            <br />
            <p className="paragraph">{translations?.colorpicker.p10}</p>
        </Section>
    );
};

export default ColorpickerSection;