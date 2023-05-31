import { IconType } from "react-icons/lib";
import { PaletteContext } from "@/app/Contexts";
import { useContext } from "react";

export default function WorkHighlight({title, description, Icon, imgSrc}: {title: string, description: string, Icon: IconType, imgSrc: string}) {
    const paletteContext = useContext(PaletteContext);

    return(
        <div className={`max-w-5xl mx-auto p-3 lg:p-6 ${paletteContext.border.light} border-l-0 lg:border-l-2 flex flex-col lg:flex-row gap-4`}>

            <div className={`order-1 basis-1/2 pt-3 ${paletteContext.border.light} border-t lg:border-t-0 flex flex-col gap-2`}>

            <div className="flex flex-row items-center gap-4">
                <Icon size={30} color={paletteContext.icon.lightest}/>
                <p className={`${paletteContext.text.lightest} text-2xl`}>{ title }</p>
            </div>

            <p className={paletteContext.text.light}>
                { description }
            </p>

            </div>
            
            <div className="order-2 basis-1/2">
                <img src={imgSrc} alt="" />
            </div>

        </div>
    );
}