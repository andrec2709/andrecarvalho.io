import type React from "react";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { cn } from "~/utils";

type Props = React.ComponentPropsWithRef<'code'>;

export default function Code({ children, ...props }: Props) {
    //TODO
    
    return (
        <code
            {...props}
            className={cn('font-mono! border border-code-border bg-code-background text-code-on-background px-1 rounded-md', props.className ?? '')}
        >
            {children}
        </code>
    );
}