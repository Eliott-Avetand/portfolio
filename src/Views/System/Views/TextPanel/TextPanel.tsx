import { useEffect } from 'react';
import Button from '../../../../Components/Button/Button';
import styles from './TextPanel.module.scss';
import { useFooter, useLanguage } from '../../../../Contexts/useContext';

interface textPanelProps {
    title: string,
    text: string
}

const TextPanel = ({ title, text }: textPanelProps) => {
    const { dictionary } = useLanguage();
    const { setFooterText } = useFooter();

    const callbacks: { [fnName: string]: () => void } = {
    }

    useEffect(() => {
        setFooterText(dictionary.system.subpages.sound.footer);
    }, [setFooterText, dictionary]);

    return (
        <div className={styles.textPanel}>
            <Button btnName={title} btnDescription={""} callback={() => {}} />
            <div className={styles.content}>
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
}

export default TextPanel;
