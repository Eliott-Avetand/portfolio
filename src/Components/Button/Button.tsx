import styles from './Button.module.scss';
import hoverEffect from '../HoverEffect/HoverBtn.module.scss';
import { useSoundManager } from '../Sounds/SoundManager';

interface buttonProps {
    text: string
}

const Button = ({ text }: buttonProps) => {
    const { playSound } = useSoundManager();

    return (
        <div
            className={`${styles.button} ${hoverEffect.hoverBtn}`}
            onMouseOver={() => playSound("hover")}
            onClick={() => playSound('select')}
        >
            <div className={styles.indicator}></div>
            <p>{text}</p>
        </div>
    );
}

export default Button;
