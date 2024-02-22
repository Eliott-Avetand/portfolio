import { Dispatch, SetStateAction } from 'react';
import styles from './Landing.module.scss';

interface props {
    setHasInteracted: Dispatch<SetStateAction<boolean>>;
}

const Landing = ({ setHasInteracted }: props) => {
    addEventListener('click', () => {
        console.log("azeaze");
        setHasInteracted(true);
    });

    return (
        <div className={styles.landing}>
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
