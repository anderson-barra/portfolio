'use client'

import { useState } from "react";
import { ThemeContext } from "./Contexts";
import { darkTheme, lightTheme } from "./themes";
import LandingSection from "./sections/landing";
import ProfileSection from "./sections/profile";

export default function SimpleSlider() {
  const [theme, setTheme] = useState(lightTheme);
    
  function switchTheme(): void {
    setTheme(theme.mode === "light" ? darkTheme : lightTheme);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme.bg.ground}>
        <LandingSection themeHandler={switchTheme}></LandingSection>
        <ProfileSection></ProfileSection>
      </div>
    </ThemeContext.Provider>
  );
}