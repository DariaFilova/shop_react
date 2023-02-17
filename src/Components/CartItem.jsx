import React from 'react';

const CartItem = (props) => {
    const {
        id,
        name,
        price,
        quantity,
        removeFromCart = Function.prototype,
        changeQuantity = Function.prototype,
    } = props

    return (
        <div>
            <li class="collection-item cart-item">{name} {price} x &nbsp;<i className='material-icons item-change' onClick={() => changeQuantity(id, '-')}>remove</i>
                {quantity}
                <i className='material-icons item-change' onClick={() => changeQuantity(id, '+')}>add</i>&nbsp; = {price * quantity}
                <span className='secondary-content item-delete'>
                    <i
                        className='material-icons '
                        onClick={() => removeFromCart(id)}
                    >
                        close
                    </i>
                </span>
            </li>
        </div>
    );
};

export default CartItem;