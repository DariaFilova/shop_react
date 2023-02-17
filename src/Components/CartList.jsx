import React from 'react';
import CartItem from './CartItem';

const CartList = (props) => {
    const {
        removeFromCart = Function.prototype,
        handleCartShow = Function.prototype,
        changeQuantity = Function.prototype,
        clearCart = Function.prototype,
        order = []
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (
        <ul class="collection cart-list">
            <li class="collection-item indigo accent-2 active">Корзина</li>
            {order.length ?
                (order.map((orderItem) => (
                    <CartItem
                        key={orderItem.id}
                        {...orderItem}
                        removeFromCart={removeFromCart}
                        changeQuantity={changeQuantity}
                    />
                ))
                ) : (
                    <li className='collection-item'>Cart is empty</li>
                )}
            <li class="collection-item indigo accent-2 active">Общая стоимость: {totalPrice}</li>
            <i className='material-icons cart-close' onClick={handleCartShow}>close</i>
            <a class="waves-effect waves-light btn-small pink lighten-2 cart-list-button" onClick={clearCart}>Оформить</a>
        </ul>

    );
};

export default CartList;