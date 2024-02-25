import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './Landing.module.scss';
import { useLanguage, useSound } from '../../Contexts/useContext';

// Import Text
import TextFR from '../../Locales/FR/Landing.json';
import TextEN from '../../Locales/EN/Landing.json';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

interface props {
    setHasInteracted: Dispatch<SetStateAction<boolean>>,
}

const Landing = ({ setHasInteracted }: props) => {
    const navigate = useNavigate();
    const { playSound } = useSound();
    const { userLanguage } = useLanguage();
    const [visited, setVisited] = useState<boolean>(localStorage.getItem('visited') !== null);

    const texts = userLanguage === "fr" ? TextFR : TextEN;

    const interacted = () => {
        document.querySelector("#fade")?.classList.remove(styles.fadein);
        document.querySelector("#fade")?.classList.add(styles.fadeout);
        playSound("openMenu");
        setTimeout(() => {
            setHasInteracted(true);
            navigate("/home");
        }, 2000);
    }

    useEffect(() => {
        if (localStorage.getItem('firstVisit') !== null) {
            document.querySelector("#fade")?.classList.add(styles.fadein);
            localStorage.removeItem('firstVisit');
        }
    }, [visited]);

    return (
        visited
        ? <div className={styles.landing} onClick={interacted}>
            <div id='fade'></div>
            <div className={styles.wallpaper}></div>
            <div className={styles.content}>
                <h1>ElioTT:Avetand</h1>
                <p>{texts.title}</p>
                <i>{texts.rights}</i>
            </div>
        </div>
        : <Loading setVisited={setVisited} />
    )
}

export default Landing;
