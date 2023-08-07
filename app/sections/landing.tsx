import { useContext } from 'react';
import { ThemeContext } from "../Contexts";

// icons
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import Card from '../components/card';

export default function LandingSection({themeHandler}: {themeHandler: Function}) {
    const theme = useContext(ThemeContext);

    return (
      <div className="h-screen flex flex-col gap-2">

        <div className="px-5 sm:px-10 pt-5 sm:pt-10 flex flex-col">

            <Card variant='flat' rounded='rounded-t-xl'>

                <div className='flex flex-row justify-between'>

                    <div className='flex flex-row justify-start items-start gap-5'>

                        <a className={`${theme.text.main} text-xl transition hover:opacity-50`} href='#perfil'>Perfil</a>

                        <a className={`${theme.text.main} text-xl transition hover:opacity-50`} href='#projetos'>Projetos</a>

                        <a className={`${theme.text.main} text-xl transition hover:opacity-50`} href='#contato'>Contato</a>

                    </div>

                    <div className='flex flex-row'>
                        {
                            theme.mode === "light" && <MdDarkMode className='cursor-pointer' size={25} color={theme.icon.main} onClick={() => themeHandler()}></MdDarkMode>
                        }
                        {
                            theme.mode === "dark" && <MdLightMode className='cursor-pointer' size={25} color={theme.icon.main} onClick={() => themeHandler()}></MdLightMode>
                        }
                    </div>

                </div>

            </Card>

        </div>

        <div className="grow px-5 sm:px-10 pb-5 sm:pb-10 flex flex-col justify-between">

            <Card variant='flat' rounded='rounded-b-xl'>

                <div className='grow flex flex-col justify-center items-start'>

                    <span className={`${theme.text.main} text-2xl sm:text-3xl`}>Bem vindo ao portfólio de</span>

                    <span className={`${theme.text.main} text-6xl sm:text-7xl`}>Anderson Barra</span>

                </div>

            </Card>

        </div>

      </div>
    );
  }