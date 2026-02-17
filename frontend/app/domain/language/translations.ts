import type { Translation, Translations } from "./types";

const ptBR: Translation = {
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
        cv: "Currículo",
    },
    langOptions: {
        pt: "Português",
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
        // TODO
        heading: "colorpicker-react",
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
                dateStart: "Fev 2024",
                dateEnd: "Dez 2024",
                role: "Especialista em Pré-Vendas - Time Enterprise",
                p1: "Eu dava assistência técnica a parceiros e times internos, relativo ao portfólio \"Enterprise\" dos produtos da Cisco. Nosso suporte cobria uma gama alta de tópicos, incluindo diferenças entre subscrições DNA, tecnologias e protocolos suportados por determinado equipamento de rede, compatibilidade de transceivers, e mais.",
                p2: "Eu também trabalhei criando soluções dentro do Ekahau. O cliente nos enviava plantas da sua filial, e criávamos o design preditivo de uma rede wireless específica para eles.",
                p3: "Depois que a Cisco encerrou a operação deste time, eu fui transferido ao time de Compliance (veja abaixo).",
            },
            secondItem: {
                company: "Cisco (via Foundever)",
                dateStart: "Dez 2024",
                dateEnd: "Set 2025",
                role: "Especialista de Compliance",
                p1: "Como um agente de Compliance, minha função era garantir que serviços sendo adquiridos estavam de acordo com as políticas da Cisco e não se enquadravam na sua \"Política de Não-Concessão\".",
                p2: "Nós inspecionávamos equipamentos de rede - especificamente comandos ambientais do sistema - com o propósito de verificar seu funcionamento pleno e que se tratavam de dispositivos legítimos da Cisco.",
            },
        },
        savePdf: "Salvar como PDF",
    },
    themes: {
        themeDark: "Escuro",
        themeLight: "Claro",
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

const en: Translation = {
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
    },
    langOptions: {
        pt: "Portuguese",
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
        // TODO
        heading: "colorpicker-react",
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
                dateStart: "Feb 2024",
                dateEnd: "Dec 2024",
                role: "Pre-sales Specialist - Enterprise Team",
                p1: "I provided technical assistance to partners and internal teams regarding the Cisco Enterprise portfolio. Our support covered a wide range of topics, including differences between DNA subscriptions, supported features and protocols for specific network equipment, transceiver compatibility, and more.",
                p2: "I also worked on creating predictive site surveys using Ekahau. Customers would send us floor plans, and we used the software to design predictive wireless network solutions tailored to their spaces.",
                p3: "After Cisco ended the team I was part of, I was transferred to the Compliance Team (see below).",
            },
            secondItem: {
                company: "Cisco (via Foundever)",
                dateStart: "Dec 2024",
                dateEnd: "Sept 2025",
                role: "Compliance Specialist",
                p1: "As a Compliance Agent, my role was to ensure that services being ordered complied with Cisco's policies and did not fall under their Non-Entitlement Policy.",
                p2: "We inspected network equipment — specifically environmental system commands — to verify that the devices were functioning correctly and were legitimate Cisco products.",
            },
        },
        savePdf: "Save as PDF",
    },
    themes: {
        themeDark: "Dark",
        themeLight: "Light",
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