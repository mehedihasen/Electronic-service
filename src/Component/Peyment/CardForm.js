import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';

const CardForm = ({Pay}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [err, setErr] = useState(null)
    const [paySuccess, setPaySuccess] = useState(null)
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
 
        return;
      }

      const cardElement = elements.getElement(CardElement);

      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        setErr(error.message);
        setPaySuccess(null)
      } else {
        setPaySuccess(paymentMethod.id)
        Pay(paymentMethod.id)
        setErr(null)
        
        console.log('[PaymentMethod]', paymentMethod);
      }
    };
    return (
   <div>
      <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {
      err && <p style={{color:"red"}}>{err}</p>
    }
    {
      paySuccess && <p style={{color:"green"}}>your payment was successfully</p>
      
    }
   
   </div>
    );
};

export default CardForm;