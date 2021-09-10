import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import styled from 'styled-components/macro';
import './navbar.css'

import logo from '../../assets/logo.png'

//styles
const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    width: 100%;
    padding: 0 12rem;
    z-index: 10;
    position: fixed;
    top: 0;
    background: #fff;
    border-bottom: 1px solid #ccc;

    @media screen and (max-width: 1200px) {
        padding: 0 10rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 0 8rem;
    }
    @media screen and (max-width: 920px) {
        padding: 0 6rem;
    }
    @media screen and (max-width: 768px) {
        padding: 0 5rem;
    }
    @media screen and (max-width: 600px) {
        padding: 0 4rem;
    }
    @media screen and (max-width: 500px) {
        padding: 0 3rem;
    }
    @media screen and (max-width: 450px) {
        padding: 0 2rem;
    }
`

const Logo = styled(Link)`
    height: 50px;

    @media screen and (max-width: 360px) {
        height: 35px;
    }
`

const Button = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
    position: relative;
`

const Cart = styled(AiOutlineShoppingCart)`
    font-size: 25px;
    color: #000;
    margin-right: 5px;
`

const Tag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 38px;
    top: -7px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    color: #fff;
    background: midnightblue;
    font-size: 10px;
`

const Navbar = ({ totalItems, totalCost }) => {
    const location = useLocation();

    return (
        <contain>
            <Container>
                <Logo to='/'>
                    <img src={logo} alt="logo" height='100%' />
                </Logo>
                
                { location.pathname === '/' ? (
                    <Button aria-label='Show Cart Items' to="/cart" className='btn'>
                        <Cart className='cart' />
                        <h3 className='h3'>cart</h3>
                        <Tag>{totalItems}</Tag>
                    </Button>) : (
                    <h4>
                        Total cost: <strong>{totalCost}</strong>
                    </h4>)
                }
            </Container>
        </contain>
    )
}

export default Navbar
