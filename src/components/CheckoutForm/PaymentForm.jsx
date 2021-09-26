import React, { useEffect } from 'react';
import { Typography, Divider, } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styled, { css } from 'styled-components/macro';

import Review from './Review';

//styles
const Btns = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 310px) {
        display: block;
    }
`

const Button = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    border-radius: 3px;
    font-size: 15px;
`

const Back = styled.div`
    ${Button};
    border: 2px solid midnightblue;
    color: midnightblue;
`

const Next = styled.button`
    ${Button};
    background: midnightblue;
    outline: none;
    border: none;
    color: #fff;

    @media screen and (max-width: 310px) {
      width: 100%;
      margin-top: 20px;
  }
`



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, nextStep, prevStep, shippingData, onCaptureCheckout, timeout }) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log('[error]', error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { name: 'International', street: shippingData.address1, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      onCaptureCheckout(checkoutToken.id, orderData);

      timeout();

      nextStep();
    }
  };

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'auto'})
  }, [])

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>{({ elements, stripe }) => (
          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
            <CardElement />
            <br /> <br />
            <Btns>
              <Back onClick={prevStep}>Back</Back>
              <Next type="submit" disabled={!stripe}>
                Pay {checkoutToken.live.subtotal.formatted_with_symbol}
              </Next>
            </Btns>
          </form>
        )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;