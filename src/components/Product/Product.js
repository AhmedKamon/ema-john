import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCartArrowDown} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    //console.log(props.product)
    const {name, img,seller,price, stock}= props.product;
    return (
       
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div >
                <h3 className='product-name'>{name}</h3>
                <br/>
                <p><small>by: {seller}</small></p>
                <h2>Price:$ {price}</h2>
                <h3>Only {stock} left. Order right now</h3>
                <button onClick={()=>props.handleAddProduct(props.product)} className='btn'> <FontAwesomeIcon icon={faCartArrowDown} />  Add To Cart</button>
            </div>
            
        </div>
    );
};

export default Product;