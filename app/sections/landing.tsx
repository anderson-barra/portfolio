import { useContext } from 'react';
import { ThemeContext } from "../Contexts";
import { Theme } from "../themes";

// icons
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function LandingSection({themeHandler}: {themeHandler: Function}) {
    const theme = useContext(ThemeContext);

    return (
      <div className="p-5 sm:p-10 h-screen flex flex-col">

        <div className="basis-1/2 flex flex-row justify-between">

            <div className='flex flex-row justify-start gap-5'>

                <span className={`${theme.text.main} text-xl`}>Sobre</span>
                
                <span className={`${theme.text.main} text-xl`}>Projetos</span>

                <span className={`${theme.text.main} text-xl`}>Contato</span>

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