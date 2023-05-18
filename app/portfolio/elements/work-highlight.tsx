import { IconType } from "react-icons/lib";
import { ElementPalette } from "../palettes";

export default function WorkHighlight({title, description, palette, Icon, imgSrc}: {title: string, description: string, palette: ElementPalette, Icon: IconType, imgSrc: string}) {
    return(
        <div className={`p-3 lg:p-6 ${palette.border.light} border-l-0 lg:border-l-2 flex flex-col lg:flex-row gap-4`}>

            <div className={`order-1 basis-1/2 pt-3 ${palette.border.light} border-t lg:border-t-0 flex flex-col gap-2`}>

            <div className="flex flex-row items-center gap-4">
                <Icon size={30} color={palette.icon.lightest}/>
                <p className={`${palette.text.lightest} text-2xl`}>{ title }</p>
            </div>

            <p className={palette.text.light}>
                { description }
            </p>

            </div>
            
            <div className="order-2 basis-1/2">
                <img src={imgSrc} alt="" />
            </div>

        </div>
    );
}