import type { SectionProps } from "~/domain/section/types";
import { cn } from "~/utils";

type Props = SectionProps & {
    children: React.ReactNode;
};

export const Section = ({ children, classNameContainer, classNameContent, variant = 'narrow' }: Props) => {
    const contentNarrow = 'section-narrow';
    const contentWide = 'section-wide';
    const contentFull = 'section-full';

    let contentStyle = contentNarrow;

    switch (variant) {
        case 'full':
            contentStyle = contentFull;
            break;
        case 'wide':
            contentStyle = contentWide;
            break;
    }

    
    return (
        <div className={cn(`w-full p-4 flex justify-center border not-last-of-type:border-b-0 first-of-type:border-t-0 first-of-type:pt-10 border-border-background-2 print:border-0`, classNameContainer)}>
            <section
                className={cn(classNameContent, contentStyle)}
            >
                {children}
            </section>
        </div>
    );
};

export default Section;