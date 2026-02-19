import type { Translation, Translations } from "./types";

export const ptBR: Translation = {
    header: {
        start: "Início",
        contact: "Contato",
        about: "Sobre",
        portfolio: "Portfólio",
        theme: "tema",
    },
    footer: {
        contact: "Contato",
        about: "Sobre",
        cv: "Meu CV",
        portfolio: 'Portfólio',
    },
    langOptions: {
        ptBR: "Português",
        en: "Inglês",
    },
    contact: {
        description: "Se você deseja me contatar, para uma oferta de trabalho ou quaisquer dúvidas, você pode encontrar minhas formas de contato nesta página.",
        keywords: "andre carvalho, andre, carvalho, portfólio, desenvolvedor, dev, contratar, contratação, oportunidades, trabalho, curriculo, desenvolvedor solo, freelancer, freelance, html, css, javascript, php, c++, github, tecnologia",
        title: "Contato do Desenvolvedor - Andre Carvalho",
        workTogether: {
            heading: "Vamos trabalhar juntos",
            p1: "A melhor forma de entrar em contato comigo é através do e-mail",
            p2: "Estou aberto para oportunidades de trabalho, freelance, e colaboração com outros desenvolvedores.",
        },
        contactMe: {
            heading: "Entre em contato",
            name: "Nome",
            message: "Mensagem",
            send: "enviar",
        },
    },
    about: {
        description: "Aqui você pode encontrar informações mais descritivas sobre minhas habilidades.",
        keywords: "andre carvalho, andre, carvalho, portfólio, desenvolvedor, dev, contratar, contratação, oportunidades, trabalho, curriculo, desenvolvedor solo, freelancer, freelance, html, css, javascript, php, c++, github, tecnologia",
        title: "Sobre mim - Andre Carvalho",
        aboutMe: {
            heading: "Sobre mim",
            p1: "Olá, meu nome é Andre Carvalho, sou um desenvolvedor de 24 anos vivendo no sul do Brasil.",
            p2: "Eu programo desde 2018. A primeira linguagem que aprendi foi Python, e desde então estudei muitas coisas, desde desenvolvimento web com HTML/CSS/JS, PHP, React, até desenvolvimento de aplicativos com Electron, Kotlin (Jetpack Compose) e até desenvolvimento de jogos. Programar é algo que gosto independente do tema, então estou sempre interessado em tentar coisas diferentes.",
            notePart1: "Você pode consultar meu",
            noteCvLink: "CV",
            notePart2: "para uma lista das minhas habilidades e experiências profissionais.",
        },
        skillAssessment: {
            heading: "Conhecimentos",
            p1: "Lista de coisas que eu sei:",
            firstSkillsList: [
                "HTML",
                "CSS",
                "Javascript",
                "PHP",
                "React",
                "Electron",
                "Python",
                "SQL",
                "Excel Avançado / Automação com VBA",
                "Powershell",
                "Bash",
                "Conhecimentos em ambos sistemas operacionais Windows e Linux.",
                "C++ Básico",
                "Java Básico",
                "Kotlin"
            ],
            p2: "Eu tenho uma fundação sólida em programação. Com um pouco de tempo eu posso aprender qualquer linguagem, framework, biblioteca, etc.",
            p3: "Eu também tenho algum conhecimento com design UI/UX:",
            secondSkillsList: [
                "Penpot",
                "Inkscape",
                "Figma",
                "Gimp",
                "Photoshop",
                "Blender",
                "Outros"
            ],
        },
    },
    index: {
        description: "Bem vindo a página inicial do meu website, sinta-se livre para checar a área de portfólio e 'sobre mim' para mais detalhes. Você também pode encontrar formas de me contatar via a página 'Contato'.",
        keywords: "andre carvalho, andre, carvalho, portfólio, desenvolvedor, dev, contratar, contratação, oportunidades, trabalho, curriculo, desenvolvedor solo, freelancer, freelance, html, css, javascript, php, c++, github, tecnologia",
        title: "Início - Portfólio de André",
    },
    portfolio: {
        description: "Aqui você pode encontrar meu trabalho e projetos pessoais como desenvolvedor.",
        keywords: "andre carvalho, andre, carvalho, portfólio, desenvolvedor, dev, contratar, contratação, oportunidades, trabalho, curriculo, desenvolvedor solo, freelancer, freelance, html, css, javascript, php, c++, github, tecnologia",
        title: "Portfólio do Desenvolvedor - Andre Carvalho",
        repositories: {
            heading: "Repositórios",
        },
        sourceCode: "Código fonte",
        checkOut: "Conferir aplicativo",
        projectsOverview: {
            heading: "Revisão de Projetos",
            p1: "As próximas seções serão uma visão geral dos meus principais projetos pessoais. Eu vou descrever um pouco sobre o que é o projeto, o que eu aprendi, e quais desafios eu encontrei trabalhando neles.",
        },
    },
    colorpicker: {
        heading: "colorpicker-react",
        whatIs: {
            heading: "O que é?",
            p1: "Esse projeto é uma web aplicação de seleção de cores, desenvolvida utilizando React.",
            p2: "O propósito desse projeto era servir como um exercício de aprendizado, já que foi meu primeiro projeto real em React.",
            p3: "Com o app, você pode modificar valores RGB, ou o valor HEX, para mudar a visualização das cores. Você pode <1>criar paletas, salvar cores dentro delas, renomear ambas cores e paletas, reordenar os itens visualmente para organização, e mais.</1>",
            p4: "O app também te mostra a razão de contraste, a qual representa o contraste entre a cor de primeiro plano e a cor de segundo plano selecionadas.",
        },
        techOverview: {
            heading: "Visão Geral Técnica",
            p1: "O app foi construido usando <1>React</1> + <1>TypeScript</1> no frontend, e utiliza <1>IndexedDB</1> e <1>LocalStorage</1> para armazenar os dados do usuário, como paletas, cores, a ordem destes, preferência de tema, de idioma, etc.",
            p2: "Para internacionalização, eu usei o módulo <1>i18n-js</1>. Todas as traduções são armazenadas como objetos dentro do TypeScript para ter forte tipagem e segurança durante tempo de compilação.",
            p3: "Para o mecanismo de ordenação, eu utilizei o módulo <1>dnd-kit</1> para possibilitar reordenar as paletas e cores.",
        },
        challenges: {
            heading: "Desafios",
            p1: "Este aplicativo teve duas principais versões, vou chamá-las de versão 1 e 2.",
            p2: "Quando eu desenvolvi a versão 1 desse app, eu ainda era muito novo no mundo de React, ainda estava aprendendo os conceitos básicos, e meu conhecimento de arquitetura de software era limitado. Ainda tinha muito para melhorar. Naquele tempo, muito do código do app não estava bem organizado, muito “código de teste” e funcionalidades experimentais. O app estava em um estado onde “funcionava”, mas não estava escalável.",
            p3: "A versão 2 trouxe muitas (muitas) mudanças. Desde a primeira versão, eu aprendi muito sobre React, como usar e escrever hooks, usar efeitos, estados, contextos, etc. E também tinha praticado e estudado muito em outros projetos.",
            p4: "Não apenas eu melhorei minhas habilidades em React, mas também estudei muito sobre Arquitetura de Software, Clean Architecture, e esse conhecimento refletiu muito em como escrevo código. Conceitos como domínio, casos de uso, repositórios, entidades, foram bem considerados durante o desenvolvimento da nova versão.",
            p5: "O resultado não foi apenas uma base de código mais organizada, mas também uma aplicação mais funcional e escalável.",
            p6: "Além disso, foi na versão 2 que decidi substituir LocalStorage por IndexedDB (eu não o conhecia até então). Algumas coisas ainda usam LocalStorage, como tema, e preferências de idioma, mas os principais dados, que são as paletas e cores salvas, são mantidas no IndexedDB. LocalStorage tinha limitações em relação a quantidade de dados que pode ser armazenado, e por isso decidi mover e substituir com IDB.",
        },
        conclusion: {
            heading: "Conclusão",
            p1: "Esse projeto me ensinou muito sobre React e seus conceitos, como usar IDB e LocalStorage, e também me permitiu aplicar o novo conhecimento de arquitetura de software que adquiri.",
        },
    },
    notedRn: {
        heading: "noted-rn",
        whatIs: {
            heading: "O que é?",
            p1: "Noted é um aplicativo de notas, feito em React Native para android.",
            p2: "O propósito desse projeto foi de servir como um exercício de estudo de React Native, já que foi meu primeiro projeto real com o framework.",
            p3: "O app tem algumas <1>funcionalidades interessantes:</1>",
            p3List: [
                "Um rico editor de texto para escrever suas notas. Com ele, você pode escrever texto em negrito, sublinhado, ou itálico, criar titulos, listas e citações em bloco.",
                "Você pode criar listas de tarefas (listas de afazeres), podendo marcar itens como completados, mostrar itens completados vs não completados separadamente, reordená-los, ou removê-los.",
                "Você pode filtrar e buscar suas notas pelo título e conteúdo.",
                "E você também tem a habilidade de reordenar suas notas, ou deletá-las.",
            ],
        },
        techOverview: {
            heading: "Visão Geral Técnica",
            p1: "O app foi escrito em <1>React Native</1> + <1>Typescript</1>, e utiliza <1>SQLite</1> + <1>AsyncStorage</1> para armazenar dados do usuário, como notas, e preferência de linguagem e tema.",
            p2: "Para internacionalização, eu utilizei o módulo <1>i18n-js</1>. O app está disponível em português brasileiro e inglês.",
            p3: "As partes reordenáveis da interface, como as notas e checklists, são implementadas utilizando o módulo <1>react-native-sortables</1>.",
            p4: "Para o rico editor de texto, eu usei o módulo <1>react-native-enriched</1>. Inicialmente, eu queria ter usado o <2>Lexical</2>, porém para utilizar ele no android você precisa implementar WebView, o que tem algumas desvantagens e limitações. Eu optei por usar o enriched.",
        },
        conclusion: {
            heading: "Conclusão",
            p1: "Esse app foi um excelente projeto de estudo para React Native. Não apenas eu aprendi a desenvolver aplicações android, mas também aprendi como ricos editores de texto funcionam e são implementados.",
        },
    },
    projectCards: {
        colorpicker: {
            title: "colorpicker-react",
            description: "Um web aplicativo de seleção de cores escrito usando React.",
        },
        noted: {
            title: "Noted",
            description: "Um aplicativo android de anotações escrito usando React Native.",

        },
        andrecarvalhoIo: {
            title: "andrecarvalho.io",
            description: "Um website portfólio mostrando meus projetos.",
        },
        readMore: "Ler mais",
        tryIt: "Testar",
    },
    cv: {
        title: "Currículo Andre Carvalho Filho",
        description: "Aqui você encontra meu currículo, com minhas experiências profissionais, habilidades e objetivos.",
        keywords: "andre carvalho, andre, carvalho, desenvolvedor, software, dev, contratar, contratação, oportunidades, trabalho, curriculo, freelance, freelancer",
        role: "Desenvolvedor de Software",
        origin: {
            label: "Meu website: ",
            value: "andrecarvalho.io",
        },
        contact: "Contato",
        phone: {
            label: "Celular: ",
            value: "+55 41 99678-5605",
        },
        location: {
            label: "Cidade: ",
            value: "Curitiba - Paraná, Brasil",
        },
        techSkills: {
            heading: "Habilidades Técnicas",
            langs: {
                label: "Linguagens",
                value: "JavaScript, HTML, CSS, PHP, TypeScript, SQL, Kotlin, C++ (básico), Java (básico), VBA, Powershell, Bash",
            },
            fws: {
                label: "Frameworks",
                value: "React, Node.js, Electron",
            },
            dbs: {
                label: "Bancos de Dados",
                value: "MySQL (básico)",
            },
            othTools: {
                label: "Outras ferramentas",
                value: "Git, Tailwind CSS, Figma, Penpot, Inkscape",
            },
        },
        proSumm: {
            heading: "Resumo",
            p1: "Eu sou um desenvolvedor de software, buscando minha primeira oportunidade na indústria de desenvolvimento. Meu foco sempre será escrever código limpo, modular e escalável.",
            p2: "Estou na busca por oportunidades desafiadores para ganhar experiência na área e melhorar meus conhecimentos técnicos. Eu sou fluente tanto em Inglês quanto em Português.",
        },
        proExp: {
            heading: "Experiência",
            firstItem: {
                company: "Cisco (via Foundever)",
                startDate: "Fev 2024",
                endDate: "Dez 2024",
                role: "Especialista em Pré-Vendas - Time Enterprise",
                p1: "Eu dava assistência técnica a parceiros e times internos, relativo ao portfólio \"Enterprise\" dos produtos da Cisco. Nosso suporte cobria uma gama alta de tópicos, incluindo diferenças entre subscrições DNA, tecnologias e protocolos suportados por determinado equipamento de rede, compatibilidade de transceivers, e mais.",
                p2: "Eu também trabalhei criando soluções dentro do Ekahau. O cliente nos enviava plantas da sua filial, e criávamos o design preditivo de uma rede wireless específica para eles.",
                p3: "Depois que a Cisco encerrou a operação deste time, eu fui transferido ao time de Compliance (veja abaixo).",
            },
            secondItem: {
                company: "Cisco (via Foundever)",
                startDate: "Dez 2024",
                endDate: "Set 2025",
                role: "Especialista de Compliance",
                p1: "Como um agente de Compliance, minha função era garantir que serviços sendo adquiridos estavam de acordo com as políticas da Cisco e não se enquadravam na sua \"Política de Não-Concessão\".",
                p2: "Nós inspecionávamos equipamentos de rede - especificamente comandos ambientais do sistema - com o propósito de verificar seu funcionamento pleno e que se tratavam de dispositivos legítimos da Cisco.",
            },
        },
        savePdf: "Salvar como PDF",
    },
    themes: {
        "theme-dark": "Escuro",
        "theme-light": "Claro",
    },
    cards: {
        project: "Projeto:",
        description: "Descrição:",
        commits: "Commits:",
        updatedAt: "Última atualização:",
        goToGithubHoverTxt: "ir para a página do Github deste repositório",
    },
    words: {
        note: "Nota",
        projects: "Projetos",
    },
    callout: {
        collapseHoverTxt: "Minimizar bloco.",
        expandHoverTxt: "Expandir bloco.",
    },
    general: {
        headingCopyHoverTxt: "Copiar o link desta seção.",
    }
};

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
        ptBR: "Portuguese",
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
            p2: "I have been writing code since around 2018. I learned Python as my first language, and have since studied many things, ranging from web development with HTML/CSS/JS, PHP, React, to application development with Electron, Kotlin (Jetpack Compose) and even game development. Programming is something I enjoy no matter the subject, so I’m always interested in trying new things.",
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
                "Electron",
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
            p3: "In the app, you have the ability to modify RGB values, or a HEX value, in order to change the display colors. You can <1>create palettes, save colors into them, rename both colors and palettes, rearrange the items visually for organization, and more.</1>",
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
    projectCards: {
        colorpicker: {
            title: "colorpicker-react",
            description: "A colorpicker web application built using React.",
        },
        noted: {
            title: "Noted",
            description: "Note taking android application built with React Native.",

        },
        andrecarvalhoIo: {
            title: "andrecarvalho.io",
            description: "A portfolio website showcasing my projects.",
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
    }
};

export const _translations: Translations = {
    ptBR,
    en
};

export default _translations;