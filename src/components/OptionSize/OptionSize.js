import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = props => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li><button type="button" className={clsx(size.name === props.checkedSize && styles.active)} onClick={() => props.setSize(size)}>{size.name}</button></li>)}
            </ul>
        </div>
    )
}

export default OptionSize