import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Product = props => {

  const [currentColor, setColor] = useState(props.color[0])
  const [currentSize, setSize] = useState(props.sizes[0])

  useEffect(() => {
   // const dataUpdate = currentColor.map(currCol => {
     // if(currCol.id === props.id){
       // return {...props, currentColor: currCol.setCurrentColor}
      //}
    //})
    //console.log(dataUpdate)
  });

  const prepareColorName = color => {
    return styles['color' + color[0].toUpperCase()+ color.substr(1).toLowerCase()]
  }
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
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.name}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice(props.basePrice, currentSize.additionalPrice)}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li><button type="button" className={clsx(size.name === currentSize.name && styles.active)} onClick={() => setSize(size)}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.color.map(colorOne => <li><button type="button" className={clsx(prepareColorName(colorOne), colorOne === currentColor && styles.active)} onClick={() => setColor(colorOne)}></button></li>)}
            </ul>
          </div>
          <Button className={styles.button} action={summaryCart} name={props.name} price ={getPrice(props.basePrice, currentSize.additionalPrice)} size={currentSize.name} color ={currentColor} >
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = { props: PropTypes.func.isRequired }

export default Product;