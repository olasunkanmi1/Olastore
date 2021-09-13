import React, { useEffect } from 'react'
import Product from './Product/Product'
import Banner from './Banner/Banner'
import styled from 'styled-components/macro';

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: 300px 300px 300px;
    justify-content: space-between;
    padding: 5rem 12rem 0;

    @media screen and (max-width: 1400px) {
        grid-template-columns: 250px 250px 250px;
    }
    @media screen and (max-width: 1200px) {
        padding: 5rem 10rem 0;
        grid-template-columns: 230px 230px 230px;
    }
    @media screen and (max-width: 1100px) {
        grid-template-columns: 210px 210px 210px;
    }
    @media screen and (max-width: 1000px) {
        padding: 5rem 8rem 0;
    }
    @media screen and (max-width: 950px) {
        grid-template-columns: 300px 300px;
    }
    @media screen and (max-width: 920px) {
        padding: 5rem 6rem 0;
    }
    @media screen and (max-width: 830px) {
        grid-template-columns: 250px 250px;
    }
    @media screen and (max-width: 768px) {
        padding: 5rem 5rem 0;
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: 230px 230px;
    }
    @media screen and (max-width: 650px) {
        grid-template-columns: 210px 210px;
    }
    @media screen and (max-width: 600px) {
        padding: 5rem 4rem 0;
    }
    @media screen and (max-width: 570px) {
        grid-template-columns: 1fr;
    }
    @media screen and (max-width: 500px) {
        padding: 5rem 3rem 0;
    }
    @media screen and (max-width: 450px) {
        padding: 5rem 2rem 0;
    }
`

const Products = ({ products, addToCart }) => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
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
