import Separator from '../../Components/Separator/separator';
import styles from './Contact.module.scss';
import MainInfo from '../../Components/BoxInfos/MainInfos/MainInfo';
import { useLanguage } from '../../Contexts/useContext';
import { pageProps } from '../../Interfaces/PagesProps.interface';
import Button from '../../Components/Button/Button';

interface contactProps extends pageProps {}

const Contact = ({ setFooterText }: contactProps) => {
    const { dictionary } = useLanguage();

    return (
        <div className={styles.contact}>
            <div className={styles.main}>
                <Separator />
                <div className={styles.form}>
                    <input type='text' placeholder={dictionary["contact"].texts[0]} />
                    <input type='email' placeholder={dictionary["contact"].texts[1]} />
                    <input type='text' placeholder={dictionary["contact"].texts[2]} />
                    <textarea rows={5} cols={50} placeholder={dictionary["contact"].texts[3]} />
                    <Button
                        btnName={dictionary["contact"].buttons[0].title}
                        btnDescription={dictionary["contact"].buttons[0].description}
                        setFooterText={setFooterText}
                        callback={() => {}}
                    />
                </div>
            </div>
            <MainInfo />
        </div>
    );
}

export default Contact;
