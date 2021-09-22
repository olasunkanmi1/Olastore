import React, { useState, useEffect } from "react";
import {
  Paper,
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
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
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
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
