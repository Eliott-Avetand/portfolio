import { useContext } from "react";
import { LanguageContext, LanguageContextType } from "./Language.context";
import { SoundContext, SoundContextType } from "./Sound.context";

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);

    if (!context)
        throw new Error('useLanguage must be a provider.');
    return context;
}

export const useSoundManager = (): SoundContextType => {
    const context = useContext(SoundContext);

    if (!context)
        throw new Error('useSoundManager must be a provider.');
    return context;
}