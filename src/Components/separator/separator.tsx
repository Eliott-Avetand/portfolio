import styles from './Separator.module.scss';

interface separatorProps {
    inversed?: boolean
}

const Separator = ({ inversed }: separatorProps) => {
    return (
        <div className={styles.separator}>
            <span className={`${inversed ? styles.inversed : ""} ${styles.left}`}></span>
            <span className={`${inversed ? styles.inversed : ""} ${styles.right}`}></span>
        </div>
    );
}

export default Separator;
