import { Dispatch, MouseEventHandler, SetStateAction, useState } from 'react';
import styles from './Button.module.scss';
import hoverEffect from '../HoverEffect/HoverBtn.module.scss';
import { useSoundManager } from '../../Contexts/useContext';
import cursor from '../../assets/Img/cursor_normal.png';
import cursorLock from '../../assets/Img/cursor_normal_lock.png';

interface buttonProps {
    btnName: string,
    btnDescription: string,
    setFooterText: Dispatch<SetStateAction<string>>,
    callback: (btnName: string) => void
}

const Button = ({ btnName, btnDescription, setFooterText, callback }: buttonProps) => {
    const { playSound } = useSoundManager();
    const [cursorNormal, setCursorNormal] = useState(cursor);

    const handleSelect = () => {
        playSound('select');
        setCursorNormal(cursorLock);
        callback(btnName);
    }

    const handleHover: MouseEventHandler<HTMLDivElement> = (e) => {
        const currentSelected = document.querySelector(`.${hoverEffect.selectedBtn}`);
        const target = e.target as HTMLDivElement;

        if (currentSelected !== target) {
            playSound("hover");
            setFooterText(btnDescription);
        }
        if (currentSelected)
            currentSelected.classList.remove(hoverEffect.selectedBtn, styles.selectedBtn);
        target.classList.add(hoverEffect.selectedBtn, styles.selectedBtn);
    }

    return (
        <div
            className={`${styles.button} ${hoverEffect.hoverBtn}`}
            onMouseOver={handleHover}
            onClick={handleSelect}
        >
            <img src={cursorNormal} alt="cursor" className={styles.cursor} />
            <div className={styles.indicator}></div>
            <p>{btnName}</p>
        </div>
    );
}

export default Button;
