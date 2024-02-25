import { useContext } from "react";
import { LanguageContext, LanguageContextType } from "./Language.context";
import { SoundContext, SoundContextType } from "./Sound.context";
import { ThemeContext, ThemeContextType } from "./Theme.context";

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);

    if (!context)
        throw new Error('useLanguage must be a provider.');
    return context;
}

export const useSound = (): SoundContextType => {
    const context = useContext(SoundContext);

    if (!context)
        throw new Error('useSound must be a provider.');
    return context;
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);

    if (!context)
        throw new Error('useTheme must be a provider.');
    return context
}