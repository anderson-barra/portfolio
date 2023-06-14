import { useContext } from 'react';
import { ThemeContext } from "../Contexts";
import { IconType } from 'react-icons/lib';

export default function Button({variant, Icon, label}: {variant: string | undefined, Icon: IconType, label: string}) {
    const theme = useContext(ThemeContext);

    switch (variant) {
        case "flat":
            return (
                <button className={`py-2 px-4 ${theme.bg.contrast} transition rounded-lg flex flex-row justify-center items-center gap-2 hover:scale-105 hover:shadow-2xl`}>
        
                    <Icon size={25} color={theme.icon.contrast}/>
        
                    <span className={`${theme.text.contrast} text-lg text-center`}>{label}</span>
        
                </button>
            );
        case "raised":
            return (
                <button className={`py-2 px-4 ${theme.bg.contrast} transition shadow-xl rounded-lg flex flex-row justify-center items-center gap-2 hover:scale-105 hover:shadow-2xl`}>
        
                    <Icon size={25} color={theme.icon.contrast}/>
        
                    <span className={`${theme.text.contrast} text-lg text-center`}>{label}</span>
        
                </button>
            );
        default:
            return (
                <button className={`py-2 px-4 ${theme.bg.contrast} rounded-lg flex flex-row justify-center items-center gap-2`}>
        
                    <Icon size={25} color={theme.icon.contrast}/>
        
                    <span className={`${theme.text.contrast} text-lg text-center`}>{label}</span>
        
                </button>
            );
    }
  }