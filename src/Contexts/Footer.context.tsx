import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

interface FooterProviderProps {
    children: ReactNode;
}

export interface FooterContextType {
    footerText: string
    setFooterText: Dispatch<SetStateAction<string>>
}

export const FooterContext = createContext<FooterContextType | undefined>(undefined);

const FooterProvider = ({ children }: FooterProviderProps) => {
    const [footerText, setFooterText] = useState("");

    return (
        <FooterContext.Provider value={{ footerText, setFooterText }}>
            {children}
        </FooterContext.Provider>
    )
};

export default FooterProvider;