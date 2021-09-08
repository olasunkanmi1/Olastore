import React from 'react'
import styled from 'styled-components'
import bg from '../../../assets/bg.jpg'

//styles
const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 100vh;
    background-image: url(${bg});
    background-size: cover;
`

const Banner = () => {
    return (
        <Container>
            <h1>Welcome to Olastore</h1>
            <h4>Your No 1 stop marketplace for quality gadgets</h4>
        </Container>
    )
}

export default Banner
