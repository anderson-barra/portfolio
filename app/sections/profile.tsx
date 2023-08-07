import { useContext } from 'react';
import { ThemeContext } from "../Contexts";
import Chip from '../components/chip';
import Button from '../components/button';
import { Theme } from "../themes";
import Image from 'next/image'
import Card, { CardActions, CardTitle } from '../components/card';

//image
import profilePhoto from "../../public/images/profile_photo.jpg";

// icons
import { MdDownload, MdPlace } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { GiNothingToSay } from 'react-icons/gi';
import {
    SiMaterialdesign,
    SiTailwindcss,
    SiFigma,
    SiReact,
    SiAngular,
    SiNextdotjs,
    SiFlutter,
    SiJavascript,
    SiTypescript,
    SiCsharp,
    SiDart,
    SiSqlite,
    SiMongodb,
    SiGithub
} from 'react-icons/si';

export default function ProfileSection() {
    const theme = useContext(ThemeContext);

    return (
        <div id='perfil' className="max-w-5xl mx-auto p-5 sm:p-10 flex flex-col items-center gap-2">

            <Card variant='flat' rounded={"rounded-t-xl"}>

                <span className={`${theme.text.main} text-2xl sm:text-3xl text-left`}>Perfil</span>

            </Card>

            <Card variant='flat' rounded={"rounded-none"}>

                <CardTitle>Sobre Mim</CardTitle>

                <div className='flex flex-col items-start gap-5 item'>

                    <div className='w-full flex flex-col sm:flex-row gap-2 items-center sm:items-start'>

                        <Image src={profilePhoto} alt={''} width={150} height={150} className='rounded-full shadow-xl'/>

                        <div className='flex flex-row flex-wrap sm:flex-col gap-2 justify-center items-start'>

                            <Chip variant='flat' label='05/07/2001' Icon={FaBirthdayCake}/>

                            <Chip variant='flat' label='Belém, PA' Icon={MdPlace}/>

                            <Chip variant='flat' label='Português e Inglês' Icon={GiNothingToSay}/>

                        </div>

                    </div>

                    <div className='w-full flex flex-col gap-2'>

                        <p className={`${theme.text.main} text-lg sm:text-xl text-left font-semibold`}>
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

                {/* <CardActions xPos='right'>
                    <Button variant='raised' label='Baixe Meu Currículo' Icon={MdDownload}/>
                </CardActions> */}

            </Card>

            <Card variant='flat' rounded={"rounded-b-xl"}>

                <CardTitle>Competências</CardTitle>

                <div className='flex flex-col gap-5'>

                    <div className='flex flex-row flex-wrap justify-start gap-2'>
                        <Chip variant='raised' label='Material Design' Icon={SiMaterialdesign}/>
                        <Chip variant='raised' label='Tailwind CSS' Icon={SiTailwindcss}/>
                        <Chip variant='raised' label='Figma' Icon={SiFigma}/>
                    </div>

                    <div className='flex flex-row flex-wrap justify-start gap-2'>
                        <Chip variant='raised' label='React' Icon={SiReact}/>
                        <Chip variant='raised' label='Angular' Icon={SiAngular}/>
                    </div>

                    <div className='flex flex-row flex-wrap justify-start gap-2'>
                        <Chip variant='raised' label='JavaScript' Icon={SiJavascript}/>
                        <Chip variant='raised' label='TypeScipt' Icon={SiTypescript}/>
                        <Chip variant='raised' label='C Sharp' Icon={SiCsharp}/>
                    </div>

                    <div className='flex flex-row justify-start gap-2'>
                        <Chip variant='raised' label='GitHub' Icon={SiGithub}/>
                    </div>

                </div>

            </Card>

        </div>
    );
  }