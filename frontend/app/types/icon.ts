import type { SVGProps } from "react";

export type IconProps = Omit<
    React.SVGAttributes<SVGSVGElement>,
    'fill' | 'width' | 'height' | 'viewBox'
>
    & {
        size?: number;
        color?: string;
        variant?: 'light' | 'dark';
    };