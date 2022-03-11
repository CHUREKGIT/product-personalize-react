import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = props => {

    const prepareColorName = color => {
        return styles['color' + color[0].toUpperCase()+ color.substr(1).toLowerCase()]
      }
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(colorOne => <li><button type="button" className={clsx(prepareColorName(colorOne), colorOne === props.checkedColor && styles.active)} onClick={() => props.setColor(colorOne)}></button></li>)}
            </ul>
          </div>
    )
}

export default OptionColor