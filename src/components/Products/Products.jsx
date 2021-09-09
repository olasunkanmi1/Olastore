import React from 'react'
import Product from './Product/Product'
import Banner from './Banner/Banner'
import styled from 'styled-components/macro';

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: 250px 250px 250px;
    // grid-gap: 50px;
    justify-content: space-between;
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
`

const Products = ({ products, addToCart }) => {
    return (
        <>
            <Banner />
            <Container id='shopping'>
                {products.map((product) => (
                    <Product product={product} addToCart={addToCart} />
                ))}
            </Container>
        </>
    )
}

export default Products
