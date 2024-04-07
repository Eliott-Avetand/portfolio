import { Dispatch, ReactElement, SetStateAction, createElement, useEffect, useState } from 'react';
import styles from './Loading.module.scss';
import Typewriter from 'typewriter-effect';

// Texts' and language import
import { useLanguage } from '../../Contexts/useContext';

interface props {
    setVisited: Dispatch<SetStateAction<boolean>>,
}

const Loading = ({ setVisited }: props) => {
    const { dictionary } = useLanguage();
    const [arrayTypeWriter, setArrayTypeWriter] = useState<ReactElement[]>([]);
    const [numberOfElement, setNumberOfElement] = useState(0);

    useEffect(() => {
        if (numberOfElement == dictionary.loading.texts.length) {
            document.querySelector(`#fadeout`)?.classList.add(styles.fadeout)
            localStorage.setItem('visited', 'true');
            localStorage.setItem('firstVisit', 'true');
            setTimeout(() => setVisited(true), 2000);
        }
    }, [numberOfElement, setVisited, dictionary]);

    return (
        <div className={styles.loading}>
            <div id="fadeout"></div>
            <div className={styles.title}>
                <h1>{dictionary.loading.title}</h1>
                <i> - {dictionary.loading.description}
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
                        typewriter.typeString(dictionary.loading.texts[numberOfElement])
                        .callFunction(() => {
                            if (numberOfElement < dictionary.loading.texts.length) {
                                setArrayTypeWriter([...arrayTypeWriter, createElement("p", {}, dictionary.loading.texts[numberOfElement])]);
                                setNumberOfElement(numberOfElement + 1);
                            }
                        }).deleteAll()
                        .start();
                    }}
                    options={{
                        cursor: "",
                        delay: Math.random() * (20 - 2) + 2,
                    }}
                />
            </div>
        </div>
    );
}

export default Loading;
