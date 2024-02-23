import styles from './Button.module.scss';
import hoverEffect from '../HoverEffect/HoverBtn.module.scss';
import { useSoundManager } from '../Sounds/SoundManager';
import cursor from '../../assets/Img/cursor_normal.png';
import cursorLock from '../../assets/Img/cursor_normal_lock.png';
import { useState } from 'react';

interface buttonProps {
    text: string
}

const Button = ({ text }: buttonProps) => {
    const { playSound } = useSoundManager();
    const [cursorNormal, setCursorNormal] = useState(cursor);

    const handleSelect = () => {
        playSound('select');
        setCursorNormal(cursorLock);
    }

    return (
        <div
            className={`${styles.button} ${hoverEffect.hoverBtn}`}
            onMouseOver={() => playSound("hover")}
            onMouseLeave={() => setCursorNormal(cursor)}
            onClick={handleSelect}
        >
            <img src={cursorNormal} alt="cursor" className={styles.cursor} />
            <div className={styles.indicator}></div>
            <p>{text}</p>
        </div>
    );
}

export default Button;
