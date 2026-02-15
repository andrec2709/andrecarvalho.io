export type SectionVariant = 'narrow' | 'wide' | 'full';

export type SectionProps = {
    classNameContainer?: string;
    classNameContent?: string;
    variant?: SectionVariant;
};