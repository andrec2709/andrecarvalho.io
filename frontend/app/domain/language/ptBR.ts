import type { Translation } from "./types";

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
        "pt-BR": "Português",
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
            p2: "Eu programo desde 2018. A primeira linguagem que aprendi foi Python, e desde então estudei muitas coisas, desde desenvolvimento web com HTML/CSS/JS, PHP, React, até desenvolvimento de aplicativos com React Native, e até desenvolvimento de jogos. Programar é algo que gosto independente do tema, então estou sempre interessado em tentar coisas diferentes.",
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
            p3: "Com o app, você pode modificar valores RGB, ou o valor HEX, para mudar a visualização das cores. Você pode criar paletas, salvar cores dentro delas, renomear ambas cores e paletas, reordenar os itens visualmente para organização, e mais.",
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
    andreCarvalhoIo: {
        heading: "andrecarvalho.io",
        whatIs: {
            heading: "O que é?",
            p1: "Esse projeto é um website que serve como meu portfólio, onde eu apresento todos os meus projetos.",
            p2: "O propósito desse projeto é de ser um lugar central onde posso demonstrar minhas habilidades e conhecimentos em programação, minhas experiências profissionais, minhas informações de contato, para que qualquer pessoa interessada possa me contactar com oportunidades de trabalho.",
        },
        techOverview: {
            heading: "Visão Geral Técnica",
            p1: "Este site é hosteado no plano the hosting compartilhado da Hostinger e construído usando <1>React</1> e <1>TypeScript</1> no frontend, e <1>PHP</1> no backend. Preferências de usuário como tema e idioma são persistidas utilizando <1>LocalStorage</1>.",
            p2: "A Internacionalização é implementada usando o módulo <1>react-i18next</1>. Todas as traduções são definidas como objetos dentro do Typescript, para garantir forte tipagem e segurança em tempo de compilação. Essa abordagem garante preenchimento automático e verificação dos tipos das chaves de tradução, quando trabalhando com i18next em um ambiente usando Typescript, o que ajuda prevenir erros em tempo de execução causados por chaves inválidas ou faltantes.",
            p3: "Para exibir minha atividade de desenvolvimento e informação de repositórios, o aplicativo integra com as API’s de <1>GraphQL</1> e <1>REST</1> do GitHub. Dados como histórico de contribuição e metadados dos repositórios são adquiridos e utilizados para renderizar componentes como o calendário de contribuição do GitHub (implementado com <2>react-activity-calendar</2>) e o carrossel de repositórios (implementado com <3>embla-carousel</3>). As informações recuperadas são armazenadas em cache em um banco de dados PHP chamado <5>github_api</5>.",
            p3Note: {
                title: "Nota",
                body: "Mais informações sobre o esquema do banco de dados pode ser encontrado no README.md do <1>projeto no GitHub</1>.",
            },
            p4: "O formulário de contato é protegido usando <1>Google reCAPTCHA Enterprise</1>, fornecendo detecção de bot no servidor e ajudando a prevenir submissões automatizadas de spam.",
        },
        challenges: {
            heading: "Desafios",
            p1: "Inicialmente, esse website foi construído sem nenhum framework, apenas PHP+JS+CSS, com HTML gerado por PHP. Assim que eu <1>desenvolvi a primeira versão do aplicativo de seleção de cores</1>, eu decidi que queria reconstruir o site usando React.",
        },
        conclusion: {
            heading: "Conclusão",
            p1: "Construir esse website me ensinou muitas coisas. Não só melhorou minhas habilidades de React, mas também me ensinou a configurar um servidor web, como configurar recaptcha, etc."
        },
    },
    projectCards: {
        colorpicker: {
            title: "colorpicker-react",
            description: "Um web aplicativo de seleção de cores escrito usando React.",
            image: {
                label: "Imagem da aplicação colorpicker-react",
            },
        },
        noted: {
            title: "Noted",
            description: "Um aplicativo android de anotações escrito usando React Native.",
            image: {
                label: "Imagem da aplicação Noted",
            },
        },
        andrecarvalhoIo: {
            title: "andrecarvalho.io",
            description: "Um website portfólio mostrando meus projetos.",
            image: {
                label: "Imagem do website andrecarvalho.io",
            },
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
    },
    carousel: {
        nextButtonLabel: "Próximo slide",
        prevButtonLabel: "Voltar slide",
        nextButtonIconLabel: "Ícone de seta para a direita",
        prevButtonIconLabel: "Ícone de seta para a esquerda",
    },
    icons: {
        callIcon: {
            label: "Ícone de telefone",
        },
        linkedinIcon: {
            label: "Ícone do linkedin",
        },
        locationIcon: {
            label: "Ícone de localização",
        },
        mailIcon: {
            label: "Ícone de uma carta",
        },
        linkIcon: {
            label: "Ícone indicando que um link pode ser copiado"
        },
        stylusIcon: {
            label: "Ícone de uma caneta"
        },
        collapseIcon: {
            label: "Fechar"
        },
        expandIcon: {
            label: "Expandir"
        },
        openExternalIcon: {
            label: "Abrir em nova aba"
        },
    },
    githubCalendar: {
        heading: "Contribuições",
        tooltips: {
            activityText: "{{count}} contribuições em {{date}}"
        },
        labels: {
            totalCount: "{{count}} atividades",
            legend: {
                less: "menos",
                more: "mais",
            },
        },
    },
    months: {
        jan: {
            abbr: "Jan",
            fullName: "Janeiro",
        },
        feb: {
            abbr: "Fev",
            fullName: "Fevereiro",
        },
        mar: {
            abbr: "Mar",
            fullName: "Março",
        },
        apr: {
            abbr: "Abr",
            fullName: "Abril",
        },
        may: {
            abbr: "Mai",
            fullName: "Maio",
        },
        jun: {
            abbr: "Jun",
            fullName: "Junho",
        },
        jul: {
            abbr: "Jul",
            fullName: "Julho",
        },
        aug: {
            abbr: "Ago",
            fullName: "Agosto",
        },
        sep: {
            abbr: "Set",
            fullName: "Setembro",
        },
        oct: {
            abbr: "Out",
            fullName: "Outubro",
        },
        nov: {
            abbr: "Nov",
            fullName: "Novembro",
        },
        dec: {
            abbr: "Dez",
            fullName: "Dezembro",
        },
    },
    weekdays: {
        sun: {
            abbr: "Dom",
            fullName: "Domingo",
        },
        mon: {
            abbr: "Seg",
            fullName: "Segunda",
        },
        tue: {
            abbr: "Ter",
            fullName: "Terça",
        },
        wed: {
            abbr: "Qua",
            fullName: "Quarta",
        },
        thu: {
            abbr: "Qui",
            fullName: "Quinta",
        },
        fri: {
            abbr: "Sex",
            fullName: "Sexta",
        },
        sat: {
            abbr: "Sáb",
            fullName: "Sábado",
        },
    },
};