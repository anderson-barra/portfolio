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

export default function ProfileSection() {
    const theme = useContext(ThemeContext);

    return (
      <div id='perfil' className="p-5 sm:p-10 min-h-screen flex flex-col gap-10 lg:flex-row lg:gap-0">

        <div className="basis-1/2 flex flex-col items-center gap-10">

            <div className='basis-1/6 flex items-end'>

                <span className={`${theme.text.main} text-2xl sm:text-3xl text-center`}>Sobre mim</span>

            </div>

            <div className='flex flex-col items-center gap-5'>

                <Image src={profilePhoto} alt={''} height={300} width={300} className='rounded-full shadow-xl'/>

                <p className={`${theme.text.main} text-lg text-center`}>
                    Meu nome completo é Anderson Barra Pires Santana.<br></br>
                    Tenho 21 anos.<br></br>
                    Meus passatempos preferidos, além de codificar, incluem:<br></br>
                    assistir a vídeos e animes;<br></br>
                    ver transmissões ao vivo;<br></br>
                    jogar videogames;<br></br>
                    e ler mangás.<br></br>
                </p>

            </div>

            <Button variant='raised' label='Baixe Meu Currículo' Icon={MdDownload}/>

        </div>

        <div className="basis-1/2 flex flex-col items-center gap-10">

            <div className='basis-1/6 flex items-end'>

                <span className={`${theme.text.main} text-2xl sm:text-3xl text-center`}>Competências</span>

            </div>

            <div className='flex flex-col gap-10'>

                <div className='flex flex-row flex-wrap justify-center gap-2'>
                    <Chip variant='raised' label='Material' Icon={SiMaterialdesign}/>
                    <Chip variant='raised' label='Tailwind CSS' Icon={SiTailwindcss}/>
                    <Chip variant='raised' label='Figma' Icon={SiFigma}/>
                </div>

                <div className='flex flex-row flex-wrap justify-center gap-2'>
                    <Chip variant='raised' label='React' Icon={SiReact}/>
                    <Chip variant='raised' label='Angular' Icon={SiAngular}/>
                    <Chip variant='raised' label='Next JS' Icon={SiNextdotjs}/>
                    <Chip variant='raised' label='Flutter' Icon={SiFlutter}/>
                </div>

                <div className='flex flex-row flex-wrap justify-center gap-2'>
                    <Chip variant='raised' label='JavaScript' Icon={SiJavascript}/>
                    <Chip variant='raised' label='TypeScipt' Icon={SiTypescript}/>
                    <Chip variant='raised' label='C Sharp' Icon={SiCsharp}/>
                    <Chip variant='raised' label='Dart' Icon={SiDart}/>
                </div>

                <div className='flex flex-row flex-wrap justify-center gap-2'>
                    <Chip variant='raised' label='Sqlite' Icon={SiSqlite}/>
                    <Chip variant='raised' label='MongoDB' Icon={SiMongodb}/>
                </div>

                <div className='flex flex-row justify-center gap-2'>
                    <Chip variant='raised' label='GitHub' Icon={SiGithub}/>
                </div>
            </div>

        </div>

      </div>
    );
  }