import React from 'react';

const GoodItem = (props) => {

    const { id, name, description, full_background, price, addToCart } = props

    return (

        <div class="card ">
            <div class="card-image">
                <img src={full_background} alt={name} />
                <span class="card-title">{name}</span>
            </div>
            <div class="card-content">
                <p>{description}</p>
            </div>
            <div class="card-action">
                <button onClick={() => addToCart({
                    id,
                    name,
                    price
                })} className='btn indigo lighten-2'>Купить</button>
                <span className='right'>{price} eur</span>
            </div>
        </div>

    );
};

export default GoodItem;