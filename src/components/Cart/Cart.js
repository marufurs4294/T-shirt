import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className='mt-4'>
            <h1>Order Summary</h1>
            <h4 className='mt-4'>Order Quantity: {cart.length}</h4>
            <div className='mt-4'>
            {
                cart.map(tshirt => <h5 className='mt-3' key={tshirt._id}>
                    {tshirt.name}
                </h5>)
            }
            </div>
            
        </div>
    );
};

export default Cart;