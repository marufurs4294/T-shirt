import React from 'react';
import './TShirt.css';
import { ToastContainer } from 'react-toastify';

const TShirt = ({tshirt, handleAddToCart}) => {
    const {_id, price, picture, name, gender} = tshirt;
    return (
        <div className='t-shirt'> 
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <button onClick={() =>handleAddToCart(tshirt)} className='btn btn-primary fw-bold'>Add to Cart</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default TShirt;