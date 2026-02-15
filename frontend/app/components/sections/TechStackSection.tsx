import { useTheme } from "~/contexts/ThemeContext";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import TechStackPill from "../ui/TechStackPill";
import { useMemo } from "react";
import TypescriptIcon from "../ui/icons/stack-icons/TypescriptIcon";
import PythonIcon from "../ui/icons/stack-icons/PythonIcon";
import JavaIcon from "../ui/icons/stack-icons/JavaIcon";
import BashIcon from "../ui/icons/stack-icons/BashIcon";
import PowershellIcon from "../ui/icons/stack-icons/PowershellIcon";
import Html5Icon from "../ui/icons/stack-icons/Html5Icon";
import Css3Icon from "../ui/icons/stack-icons/Css3Icon";
import PhpIcon from "../ui/icons/stack-icons/PhpIcon";
import ReactIcon from "../ui/icons/stack-icons/ReactIcon";
import ReactRouterIcon from "../ui/icons/stack-icons/ReactRouterIcon";
import GitIcon from "../ui/icons/stack-icons/GitIcon";
import MySqlIcon from "../ui/icons/stack-icons/MySqlIcon";
import JavascriptIcon from "../ui/icons/stack-icons/JavascriptIcon";
import KotlinIcon from "../ui/icons/stack-icons/KotlinIcon";
import type { SectionProps } from "~/domain/section/types";

export default function TechStackSection({ ...props }: SectionProps) {

    return (
        <Section {...props}>
            <Heading id="tech-stack">Tech Stack</Heading>
            <div className="flex gap-x-2 gap-y-2 justify-center flex-wrap w-full">
                <TechStackPill Icon={TypescriptIcon} text="Typescript" />
                <TechStackPill Icon={PythonIcon} text="Python" />
                <TechStackPill Icon={JavaIcon} text="Java" />
                <TechStackPill Icon={BashIcon} text="Bash" />
                <TechStackPill Icon={PowershellIcon} size={20} text="Powershell" />
                <TechStackPill Icon={Html5Icon} text="HTML" />
                <TechStackPill Icon={Css3Icon} text="CSS" />
                <TechStackPill Icon={PhpIcon} size={20} text="PHP" />
                <TechStackPill Icon={ReactIcon} size={20} text="React" />
                <TechStackPill Icon={ReactRouterIcon} size={18} text="React Router" />
                <TechStackPill Icon={GitIcon} text="Git" />
                <TechStackPill Icon={MySqlIcon} text="MySQL" />
                <TechStackPill Icon={JavascriptIcon} text="JavaScript" />
                <TechStackPill Icon={KotlinIcon} text="Kotlin" />
            </div>
        </Section>
    );
}