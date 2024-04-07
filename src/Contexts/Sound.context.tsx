import { FC, ReactNode, createContext, useState } from 'react';
import hover from '../assets/sounds/hover.ogg';
import select from '../assets/sounds/select.ogg';
import openMenu from '../assets/sounds/Menu.ogg';

interface SoundProps {
    children: ReactNode;
}

export interface SoundContextType {
    playSound: (type: string) => void;
    playMusic: (type: string) => void;
    toggleSound: () => void;
    toggleMusic: () => void;
    canPlaySound: () => boolean;
    canPlayMusic: () => boolean;
    getVolumeSound: () => number;
    getVolumeMusic: () => number;
    changeVolumeMusic: (newVolume: number) => void;
    changeVolumeSound: (newVolume: number) => void;
}

export const SoundContext = createContext<SoundContextType | undefined>(undefined);

const SoundManager: FC<SoundProps> = ({ children }) => {
    const [isSoundActive, setIsSoundActive] = useState(true);
    const [isMusicActive, setIsMusicActive] = useState(true)
    const [volumeSound, setVolumeSound] = useState(5);
    const [volumeMusic, setVolumeMusic] = useState(5);

    const soundsSrc = {
        "hover": hover,
        "select": select,
        "openMenu": openMenu
    }

    const musicSrc = {
        "main": ""
    }

    const toggleSound = () => {
        setIsSoundActive(!isSoundActive);
    }

    const toggleMusic = () => {
        setIsMusicActive(!isMusicActive);
    }
    
    const canPlaySound = (): boolean => {
        return isSoundActive;
    }

    const canPlayMusic = (): boolean => {
        return isMusicActive;
    }

    const getVolumeSound = (): number => {
        return volumeSound;
    }

    const getVolumeMusic = (): number => {
        return volumeMusic;
    }

    const changeVolumeSound = (newVolume: number) => {
        setVolumeSound(newVolume);
    }

    const changeVolumeMusic = (newVolume: number) => {
        setVolumeMusic(newVolume);
    }

    const playSound = (type: string) => {
        if (canPlaySound()) {
            const newSound = new Audio();
            newSound.src = soundsSrc[type as keyof typeof soundsSrc];
            newSound.volume = volumeSound / 10;
            newSound.play();
        }
    }

    const playMusic = (type: string) => {
        if (canPlayMusic()) {
            const newMusic = new Audio();
            newMusic.src = musicSrc[type as keyof typeof musicSrc];
            newMusic.volume = volumeMusic / 10;
            newMusic.loop = true;
            newMusic.play();
        }
    }

    return (
        <SoundContext.Provider value={{
            playSound,
            playMusic,
            canPlayMusic,
            canPlaySound,
            getVolumeMusic,
            getVolumeSound,
            toggleMusic,
            toggleSound,
            changeVolumeMusic,
            changeVolumeSound
        }}>
            {children}
        </SoundContext.Provider>
    )
} 

export default SoundManager;