import { ReactNode, createContext, useEffect, useState } from 'react';
import { Pages } from '../Interfaces/PageInterface.interface';
import { Lang } from '../Interfaces/PageInterface.interface';
import en from '../Locales/EN/Pages.json';
import fr from '../Locales/FR/Pages.json';

interface languageProviderProps {
    children: ReactNode;
}

export interface LanguageContextType {
    userLanguage: string,
    userLanguageChange: (newLanguage: string) => void,
    dictionary: Pages,
}

const dictionaryList: Lang = { en, fr };

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LanguageProvider = ({ children }: languageProviderProps) => {
    const [userLanguage, setUserLanguage] = useState<string>(localStorage.getItem("lang") ?? 'fr');
    const [dictionary, setDictionary] = useState<Pages>(dictionaryList[userLanguage]);

    const userLanguageChange = (newLanguage: string) => {
        setUserLanguage(newLanguage);
        localStorage.setItem('lang', newLanguage);
    }

    useEffect(() => {
        setDictionary(dictionaryList[userLanguage]);
    }, [userLanguage])
    

    return (
        <LanguageContext.Provider value={{ userLanguage, userLanguageChange, dictionary }}>
            {children}
        </LanguageContext.Provider>
    )
};

export default LanguageProvider;