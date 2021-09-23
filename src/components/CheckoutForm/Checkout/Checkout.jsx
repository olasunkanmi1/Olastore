import React, { useState, useEffect } from "react";
import {
//   Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components/macro';

import { commerce } from "../../../lib/Commerce";

import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

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
`

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
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
        // history.pushState("/");
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
        <Button variant="outlined" type="button" component={Link} to="/">
          Back to Home
        </Button>
      </>
    ) : isFinished ? (
        <>
            <div>
                <Typography variant="h5">
                    Thank you for your purchase
                </Typography>
                <Divider className={classes.divider} />
            </div>
            <br />
            <Button variant="outlined" type="button" component={Link} to="/">
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
      <Button variant="outlined" type="button" component={Link} to="/">
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
        <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        prevStep={prevStep}
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
        timeout={timeout}
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
