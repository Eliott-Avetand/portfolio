import Button from '../../Button/Button';
import styles from './Scrollable.module.scss';

interface scrollableProps {
    title: string,
    texts: string[],
    className: string
}

const Scrollable = ({ title, texts, className }: scrollableProps) => {
    return (
        <div className={`${styles.scrollable} ${className}`}>
            <Button btnName={title} btnDescription={""} callback={() => {}} />
            <div className={styles.scrollbarWrapper}>
                <div className={styles.content}>
                    {texts.map((text, index) => (
                        <p key={index} className={styles.section}>
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Scrollable;
