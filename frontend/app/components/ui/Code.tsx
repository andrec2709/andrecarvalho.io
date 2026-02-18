import type React from "react";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { cn } from "~/utils";

type Props = React.ComponentPropsWithRef<'code'>;

export default function Code({ children, ...props }: Props) {
    //TODO
    
    return (
        <code
            {...props}
            className={cn('', props.className ?? '')}
        >
            {children}
        </code>
    );
}