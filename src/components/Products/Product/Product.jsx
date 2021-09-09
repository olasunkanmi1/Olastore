import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import styled from 'styled-components/macro';

//styles
const Card = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 100%;
    margin-bottom: 40px;
    border-radius: 5px;
    cursor: pointer;
    transition: .5s;

    &:hover {
        box-shadow: 0px 0px 10px 5px midnightblue;
    }
`

const Media = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 200px;
    overflow: hidden;
    background: rgb(46, 46, 117);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    img {
        width: 150px;
        width: 150px;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    h3 {
        margin-bottom: 5px;
    }

    p {
        font-size: 13px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }

    h4 {
        margin: 10px 0;
    }
`

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid midnightblue;
    border-radius: 5px;
    color: #fff;
    padding: 5px;
    font-size: 15px;
    font-weight: 700;
    color: midnightblue;
    transition: .5s;

    &:hover {
        background: midnightblue;
        color: #fff;
    }
`

const AddCart = styled(MdAddShoppingCart)`
    margin-right: 10px;
    font-size: 20px;
`

const Product = ({ product, addToCart }) => {
    return (
        <Card>
            <Media>
                <img src={product.media.source} alt="product" />
            </Media>

            <Content>
                <h3>{product.name}</h3>
                
                <p dangerouslySetInnerHTML={ {__html: product.description} } />
                    
                <h4>{product.price.formatted_with_symbol}</h4>

                <Button aria-label='Add to Cart' onClick={() => addToCart(product.id, 1)}>
                    <AddCart /> ADD TO CART
                </Button>
            </Content>
        </Card>
    )
}
               
export default Product
