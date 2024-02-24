import { Dispatch, ReactElement, SetStateAction, createElement, useEffect, useState } from 'react';
import styles from './Loading.module.scss';
import Typewriter from 'typewriter-effect';

// Texts' and language import
import TextFR from '../../Locales/FR/Loading.json';
import TextEN from '../../Locales/EN/Loading.json';
import { useLanguage } from '../../Contexts/useContext';

interface props {
    setVisited: Dispatch<SetStateAction<boolean>>,
}

const Loading = ({ setVisited }: props) => {
    const { userLanguage } = useLanguage();
    const [arrayTypeWriter, setArrayTypeWriter] = useState<ReactElement[]>([]);
    const [numberOfElement, setNumberOfElement] = useState(0);

    const texts = userLanguage === 'fr' ? TextFR : TextEN;

    useEffect(() => {
        if (numberOfElement == texts.texts.length) {
            document.querySelector(`#fadeout`)?.classList.add(styles.fadeout)
            localStorage.setItem('visited', 'true');
            localStorage.setItem('firstVisit', 'true');
            setTimeout(() => setVisited(true), 2000);
        }
    }, [numberOfElement, setVisited, texts]);

    return (
        <div className={styles.loading}>
            <div id="fadeout"></div>
            <div className={styles.title}>
                <h1>{texts.title}</h1>
                <i>- {texts.description}
                    <Typewriter onInit={(typewriter) => 
                        typewriter.typeString("...")
                        .pauseFor(0)
                        .deleteAll()
                        .start()
                    } options={{ cursor: "", delay: 300, autoStart: true, loop: true }}/>
                </i>
            </div>
            <div className={styles.content}>
                {...arrayTypeWriter}
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(texts.texts[numberOfElement])
                        .callFunction(() => {
                            setArrayTypeWriter([...arrayTypeWriter, createElement("p", {}, texts.texts[numberOfElement])]);
                            if (numberOfElement < texts.texts.length)
                                setNumberOfElement(numberOfElement + 1);
                        }).deleteAll()
                        .start();
                    }}
                    options={{
                        cursor: "",
                        strings: texts.texts,
                        delay: Math.random() * (20 - 2) + 2,
                    }}
                />
            </div>
        </div>
    );
}

export default Loading;
