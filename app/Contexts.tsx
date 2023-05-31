import { Context, createContext } from "react";
import { ElementPalette, slatePalette } from "./features/portfolio/palettes";

export const LanguageContext: Context<string> = createContext('pt-BR');

export const PaletteContext: Context<ElementPalette> = createContext(slatePalette);