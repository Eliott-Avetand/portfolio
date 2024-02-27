import styles from './Modes.module.scss';
import Button from '../../../../Components/Button/Button';
import { useLanguage, useTheme } from '../../../../Contexts/useContext';

const Modes = () => {
    const { dictionary } = useLanguage();
    const { setTheme } = useTheme();

    const changeMode = (btnName: string) => {
        if (btnName === "Light" || btnName === "Clair")
            setTheme("light");
        else
            setTheme("dark");
    }

    return (
        <div className={styles.modes}>
            {dictionary["system"].buttons.find(button => button.title === 'Modes')?.buttons.map((button, index) => (
                <Button key={index} btnName={button.title} btnDescription={button.description} callback={changeMode} />
                ))}
        </div>
    );
}

export default Modes;
