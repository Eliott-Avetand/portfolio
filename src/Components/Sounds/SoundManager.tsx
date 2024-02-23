import { FC, ReactElement, ReactNode, createContext, useContext, useEffect, useRef, useState } from 'react';
import hover from '../../assets/sounds/hover.ogg';
import select from '../../assets/sounds/select.ogg';
import openMenu from '../../assets/sounds/Menu.ogg';

interface SoundManagerContextType {
    playSound: (type: string) => void;
    toggleSound: () => void;
    toggleMusic: () => void;
    canPlaySound: () => boolean;
    canPlayMusic: () => boolean;
}

interface SoundManagerProps {
    children: ReactNode;
}

const SoundManagerContext = createContext<SoundManagerContextType | undefined>(undefined);

const SoundManager: FC<SoundManagerProps> = ({ children }) => {
    const [audioElements, setAudioElements] = useState<ReactElement[]>([]);
    const [isSoundActive, setIsSoundActive] = useState(true);
    const [isMusicActive, setIsMusicActive] = useState(true)
    const soundsArray = useRef<HTMLDivElement | null>(null);

    const soundsSrc = {
        "hover": hover,
        "select": select,
        "openMenu": openMenu
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

    const playSound = (type: string) => {
        if (soundsArray && canPlaySound()) {
            const newSound = new Audio();
            newSound.src = soundsSrc[type as keyof typeof soundsSrc];
            newSound.id = "0";
            newSound.onended = () => {
                setAudioElements(prev => prev.filter((item) => item.props.id != newSound.id));
            };

            setAudioElements(prev => [...prev, <audio key={prev.length} id={newSound.id} src={newSound.src} />]);
            newSound.play();
        }
    }

    useEffect(() => {
        soundsArray.current = document.querySelector("#soundsArray");
    }, [])

    return (
        <SoundManagerContext.Provider value={{ playSound, canPlayMusic, canPlaySound, toggleMusic, toggleSound }}>
            <div id="soundsArray">
                {audioElements}
            </div>
            {children}
        </SoundManagerContext.Provider>
    )
} 

export const useSoundManager = (): SoundManagerContextType => {
    const context = useContext(SoundManagerContext);

    if (!context)
        throw new Error('useSoundManager must be a provider.');
    return context;
}

export default SoundManager;