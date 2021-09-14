import React from 'react'
import styled from 'styled-components'
import bg from '../../../assets/bg2.jpg'
import { BsArrowRightShort } from 'react-icons/bs'
import './banner.css'

//styles
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 75px);
    width: 100vw;
    background-image: url(${bg});
    background-size: cover;
    margin-top: 75px;
    position: relative;
    padding: 2rem 12rem;

    @media screen and (max-width: 1200px) {
        padding: 2rem 10rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 2rem 8rem;
    }
    @media screen and (max-width: 920px) {
        padding: 2rem 6rem;
    }
    @media screen and (max-width: 768px) {
        padding: 2rem 5rem;
    }
    @media screen and (max-width: 600px) {
        padding: 2rem 4rem;
    }
    @media screen and (max-width: 500px) {
        padding: 2rem 3rem;
    }
    @media screen and (max-width: 450px) {
        padding: 2rem 2rem;
    }

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: midnightblue;
        opacity: .2;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        z-index: 5;
        user-select: none; 
        
        h1 {
            font-size: 5rem;
            text-align: center;
            margin-bottom: 10px;

            @media screen and (max-width: 1260px) {
                font-size: 4rem;
            }
            
            @media screen and (max-width: 1020px) {
                font-size: 3rem;
            }
            
            @media screen and (max-width: 350px) {
                font-size: 2rem;
            }
        }

        h4 {
            text-align: center;
        }
    }
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    margin-top: 50px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    transition: 1s;

    &:hover {
        background: midnightblue;
        border: 2px solid midnightblue;
        transform: scale(.99);
    }
`

const Arrow = styled(BsArrowRightShort)`
    color: #fff;
    font-size: 20px;
    margin-left: 10px;
    transition: .5s;
`

const Banner = () => {
    return (
        <Container>
            <div>
                <h1>Welcome to OlaStore</h1>
                <h4>Your One-Stop Marketplace for Quality Gadgets</h4>
                <Button className='btn' onClick={() => window.location.replace("#shopping")}> SHOPPING <Arrow className='arrow' /> </Button>
            </div>
        </Container>
    )
}

export default Banner
