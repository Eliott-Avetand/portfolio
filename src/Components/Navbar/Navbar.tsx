import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faVolumeLow } from '@fortawesome/free-solid-svg-icons';
import Separator from '../separator/separator';
import styles from './Navbar.module.scss';
import hoverEffect from '../HoverEffect/HoverBtn.module.scss';
import SoundManager from '../Sounds/SoundManager';

const soundManager = SoundManager();

const Navbar = () => {
    const location = useLocation();
    const [offMusic, setOffMusic] = useState(false);
    const [offSound, setOffSound] = useState(false);

    const removeActiveClass = () => {
        const active = document.querySelector(`.${styles.active}`);

        active?.classList.add(hoverEffect.hoverBtn);
        active?.classList.remove(styles.active);
    }

    const addActiveClass = (element: Element) => {
        element.classList.add(styles.active);
        element.classList.remove(hoverEffect.hoverBtn);
    }

    const changeMusic = () => {
        soundManager.ToggleMusic();
        setOffMusic(!soundManager.canPlayMusic());
    }

    const changeSound = () => {
        soundManager.ToggleSound();
        setOffSound(!soundManager.canPlaySound());
    }

    useEffect(() => {
        const items = document.querySelectorAll(`.${styles.item}`);
        
        removeActiveClass();
        items.forEach(link => {
            if (link.href.includes(location.pathname)) { addActiveClass(link); }
        });
    }, [location])
    

    return (
        <div className={styles.navbar}>
            <Separator />
            <div className={styles.items}>
                <Link className={`${styles.item} ${hoverEffect.hoverBtn}`} onMouseOver={() => soundManager.playSound("hover")} to='/home'>Accueil</Link>
                <Link className={`${styles.item} ${hoverEffect.hoverBtn}`} onMouseOver={() => soundManager.playSound("hover")} to='/projects'>Projets</Link>
                <Link className={`${styles.item} ${hoverEffect.hoverBtn}`} onMouseOver={() => soundManager.playSound("hover")} to='/contact'>Contact</Link>
                <Link className={`${styles.item} ${hoverEffect.hoverBtn}`} onMouseOver={() => soundManager.playSound("hover")} to='/system'>Système</Link>
            </div>
            <div className={styles.options}>
                <span className={offMusic ? styles.off : ""} onClick={changeMusic}><FontAwesomeIcon icon={faMusic} /></span>
                <span className={offSound ? styles.off : ""} onClick={changeSound}><FontAwesomeIcon icon={faVolumeLow} /></span>
            </div>
        </div>
    );
}

export default Navbar;
