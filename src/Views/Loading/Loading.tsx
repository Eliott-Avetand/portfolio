import { ReactNode, useEffect, useState } from 'react';
import styles from './Loading.module.scss';
import text from "./texts.json";
import Typewriter from 'typewriter-effect';

const Loading = () => {
    const [arrayTypeWriter, setArrayTypeWriter] = useState<ReactNode[]>([]);
    const [numberOfElement, setNumberOfElement] = useState(0);

    const newLine = () => {
        setArrayTypeWriter([
            ...arrayTypeWriter,
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(text[numberOfElement])
                    .callFunction(() => {
                        if (numberOfElement < text.length)
                            setNumberOfElement(numberOfElement + 1);
                    })
                    .start();
                }}
                options={{
                    cursor: "",
                    delay: Math.random() * (20 - 2) + 2
                }}
            />
        ])
    }

    useEffect(() => {
        newLine();
    }, [numberOfElement])
    
    return (
        <div className={styles.loading}>
            <div className={styles.title}>
                <h1>Chargement</h1>
                <i>- Initialization du système
                    <Typewriter options={{ strings: ["..."], cursor: "", delay: 300, autoStart: true, deleteSpeed: 0, pauseFor: 0, loop: true }}/>
                </i>
            </div>
            <div className={styles.content}>
                {...arrayTypeWriter}
            </div>
        </div>
    );
}

export default Loading;
