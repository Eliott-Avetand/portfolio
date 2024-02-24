import Separator from '../../Components/Separator/separator';
import styles from './Contact.module.scss';
import hoverEffect from '../../Components/HoverEffect/HoverBtn.module.scss';
import Footer from '../../Components/Footer/Footer';
import MainInfo from '../../Components/BoxInfos/MainInfos/MainInfo';
import { useSoundManager } from '../../Components/Sounds/SoundManager';

const Contact = () => {
    const { playSound } = useSoundManager();

    return (
        <div className={styles.contact}>
            <h1>CONTACT</h1>
            <div className={styles.content}>
                <div className={styles.main}>
                    <Separator />
                    <div className={styles.form}>
                        <input type='text' placeholder='Nom' />
                        <input type='email' placeholder='Email' />
                        <input type='text' placeholder='Objet' />
                        <textarea rows={5} cols={50} placeholder="Message" />
                        <button
                            className={`${styles.submit} ${hoverEffect.hoverBtn}`}
                            onMouseEnter={() => playSound("hover")}
                            onClick={() => playSound("select")}
                        >Contacter</button>
                    </div>
                </div>
                <MainInfo />
            </div>
            <Footer text="N'hésitez pas à me contacter pour toutes demandes !" keys={["Echap", "Entrée"]} />
        </div>
    );
}

export default Contact;
