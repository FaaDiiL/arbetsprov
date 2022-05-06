import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material'

const FooterSection = styled.footer`
  text-align: center;
  width: 100%;
  height: 150px;
  background-color: #405842;
  color:#fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:50px;
  small{ 
       font-size:1rem;
     }
  
`
const Footer = () => {
  return (
    <FooterSection>
      <Container maxWidth='xl'>
        <small>Copyright {new Date().getFullYear()}</small>
      </Container>
    </FooterSection>
  )
}

export default Footer
