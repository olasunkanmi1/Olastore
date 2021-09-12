import React from 'react'
import styled from 'styled-components/macro';
import { AiOutlineDelete } from 'react-icons/ai'

//styles
const Item = styled.div`
    display: grid;
    grid-template-columns: 80px 250px 120px 90px 90px auto;
    border-bottom: 2px solid #eee;
`

const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid #eee;
    padding: 15px;
    
    img {
        height: 40px;
        width: 40px;
    }
`

const Name = styled.div`
    display: flex;
    padding: 15px;
    border-right: 2px solid #eee;
`
const Quantity = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-right: 2px solid #eee;
`

const UpdateBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
    background: midnightblue;
    border-radius: 3px;
    color: #fff;
`

const Unit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-right: 2px solid #eee;
`

const Total = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-right: 2px solid #eee;
`

const Remove = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
`

const RmvBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    padding: 10px;
    background: midnightblue;
    color: #fff;
    border-radius: 5px;
    transition: .5s;
    cursor: pointer;

    &:hover {
        transform: scale(.95);
    }
`

const Icon =  styled(AiOutlineDelete)`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`

const CartItem = ({ item, removeFromCart, updateProductQty }) => {
    return (
        <Item>
            <Image>
                <img src={item.media.source} alt={item.name} />
            </Image>
            
            <Name> <h4>{item.name}</h4> </Name> 
           
            <Quantity>
                <UpdateBtn onClick={ () => updateProductQty(item.id, item.quantity - 1) }>-</UpdateBtn>
                <h4>{item.quantity}</h4>
                <UpdateBtn onClick={ () => updateProductQty(item.id, item.quantity + 1) }>+</UpdateBtn>
            </Quantity>

            <Unit> <h4>{item.price.formatted_with_symbol}</h4> </Unit>

            <Total> <h4>{item.line_total.formatted_with_symbol}</h4> </Total>
            
            <Remove>
                <RmvBtn onClick={ () => removeFromCart(item.id) }><Icon /> Remove</RmvBtn>
            </Remove>
        </Item>
    )
}

export default CartItem
