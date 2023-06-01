'use client'

import { LanguageContext, PaletteContext } from "@/app/Contexts";
import { useContext } from "react";
import { TechStack, WorkProfile } from "../contents";

export default function WorkProfile({profile}: {profile: WorkProfile}) {
    const languageContext = useContext(LanguageContext);
    const paletteContext = useContext(PaletteContext);

    return(
        <div className={`max-w-5xl mx-auto rounded-lg p-3 flex flex-col gap-4 ${paletteContext.bg.lightest}`}>
            
            <div className="flex flex-col gap-1">

                <a href={`#${ profile.name }`}>
                    <p className="flex text-4xl hover:underline">{ languageContext === "pt-BR" ? profile.name.ptBR : profile.name.enUS }</p>
                </a>

                <span className="text-sm italic">{ profile.releaseDate }</span>

            </div>

            <div className="flex flex-col lg:flex-row gap-2">

                <div className={`shadow-md basis-1/5 p-2 rounded-lg ${paletteContext.bg.light} flex flex-col gap-2 items-center`}>

                    {
                        profile.techStack.frontend.length === 0 && profile.techStack.backend.length === 0 && (
                            <span className="text-sm">
                                { languageContext === "pt-BR" ? "Nenhuma contribuição ao projeto" : "No contribution to the project" }
                            </span>
                        )
                    }

                    {
                        profile.techStack.frontend.length > 0 && profile.techStack.backend.length === 0 && (
                            <span className="text-sm">
                                { languageContext === "pt-BR" ? "Contribuição somente ao frontend" : "Frontend only contribution" }
                            </span>
                        )
                    }

                    {
                        profile.techStack.frontend.length === 0 && profile.techStack.backend.length > 0 && (
                            <span className="text-sm">
                                { languageContext === "pt-BR" ? "Contribuição somente ao backend" : "Backend only contribution" }
                            </span>
                        )
                    }

                    {
                        profile.techStack.frontend.length > 0 && profile.techStack.backend.length > 0 && (
                            <span className="text-sm">
                                { languageContext === "pt-BR" ? "Contribuição ao frontend e backend" : "Contribution to frontend and backend" }
                            </span>
                        )
                    }
                    

                    {
                        (profile.techStack.frontend.length > 0) && 
                        <div className="flex flex-col w-full">
                            
                            <p className="font-semibold">Front-end</p>

                            {
                                profile.techStack.frontend.map(tech => 
                                    <div key={ tech.name } className="flex flex-row items-center gap-1">
                                        <div className="grow flex flex-col">
                                            <p>{ tech.name }</p>
                                            <p className="text-xs">{ languageContext === "pt-BR" ? tech.type.ptBR : tech.type.enUS }</p>
                                        </div>
                                        <tech.icon size={25} color={paletteContext.icon.dark}/>
                                    </div>
                                )
                            }

                        </div>
                    }

                    {
                        (profile.techStack.backend.length > 0) && 
                        <div className="flex flex-col w-full">
                            
                            <p className="font-semibold">Back-end</p>

                            {
                                profile.techStack.backend.map(tech => 
                                    <div key={ tech.name } className="flex flex-row items-center gap-1">
                                        <div className="grow flex flex-col">
                                            <p>{ tech.name }</p>
                                            <p className="text-xs">{ languageContext === "pt-BR" ? tech.type.ptBR : tech.type.enUS }</p>
                                        </div>
                                        <tech.icon size={25} color={paletteContext.icon.dark}/>
                                    </div>
                                )
                            }

                        </div>
                    }

                </div>

                <div className="basis-4/5 p-2 flex flex-col gap-2">

                    <div className="flex flex-col">

                        <p className="font-semibold">{ languageContext === "pt-BR" ? "Descrição" : "Description" }</p>
                        
                        <p className="basis-4/5">{ languageContext === "pt-BR" ? profile.description.ptBR : profile.description.enUS }</p>

                    </div>

                    <div className="flex flex-col">

                        <p className="font-semibold">Links</p>

                        <div className="flex flex-col sm:flex-row">

                            {
                                profile.links.map((link) => (
                                    <a key={ link.text.ptBR } className={`shadow-md py-2 px-3 rounded-lg bg-white hover:bg-white/25`} href={ link.href } target="_blank">
                                        <div className="flex flex-row items-center justify-center gap-2">
                                            <link.icon size={25} color={paletteContext.icon.dark}/>
                                            <span>
                                                { languageContext === "pt-BR" ? link.text.ptBR : link.text.enUS }
                                            </span>
                                        </div>
                                    </a>
                                ))
                            }
                            
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}