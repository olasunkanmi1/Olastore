import React from 'react';
import { IconButton, Badge, } from '@material-ui/core'
import { Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styled from 'styled-components/macro';

import logo from '../../assets/OlaStore.png'

//styles
const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    padding: 1rem 12rem;
    z-index: 10;
    position: fixed;
    top: 0;
    background: #fff;
    border-bottom: 1px solid #ccc;

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

const Cart = styled(AiOutlineShoppingCart)`
    font-size: 25px;
    
    &:hover {
        color: blue;
    }
`

const Navbar = ({ totalItems, totalCost }) => {
    const location = useLocation();

    return (
        <contain>
            <Container>
                <Link to='/'>
                    <img src={logo} alt="logo" height='50px' />
                </Link>
                
                { location.pathname === '/' ? (
                    <IconButton 
                        aria-label='Show Cart Items'
                        component={Link}
                        to="/cart"
                    >
                        <Badge badgeContent={totalItems} color='secondary'>
                            <Cart />
                        </Badge>
                    </IconButton>) : (
                    <h4>
                        Total cost: <strong>{totalCost}</strong>
                    </h4>)
                }
            </Container>
        </contain>
    )
}

export default Navbar
