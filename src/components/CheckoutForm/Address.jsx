import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

import { useForm, FormProvider } from 'react-hook-form'

import { commerce } from '../../lib/Commerce';

import FormInput from './CustomTextField';

//styles
const Btns = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 330px) {
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

const Back = styled(Link)`
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
    padding: 10px 20px;

    @media screen and (max-width: 330px) {
        width: 100%;
        margin-top: 20px;
    }
`

const Address = ({ checkoutToken, next }) => {
    const methods = useForm();

    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState(''); 

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));
    const options = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` }));

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)

        // console.log(countries);
        setShippingCountries(countries);

        // [AU, BE, CA etc]
        setShippingCountry(Object.keys(countries)[0]);
    }

    const fetchShippingSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);
        
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    }
    
    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });

        setShippingOptions(options);
        
        setShippingOption(options[0].id);
    }
 
    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, []);
   
    useEffect(() => {
        if(shippingCountry) fetchShippingSubdivisions(shippingCountry);
    }, [shippingCountry]);
    
    useEffect(() => {
        if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision]);

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'auto'})
    }, [])

    return (     
        <>
            <Typography variant='h6' gutterBottom>Shipping Address</Typography>
            <FormProvider { ...methods }>
                <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, setShippingOption }))}>
                    <Grid container spacing={3}>
                        <FormInput name='firstName' label='First Name' />
                        <FormInput name='lastName' label='Last Name' />
                        <FormInput name='address1' label='Address' />
                        <FormInput name='email' label='Email' type='email' />
                        <FormInput name='city' label='City' />
                        <FormInput name='zip' label='ZIP / Postal Code' />

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}  
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((subdivision) => (
                                    <MenuItem key={subdivision.id} value={subdivision.id}>
                                        {subdivision.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Option</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                                {options.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                    </Grid>
                    <br />
                    <Btns>
                        <Back to='/cart'>Back to Cart</Back>
                        <Next type='submit'>NEXT</Next>
                    </Btns>
                </form>
            </FormProvider>
        </>
    )
}

export default Address;
