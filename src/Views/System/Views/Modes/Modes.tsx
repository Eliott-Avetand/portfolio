import { useEffect } from 'react';
import styles from './Modes.module.scss';
import Button from '../../../../Components/Button/Button';
import { useFooter, useLanguage, useTheme } from '../../../../Contexts/useContext';

const Modes = () => {
    const { dictionary } = useLanguage();
    const { setTheme } = useTheme();
    const { setFooterText } = useFooter();

    const callbacks: { [fnName: string]: () => void } = {
        lightThemeCallback: () => setTheme("light"), 
        darkThemeCallback: () => setTheme("dark") 
    }

    useEffect(() => {
        setFooterText(dictionary.system.subpages.modes.footer);
    }, [setFooterText, dictionary]);

    return (
        <div className={styles.modes}>
            {
                dictionary.system.subpages.modes.buttons.map((button, index) => (
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

export default Modes;
