import React from 'react'
import { Container } from '@mui/material'
import { FooterSection } from './style'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <FooterSection>
      <Container maxWidth='xl'>
        <small>Copyright {currentYear}</small>
      </Container>
    </FooterSection>
  )
}

export default Footer
