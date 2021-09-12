import React from 'react'
import useStyles from './styles'
import styled, { css } from 'styled-components/macro';
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
    justify-content: space-between;
    margin-top: 75px;
    padding: 2rem 12rem;
    width: 100%;
    position: relative;

    @media screen and (max-width: 1200px) {
        padding: 2rem 10rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 2rem 8rem;
    }
    @media screen and (max-width: 920px) {
        padding: 2rem 6rem;
    }
    @media screen and (max-width: 768px) {
        padding: 2rem 5rem;
    }
    @media screen and (max-width: 600px) {
        padding: 2rem 4rem;
    }
    @media screen and (max-width: 500px) {
        padding: 2rem 3rem;
    }
    @media screen and (max-width: 450px) {
        padding: 2rem 2rem;
    }  
`

const Container = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        border-bottom: 2px solid #eee;
        padding-bottom: 15px;
    }
`

const Proceed = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    height: 200px;
    position: absolute;
    top: 50%;
    right: 12rem;
    transform: translateY(-50%);

    h3 {
        padding: 70px 0 10px;
    }
`

const EmptyCheck = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    color: #fff;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
`

const EmptyBtn = styled.div`
    ${EmptyCheck};
    background: red;
`

const CheckBtn = styled.div`
    ${EmptyCheck};
    background: midnightblue;
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
                <Container>
                    <h2>Your Shopping Cart ({cart.total_unique_items} { cart.total_unique_items < 2 ? 'Item' : 'Items'})</h2>
                    { cart.line_items.map((item) => (
                        <CartItem item={item} removeFromCart={removeFromCart} updateProductQty={updateProductQty} />
                    ))}
                </Container>

                <Proceed>
                    <EmptyBtn className={classes.emptyButton} color='secondary' size='large' type='button' variant='contained' onClick={emptyCart}>
                        Empty Cart
                    </EmptyBtn>

                    <h3> Total: { cart.subtotal.formatted_with_symbol } </h3>

                    <CheckBtn component={Link} to="/checkout " className={classes.checkout} color='primary' size='large' type='button' variant='contained'>
                        Checkout
                    </CheckBtn>
                </Proceed>
            </FilledCartContainer>
        )
    };

    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
