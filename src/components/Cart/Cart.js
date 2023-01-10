import React from 'react';

const Cart = ({cart}) => {
    let massage;
    if(cart.length === 0){
        massage = <h5>Please Buy at least one item</h5>
    }
    return (
        <div className='mt-4 position-fixed'>
            <h1>Order Summary</h1>
            <h4 className='mt-4'>Order Quantity: {cart.length}</h4>
            <div className='mt-4'>
            {
                cart.map(tshirt => <h5 className='mt-3' key={tshirt._id}>
                    {tshirt.name}
                </h5>)
            }
            {
                massage
            }
            </div>
            
        </div>
    );
};

export default Cart;