import hover from '../../assets/sounds/hover.ogg';
import select from '../../assets/sounds/select.ogg';

const SoundManager = () => {
    const soundElement: HTMLAudioElement | null = document.querySelector("#soundElement");
    const soundArray = {
        "hover": hover,
        "select": select
    }

    let isSoundActive = true;
    let isMusicActive = true;

    const ToggleSound = () => {
        isSoundActive = !isSoundActive;
    }
    
    const ToggleMusic = () => {
        isMusicActive = !isMusicActive;
    }
    
    const canPlaySound = () => {
        return isSoundActive;
    }
    
    const canPlayMusic = () => {
        return isMusicActive;
    }

    const playSound = (type: string) => {
        if (soundElement && canPlaySound()) {
            soundElement.src = soundArray[type as keyof typeof soundArray];
            soundElement.play();
        }
    }

    return {
        ToggleMusic,
        ToggleSound,
        canPlayMusic,
        canPlaySound,
        playSound
    }
}

export default SoundManager;