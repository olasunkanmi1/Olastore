import React from 'react'
import styled, { css } from 'styled-components/macro';
import { AiOutlineDelete } from 'react-icons/ai'

//styles
const Item = styled.div`
    display: grid;
    grid-template-columns: 100px 300px 130px 90px 90px auto;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width: 1250px) {
        grid-template-columns: 80px 250px 130px 90px 90px auto;
    }
    
    @media screen and (max-width: 1100px) {
        grid-template-columns: 80px 200px 130px 90px 90px auto;
    }

    @media screen and (max-width: 850px) {
        grid-template-columns: 70px 160px 120px 85px 85px auto;
    }
    
    @media screen and (max-width: 740px) {
        grid-template-columns: 70px 200px 120px 85px auto;
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: 70px 160px 120px 85px auto;
    }
    
    @media screen and (max-width: 655px) {
        grid-template-columns: 150px 200px auto;
    }
    
    @media screen and (max-width: 550px) {
        grid-template-columns: 150px 150px auto;
    }
    
    @media screen and (max-width: 480px) {
        grid-template-columns: 150px 120px auto;
    }
`

const styles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid #eee;
    padding: 15px 10px;
`

const Image = styled.div`
   ${styles}; 
    
    img {
        height: 60px;
        width: 60px;
    }
`

const Name = styled.div`
    ${styles}; 
    justify-content: flex-start;

    @media screen and (max-width: 655px) {
        grid-column: 2 / 4;
        grid-row: 1 / 2;
    }
`
const Quantity = styled.div`
    ${styles}; 

    h4 {
        padding: 0 10px;
    }

    @media screen and (max-width: 655px) {
        border-top: 2px solid #eee;
    }
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

    @media screen and (max-width: 740px) {
        display: none;
    }
`

const Total = styled.div`
    ${styles}; 

    @media screen and (max-width: 655px) {
        border-top: 2px solid #eee;
    }
`

const Remove = styled.div`
    ${styles}; 
    border-right: none;

    @media screen and (max-width: 655px) {
        border-top: 2px solid #eee;
    }
`

const RmvBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: midnightblue;
    color: #fff;
    border-radius: 5px;
    transition: .5s;
    cursor: pointer;

    &:hover {
        transform: scale(.95);
    }

    h4 {
        font-size: 15px;
        @media screen and (max-width: 1040px) {
            display: none;
        }
    }
`

const Icon =  styled(AiOutlineDelete)`
    width: 20px;
    height: 20px;
    margin-right: 10px;

    @media screen and (max-width: 1040px) {
        margin-right: 0;
    }
`

const CartItem = ({ item, removeFromCart, updateProductQty }) => {
    return (
        <Item>
            <Image>
                <img src={item.media.source} alt={item.name} />
            </Image>
            
            <Name>
                <h4>{item.name}</h4> 
            </Name> 
        
            <Quantity>
                <UpdateBtn onClick={ () => updateProductQty(item.id, item.quantity - 1) }>-</UpdateBtn>
                <h4>{item.quantity}</h4>
                <UpdateBtn onClick={ () => updateProductQty(item.id, item.quantity + 1) }>+</UpdateBtn>
            </Quantity>

            <Unit> 
                <h4>{item.price.formatted_with_symbol}</h4> 
            </Unit>

            <Total>
                <h4>{item.line_total.formatted_with_symbol}</h4> 
            </Total>
            
            <Remove>
                <RmvBtn onClick={ () => removeFromCart(item.id) }><Icon /> <h4>Remove</h4></RmvBtn>
            </Remove>
        </Item>
    )
}

export default CartItem
