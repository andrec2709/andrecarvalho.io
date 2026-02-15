import StackIcon, { type IconName } from "tech-stack-icons";
import TypescriptIcon from "./icons/stack-icons/TypescriptIcon";
import PythonIcon from "./icons/stack-icons/PythonIcon";
import JavaIcon from "./icons/stack-icons/JavaIcon";
import BashIcon from "./icons/stack-icons/BashIcon";
import PowershellIcon from "./icons/stack-icons/PowershellIcon";
import Html5Icon from "./icons/stack-icons/Html5Icon";
import Css3Icon from "./icons/stack-icons/Css3Icon";
import PhpIcon from "./icons/stack-icons/PhpIcon";
import ReactIcon from "./icons/stack-icons/ReactIcon";
import ReactRouterIcon from "./icons/stack-icons/ReactRouterIcon";
import GitIcon from "./icons/stack-icons/GitIcon";
import type { IconProps } from "~/types/icon";

type Props = React.HTMLAttributes<HTMLDivElement> & {
    Icon: React.ComponentType<IconProps>;
    size?: number;
    text?: string;
    variant?: "dark" | "light";
};

export default function TechStackPill({ Icon, text, variant, size = 24, ...props }: Props) {
    return (
        <div
            {...props}
            className={`flex gap-x-2 h-6 items-center backdrop-blur-sm 
                bg-ts-pill-bg border border-ts-pill-border rounded-sm 
                py-4 px-2 overflow-hidden hover:bg-ts-pill-bg/80 transition-[background-color]
                select-none`
                + ' '
                + (props.className ?? '')
            }
        >
            <Icon variant={variant} size={size} aria-label={`${text} icon`}/>
            <p className="text-ts-pill-fg text-sm">{text}</p>
        </div>
    );
}