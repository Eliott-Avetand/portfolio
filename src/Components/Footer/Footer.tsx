import styles from './Footer.module.scss';
import Separator from '../Separator/separator';

interface footerProps {
    text: string,
    keys: string[]
}

type keysAvailableType = {
    [key: string]: string;
}

const Footer = ({ text, keys }: footerProps) => {
    const keysAvailable: keysAvailableType = {
        "Echap": "Retour",
        "Entrée": "Sélectionner"
    }

    return (
        <div className={styles.footer}>
            <Separator inversed={true} />
            <div className={styles.content}>
                <p>{text}</p>
                <div className={styles.keys}>
                    {keys.map((key, index) => (
                        <div key={index} className={styles.key}>
                            <div className={styles.input}>{key}</div>
                            <div className={styles.description}>{keysAvailable[key]}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.indicator}></div>
        </div>
    );
}

export default Footer;
