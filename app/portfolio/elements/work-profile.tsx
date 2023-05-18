'use client'

import { LanguageContext } from "@/app/LanguageContext";
import { useContext } from "react";
import { TechStack } from "../contents";
import { ElementPalette } from "../palettes";

export default function WorkProfile({name, description, palette, techStack}: {name: string, description: string, palette: ElementPalette, techStack: TechStack}) {
    const languageContext = useContext(LanguageContext);

    return(
        <div id={ name } className={`rounded-lg p-3 flex flex-col gap-4 ${palette.bg.lightest}`}>
            
            <a href={`#${ name }`}>
                <p className="flex text-4xl hover:underline">{ name }</p>
            </a>

            <div className="flex flex-col lg:flex-row gap-2">

                <div className={`shadow-md basis-1/5 p-2 rounded-lg ${palette.bg.light} flex flex-col gap-2`}>

                {
                    (techStack.frontend.length > 0) && 
                    <div className="flex flex-col">
                        
                        <p className="font-semibold">Front-end</p>

                        {
                            techStack.frontend.map(tech => 
                                <div key={ tech.name } className="flex flex-row items-center gap-1">
                                    <div className="grow flex flex-col">
                                        <p>{ tech.name }</p>
                                        <p className="text-xs">{ languageContext === "pt-BR" ? tech.type.ptBR : tech.type.enUS }</p>
                                    </div>
                                    <tech.icon size={25} color={palette.icon.dark}/>
                                </div>
                            )
                        }

                    </div>
                }

                {
                    (techStack.backend.length > 0) && 
                    <div className="flex flex-col">
                        
                        <p className="font-semibold">Back-end</p>

                        {
                            techStack.backend.map(tech => 
                                <div key={ tech.name } className="flex flex-row items-center gap-1">
                                    <div className="grow flex flex-col">
                                        <p>{ tech.name }</p>
                                        <p className="text-xs">{ languageContext === "pt-BR" ? tech.type.ptBR : tech.type.enUS }</p>
                                    </div>
                                    <tech.icon size={25} color={palette.icon.dark}/>
                                </div>
                            )
                        }

                    </div>
                }

                </div>

              <div className="basis-4/5 p-2 flex flex-col">

                <p className="font-semibold">{ languageContext === "pt-BR" ? "Descrição" : "Description" }</p>
                
                <p className="basis-4/5">{ description }</p>

              </div>

            </div>

        </div>
    );
}