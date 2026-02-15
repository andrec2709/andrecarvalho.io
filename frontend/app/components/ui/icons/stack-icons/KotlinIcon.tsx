import { useId } from "react";
import type { IconProps } from "~/types/icon";

export default function KotlinIcon({ color = 'none', size = 24, ...props }: IconProps) {
    const id = useId();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            {...props}
        >
            <path fill={`url(#${id}-a)`} d="M48 48H0V0h48L23.505 23.648 48 48Z" />
            <defs>
                <radialGradient
                    id={`${id}-a`}
                    cx={0}
                    cy={0}
                    r={1}
                    gradientTransform="matrix(-48 0 0 -48 48 0)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E44857" />
                    <stop offset={0.504} stopColor="#C711E1" />
                    <stop offset={1} stopColor="#7F52FF" />
                </radialGradient>
            </defs>
        </svg>
    );
}