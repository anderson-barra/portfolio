import { useContext } from 'react';
import { ThemeContext } from "../Contexts";
import { IconType } from 'react-icons/lib';

export default function Link({href, Icon, label}: {href: string, Icon: IconType, label?: string}) {
    const theme = useContext(ThemeContext);

    return (
        <div className='flex items-center justify-start'>

            <a href={href} target='blank' className='flex flex-row gap-2 items-center justify-center'>

                <Icon size={25} color={theme.icon.main}/>

                <span className={`${theme.text.main} text-base sm:text-lg text-center`}>{label} ↗</span>

            </a>

        </div>
    );
  }