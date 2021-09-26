import React, {useEffect } from 'react'
import styled from 'styled-components/macro';
import { GiCheckMark } from 'react-icons/gi';

//styles
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    
    h3 {
        margin-top: 30px;
    }
`

const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: green;
`

const Check = styled(GiCheckMark)`
    color: #fff;
    width: 80%;
    height: 70%;
`

const Success = ({ refreshCart }) => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'auto'});

        refreshCart();
    }, []);

    return (
        <Container>
            <Circle> <Check /> </Circle>
            <h3>Order Successful!</h3>
        </Container>
    )
}

export default Success
