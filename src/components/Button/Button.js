import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
    const handleSubmit = e => {
        e.preventDefault()
        props.action(props.name, props.price, props.size, props.color)
    }
    return (<button className={clsx(styles.button, props.className)} onClick={handleSubmit}>{props.children}</button>);
};

export default Button;