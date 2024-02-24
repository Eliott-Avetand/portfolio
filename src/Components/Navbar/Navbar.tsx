import { Dispatch, MouseEvent, SetStateAction, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Separator from '../Separator/separator';
import styles from './Navbar.module.scss';
import styleBtn from '../Button/Button.module.scss';
import hoverEffect from '../HoverEffect/HoverBtn.module.scss';
import { useLanguage, useSoundManager } from '../../Contexts/useContext';

interface navbarProps {
    setFooterText: Dispatch<SetStateAction<string>>,
}

const Navbar = ({ setFooterText }: navbarProps) => {
    const { playSound } = useSoundManager();
    const { dictionary } = useLanguage();
    const location = useLocation();

    const onSelect = () => {
        playSound("select");
    }

    const removeActiveClass = () => {
        const active = document.querySelector(`.${styles.active}`);

        active?.classList.add(hoverEffect.hoverBtn);
        active?.classList.remove(styles.active);
    }

    const addActiveClass = (element: Element) => {
        element.classList.add(styles.active);
        element.classList.remove(hoverEffect.hoverBtn);
    }

    const handleHover = (e: MouseEvent<HTMLAnchorElement>, pageName: string) => {
        const currentSelected = document.querySelector(`.${hoverEffect.selectedBtn}`);
        const target = e.target as HTMLDivElement;

        if (currentSelected !== target) {
            playSound("hover");
            setFooterText(dictionary[pageName].description);
        }
        if (currentSelected)
            currentSelected.classList.remove(hoverEffect.selectedBtn, styleBtn.selectedBtn);
        target.classList.add(hoverEffect.selectedBtn);
    }

    useEffect(() => {
        const items = document.querySelectorAll<HTMLLinkElement>(`.${styles.item}`);
        
        removeActiveClass();
        items.forEach((link: HTMLLinkElement) => {
            if (link.href.includes(location.pathname)) { addActiveClass(link); }
        });
    }, [location])

    return (
        <div className={styles.navbar}>
            <Separator />
            <div className={styles.items}>
                <Link
                    className={`${styles.item} ${hoverEffect.hoverBtn}`}
                    onMouseOver={(e) => handleHover(e, "home")}
                    onClick={() => onSelect()}
                    to='/home'>Accueil</Link>
                <Link
                    className={`${styles.item} ${hoverEffect.hoverBtn}`}
                    onMouseOver={(e) => handleHover(e, "projects")}
                    onClick={() => onSelect()}
                    to='/projects'>Projets</Link>
                <Link
                    className={`${styles.item} ${hoverEffect.hoverBtn}`}
                    onMouseOver={(e) => handleHover(e, "contact")}
                    onClick={() => onSelect()}
                    to='/contact'>Contact</Link>
                <Link
                    className={`${styles.item} ${hoverEffect.hoverBtn}`}
                    onMouseOver={(e) => handleHover(e, "system")}
                    onClick={() => onSelect()}
                    to='/system'>Système</Link>
            </div>
        </div>
    );
}

export default Navbar;
