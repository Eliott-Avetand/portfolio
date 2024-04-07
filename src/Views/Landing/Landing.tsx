import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './Landing.module.scss';
import { useLanguage, useSound } from '../../Contexts/useContext';

// Import Text
import Loading from '../Loading/Loading';

interface props {
    setHasInteracted: Dispatch<SetStateAction<boolean>>,
}

const Landing = ({ setHasInteracted }: props) => {
    const { playSound } = useSound();
    const { dictionary } = useLanguage();
    const [visited, setVisited] = useState<boolean>(localStorage.getItem('visited') !== null);
    const [clicked, setClicked] = useState(false);

    const interacted = () => {
        if (!clicked) {
            setClicked(true);
            document.querySelector("#fade")?.classList.remove(styles.fadein);
            document.querySelector("#fade")?.classList.add(styles.fadeout);
            playSound("openMenu");
            setTimeout(() => {
                setHasInteracted(true);
            }, 2000);
        }
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
            <div className={styles.fade} id='fade'>
                <div className={styles.wallpaper}></div>
                <div className={styles.content}>
                    <h1>ElioTT:Avetand</h1>
                    <p>{dictionary.landing.title}</p>
                </div>
                <i>{dictionary.landing.rights}</i>
            </div>
        </div>
        : <Loading setVisited={setVisited} />
    )
}

export default Landing;
