import { useContext } from 'react';
import { ThemeContext } from "../Contexts";

// icons
import { SiMaterialdesign } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiGitRepositoryFill } from "react-icons/ri";

import Card, { CardActions, CardSubTitle, CardTitle } from '../components/card';
import Chip from '../components/chip';
import Button from '../components/button';

export default function ProjectsSection() {
    const theme = useContext(ThemeContext);

    return (
        <div id='projetos' className="p-0 sm:p-10 min-h-screen flex flex-col items-center gap-10">

            <span className={`${theme.text.main} text-2xl sm:text-3xl text-center`}>Projetos</span>

            <div className='max-w-5xl mx-auto flex flex-col'>

                <Card>

                    <CardTitle>Gesfer</CardTitle>

                    <CardSubTitle>2022</CardSubTitle>

                    <div className='flex flex-col gap-2'>

                        <div className='flex flex-wrap gap-2'>

                            <Chip variant='outlined' Icon={SiMaterialdesign} label='Material'></Chip>

                            <Chip variant='outlined' Icon={SiAngular} label='Angular'></Chip>

                            <Chip variant='outlined' Icon={SiTailwindcss} label='Tailwind CSS'></Chip>

                        </div>

                        <p className={`${theme.text.main} text-lg`}>
                            Gesfér é um site de gestão de férias criado para ser utilizado por servidores da área de administração de órgãos públicos. O objetivo do site é permitir o controle dos períodos de férias dos 
                            servidores de maneira eficiente e organizada. O sistema permite cadastrar usuários com diferentes níveis de acesso, como o Administrador, Cadastrante e Consultor, com permissões específicas para 
                            buscar, listar, remover, criar e editar funcionários e seus períodos de férias.
                        </p>

                    </div>

                    <CardActions xPos='left'>
                        <a href="https://github.com/AllbertSantana/gesfer" target='blank'>
                            <Button variant='flat' Icon={RiGitRepositoryFill} label='Repositório ↗'></Button>
                        </a>
                    </CardActions>

                </Card>

            </div>

        </div>
    );
  }