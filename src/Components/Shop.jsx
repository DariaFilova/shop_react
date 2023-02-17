import React, { useEffect, useState } from 'react';
import { API_URL } from '../config';
import Loader from './Loader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import CartList from './CartList';
import Alert from './Alert';

const API_KEY = process.env.REACT_APP_API_KEY;

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartShow, setCartShow] = useState(false);
    const [alertName, setAlertName] = useState('')

    const addToCart = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);
        }
        setAlertName(item.name)




    }

    const removeFromCart = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId)
        setOrder(newOrder);
    }

    const clearCart = () => {
        setOrder([]);
        setAlertName('clear')
        handleCartShow();
    }

    const handleCartShow = () => {
        setCartShow(!isCartShow);
    }

    const closeAlert = () => {
        setAlertName('');
    }

    const changeQuantity = (itemId, operation) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                let newQuantity;
                if (operation === '+') newQuantity = ++el.quantity
                if (operation === '-') newQuantity = --el.quantity


                return {
                    ...el,
                    quantity:
                        operation === '-'
                            ? newQuantity >= 0
                                ? newQuantity
                                : 0
                            : newQuantity,
                }
            } else {
                return el
            }

        })

        setOrder(newOrder);
    }


    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).then(response => response.json()).then(data => setGoods(data.featured))
            .catch(err => console.warn(err))
            .finally(() => setLoading(false))
    }, [])



    return (
        <main className='content'>
            <Cart quantity={order.length} handleCartShow={handleCartShow} />
            {loading ? <Loader /> : <GoodsList goods={goods} addToCart={addToCart} />}
            {isCartShow
                ? <CartList
                    order={order}
                    handleCartShow={handleCartShow}
                    removeFromCart={removeFromCart}
                    changeQuantity={changeQuantity}
                    clearCart={clearCart}
                />
                : null}

            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
    );
};

export default Shop;
