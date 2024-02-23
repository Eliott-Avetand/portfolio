import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faVolumeLow } from '@fortawesome/free-solid-svg-icons';
import Separator from '../Separator/separator';
import styles from './Navbar.module.scss';
import hoverEffect from '../HoverEffect/HoverBtn.module.scss';
import { useSoundManager } from '../Sounds/SoundManager';

const Navbar = () => {
    const { toggleMusic, toggleSound ,canPlayMusic, canPlaySound, playSound } = useSoundManager();
    const location = useLocation();

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
        toggleMusic();
    }

    const changeSound = () => {
        toggleSound();
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
                <Link
                    className={`${styles.item} ${hoverEffect.hoverBtn}`}
                    onMouseOver={() => playSound("hover")}
                    onClick={() => playSound('select')}
                    to='/home'>Accueil</Link>
                <Link
                    className={`${styles.item} ${hoverEffect.hoverBtn}`}
                    onMouseOver={() => playSound("hover")}
                    onClick={() => playSound('select')}
                    to='/projects'>Projets</Link>
                <Link
                    className={`${styles.item} ${hoverEffect.hoverBtn}`}
                    onMouseOver={() => playSound("hover")}
                    onClick={() => playSound('select')}
                    to='/contact'>Contact</Link>
                <Link
                    className={`${styles.item} ${hoverEffect.hoverBtn}`}
                    onMouseOver={() => playSound("hover")}
                    onClick={() => playSound('select')}
                    to='/system'>Système</Link>
            </div>
            <div className={styles.options}>
                <span className={!canPlayMusic() ? styles.off : ""} onClick={changeMusic}><FontAwesomeIcon icon={faMusic} /></span>
                <span className={!canPlaySound() ? styles.off : ""} onClick={changeSound}><FontAwesomeIcon icon={faVolumeLow} /></span>
            </div>
        </div>
    );
}

export default Navbar;
