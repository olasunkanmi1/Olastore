import React from 'react'
import {Typography, Button,} from '@material-ui/core'
import useStyles from './styles'
import styled from 'styled-components/macro';
import box from '../../assets/box.png'
import CartItem from './CartItem/CartItem';
import { Link } from "react-router-dom";

//styles
const EmptyCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 12rem;
    margin: 75px 0 50px;
    width: 100%;

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

    h2 {
        @media screen and (max-width: 340px) {
            font-size: 18px;
            text-align: center;
        }
    }


    img {
        width: 250px;
        height: 250px;
    }

    p {
        margin: 10px 0;
        text-align: center;

        @media screen and (max-width: 340px) {
            font-size: 12px;
        }
    }
`

const Btn = styled(Link)`
    display: flex;
    padding: 10px 20px;
    background: midnightblue;
    color: #fff;
    border-radius: 5px;
    font-size: 15px;
    transition: .5s;

    &:hover {
        transform: scale(.95);
    }

    @media screen and (max-width: 340px) {
        font-size: 12px;
    }
`

const FilledCartContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 90px;
    width: 100%;
    padding: 0 12rem;

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

    h2 {
        border-bottom: 2px solid #eee;
        padding-bottom: 15px;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Cart = ({ cart, updateProductQty, removeFromCart, emptyCart }) => {
    const classes = useStyles();
    // const isEmpty = !cart.line_items.length; //meaning cart is 0. same as cart.line_items.length == 0;
    
    const EmptyCart = () => {
        return (
            <EmptyCartContainer>
                <img src={box} alt="empty-box" />
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items to your cart yet.</p>
                <Btn to='/' className={classes.link}>Continue Shopping</Btn>
            </EmptyCartContainer>
        )
    };
    
    const FilledCart = () => {
        return (
            <FilledCartContainer>
                <h2>Your Shopping Cart ({cart.total_unique_items} { cart.total_unique_items < 2 ? 'Item' : 'Items'})</h2>
                <Container>
                    { cart.line_items.map((item) => (
                        <CartItem item={item} removeFromCart={removeFromCart} updateProductQty={updateProductQty} />
                    ))}
                </Container>

                <div className={classes.cardDetails}>
                    <Typography variant='h4'>
                        Subtotal: { cart.subtotal.formatted_with_symbol }
                        <div>
                            <Button className={classes.emptyButton} color='secondary' size='large' type='button' variant='contained' onClick={emptyCart}>
                                Empty Cart
                            </Button>
                            <Button component={Link} to="/checkout " className={classes.checkout} color='primary' size='large' type='button' variant='contained'>
                                Checkout
                            </Button>
                        </div>
                    </Typography>
                </div>
            </FilledCartContainer>
        )
    };

    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
