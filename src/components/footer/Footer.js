import React from 'react'
import { Container, Typography } from '@mui/material'
import { FooterSection } from './style'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <FooterSection>
      <Container maxWidth='xl'>
      <Typography variant="p" component="small" >
        Copyright {currentYear}
      </Typography>
      </Container>
    </FooterSection>
  )
}

export default Footer
