import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setColor] = useState(props.color[0])
  const [currentSize, setSize] = useState(props.sizes[0])

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor}/>
      <ProductForm 
          name = {props.name}
          title = {props.title}
          basePrice = {props.basePrice}
          additionalPrice = {currentSize.additionalPrice}
          sizes = {props.sizes}
          colors = {props.color}
          checkedSize = {currentSize.name}
          setSize = {setSize}
          setColor = {setColor}
          checkedColor = {currentColor}
      />
    </article>
  )
};

Product.propTypes = { props: PropTypes.func.isRequired }

export default Product;