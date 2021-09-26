import React, { useState, useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components/macro';

import { commerce } from "../../../lib/Commerce";

import Address from "../Address";
import Payment from "../Payment";
import Success from "../Success";

import useStyles from "./styles";

const steps = ["Shipping Address", "Payment Details"];

//styles
const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
`

const Container = styled.section`
    margin-top: 75px;
    padding: 1rem 12rem;

    @media screen and (max-width: 1200px) {
        padding: 1rem 10rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 1rem 8rem;
    }
    @media screen and (max-width: 920px) {
        padding: 1rem 6rem;
    }
    @media screen and (max-width: 768px) {
        padding: 1rem 5rem;
    }
    @media screen and (max-width: 600px) {
        padding: 1rem 4rem;
    }
    @media screen and (max-width: 500px) {
        padding: 1rem 3rem;
    }
    @media screen and (max-width: 450px) {
        padding: 1rem 2rem;
    }
`

const Wrapper = styled.div`
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 2rem 1rem;

    @media screen and (max-width: 300px) {
      padding: 2rem .5rem;
    }
`

const Button = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 3px;
    border: 2px solid midnightblue;
    color: midnightblue;
    width: 150px;
`

const Checkout = ({ cart, order, onCaptureCheckout, error, refreshCart }) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        console.log(token);
        setCheckoutToken(token);
      } catch (error) {
        history.push("/");
        console.log(error);
      }
    };

    generateToken();
  }, [cart]);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'auto'})
    }, [])

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const prevStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);

    nextStep();
  };

  const timeout = () => {
      setTimeout(() => {
        setIsFinished(true);
      }, 3000);
  }

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            Order ref: {order.customer_reference}
          </Typography>
        </div>
        <br />
        <Button to="/">
          Back to Home
        </Button>
      </>
    ) : isFinished ? (
        <>
            <div>
                <Success refreshCart={refreshCart} />
                <Divider className={classes.divider} />
                <h3>Thank You For Your Patronage!</h3>
            </div>
            <br />
            <Button to="/">
            Back to Home
            </Button>
        </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (error) {
    <>
      <Typography variant="h5">Error: ${error}</Typography>
      <br />
      <Button to="/">
        Back to Home
      </Button>
    </>;
  }

    const Loading = () => {
        return (
            <LoadingContainer> <CircularProgress style={{color: 'midnightblue'}} /> </LoadingContainer>
        )
    }

  const Form = () =>
    activeStep === 0 ? (
        <Address checkoutToken={checkoutToken} next={next} />
    ) : (
      <Payment
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        prevStep={prevStep}
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
        timeout={timeout}
        refreshCart={refreshCart}
      />
    );

  return (
    <Container>
        <Wrapper>
          <h1 style={{textAlign: 'center'}}>Checkout</h1>

          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel style={{color: 'midnightblue'}}> {step} </StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (!checkoutToken ? <Loading /> :
            checkoutToken && <Form />
          )}
        </Wrapper>
    </Container>
  );
};

export default Checkout;
