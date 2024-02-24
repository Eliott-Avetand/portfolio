import styles from './Button.module.scss';
import hoverEffect from '../HoverEffect/HoverBtn.module.scss';
import { useSoundManager } from '../Sounds/SoundManager';
import cursor from '../../assets/Img/cursor_normal.png';
import cursorLock from '../../assets/Img/cursor_normal_lock.png';
import { Dispatch, SetStateAction, useState } from 'react';

interface buttonProps {
    btnName: string,
    btnDescription: string,
    setFooterText: Dispatch<SetStateAction<string>>,
    onClickEvent: (btnName: string) => void
}

const Button = ({ btnName, btnDescription, setFooterText, onClickEvent }: buttonProps) => {
    const { playSound } = useSoundManager();
    const [cursorNormal, setCursorNormal] = useState(cursor);

    const handleSelect = () => {
        playSound('select');
        setCursorNormal(cursorLock);
        onClickEvent(btnName);
        document.querySelector(`.${styles.button}`)?.classList.add(hoverEffect.selected);
    }

    const handleHover = () => {
        playSound("hover");
        setFooterText(btnDescription);
    }

    const handleExit = () => {
        setCursorNormal(cursor);
        setFooterText("");
    }

    return (
        <div
            className={`${styles.button} ${hoverEffect.hoverBtn}`}
            onMouseOver={handleHover}
            onMouseLeave={handleExit}
            onClick={handleSelect}
        >
            <img src={cursorNormal} alt="cursor" className={styles.cursor} />
            <div className={styles.indicator}></div>
            <p>{btnName}</p>
        </div>
    );
}

export default Button;
