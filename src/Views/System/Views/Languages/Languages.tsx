import styles from './Languages.module.scss';
import Button from '../../../../Components/Button/Button';
import { useLanguage } from '../../../../Contexts/useContext';

const Languages = () => {
    const { dictionary, userLanguageChange } = useLanguage();

    const changeLanguage = (btnName: string) => {
        if (btnName === "English")
            userLanguageChange("en");
        else
            userLanguageChange("fr");
    }

    return (
        <div className={styles.languages}>
            {dictionary["system"].buttons.find(button => button.title === 'Languages')?.buttons.map((button, index) => (
                <Button key={index} btnName={button.title} btnDescription={button.description} callback={changeLanguage} />
            ))}
        </div>
    );
}

export default Languages;
