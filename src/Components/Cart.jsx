import React from 'react';

const Cart = (props) => {
    const { handleCartShow, quantity = 0 } = props;


    return (
        <div className='cart pink accent-1' onClick={handleCartShow}>
            <i className='material-icons'>shopping_cart</i>
            {
                quantity ? (
                    <span className='cart-quantity'>{quantity}</span>
                ) : null
            }

        </div>
    );
};

export default Cart;