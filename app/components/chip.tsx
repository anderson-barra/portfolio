import { useContext } from 'react';
import { ThemeContext } from "../Contexts";
import { IconType } from 'react-icons/lib';

export default function Chip({variant, Icon, label}: {variant: string | undefined, Icon: IconType, label: string}) {
    const theme = useContext(ThemeContext);

    switch (variant) {
        case "raised":
            return (
                <div className={`py-2 px-3 ${theme.bg.figure} shadow-xl rounded-lg flex flex-wrap flex-row justify-center items-center gap-2`}>
        
                    <Icon size={25} color={theme.icon.main}/>
        
                    <span className={`${theme.text.main} text-base sm:text-lg text-center`}>{label}</span>
        
                </div>
            );
        case "outlined":
            return (
                <div className={`py-2 px-3 border-[1px] ${theme.border} rounded-lg flex flex-wrap flex-row justify-center items-center gap-2`}>
        
                    <Icon size={25} color={theme.icon.main}/>
        
                    <span className={`${theme.text.main} text-base sm:text-lg text-center`}>{label}</span>
        
                </div>
            );
        case "flat":
            return (
                <div className={`py-2 px-3 ${theme.bg.figure} rounded-lg flex flex-wrap flex-row justify-center items-center gap-2`}>
        
                    <Icon size={25} color={theme.icon.main}/>
        
                    <span className={`${theme.text.main} text-base sm:text-lg text-center`}>{label}</span>
        
                </div>
            );
        default:
            return (
                <div className={`py-2 px-3 ${theme.bg.figure} shadow-xl rounded-lg flex flex-wrap flex-row justify-center items-center gap-2`}>
        
                    <Icon size={25} color={theme.icon.main}/>
        
                    <span className={`${theme.text.main} text-base sm:text-lg text-center`}>{label}</span>
        
                </div>
            );
    }
  }