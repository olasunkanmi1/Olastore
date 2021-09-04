import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles'

import logo from '../../assets/OlaStore.png'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <img src={logo} alt="logo" height='40px' className='classes.image' />
                    {/* <Typography variant='h6' className='classes.title' color='inherit'>
                    </Typography> */}

                    <div className={classes.grow} />

                    <div className={classes.button}>
                        <IconButton aria-label='Show Cart Items' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
