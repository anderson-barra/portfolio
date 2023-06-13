'use client'

import { useState } from "react";
import { LanguageContext } from "./Contexts";

export default function SimpleSlider() {
  const [language, setLanguage] = useState('pt-BR');
    
  function switchLanguage() {
    setLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR');
  }

  return (
    <LanguageContext.Provider value={language}>

    </LanguageContext.Provider>
  );
}