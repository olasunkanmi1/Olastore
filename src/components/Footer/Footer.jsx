import React from 'react'
import styled, { css } from 'styled-components/macro'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from "react-router-dom";
import logo from '../../assets/logo2.png';
import playstorelogo from '../../assets/playstore.svg'
import applestorelogo from '../../assets/apple.svg';
import { ImFacebook2 } from 'react-icons/im'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaWhatsappSquare } from 'react-icons/fa'

//styles
const Container = styled.section`
    background: midnightblue;
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
`

const Lnd = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 20px;
    margin-bottom: 50px;

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media screen and (max-width: 405px) {
        grid-template-columns: 1fr;
    }
`

const Logo = styled(Link)`
    img {
        height: 50px;
    }
`

const Newsletter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff; 

    @media screen and (max-width: 960px) {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
    }

    @media screen and (max-width: 600px) {
        grid-column: 1 / 3;
    }

    @media screen and (max-width: 405px) {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
    }

    p {
        margin-bottom: 10px;
        font-size: 13px;
    }
`

const Input = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    background: #fff;
    border-radius: 5px;

    input {
        width: 90%;
        outline: none;
        border: none;
        font-size: 15px;
    }

    button {
        right: 10px;
        padding: 5px 10px;
        outline: none;
        border: 2px solid midnightblue;
        border-radius: 5px;
        color: midnightblue;
        background: transparent;
        transition: .5s;
        cursor: pointer;
        font-size: 13px;
        font-weight: 600;

        &:hover {
            background: midnightblue;
            color: #fff;
        }
    }
`

const Mail = styled(AiOutlineMail)`
    height: 25px;
    width: 35px;
    color: midnightblue;
`

const Download = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;

    @media screen and (max-width: 960px) {
        grid-column: 3 / 4;
        grid-row: 1 / 2;
    }
    
    @media screen and (max-width: 600px) {
        grid-column: 2 / 3;
    }

    @media screen and (max-width: 405px) {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }

    p {
        color: #fff;
        text-align: center;
        margin-bottom: 10px;
    }
`

const style = css`
    display: grid;
    place-items: center;
    grid-template-columns: .2fr .8fr;
    padding: 5px;
    width: 150px;
    height: 45px;
    border: 2px solid #fff;
    border-radius: 5px;
    color: #fff;
    transition: .5s;

    &:hover {
        transform: scale(.95);
    }

    h5 {
        font-size: 9px; 
    }
    h4 {
        font-size: 13px;
         font-weight: 700;
    }
` 

const PlayStore = styled(Link)`
    ${style};
    margin-bottom: 10px;

    img {
        width: 25px;
        height: 25px;
        margin-left: 5px;
    }
`

const AppleStore = styled(Link)`
    ${style};
    
    img {
        width: 30px;
        height: 30px;
    }
`

const Get = styled.section`
    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: #fff;

    div {
        display: flex;
        flex-direction: column;

        a {
            font-size: 13px;
            color: #fff;
            margin-bottom: 10px;
        }
    }

    h4 {
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 15px;
    }
    
    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
    }
`

const Social = styled.section`
    @media screen and (max-width: 700px) {
        grid-column: 1 / 3;
    }
`

const Icon = styled.section`
    display: flex;
`

const iconstyle = css`
    width: 30px;
    height: 30px;
    color: #fff;
    cursor: pointer;
    margin-right: 20px;
`

const Ig = styled(FaInstagramSquare)`
    ${iconstyle};
`
const Tw = styled(FaTwitterSquare)`
    ${iconstyle};
`
const Fb = styled(ImFacebook2)`
    ${iconstyle};
`
const Wa = styled(FaWhatsappSquare)`
    ${iconstyle};
`

const Footer = () => {
    return (
        <Container>
            <Lnd>
                <Logo to='/'>
                    <img src={logo} alt="logo" />
                </Logo> 

                <Newsletter>
                    <p>Subscribe to our newsletter for updates on latest offers</p>

                    <form>
                        <Input>
                            <Mail />
                            <input type="email" placeholder='E-mail Address' required />
                            <button>Submit</button>
                        </Input>
                    </form>
                </Newsletter>

                <Download>
                    <p>Download the free app</p>
                    <PlayStore>
                        <img src={playstorelogo} alt="playstore" />
                        <Get>
                            <h5>Get it on</h5>
                            <h4>Play Store</h4>
                        </Get>
                    </PlayStore>

                    <AppleStore>
                        <img src={applestorelogo} alt="applestore" />
                        <Get>
                            <h5>Download on the</h5>
                            <h4>App Store</h4>
                        </Get>
                    </AppleStore>
                </Download>
            </Lnd>

            <Wrapper>
                <div>
                    <h4>Know Us</h4>
                    <a href="/">About</a>
                    <a href="/">Career</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms & Conditions</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="/">Return Policy</a>
                    <a href="/">FAQs</a>
                    <a href="/">Contact</a>
                </div>
                
                <Social>
                    <h4>Social</h4>
                    <Icon>
                        <Ig />
                        <Tw />
                        <Wa />
                        <Fb />
                    </Icon>
                </Social>
            </Wrapper>
        </Container>
    )
}

export default Footer
