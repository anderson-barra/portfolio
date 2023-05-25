import { PaletteContext } from "@/app/Contexts";
import { useContext } from "react";

export default function Work({children, id}: {children: React.ReactNode, id: string}) {
    const paletteContext = useContext(PaletteContext);

    return(
        <div id={id} className={`min-h-screen py-16 ${paletteContext.bg.dark}`}>

            <div className="flex flex-col gap-4">

                { children }

            </div>

        </div>
    );
}