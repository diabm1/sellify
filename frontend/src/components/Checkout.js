import React from 'react';

function CheckOut(props){

return <div className='checkout-steps'>
    <div className={props.stepOne ? 'active': ''}>SignIn</div>
    <div className={props.stepTwo ? 'active': ''}>Shipping</div>
    <div className={props.stepThree ? 'active': ''}>Payment</div>
    <div className={props.stepFour ? 'active': ''}>Place Order</div>
</div>}
export default CheckOut;