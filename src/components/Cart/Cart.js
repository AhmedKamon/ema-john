import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart)
    const total = cart.reduce((total, pro)=> total+ pro.price, 0);
    let shipping = 0;
    if(total > 30){
        shipping= 5;
    } else if(total > 15){
        shipping= 10;
    }
    const tex = Math.round(total / 10);
    const grandTotal = Math.round(total + shipping+ tex)
    console.log(total)
    return (
        <div>
            <h1>Total Orders</h1>
            <h3>ordered items: {cart.length}</h3>
            <h2>Shipping Cost: {shipping}</h2>
            <h2>Govt Tex: {tex}</h2>
            <h2>price: { grandTotal}</h2>
        </div>
    );
};

export default Cart;