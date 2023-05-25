import { PaletteContext } from "@/app/Contexts";
import { useContext } from "react";

export default function WorkCarousel() {
    const paletteContext = useContext(PaletteContext);

    return(
        <div className={`w-sreen`}>

            <p className={`p-5 ${paletteContext.text.lightest} font-semibold max-w-5xl mx-auto`}>Galeria</p>

            <div className="no-scrollbar scroll-smooth snap-x snap-mandatory flex overflow-x-auto gap-2">

                <div className="shrink-0 w-[5vw] md:w-[15vw] xl:w-[20vw] 2xl:w-[25vw]"></div>

                <div id="1" className="snap-center flex shrink-0 hover:opacity-50">
                    <a href="#1">
                        <img className="w-[90vw] md:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] rounded-lg" src="https://wallpapercave.com/wp/wp5405231.jpg" alt="" />
                    </a>
                </div>
                
                <div id="2" className="snap-center flex shrink-0 hover:opacity-50">
                    <a href="#2">
                        <img className="w-[90vw] md:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] rounded-lg" src="https://i.pinimg.com/originals/11/1a/03/111a03133d14214539c96e0f657dff1a.png" alt="" />
                    </a>
                </div>

                <div id="3" className="snap-center flex shrink-0 hover:opacity-50">
                    <a href="#3">
                        <img className="w-[90vw] md:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuO2DuHm-RyZwdEoQ8zNMESA3y029UZKvFQ&usqp=CAU" alt="" />
                    </a>
                </div>

                <div className="shrink-0 w-[5vw] md:w-[15vw] xl:w-[20vw] 2xl:w-[25vw]"></div>

            </div>

        </div>
    );
}