import { ElementPalette } from "../palettes";

export default function Work({children, palette}: {children: React.ReactNode, palette: ElementPalette}) {
    return(
        <div className={`min-h-screen py-16 ${palette.bg.dark}`}>

            <div className="max-w-5xl mx-auto flex flex-col gap-4">

                { children }

            </div>

        </div>
    );
}