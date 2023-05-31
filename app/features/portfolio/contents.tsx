import { AiFillGithub, AiFillLinkedin, AiOutlineSafety } from "react-icons/ai";
import { FaAngular } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { SiMui, SiTailwindcss } from "react-icons/si";
import { ElementPalette, limePalette, slatePalette } from "./palettes";
import idPhoto from '../../../public/principal_quadrada.jpg';
import { StaticImageData } from "next/image";

export interface LanguageString {
    ptBR: string;
    enUS: string;
}

export interface Technology {
    name: string;
    type: LanguageString;
    icon: IconType;
}

export interface TechStack {
    frontend: Technology[];
    backend: Technology[];
}

export interface WorkProfile {
    name: LanguageString;
    releaseDate: string;
    description: LanguageString;
    techStack: TechStack;
}

export interface WorkHighlight {
    title: LanguageString;
    description: LanguageString;
    icon: IconType;
    imgSrc: string;
}

export interface Work {
    palette: ElementPalette;
    profile: WorkProfile;
    highlights: WorkHighlight[];
    gallery: string[];
}

export interface OpeningSection {
    welcomeText: LanguageString;
    identityPhotoSrc: StaticImageData;
    introductoryTexts: LanguageString[];
}

export interface SocialMediaReferral {
    title: string;
    icon: IconType;
    link: string;
}

export interface ConcludingSection {
    conclusionTexts: LanguageString[];
    socialMediaReferrals: SocialMediaReferral[]
}

export const openingSection: OpeningSection = {
    welcomeText: {
        ptBR: "Oi!",
        enUS: "Hi!"
    },
    identityPhotoSrc: idPhoto,
    introductoryTexts: [
        {
            ptBR: "Seja bem-vindo ao meu portfólio.",
            enUS: "Welcome to my portfolio.",
        },
        {
            ptBR: "Meu nome é Anderson Barra.",
            enUS: "My name is Anderson Barra.",
        },
        {
            ptBR: "Abaixo, você verá uma breve apresentação de soluções das quais eu fiz parte.",
            enUS: "Below, you'll see a overview of solutions I've been a part of."
        },
    ],
}

export const concludingSection: ConcludingSection = {
    conclusionTexts: [
        {
            ptBR: "Bem, por enquanto é só isso.",
            enUS: "Well, that's it for the time being."
        },
        {
            ptBR: "Mas eu espero encher essa página com muito mais desafios!",
            enUS: "But I hope to fill this page with many more challenges!",
        },
        {
            ptBR: "E você pode fazer parte disso. Para começar, que tal falar comigo em...",
            enUS: "And you can be a part of it. For starters, how about contacting me at..."
        },
    ],
    socialMediaReferrals: [
        {
            title: "Linkedin",
            icon: AiFillLinkedin,
            link: "https://www.linkedin.com/in/anderson-santana-415492206/",
        },
        {
            title: "GitHub",
            icon: AiFillGithub,
            link: "https://github.com/anderson-barra",
        },
    ],
};

export const portifolio: Work[] = [
    {
        palette: slatePalette,
        profile: {
            name: {
                ptBR: "Gesfér",
                enUS: "Gesfér",
            },
            releaseDate: "2022",
            description: {
                ptBR: "Gesfér é um site de gestão de férias criado para ser utilizado por servidores da área de administração de órgãos públicos. O objetivo do site é permitir o controle dos períodos de férias dos servidores de maneira eficiente e organizada. O sistema permite cadastrar usuários com diferentes níveis de acesso, como o Administrador, Cadastrante e Consultor, com permissões específicas para buscar, listar, remover, criar e editar funcionários e seus períodos de férias.",
                enUS: "Gesfér is a vacation management website created to be used by employees in the administration area of public bodies. The purpose of the site is to allow the control of the vacation periods of the employees in an efficient and organized way. The system allows registering users with different access levels, such as Administrator, Registrant and Consultant, with specific permissions to search, list, remove, create and edit employees and their vacation periods.",
            },
            techStack: {
                frontend: [
                  {
                    name: "Angular",
                    type: {
                        ptBR: "Framework de Aplicação Web",
                        enUS: "Web App Framework",
                    },
                    icon: FaAngular
                  },
                  {
                    name: "Material UI",
                    type: {
                        ptBR: "Biblioteca de Componentes",
                        enUS: "Component Library",
                    },
                    icon: SiMui
                  },
                  {
                    name: "Tailwind CSS",
                    type: {
                        ptBR: "Framework de CSS",
                        enUS: "Framework CSS",
                    },
                    icon: SiTailwindcss
                  }
                ],
                backend: []
            }
        },
        highlights: [
            {
                title: {
                    ptBR: "Segurança",
                    enUS: "Safety"
                },
                description: {
                    ptBR: "O Gesfér utiliza JWT Tokens como forma de garantir a segurança do sistema de autenticação. O uso de tokens com validade limitada minimiza os riscos de ataques de falsificação de sessão, uma vez que o token expira automaticamente após um período pré-determinado de tempo.",
                    enUS: "Gesfér uses JWT Tokens as a way to guarantee the security of the login system. Using tokens with limited validity minimizes the risks of session spoofing attacks, as the token automatically expires after a predetermined period of time.",
                },
                icon: AiOutlineSafety,
                imgSrc: "https://i.pinimg.com/originals/71/9e/80/719e80760999b4c355a723224120eb07.png",
            }
        ],
        gallery: [
            "https://wallpapercave.com/wp/wp5405231.jpg",
            "https://i.pinimg.com/originals/11/1a/03/111a03133d14214539c96e0f657dff1a.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuO2DuHm-RyZwdEoQ8zNMESA3y029UZKvFQ&usqp=CAU",
        ],
    },
];