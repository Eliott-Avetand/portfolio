import { MouseEvent, useEffect, useState } from 'react';
import { useFooter, useLanguage, useSound } from '../../../../Contexts/useContext';
import styles from './Sound.module.scss';
import Button from '../../../../Components/Button/Button';

const Sound = () => {
    const { getVolumeSound, changeVolumeSound } = useSound();
    const { dictionary } = useLanguage();
    const { setFooterText } = useFooter();
    const [currentVolume, setCurrentVolume] = useState<number>(getVolumeSound());
    const [volumeBars, setVolumeBars] = useState<JSX.Element[]>([]);

    const hoverSoundBar = (e: MouseEvent<HTMLDivElement>) => {
        const children = e.currentTarget.parentElement?.children;

        if (children) {
            const index = Array.from(children).indexOf(e.currentTarget);
        }
    }

    useEffect(() => {
        setFooterText(dictionary.system.subpages.sound.footer);
    }, [setFooterText, dictionary]);

    useEffect(() => {
        const divs = [];
        const changeVolume = (e: MouseEvent<HTMLDivElement>) => {
            const children = e.currentTarget.parentElement?.children;
    
            if (children) {
                const index = Array.from(children).indexOf(e.currentTarget);
                changeVolumeSound(index + 1);
            }
        }

        for (let i = 0; i < 10; i++) {
            console.log(i, getVolumeSound());
            if (i < getVolumeSound())
                divs.push(<div key={divs.length} className={styles.volumeBar} onClick={changeVolume}></div>);
            else
                divs.push(<div key={divs.length} className={styles.square} onClick={changeVolume}></div>);
        }
        setVolumeBars(divs);
    }, [getVolumeSound, changeVolumeSound]);

    return (
        <div className={styles.sound}>
            <div className={styles.sfx}>
                <Button
                    btnName={dictionary.system.subpages.sound.buttons[0].title}
                    btnDescription={dictionary.system.subpages.sound.buttons[0].footer}
                    callback={() => {}}
                />
                <div className={styles.volume}>
                    <p>Régler le volume</p>
                    <div className={styles.soundBar}>{volumeBars}</div>
                </div>
            </div>
            <div className={styles.music}>  
                <Button
                    btnName={dictionary.system.subpages.sound.buttons[1].title}
                    btnDescription={dictionary.system.subpages.sound.buttons[1].footer}
                    callback={() => {}}
                />
                <div className={styles.volume}>
                    <p>Régler le volume</p>
                    <div className={styles.soundBar}>{volumeBars}</div>
                </div>
            </div>
        </div>
    );
}

export default Sound;
