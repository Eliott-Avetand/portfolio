import { ReactNode, createContext, useState } from 'react';
import { dictionaryList } from '../Locales/Language';
import { Pages } from '../Interfaces/PageInterface.interface';

interface languageProviderProps {
    children: ReactNode;
}

export interface LanguageContextType {
    userLanguage: string,
    userLanguageChange: (newLanguage: string) => void,
    dictionary: Pages,
}

export const LanguageContext = createContext<LanguageContextType>({
    userLanguage: "fr",
    userLanguageChange: () => {},
    dictionary: dictionaryList.fr,
});

const LanguageProvider = ({ children }: languageProviderProps) => {
    const [userLanguage, setUserLanguage] = useState<string>(localStorage.getItem("lang") ?? 'fr');

    const provider = {
        userLanguage,
        userLanguageChange: (newLanguage: string) => {
            setUserLanguage(newLanguage);
            localStorage.setItem('lang', newLanguage);
        },
        dictionary: dictionaryList[userLanguage as keyof typeof dictionaryList],
    };    

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )
};

export default LanguageProvider;