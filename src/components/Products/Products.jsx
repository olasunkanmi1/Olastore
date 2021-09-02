import React from 'react'
import Grid from '@material-ui/core'
import Product from './Product/Product'

const products = [
    { id: 1, name: 'Shoe', description: 'For sports.', price: "$40" },
    { id: 2, name: 'macbook', description: 'Apple macbook.', price: "$270" }
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing="4">
                {products.map((product) => (
                    <Grid item key={product.id} xs="12" sm="6" md="4" lg="3">
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
