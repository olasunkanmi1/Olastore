import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'

const products = [
    { id: 1, name: 'Shoe', description: 'For sports.', price: "$40", image: 'https://cdn.vox-cdn.com/thumbor/6_tZq0BoeaVG1_yVI1ly29bCMVE=/0x0:2048x1280/920x613/filters:focal(861x477:1187x803):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69045732/Exbfpl2WgAAQkl8_resized.0.jpeg' },
    { id: 2, name: 'macbook', description: 'Apple macbook.', price: "$270", image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_IN?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1613672874000' }
]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
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
