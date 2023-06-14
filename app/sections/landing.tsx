import { useContext } from 'react';
import { ThemeContext } from "../Contexts";

// icons
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function LandingSection({themeHandler}: {themeHandler: Function}) {
    const theme = useContext(ThemeContext);

    return (
      <div className="p-5 sm:p-10 h-screen flex flex-col">

        <div className="basis-1/2 flex flex-row justify-between">

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

        <div className="basis-1/2 flex flex-col">

            <span className={`${theme.text.main} text-2xl sm:text-3xl`}>Bem vindo ao portfolio de</span>

            <span className={`${theme.text.main} text-6xl sm:text-7xl`}>Anderson Barra</span>

        </div>

      </div>
    );
  }