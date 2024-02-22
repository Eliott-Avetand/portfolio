import styles from './Landing.module.scss';

const Landing = () => {
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
