import { Dispatch, MouseEvent, SetStateAction, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';
import styleBtn from '../Button/Button.module.scss';
import hoverEffect from '../HoverEffect/HoverBtn.module.scss';
import { useLanguage, useSound } from '../../Contexts/useContext';
import Yorha from '../../assets/Img/yorha_logo.png';

interface navbarProps {
    setFooterText: Dispatch<SetStateAction<string>>,
}

const Navbar = ({ setFooterText }: navbarProps) => {
    const { playSound } = useSound();
    const { dictionary } = useLanguage();
    const location = useLocation();

    const onSelect = () => {
        playSound("select");
    }

    const toggleMenu = () => {
        const menu = document.querySelector<HTMLDivElement>(`.${styles.items}`);
        
        if (menu) menu.classList.toggle(styles.deployed);
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
        const currentSelected = document.querySelector(`.${hoverEffect.focusBtn}`);
        const target = e.target as HTMLDivElement;

        if (currentSelected !== target) {
            playSound("hover");
            setFooterText(dictionary[pageName].description);
        }
        if (currentSelected)
            currentSelected.classList.remove(hoverEffect.focusBtn, styleBtn.focusBtn);
        target.classList.add(hoverEffect.focusBtn);
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
            <img src={Yorha} alt="Yorha" width={50} onClick={toggleMenu} />
            <div className={styles.items}>
                <Link
                    className={`${styles.item} ${hoverEffect.hoverBtn}`}
                    onMouseOver={(e) => handleHover(e, "home")}
                    onClick={() => onSelect()}
                    to='/home'>{dictionary["home"].title}</Link>
                <Link
                    className={`${styles.item} ${hoverEffect.hoverBtn}`}
                    onMouseOver={(e) => handleHover(e, "projects")}
                    onClick={() => onSelect()}
                    to='/projects'>{dictionary["projects"].title}</Link>
                <Link
                    className={`${styles.item} ${hoverEffect.hoverBtn}`}
                    onMouseOver={(e) => handleHover(e, "contact")}
                    onClick={() => onSelect()}
                    to='/contact'>{dictionary["contact"].title}</Link>
                <Link
                    className={`${styles.item} ${hoverEffect.hoverBtn}`}
                    onMouseOver={(e) => handleHover(e, "system")}
                    onClick={() => onSelect()}
                    to='/system'>{dictionary["system"].title}</Link>
            </div>
        </div>
    );
}

export default Navbar;
