import styles from './Separator.module.scss';

const Separator = () => {
    return (
        <div className={styles.separator}>
            <span className={styles.left}></span>
            <span className={styles.right}></span>
        </div>
    );
}

export default Separator;
