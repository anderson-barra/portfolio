'use client'

import WorkProfile from "./portfolio/elements/work-profile";
import Work from "./portfolio/elements/work";
import WorkHighlight from "./portfolio/elements/work-highlight";
import { concludingSection, openingSection, portifolio } from "./portfolio/contents";
import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

export default function SimpleSlider() {
  const [language, setLanguage] = useState('pt-BR');
    
  function switchLanguage() {
    setLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR');
  }

  return (
    <LanguageContext.Provider value={language}>

      <div className="bg-gradient-to-t from-white via-black to-white">

        <div className="min-h-screen p-8 flex flex-col items-center lg:justify-start gap-5 max-w-5xl mx-auto">

          <p className="text-center text-4xl">{ language === "pt-BR" ? openingSection.welcomeText.ptBR : openingSection.welcomeText.enUS }</p>

          <div className="w-1/2 sm:w-1/4 relative flex justify-center overflow-visible">
            <img className="rounded-full w-full" src={ openingSection.identityPhotoSrc } alt="" />
            <div className="absolute -right-16 -top-4">
              <button onClick={switchLanguage} className="px-2 py-1 relative bg-gray-900 rounded-lg drop-shadow-2xl transition-transform ease hover:scale-105 before:content-[''] before:absolute before:bg-gray-900 before:h-[20px] before:w-[30px] before:top-[calc(100%-2px)] before:left-[1rem] before:clip-path-arrow">
                <span className="text-gray-200 font-bold text-xs lg:text-sm">{ language === "pt-BR" ? "Speak English?" : "Fala Português?" }</span>
              </button>
            </div>
          </div>

          <div className="grow p-2">
            {
              openingSection.introductoryTexts.map(text => 
                <p key={text.ptBR} className="text-center text-2xl">{ language === "pt-BR" ? text.ptBR : text.enUS }</p>
              )
            }
          </div>

        </div>

        {
          portifolio.map(work => 
            <Work key={work.profile.name.ptBR} palette={work.palette}>
              
              <WorkProfile
                name={language === "pt-BR" ? work.profile.name.ptBR : work.profile.name.enUS}
                description={language === "pt-BR" ? work.profile.description.ptBR : work.profile.description.enUS}
                techStack={work.profile.techStack}
                palette={work.palette}
              ></WorkProfile>

              {
                work.highlights.map(highlight => 
                  <WorkHighlight
                    key={highlight.title.ptBR}
                    title={language === "pt-BR" ? highlight.title.ptBR : highlight.title.enUS}
                    description={language === "pt-BR" ? highlight.description.ptBR : highlight.description.enUS}
                    palette={work.palette}
                    Icon={highlight.icon}
                    imgSrc={highlight.imgSrc}
                  ></WorkHighlight> 
                )
              }

            </Work>
          )
        }

        <div className="p-8 flex flex-col items-center gap-2 max-w-5xl mx-auto">

          {
            concludingSection.conclusionTexts.map(text => 
              <p key={text.ptBR} className="text-center text-2xl">{ language === "pt-BR" ? text.ptBR : text.enUS }</p>
            )
          }

          <div className="p-4 flex flex-col gap-1">

            {
              concludingSection.socialMediaReferrals.map(referral => 
                <a key={ referral.title } className="w-fit" href={ referral.link } target="_blank">
                  <div className="flex flex-row items-center justify-center gap-4">
                    <referral.icon size={30}/>
                    <span className="after:content-['_↗'] ...">
                      { referral.title }
                    </span>
                  </div>
                </a>
              )
            }

          </div>

        </div>

      </div>

    </LanguageContext.Provider>
  );
}