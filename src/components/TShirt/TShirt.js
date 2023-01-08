import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt}) => {
    const {_id, price, picture, name, gender} = tshirt;
    return (
        <div className='t-shirt'> 
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <button className='btn btn-primary fw-bold'>Add to Cart</button>
        </div>
    );
};

export default TShirt;