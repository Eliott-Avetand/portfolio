import { MouseEventHandler, useState } from 'react';
import styles from './Button.module.scss';
import hoverEffect from '../HoverEffect/HoverBtn.module.scss';
import { useFooter, useSound } from '../../Contexts/useContext';
import cursor from '../../assets/Img/cursor_normal.png';
import cursorLock from '../../assets/Img/cursor_normal_lock.png';

interface buttonProps {
    btnName: string,
    btnDescription: string,
    callback: (btnName: string) => void
}

const Button = ({ btnName, btnDescription, callback }: buttonProps) => {
    const { playSound } = useSound();
    const { setFooterText } = useFooter();
    const [cursorNormal, setCursorNormal] = useState(cursor);

    const handleSelect: MouseEventHandler<HTMLDivElement> = (e) => {
        const currentSelected = document.querySelector(`.${hoverEffect.selectedBtn}`);
        const target = e.target as HTMLDivElement;

        if (currentSelected !== target) {
            playSound('select');
            setCursorNormal(cursorLock);
            if (currentSelected) {
                currentSelected.classList.remove(hoverEffect.selectedBtn, styles.selectedBtn);
            }
        }
        target.classList.add(hoverEffect.selectedBtn, styles.selectedBtn);
        callback(btnName);
    }

    const handleHover: MouseEventHandler<HTMLDivElement> = (e) => {
        const currentFocused = document.querySelector(`.${hoverEffect.focusBtn}`);
        const target = e.target as HTMLDivElement;
        
        if (currentFocused !== target) {
            playSound("hover");
            setFooterText(btnDescription);
            if (currentFocused) {
                currentFocused.classList.remove(hoverEffect.focusBtn, styles.focusBtn);
                setCursorNormal(cursor);
            }
        }
        target.classList.add(hoverEffect.focusBtn, styles.focusBtn);
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
