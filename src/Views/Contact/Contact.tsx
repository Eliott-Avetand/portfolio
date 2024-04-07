import { useEffect } from 'react';
import styles from './Contact.module.scss';
import MainInfo from '../../Components/BoxInfos/MainInfos/MainInfo';
import { useFooter, useLanguage } from '../../Contexts/useContext';
import Button from '../../Components/Button/Button';

const Contact = () => {
    const { dictionary } = useLanguage();
    const { setFooterText } = useFooter();

    useEffect(() => {
        setFooterText(dictionary.contact.footer);
    }, [setFooterText, dictionary]);

    return (
        <div className={styles.contact}>
            <fieldset className={styles.form}>
                <legend>{dictionary.contact.form.title}</legend>
                {
                    dictionary.contact.form.inputs.map((input, index) => (
                        <p key={index}>
                            <label htmlFor={input.type}>{input.name}</label>
                            <input type={input.type} placeholder={input.placeholder} />
                        </p>
                    ))
                }
                <Button
                    btnName={dictionary.contact.form.submit.title}
                    btnDescription={dictionary.contact.form.submit.footer}
                    callback={() => {}}
                />
            </fieldset>
            <MainInfo />
        </div>
    );
}

export default Contact;
