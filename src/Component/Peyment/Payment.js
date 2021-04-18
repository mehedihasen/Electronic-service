import React from 'react';
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';

const stripePromise = loadStripe('pk_test_51Ih7gOHJn5ievU8Vi6Z2qyfkXVV0bpB683bZ7BPv5Fx8ZuiOkHurijnvKgd1a3IWwYLWcgZKM1W3hXSgYlJ4f2zc00XC3aIU4v');

const payment = ({handelPayment}) => {
    return (

        <Elements stripe={stripePromise}>
            <CardForm Pay={handelPayment}></CardForm>
        </Elements>

    );
};

export default payment;