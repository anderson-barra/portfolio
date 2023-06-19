import { useContext } from 'react';
import { ThemeContext } from "../Contexts";
import Chip from '../components/chip';
import Button from '../components/button';
import { Theme } from "../themes";
import Image from 'next/image'

//image
import profilePhoto from "../../public/images/profile_photo.jpg";

// icons
import { MdDownload } from "react-icons/md";

import { SiMaterialdesign } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFigma } from "react-icons/si";

import { SiReact } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiFlutter } from "react-icons/si";

import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiDart } from "react-icons/si";

import { SiSqlite } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import { SiGithub } from "react-icons/si";
import Card, { CardActions, CardTitle } from '../components/card';

export default function ProfileSection() {
    const theme = useContext(ThemeContext);

    return (
        <div id='perfil' className="p-5 sm:p-10 flex flex-col items-center gap-5 sm:gap-10">

            <span className={`${theme.text.main} text-2xl sm:text-3xl text-center`}>Perfil</span>

            <div className="max-w-5xl mx-auto flex flex-col gap-2 sm:gap-4">

                <Card variant='flat'>

                    <CardTitle>Sobre Mim</CardTitle>

                    <div className='flex flex-col sm:flex-row items-start gap-5'>

                        <Image src={profilePhoto} alt={''} height={150} width={150} className='rounded-full shadow-xl'/>

                        <div className='flex flex-col gap-2'>

                            <p className={`${theme.text.main} text-lg sm:text-xl text-left font-bold`}>
                                Anderson Barra Pires Santana
                            </p>

                            <p className={`${theme.text.main} text-base sm:text-lg text-left`}>
                                Tenho 21 anos.
                                Meus passatempos preferidos, além de codificar, incluem:
                                assistir a vídeos e animes;
                                ver transmissões ao vivo;
                                jogar videogames;
                                e ler mangás.
                            </p>

                        </div>

                    </div>

                    <CardActions xPos='right'>
                        <Button variant='raised' label='Baixe Meu Currículo' Icon={MdDownload}/>
                    </CardActions>

                </Card>

                <Card variant='outlined'>

                    <CardTitle>Competências</CardTitle>

                    <div className='flex flex-col gap-5'>

                        <div className='flex flex-row flex-wrap justify-start gap-2'>
                            <Chip variant='raised' label='Material' Icon={SiMaterialdesign}/>
                            <Chip variant='raised' label='Tailwind CSS' Icon={SiTailwindcss}/>
                            <Chip variant='raised' label='Figma' Icon={SiFigma}/>
                        </div>

                        <div className='flex flex-row flex-wrap justify-start gap-2'>
                            <Chip variant='raised' label='React' Icon={SiReact}/>
                            <Chip variant='raised' label='Angular' Icon={SiAngular}/>
                            <Chip variant='raised' label='Next JS' Icon={SiNextdotjs}/>
                            <Chip variant='raised' label='Flutter' Icon={SiFlutter}/>
                        </div>

                        <div className='flex flex-row flex-wrap justify-start gap-2'>
                            <Chip variant='raised' label='JavaScript' Icon={SiJavascript}/>
                            <Chip variant='raised' label='TypeScipt' Icon={SiTypescript}/>
                            <Chip variant='raised' label='C Sharp' Icon={SiCsharp}/>
                            <Chip variant='raised' label='Dart' Icon={SiDart}/>
                        </div>

                        <div className='flex flex-row flex-wrap justify-start gap-2'>
                            <Chip variant='raised' label='Sqlite' Icon={SiSqlite}/>
                            <Chip variant='raised' label='MongoDB' Icon={SiMongodb}/>
                        </div>

                        <div className='flex flex-row justify-start gap-2'>
                            <Chip variant='raised' label='GitHub' Icon={SiGithub}/>
                        </div>

                    </div>

                </Card>

            </div>

        </div>
    );
  }