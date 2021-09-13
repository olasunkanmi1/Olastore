import React, { useEffect } from 'react'
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
    flex-direction: column;
    margin-top: 75px;
    padding: 2rem 12rem;
    width: 100%;

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

    h2 {
        padding-bottom: 15px;

        @media screen and (max-width: 500px) {
            font-size: 20px;
        } 
        
        @media screen and (max-width: 400px) {
            font-size: 15px;
        } 
        
        @media screen and (max-width: 320px) {
            font-size: 12px;
        } 
    }
`

const Info = styled.div`
    display: grid;
    grid-template-columns: 400px 130px 90px 90px auto;
    border-top: 2px solid #eee;

    p {
        font-size: 12px;
        font-weight: bold;
        padding: 15px 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 2px solid #eee;
    }

    @media screen and (max-width: 1250px) {
        grid-template-columns: 330px 130px 90px 90px auto;
    }

    @media screen and (max-width: 1100px) {
        grid-template-columns: 280px 130px 90px 90px auto;
    }

    @media screen and (max-width: 850px) {
        grid-template-columns: 230px 120px 85px 85px auto;
    }

    @media screen and (max-width: 740px) {
        display: none;
    }
`

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1450px) {
        flex-direction: column;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1450px) {
        margin-bottom: 30px;
    }
`

const Proceed = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1450px) {
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (max-width: 650px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`

const Checkout = styled.div`
    padding: 10px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width: 1450px) {
        width: 300px;
    }

    @media screen and (max-width: 650px) {
        margin-top: 30px;
        width: 100%;
    }
`

const Tt = styled.div`
    padding: 0 0 20px;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
`

const EmptyCheck = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    color: #fff;
    width: 100%;
    height: auto;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        transform: scale(.95);
    }
`

const EmptyBtn = styled.div`
    ${EmptyCheck};
    background: red;
    margin: 35px 0;

    @media screen and (max-width: 1450px) {
        width: auto;
        margin: 35px 0 0;
    }
    
    @media screen and (max-width: 650px) {
        width: 100%;
        margin: 0 ;
    }
    
`

const CheckBtn = styled.div`
    ${EmptyCheck};
    background: midnightblue;
`

const Cart = ({ cart, updateProductQty, removeFromCart, emptyCart }) => {
    // const isEmpty = !cart.line_items.length; //meaning cart is 0. same as cart.line_items.length == 0;
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    const EmptyCart = () => {
        return (
            <EmptyCartContainer>
                <img src={box} alt="empty-box" />
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added any items to your cart yet.</p>
                <Btn to='/'>Continue Shopping</Btn>
            </EmptyCartContainer>
        )
    };
    
    const FilledCart = () => {
        return (
            <FilledCartContainer>
                <h2>Your Shopping Cart ({cart.total_unique_items} { cart.total_unique_items < 2 ? 'Item' : 'Items'})</h2>
                <Info>
                    <p>GADGET</p>
                    <p>QUANTITY</p>
                    <p>UNIT</p>
                    <p>SUBTOTAL</p>
                </Info>

                <Wrap>
                    <Container>
                        { cart.line_items.map((item) => (
                            <CartItem item={item} removeFromCart={removeFromCart} updateProductQty={updateProductQty} />
                        ))}
                    </Container>

                    <Proceed>
                        <EmptyBtn onClick={emptyCart}>
                            Empty Cart
                        </EmptyBtn>
                        
                        <Checkout>
                            <Tt> <h3>Total:</h3> <h3>{ cart.subtotal.formatted_with_symbol }</h3> </Tt>
                            <CheckBtn component={Link} to="/checkout">
                                Checkout
                            </CheckBtn>
                        </Checkout>
                    </Proceed>
                </Wrap>
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
