import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = props => {

    const getPrice = (basePrice, sizePrice) => {
        return basePrice + sizePrice
      }
    const summaryCart = (name, price, size, color) => {
        console.log('SUMMARY');
        console.log('=======');
        console.log('Name: ', name);
        console.log('Price: ', price);
        console.log('Size: ', size);
        console.log('Color: ', color);
      }
    return (
        <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(props.basePrice, props.additionalPrice)}$</span>
        </header>
        <form>
          <OptionSize 
            sizes = {props.sizes} 
            checkedSize = {props.checkedSize} 
            setSize={props.setSize} 
            />
          <OptionColor 
            colors = {props.colors}
            checkedColor = {props.checkedColor}
            setColor = {props.setColor}
          />
          <Button className={styles.button} action={summaryCart} name={props.name} price ={getPrice(props.basePrice, props.additionalPrice)} size={props.checkedSize} color ={props.checkedColor} >
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    )
}

export default ProductForm;