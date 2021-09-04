import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'
import CartItem from './CartItem/CartItem';

const Cart = ({ cart }) => {
    const classes = useStyles();
    // const isEmpty = !cart.line_items; //meaning cart is 0. same as cart.line_items.length == 0;
    
    const EmptyCart = () => {
        return (
            <Typography variant='subtitle1'>Cart is empty</Typography>
        )
    };
    
    const FilledCart = () => {
        return (
            <>
                <Grid container spacing={3}>
                    { cart.line_items.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CartItem item={item} />
                        </Grid>
                    ))}
                </Grid>

                <div className={classes.cardDetails}>
                    <Typography variant='h4'>
                        Subtotal: { cart.subtotal.formatted_with_symbol }
                        <div>
                            <Button className={classes.emptyButton} color='secondary' size='large' type='button' variant='contained'>
                                Empty Cart
                            </Button>
                            <Button className={classes.checkout} color='primary' size='large' type='button' variant='contained'>
                                Checkout
                            </Button>
                        </div>
                    </Typography>
                </div>
            </>
        )
    };

    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart ({cart.total_unique_items} items)</Typography>
            { !cart.line_items ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
