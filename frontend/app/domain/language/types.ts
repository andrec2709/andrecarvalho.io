export const validLanguages = ['pt-BR', 'en'] as const;

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
    startDate: string;
    endDate: string | null;
    role: string;
};

type LabeledContent = {
    label: string;
};

type ImageContent = LabeledContent & {};

type ProjectCardEntry = {
    title: string;
    description: string;
    image: ImageContent;
};

type CalloutEntry = {
    title: string;
    body: string;
};

type withAbbreviation = {
    fullName: string;
    abbr: string;
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
        portfolio: string;
    };
    langOptions: {
        "pt-BR": string;
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
        whatIs: PageSection & {
            p1: string;
            p2: string;
            p3: string;
            p4: string;
        };
        techOverview: PageSection & {
            p1: string;
            p2: string;
            p3: string;
        };
        challenges: PageSection & {
            p1: string;
            p2: string;
            p3: string;
            p4: string;
            p5: string;
            p6: string;
        };
        conclusion: PageSection & {
            p1: string;
        };
    };
    notedRn: PageSection & {
        whatIs: PageSection & {
            p1: string;
            p2: string;
            p3: string;
            p3List: string[];
        };
        techOverview: PageSection & {
            p1: string;
            p2: string;
            p3: string;
            p4: string;
        };
        conclusion: PageSection & {
            p1: string;
        };
    };
    andreCarvalhoIo: PageSection & {
        whatIs: PageSection & {
            p1: string;
            p2: string;
        };
        techOverview: PageSection & {
            p1: string;
            p2: string;
            p3: string;
            p3Note: CalloutEntry;
            p4: string;
        };
        challenges: PageSection & {
            p1: string;
        };
        conclusion: PageSection & {
            p1: string;
        };
    };
    projectCards: {
        colorpicker: ProjectCardEntry;
        noted: ProjectCardEntry;
        andrecarvalhoIo: ProjectCardEntry;
        tryIt: string;
        readMore: string;
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
        'theme-dark': string;
        'theme-light': string;
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
    };
    general: {
        headingCopyHoverTxt: string;
    };
    carousel: {
        prevButtonLabel: string;
        nextButtonLabel: string;
        prevButtonIconLabel: string;
        nextButtonIconLabel: string;
    };
    icons: {
        mailIcon: ImageContent;
        callIcon: ImageContent;
        locationIcon: ImageContent;
        linkedinIcon: ImageContent;
        linkIcon: ImageContent;
    };
    githubCalendar: PageSection & {
        tooltips: {
            activityText: string;
        };
        labels: {
            totalCount: string;
            legend: {
                less: string;
                more: string;
            };
        };
    };
    months: {
        jan: withAbbreviation;
        feb: withAbbreviation;
        mar: withAbbreviation;
        apr: withAbbreviation;
        may: withAbbreviation;
        jun: withAbbreviation;
        jul: withAbbreviation;
        aug: withAbbreviation;
        sep: withAbbreviation;
        oct: withAbbreviation;
        nov: withAbbreviation;
        dec: withAbbreviation;
    };
    weekdays: {
        sun: withAbbreviation;
        mon: withAbbreviation;
        tue: withAbbreviation;
        wed: withAbbreviation;
        thu: withAbbreviation;
        fri: withAbbreviation;
        sat: withAbbreviation;
    }
};

export type Translations = Record<Language, Translation>;