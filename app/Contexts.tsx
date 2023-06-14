import { Context, createContext } from "react";
import { Theme, lightTheme } from "./themes";

export const ThemeContext: Context<Theme> = createContext(lightTheme);