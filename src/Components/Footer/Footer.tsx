import styles from './Footer.module.scss';

interface footerProps {
    text: string
}

const Footer = ({ text }: footerProps) => {
    return (
        <div className={styles.footer}>
            <p>{text}</p>
            <div className={styles.indicator}></div>
        </div>
    );
}

export default Footer;
