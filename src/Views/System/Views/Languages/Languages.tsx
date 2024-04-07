import styles from './Languages.module.scss';
import Button from '../../../../Components/Button/Button';
import { useFooter, useLanguage } from '../../../../Contexts/useContext';
import { useEffect } from 'react';

const Languages = () => {
    const { dictionary, userLanguageChange } = useLanguage();
    const { setFooterText } = useFooter();

    const callbacks: { [fnName: string]: () => void } = {
        frenchCallback: () => userLanguageChange("fr"), 
        englishCallback: () => userLanguageChange("en") 
    }

    useEffect(() => {
        setFooterText(dictionary.system.subpages.languages.footer);
    }, [setFooterText, dictionary]);

    return (
        <div className={styles.languages}>
            {
                dictionary.system.subpages.languages.buttons.map((button, index) => (
                    <Button
                        key={index}
                        btnName={button.title}
                        btnDescription={button.footer}
                        callback={callbacks[button.callback]}
                    />
                ))
            }
        </div>
    );
}

export default Languages;
