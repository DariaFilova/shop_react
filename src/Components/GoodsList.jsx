import React from 'react';
import GoodItem from './GoodItem';

const GoodsList = (props) => {

    const {goods = [], addToCart} = props
    if(!goods.length) {
        return <h3>Nothing was found</h3>
    }
    
    return (
        <div className='goods'>
            {goods.map(item => <GoodItem key={item.id} {...item} addToCart={addToCart}/>)}
        </div>
    );
};

export default GoodsList;