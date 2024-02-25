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
            <fieldset className={styles.form}>
                <legend>{dictionary["contact"].texts[0]}</legend>
                <p>
                    <label htmlFor='text'>{dictionary["contact"].texts[1]}</label>
                    <input type='text' placeholder="A2" />
                </p>
                <p>
                    <label htmlFor='text'>{dictionary["contact"].texts[2]}</label>
                    <input type='email' placeholder="A2@YoRHa.sys" />
                </p>
                <p>
                    <label htmlFor='text'>{dictionary["contact"].texts[3]}</label>
                    <input type='text' placeholder="Mission" />
                </p>
                <p>
                    <label htmlFor='text'>{dictionary["contact"].texts[4]}</label>
                    <textarea rows={5} cols={50} placeholder="..." />
                </p>
                <Button
                    btnName={dictionary["contact"].buttons[0].title}
                    btnDescription={dictionary["contact"].buttons[0].description}
                    setFooterText={setFooterText}
                    callback={() => {}}
                />
            </fieldset>
            <MainInfo />
        </div>
    );
}

export default Contact;
