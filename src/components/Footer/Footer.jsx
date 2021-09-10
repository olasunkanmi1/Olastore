import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo2.png'
import { AiOutlineMail } from 'react-icons/ai'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: .3fr .7fr;
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

const Logo = styled.div`
    img {
        height: 50px;
    }
`

const Newsletter = styled.div`
    
`

const Input = styled.div`
    display: flex;
    padding: 10px;
    background: #fff;
    height: 35px;
`

const Mail = styled(AiOutlineMail)`
    width: 20px;
`

const fgfv = styled.div`

`

const Footer = () => {
    return (
        <Container>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo> 

            <Newsletter>
                <p>Subscribe to our newsletter for updates on latest offers</p>

                <form>
                    <Input>
                        <Mail />
                        <input type="text" placeholder='E-mail Address' required />
                    </Input>
                    <button>Submit</button>
                </form>
            </Newsletter>
        </Container>
    )
}

export default Footer
