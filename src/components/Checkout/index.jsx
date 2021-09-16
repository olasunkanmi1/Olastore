import React from 'react'
import { useState, useEffect, useRef } from "react";
import {
    Step,
    Paper,
    Stepper,
    StepLabel,
    Container,
    Typography,
    CircularProgress,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { commerce } from "../../lib/Commerce";
import CheckoutForm from './CheckoutForm'

import './styles.css'
import Cart from '../Cart/Cart';

const Index = ({ cart }) => {
    const [user, setUser] = useState({
        city: "",
        email: "",
        address: "",
        postCode: "",
        lastName: "",
        firstName: "",
        shippingOption: {},
        shippingOptions: [],
        shippingCountry: {},
        shippingCountries: [],
        shippingSubdivision: {},
        shippingSubdivisions: [],
    });

    const [checkoutData, setCheckoutData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value }); 
    };

    const handleSelectChange = (e, state) => {
        const { name, value } = e.target;
        if (state === "shippingOptions") {
          setUser({
            ...user,
            shippingOptions: {
              id: value,
            },
          });
        } else {
          setUser({
            ...user,
            [name]: {
              name: user[state].find((country) => country.code === value).name,
              code: value,
            },
          });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // setBookingStep("order-details");
    };

    useEffect(() => {
        if (Cart.id) {
          const generateToken = async () => {
            try {
              const response = await commerce.checkout.generateToken(
                cart.id,
                {
                  type: "cart",
                }
              );
              setCheckoutData(response);
            } catch (error) {
              console.error("Checkout error: ", error);
            }
          };
          generateToken();
        }
    }, [cart]);

    const convertObjectToArray = (countries) =>
    Object.entries(countries || {}).map(([code, name]) => ({ code, name }));

    useEffect(() => {
        const fetchShippingCountries = async () => {
          const { countries } = await commerce.services.localeListShippingCountries(
            checkoutData.id
          );
          const FormattedCountries = convertObjectToArray(countries);
          setUser({
            ...user,
            shippingCountries: FormattedCountries,
            shippingCountry: FormattedCountries[FormattedCountries.length - 1],
          });
        };
        if (!user.shippingCountries.length && checkoutData.id) {
          fetchShippingCountries();
        }
    }, [user, checkoutData]);    

    return (
        <div className='checkout'>
            <Container>
                <Paper className='checkout' elevation={3}>
                    <Typography align='center' variant='h5' gutterBottom>
                        checkout
                    </Typography>
                </Paper>
            </Container>
            <CheckoutForm 
                user={user}
                handleSubmit={handleSubmit}
                handleChange={handleChange} 
                handleSelectChange={handleSelectChange} 
            />
        </div>
    )
}

export default Index
