import { useContext } from 'react';
import { ThemeContext } from "../Contexts";

// icons
import { MdEmail } from 'react-icons/md';
import { SiGithub, SiLinkedin, } from "react-icons/si";

import Card, { CardActions, CardSubTitle, CardTitle } from '../components/card';
import Link from '../components/link';

export default function ContactSection() {
    const theme = useContext(ThemeContext);

    return (
        <div id='contato' className="max-w-5xl w-full mx-auto p-5 sm:p-10 flex flex-col items-center gap-2">

            <Card variant='flat' rounded={"rounded-t-xl"}>

                <span className={`${theme.text.main} text-2xl sm:text-3xl text-left`}>Contato</span>

            </Card>

            <div className='p-5 w-full flex flex-col gap-5 justify-start'>

                <Link href='mailto: andersonrog@outlook.com' Icon={MdEmail} label='Email'></Link>

                <Link href='https://www.linkedin.com/in/anderson-santana-415492206/' Icon={SiLinkedin} label='LinkedIn'></Link>

                <Link href='https://github.com/anderson-barra' Icon={SiGithub} label='GitHub'></Link>

            </div>

        </div>
    );
  }