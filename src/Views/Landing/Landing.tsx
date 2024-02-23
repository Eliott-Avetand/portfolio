import { Dispatch, SetStateAction, useEffect } from 'react';
import styles from './Landing.module.scss';
import { useSoundManager } from '../../Components/Sounds/SoundManager';

interface props {
    setHasInteracted: Dispatch<SetStateAction<boolean>>;
}

const Landing = ({ setHasInteracted }: props) => {
    const { playSound } = useSoundManager();

    const interacted = () => {
        document.querySelector("#fade")?.classList.remove(styles.fadein);
        document.querySelector("#fade")?.classList.add(styles.fadeout);
        playSound("openMenu");
        setTimeout(() => { setHasInteracted(true); }, 2000);
    }

    useEffect(() => {
        if (localStorage.getItem('firstVisit') !== null) {
            document.querySelector("#fade")?.classList.add(styles.fadein);
            localStorage.removeItem('firstVisit');
        }
    }, [])
    

    return (
        <div className={styles.landing} onClick={interacted}>
            <div id='fade'></div>
            <div className={styles.wallpaper}></div>
            <div className={styles.content}>
                <h1>ElioTT:Avetand</h1>
                <p>Cliquez sur la page</p>
                <i>2024, Avetand Eliott, All Rights Reserved.</i>
            </div>
        </div>
    )
}

export default Landing;
