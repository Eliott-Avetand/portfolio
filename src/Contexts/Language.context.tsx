import { ReactNode, createContext, useEffect, useState } from 'react';
import { application } from '../Interfaces/Generic.interface';
import { PagesFR } from '../Locales/FR/PagesFR';
import { PagesEN } from '../Locales/EN/PagesEN';

interface languageProviderProps {
    children: ReactNode;
}

export interface LanguageContextType {
    userLanguage: string,
    userLanguageChange: (newLanguage: string) => void,
    dictionary: application,
}

const dictionaryList: { [lang: string]: application } = {
    "fr": PagesFR,
    "en": PagesEN
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LanguageProvider = ({ children }: languageProviderProps) => {
    const [userLanguage, setUserLanguage] = useState<string>(localStorage.getItem("lang") ?? 'fr');
    const [dictionary, setDictionary] = useState<application>(dictionaryList[userLanguage]);

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