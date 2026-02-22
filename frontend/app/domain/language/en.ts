import type { Translation } from "./types";

export const en: Translation = {
    header: {
        start: "Start",
        contact: "Contact",
        about: "About",
        portfolio: "Portfolio",
        theme: "theme",
    },
    footer: {
        contact: "Contact",
        about: "About",
        cv: "My CV",
        portfolio: 'Portfolio',
    },
    langOptions: {
        "pt-BR": "Portuguese",
        en: "English",
    },
    contact: {
        description: "If you wish to contact me, to make a job offer or any other inquiries, you can find out how on this section.",
        keywords: "andre carvalho, andre, carvalho, portfolio, developer, dev, hire, offers, curriculum, solo developer, html, css, javascript, php, c++, github, technology, freelancer, freelance, freelancing",
        title: "Developer's Contact - Andre Carvalho",
        workTogether: {
            heading: "Let's work together",
            p1: "The best way to reach me is by e-mail, at",
            p2: "I’m open to job opportunities, freelance projects, and collaboration with other developers.",
        },
        contactMe: {
            heading: "Contact me",
            name: "Name",
            message: "Message",
            send: "submit",
        },
    },
    about: {
        description: "Here you can find more descriptive information about me and my skills.",
        keywords: "andre carvalho, andre, carvalho, portfolio, developer, dev, hire, offers, curriculum, solo developer, html, css, javascript, php, c++, github, technology, freelancer, freelance, freelancing",
        title: "About me - Andre Carvalho",
        aboutMe: {
            heading: "About me",
            p1: "Hello, I am André, a 24-year-old developer living in Curitiba, south of Brazil.",
            p2: "I have been writing code since around 2018. I learned Python as my first language, and have since studied many things, ranging from web development with HTML/CSS/JS, PHP, React, to application development with React Native, and even game development. Programming is something I enjoy no matter the subject, so I’m always interested in trying new things.",
            notePart1: "Check my",
            noteCvLink: "CV",
            notePart2: "for a list  of my skills and professional experiences.",
        },
        skillAssessment: {
            heading: "Skill Assessment",
            p1: "List of things that I know:",
            firstSkillsList: [
                "HTML",
                "CSS",
                "Javascript",
                "PHP",
                "React",
                "Python",
                "SQL",
                "Advanced Excel / Automation with VBA",
                "Powershell",
                "Bash",
                "Knowledge on both Windows and Linux based operating systems",
                "Basic C++",
                "Basic Java",
                "Kotlin"
            ],
            p2: "I have a solid foundation in programming. Given enough time I can learn any language, framework, library, etc.",
            p3: "I have some knowledge with UI/UX design as well:",
            secondSkillsList: [
                "Penpot",
                "Inkscape",
                "Figma",
                "Gimp",
                "Photoshop",
                "Blender",
                "Others"
            ],
        },
    },
    index: {
        description: "Welcome to the main page of my website, please feel free to check the Portfolio and 'About me' sections for more details. You can also find how to contact me via the 'Contact' page.",
        keywords: "andre carvalho, andre, carvalho, portfolio, developer, dev, hire, offers, curriculum, solo developer, html, css, javascript, php, c++, github, technology, freelancer, freelance, freelancing",
        title: "Home - André's Portfolio",
    },
    portfolio: {
        description: "Here you can find my work and personal projects as a developer.",
        keywords: "andre carvalho, andre, carvalho, portfolio, developer, dev, hire, offers, curriculum, solo developer, html, css, javascript, php, c++, github, technology, freelancer, freelance, freelancing",
        title: "Developer's Portfolio - Andre Carvalho",
        repositories: {
            heading: "Repositories",
        },
        sourceCode: "Source code",
        checkOut: "Check out this app",
        projectsOverview: {
            heading: "Projects Overview",
            p1: "The next sections will be an insight into my most relevant personal projects. I will describe a bit about what the project is, what I learned from them, and the challenges I faced while working on it.",
        },
    },
    colorpicker: {
        heading: "colorpicker-react",
        whatIs: {
            heading: "What is it?",
            p1: "This project is a colorpicker web application built on top of React.",
            p2: "The purpose of this project was to serve as a learning exercise, since it was my first real React project.",
            p3: "In the app, you have the ability to modify RGB values, or a HEX value, in order to change the display colors. You can create palettes, save colors into them, rename both colors and palettes, rearrange the items visually for organization, and more.",
            p4: "The app also gives you a contrast ratio, which represents the contrast between the foreground color and background color you have selected.",
        },
        techOverview: {
            heading: "Technical Overview",
            p1: "The app is built using <1>React</1> + <1>TypeScript</1> for the frontend, and uses <1>IndexedDB</1> and <1>LocalStorage</1> for storing user data, like palettes, colors, the order of colors and palettes, theme preference, language preference, etc.",
            p2: "For internationalization, I used the <1>i18n-js</1> library. All translations are stored as objects inside Typescript itself for strong typing and compile-time safety.",
            p3: "For the ordering mechanism, I used <1>dnd-kit</1> to implement the sortable behavior of the palettes and colors.",
        },
        challenges: {
            heading: "Challenges",
            p1: "This app had two major versions, let’s refer to them as version 1 and 2.",
            p2: "When I developed version 1 of this application, I was still really new to React and I was still learning its concepts, and my knowledge of software architecture was limited. Basically there was much room for improvement. At that time, much of the code of the application was not well organized, a bunch of testing code and experimental features. The app was in a state where “it worked”, but was not scalable whatsoever.",
            p3: "Version 2 brought many (many) changes. Since version 1, I learned a lot about React, how to use and write hooks, use effects, states, contexts, etc. And I had also practiced and studied a lot in other projects.",
            p4: "Not only I improved my React skills, but I also started studying a lot about Software Architecture, Clean Architecture, and that knowledge reflected a lot in how I write code. Concepts like domain, use cases, repositories, entities, have been well thought out while developing the new version.",
            p5: "The result was not only a better organized codebase, but also a more functional and scalable application.",
            p6: "Also, it was on version 2 that I decided to replace LocalStorage with IndexedDB (I didn’t know about it until that point). Some things still use LocalStorage, like theme, and language preferences, but the main data, which are the palettes data, is now kept in IndexedDB. LocalStorage had limitations with how much data it could store, hence why I decided to move and replace it with IDB.",
        },
        conclusion: {
            heading: "Conclusion",
            p1: "This project taught me a lot about React and its concepts, how to use IndexedDB and LocalStorage, and also allowed me to apply the knowledge I’ve acquired about software architecture.",
        },
    },
    notedRn: {
        heading: "noted-rn",
        whatIs: {
            heading: "What is it?",
            p1: "Noted is a note taking application for android, built with React Native.",
            p2: "This purpose of this project was to serve as a React Native learning exercise, as it was my first real RN project.",
            p3: "The app has some <1>interesting features:</1>",
            p3List: [
                "A rich text editor to write your notes. With it, you can write bold, underlined, or italic text, headings, create lists and blockquotes.",
                "You can create checklists (to-do lists), which allows you to check items as completed, show completed vs incomplete items separately, reorder, or remove them.",
                "You can filter and search your notes by their title and content.",
                "And you also have the ability to reorder your notes, or delete them.",
            ],
        },
        techOverview: {
            heading: "Technical Overview",
            p1: "The app was built using <1>React Native</1> + <1>Typescript</1>, and uses <1>SQLite</1> + <1>AsyncStorage</1> to keep user data, like notes, and language and theme preferences.",
            p2: "For internationalization, I used the <1>i18n-js</1> library. The app is available in english and brazilian portuguese.",
            p3: "The sortable containers for both notes and checklists is implemented using the <1>react-native-sortables</1> package.",
            p4: "For the rich text editor, I used the <1>react-native-enriched</1> package. Initially, I wanted to use <2>Lexical</2>, but since Lexical needs to be implemented as a WebView on mobile and there are some tradeoffs with webviews, I opted to go with enriched.",
        },
        conclusion: {
            heading: "Conclusion",
            p1: "This app was a great React Native study project. Not only I got to learn how to develop android applications, I also learned more about how rich text editors work and how to implement it.",
        },
    },
    andreCarvalhoIo: {
        heading: "andrecarvalho.io",
        whatIs: {
            heading: "What is it?",
            p1: "This project is my portfolio website, where I showcase all my projects.",
            p2: "The purpose of this project is to have a single place where I can display my programming skills and knowledge, my professional experiences, my contact information, so anyone interested can contact me for job opportunities.",
        },
        techOverview: {
            heading: "Technical Overview",
            p1: "This website is hosted on Hostinger’s shared hosting infrastructure and built using <1>React</1> with <1>TypeScript</1> on the frontend, alongside <1>PHP</1> on the backend. Client-side preferences such as theme and language selection are persisted using <1>LocalStorage</1>.",
            p2: "Internationalization is handled through <1>react-i18next</1>. All translation resources are defined as TypeScript objects to ensure strong typing and compile-time safety. This approach enables full autocompletion and type checking of translation keys when working with i18next in a TypeScript environment, helping prevent runtime errors caused by invalid or missing keys.",
            p3: "To dynamically display development activity and repository information, the application integrates with GitHub’s <1>GraphQL</1> and <1>REST</1> APIs. Data such as contribution history and repository metadata is retrieved and used to render components like the GitHub contribution calendar (implemented with <2>react-activity-calendar</2>) and the “Repositories” carousel (implemented with <3>embla-carousel</3>). Retrieved data is cached in a PHP-managed database named <5>github_api</5>.",
            p3Note: {
                title: "Note",
                body: "Additional information regarding the database schema can be found in the <1>project’s README.md file on GitHub</1>.",
            },
            p4: "The contact form is protected using <1>Google reCAPTCHA Enterprise</1>, providing server-side bot detection and helping prevent automated spam submissions.",
        },
        challenges: {
            heading: "Challenges",
            p1: "Initially, this website was built with no framework, just PHP+JS+CSS, with HTML generated by PHP. Once I <1>developed the first version of the Colorpicker application</1>, I decided I wanted to rebuild the whole website using React.",
        },
        conclusion: {
            heading: "Conclusion",
            p1: "Building this website taught me a lot of things. Not only I improved my React skills, but I also learned how to setup a web server, how to setup recaptcha, etc.",
        },
    },
    projectCards: {
        colorpicker: {
            title: "colorpicker-react",
            description: "A colorpicker web application built using React.",
            image: {
                label: "Image of the colorpicker-react application",
            },
        },
        noted: {
            title: "Noted",
            description: "Note taking android application built with React Native.",
            image: {
                label: "Image of the Noted application",
            },
        },
        andrecarvalhoIo: {
            title: "andrecarvalho.io",
            description: "A portfolio website showcasing my projects.",
            image: {
                label: "Image of the andrecarvalho.io website",
            },
        },
        readMore: "Read more",
        tryIt: "Try it",
    },
    cv: {
        title: "Curriculum Andre Carvalho Filho",
        description: "Here you will find my curriculum vitae, with my professional experiences, profile summary, and technical skills.",
        keywords: "andre carvalho, andre, carvalho, developer, software, dev, hire, oportunities, work, job, curriculum, freelance, freelancer",
        role: "Software Developer",
        origin: {
            label: "My website: ",
            value: "andrecarvalho.io",
        },
        contact: "Contact",
        phone: {
            label: "Phone: ",
            value: "+55 41 99678-5605",
        },
        location: {
            label: "Location: ",
            value: "Curitiba - Paraná, Brazil",
        },
        techSkills: {
            heading: "Technical Skills",
            langs: {
                label: "Languages",
                value: "JavaScript, HTML, CSS, PHP, TypeScript, SQL, Kotlin, C++ (basic), Java (basic), VBA, Powershell, Bash",
            },
            fws: {
                label: "Frameworks",
                value: "React, Node.js, Electron",
            },
            dbs: {
                label: "Databases",
                value: "MySQL (basic)",
            },
            othTools: {
                label: "Other tools",
                value: "Git, Tailwind CSS, Figma, Penpot, Inkscape",
            },
        },
        proSumm: {
            heading: "Profile Summary",
            p1: "I'm a software developer, looking for my first opportunity in the Software development industry. My focus is always writing clean, modular and scalable code.",
            p2: "I am seeking challenging opportunities to improve my technical expertise and earn experience in the area. I am fluent both in English and Portuguese.",
        },
        proExp: {
            heading: "Professional Experience",
            firstItem: {
                company: "Cisco (via Foundever)",
                startDate: "Feb 2024",
                endDate: "Dec 2024",
                role: "Pre-sales Specialist - Enterprise Team",
                p1: "I provided technical assistance to partners and internal teams regarding the Cisco Enterprise portfolio. Our support covered a wide range of topics, including differences between DNA subscriptions, supported features and protocols for specific network equipment, transceiver compatibility, and more.",
                p2: "I also worked on creating predictive site surveys using Ekahau. Customers would send us floor plans, and we used the software to design predictive wireless network solutions tailored to their spaces.",
                p3: "After Cisco ended the team I was part of, I was transferred to the Compliance Team (see below).",
            },
            secondItem: {
                company: "Cisco (via Foundever)",
                startDate: "Dec 2024",
                endDate: "Sept 2025",
                role: "Compliance Specialist",
                p1: "As a Compliance Agent, my role was to ensure that services being ordered complied with Cisco's policies and did not fall under their Non-Entitlement Policy.",
                p2: "We inspected network equipment — specifically environmental system commands — to verify that the devices were functioning correctly and were legitimate Cisco products.",
            },
        },
        savePdf: "Save as PDF",
    },
    themes: {
        "theme-dark": "Dark",
        "theme-light": "Light",
    },
    cards: {
        project: "Project:",
        description: "Description:",
        commits: "Commits:",
        updatedAt: "Last update:",
        goToGithubHoverTxt: "Go to github repository's page",
    },
    words: {
        note: "Note",
        projects: "Projects",
    },
    callout: {
        collapseHoverTxt: "Click to collapse the callout.",
        expandHoverTxt: "Click to expand the callout.",
    },
    general: {
        headingCopyHoverTxt: "Click to copy the link to this section.",
    },
    carousel: {
        nextButtonLabel: "Next slide",
        prevButtonLabel: "Previous slide",
        nextButtonIconLabel: "Right arrow icon",
        prevButtonIconLabel: "Left arrow icon",
    },
    icons: {
        callIcon: {
            label: "Phone icon",
        },
        linkedinIcon: {
            label: "Linkedin icon",
        },
        locationIcon: {
            label: "location icon",
        },
        mailIcon: {
            label: "mail icon",
        },
        linkIcon: {
            label: "An icon indicating a link can be copied",
        },
        stylusIcon: {
            label: "Icon of a pen",
        },
        collapseIcon: {
            label: "Collapse",
        },
        expandIcon: {
            label: "Expand",
        },
        openExternalIcon: {
            label: "Open in new tab"
        },
    },
    githubCalendar: {
        heading: "Contributions",
        tooltips: {
            activityText: "{{count}} contributions on {{date}}",
        },
        labels: {
            totalCount: "{{count}} contributions",
            legend: {
                less: "less",
                more: "more",
            },
        },
    },
    months: {
        jan: {
            abbr: "Jan",
            fullName: "January",
        },
        feb: {
            abbr: "Feb",
            fullName: "February",
        },
        mar: {
            abbr: "Mar",
            fullName: "March",
        },
        apr: {
            abbr: "Apr",
            fullName: "April",
        },
        may: {
            abbr: "May",
            fullName: "May",
        },
        jun: {
            abbr: "Jun",
            fullName: "June",
        },
        jul: {
            abbr: "Jul",
            fullName: "July",
        },
        aug: {
            abbr: "Aug",
            fullName: "August",
        },
        sep: {
            abbr: "Sep",
            fullName: "September",
        },
        oct: {
            abbr: "Oct",
            fullName: "October",
        },
        nov: {
            abbr: "Nov",
            fullName: "November",
        },
        dec: {
            abbr: "Dec",
            fullName: "December",
        },
    },
    weekdays: {
        sun: {
            abbr: "Sun",
            fullName: "Sunday",
        },
        mon: {
            abbr: "Mon",
            fullName: "Monday",
        },
        tue: {
            abbr: "Tue",
            fullName: "Tuesday",
        },
        wed: {
            abbr: "Wed",
            fullName: "Wednesday",
        },
        thu: {
            abbr: "Thu",
            fullName: "Thursday",
        },
        fri: {
            abbr: "Fri",
            fullName: "Friday",
        },
        sat: {
            abbr: "Sat",
            fullName: "Saturday",
        },
    },
};