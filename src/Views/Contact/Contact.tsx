import styles from './Contact.module.scss';
import MainInfo from '../../Components/BoxInfos/MainInfos/MainInfo';
import { useFooter, useLanguage } from '../../Contexts/useContext';
import Button from '../../Components/Button/Button';
import { useEffect } from 'react';

const Contact = () => {
    const { dictionary } = useLanguage();
    const { setFooterText } = useFooter();

    useEffect(() => {
        setFooterText(dictionary["contact"].description);
    }, [setFooterText, dictionary]);

    return (
        <div className={styles.contact}>
            <fieldset className={styles.form}>
                <legend>{dictionary["contact"].texts.formName.title}</legend>
                <p>
                    <label htmlFor='text'>{dictionary["contact"].texts.name.title}</label>
                    <input type='text' placeholder="A2" />
                </p>
                <p>
                    <label htmlFor='text'>{dictionary["contact"].texts.email.title}</label>
                    <input type='email' placeholder="A2@YoRHa.sys" />
                </p>
                <p>
                    <label htmlFor='text'>{dictionary["contact"].texts.object.title}</label>
                    <input type='text' placeholder="Mission" />
                </p>
                <p>
                    <label htmlFor='text'>{dictionary["contact"].texts.message.title}</label>
                    <textarea rows={5} cols={50} placeholder="..." />
                </p>
                <Button
                    btnName={dictionary["contact"].buttons[0].title}
                    btnDescription={dictionary["contact"].buttons[0].description}
                    callback={() => {}}
                />
            </fieldset>
            <MainInfo />
        </div>
    );
}

export default Contact;
