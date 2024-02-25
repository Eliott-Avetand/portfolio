import styles from './System.module.scss';
import Button from '../../Components/Button/Button';
import { pageProps } from '../../Interfaces/PagesProps.interface';
import { useLanguage, useTheme } from '../../Contexts/useContext';
import { callbacks } from './Callbacks/SystemCallbacks';
import Scrollable from '../../Components/BoxInfos/Scrollable/Scrollable';

interface systemProps extends pageProps {}

const System = ({ setFooterText }: systemProps) => {
    const { dictionary, userLanguageChange } = useLanguage();
    const { setTheme } = useTheme();

    const changeLanguage = (btnName: string) => {
        if (btnName === "English")
            userLanguageChange("en");
        else
            userLanguageChange("fr");
    }

    const changeMode = (btnName: string) => {
        if (btnName === "Light" || btnName === "Clair")
            setTheme("light");
        else
            setTheme("dark");
    }

    return (
        <div className={styles.system}>
            <div className={styles.menu}>
                <div className={styles.items}>
                    {dictionary["system"].buttons.map((button, index) => (
                        <Button
                            callback={callbacks[button.callback]}
                            key={index}
                            btnName={button.title}
                            btnDescription={button.description}
                            setFooterText={setFooterText}
                        />
                        ))}
                </div>
            </div>
            <div className={`${styles.zone2} ${styles.languages}`}>
                {dictionary["system"].buttons.find(button => button.title === 'Language')?.buttons.map((button, index) => (
                    <Button key={index} btnName={button.title} btnDescription={button.description} setFooterText={setFooterText} callback={changeLanguage} />
                    ))}
            </div>
            <div className={`${styles.zone2} ${styles.modes}`}>
                {dictionary["system"].buttons.find(button => button.title === 'Mode')?.buttons.map((button, index) => (
                    <Button key={index} btnName={button.title} btnDescription={button.description} setFooterText={setFooterText} callback={changeMode} />
                    ))}
            </div>
            <Scrollable title="Mentions légales" className={styles.zone2} />
        </div>
    );
}

export default System;
