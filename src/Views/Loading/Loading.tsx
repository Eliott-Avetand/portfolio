import { ReactElement, createElement, useEffect, useState } from 'react';
import styles from './Loading.module.scss';
import text from "./texts.json";
import Typewriter from 'typewriter-effect';

const Loading = () => {
    const [arrayTypeWriter, setArrayTypeWriter] = useState<ReactElement[]>([]);
    const [numberOfElement, setNumberOfElement] = useState(0);

    useEffect(() => {
        if (numberOfElement == text.length) {
            document.querySelector(`#fadeout`)?.classList.add(styles.fadeout)
            localStorage.setItem('visited', 'true');
        }
    }, [numberOfElement]);

    return (
        <div className={styles.loading}>
            <div id="fadeout"></div>
            <div className={styles.title}>
                <h1>Chargement</h1>
                <i>- Initialization du système
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
                        typewriter.typeString(text[numberOfElement])
                        .callFunction(() => {
                            setArrayTypeWriter([...arrayTypeWriter, createElement("p", {}, text[numberOfElement])]);
                            if (numberOfElement < text.length)
                                setNumberOfElement(numberOfElement + 1);
                        }).deleteAll()
                        .start();
                    }}
                    options={{
                        cursor: "",
                        strings: text,
                        delay: Math.random() * (20 - 2) + 2,
                    }}
                />
            </div>
        </div>
    );
}

export default Loading;
