import React from 'react'
import { CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components/macro';

//styles
const Card = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    height: 200px;
`

const Media = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100px;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between
`

const Product = ({ product, addToCart }) => {
    return (
        <Card>
            <Media>
                <img src={product.media.source} alt="product" />
            </Media>

            <Content>
                    <Typography 
                        variant='h5'
                        gutterBottom
                    >
                        {product.name}
                    </Typography>
                    
                    <Typography variant='h5'
                    >
                        {product.price.formatted_with_symbol}
                    </Typography>

                <Typography
                    dangerouslySetInnerHTML={{ __html: product.description }}
                    variant='body2'
                    color='textSecondary'
                />
            </Content>

            <CardActions disableSpacing >
                <IconButton aria-label='Add to Cart' onClick={() => addToCart(product.id, 1)}>
                    <AddShoppingCartOutlined />
                </IconButton>
            </CardActions>
        </Card>
    )
}
               
export default Product
