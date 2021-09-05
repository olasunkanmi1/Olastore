import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles'
import { Link, useLocation } from "react-router-dom";

import logo from '../../assets/OlaStore.png'

const Navbar = ({ totalItems, totalCost }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Link to='/'>
                        <img src={logo} alt="logo" height='40px' className='classes.image' />
                    </Link>

                    <div className={classes.grow} />
                    
                    { location.pathname === '/' ? (
                        <div className={classes.button}>
                            <IconButton 
                                aria-label='Show Cart Items' 
                                color='inherit'
                                component={Link}
                                to="/cart"
                            >
                                <Badge badgeContent={totalItems} color='secondary'>
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>) : (
                        <h4>
                            Total cost: <strong>{totalCost}</strong>
                        </h4>)
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
