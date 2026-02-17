export const langs = ["pt", "en"] as const; // TODO: will be removed
export const validLanguages = ['ptBR', 'en'] as const;

export type Lang = (typeof langs)[number]; // TODO: will be removed

// TODO: will be removed
export const isLang = (value: string): value is Lang => {
    return langs.includes(value as Lang);
};

export type Language = (typeof validLanguages)[number];

type PageMetaData = {
    title: string;
    description: string;
    keywords: string;
};

type PageSection = {
    heading: string;
};

type ReadonlyField = {
    label: string;
    value: string;
};

type ProfessionalExperienceEntry = {
    company: string;
    dateStart: string;
    dateEnd: string | null;
    role: string;
};

export type Translation = {
    header: {
        start: string;
        contact: string;
        about: string;
        portfolio: string;
        theme: string;
    };
    footer: {
        contact: string;
        about: string;
        cv: string;
    };
    langOptions: {
        pt: string;
        en: string;
    };
    contact: PageMetaData & {
        workTogether: PageSection & {
            p1: string;
            p2: string;
        };
        contactMe: PageSection & {
            name: string;
            message: string;
            send: string;
        };
    };
    about: PageMetaData & {
        aboutMe: PageSection & {
            p1: string;
            p2: string;
            notePart1: string;
            noteCvLink: string;
            notePart2: string;
        };
        skillAssessment: PageSection & {
            p1: string;
            firstSkillsList: string[]; // not sure this will work with i18n-js
            p2: string;
            p3: string;
            secondSkillsList: string[];
        };
    };
    index: PageMetaData & {

    };
    portfolio: PageMetaData & {
        repositories: PageSection;
        sourceCode: string;
        checkOut: string;
        projectsOverview: PageSection & {
            p1: string;
        };
    };
    colorpicker: PageSection & {
        // TODO
    };
    cv: PageMetaData & {
        role: string;
        origin: ReadonlyField;
        contact: string;
        phone: ReadonlyField;
        location: ReadonlyField;
        techSkills: PageSection & {
            langs: ReadonlyField;
            fws: ReadonlyField;
            dbs: ReadonlyField;
            othTools: ReadonlyField;
        };
        proSumm: PageSection & {
            p1: string;
            p2: string;
        };
        proExp: PageSection & {
            firstItem: ProfessionalExperienceEntry & {
                p1: string;
                p2: string;
                p3: string;
            };
            secondItem: ProfessionalExperienceEntry & {
                p1: string;
                p2: string;
            };
        };
        savePdf: string;
    };
    themes: {
        themeDark: string;
        themeLight: string;
    };
    cards: {
        project: string;
        description: string;
        commits: string;
        updatedAt: string;
        goToGithubHoverTxt: string;
    };
    words: {
        note: string;
        projects: string;
    };
    callout: {
        collapseHoverTxt: string;
        expandHoverTxt: string;
    }
    general: {
        headingCopyHoverTxt: string;
    }
};

export type Translations = Record<Language, Translation>;