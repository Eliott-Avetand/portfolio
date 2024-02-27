import { useContext } from "react";
import { LanguageContext, LanguageContextType } from "./Language.context";
import { SoundContext, SoundContextType } from "./Sound.context";
import { ThemeContext, ThemeContextType } from "./Theme.context";
import { FooterContext, FooterContextType } from "./Footer.context";

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);

    if (!context)
        throw new Error('useLanguage must be provided here.');
    return context;
}

export const useSound = (): SoundContextType => {
    const context = useContext(SoundContext);

    if (!context)
        throw new Error('useSound must be provided here.');
    return context;
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);

    if (!context)
        throw new Error('useTheme must be provided here.');
    return context
}

export const useFooter = (): FooterContextType => {
    const context = useContext(FooterContext);

    if (!context)
        throw new Error('useFooter must be provided here.');
    return context
}