import { useFooter } from '../../Contexts/useContext';
import styles from './Footer.module.scss';

const Footer = () => {
    const { footerText } = useFooter();

    return (
        <div className={styles.footer}>
            <p>{footerText}</p>
            <div className={styles.indicator}></div>
        </div>
    );
}

export default Footer;
