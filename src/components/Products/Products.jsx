import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import Banner from './Banner/Banner'
import styled from 'styled-components/macro';

//styles
const Container = styled.section`
    
`

const Products = ({ products, addToCart }) => {
    return (
        <Container>
            <Banner />
            <div />
            <Grid container justify="center" spacing="4" id='shopping'>
                {products.map((product) => (
                    <Grid item key={product.id} xs="12" sm="6" md="4" lg="3">
                        <Product product={product} addToCart={addToCart} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Products
