import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className='mt-4'>
            <h1>Order Summary</h1>
            <h4 className='mt-4'>Order Quantity: {cart.length}</h4>
        </div>
    );
};

export default Cart;