import styles from './Landing.module.scss';
import GlitchText from '../../../Components/GlitchEffect/GlitchEffect';
import wallpaper from '../../../assets/video/Wallpaper.mp4';
import wallpaperImg from '../../../assets/video/Wallpaper.jpg';

const Landing = () => {
    return (
        <div className={styles.landing}>
            <video className={styles.wallpaper} autoPlay muted loop>
                <source src={wallpaper} type='video/mp4' />
                <img id="alternative" src={wallpaperImg} />
            </video>
            <div className={styles.content}>
                <div className={styles.catchphrase}>
                    <h2>My</h2>
                    <GlitchText><h2>development</h2></GlitchText>
                    <br /><h2>journey</h2>
                </div>
                <a href="#" className={styles.button}>
                    <div></div>
                    <span>Discover</span>
                    <div></div>
                </a>
            </div>
        </div>
    )
}

export default Landing