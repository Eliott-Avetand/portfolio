import styles from './System.module.scss';
import Separator from '../../Components/Separator/separator';
import Button from '../../Components/Button/Button';
import Scrollable from '../../Components/BoxInfos/Scrollable/Scrollable';
import { pageProps } from '../../Interfaces/PagesProps.interface';
import { useLanguage } from '../../Contexts/useContext';

interface systemProps extends pageProps {}

const System = ({ setFooterText }: systemProps) => {
    const { dictionary, userLanguage, userLanguageChange } = useLanguage();

    return (
        <div className={styles.system}>
            <div className={styles.menu}>
                <Separator />
                <div className={styles.barWrapper}>
                    <div className={styles.items}>
                        {dictionary["system"].buttons.map((button, index) => (
                            <Button
                                callback={() => userLanguageChange(userLanguage === "fr" ? "en" : "fr")}
                                key={index}
                                btnName={button.title}
                                btnDescription={button.description}
                                setFooterText={setFooterText}
                            />
                            ))}
                    </div>
                </div>
            </div>
            <Scrollable title="Mentions légales" />
        </div>
    );
}

export default System;
