import React from 'react'
import { Container, Typography } from '@mui/material'
import { FooterSection } from './style'

/**
 *
 * @returns {JSX.Element}
 * @description This function is used to render the Footer component
 *
 */

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <FooterSection>
      <Container maxWidth='xl'>
        <Typography variant='p' component='small'>
          {currentYear}
        </Typography>
      </Container>
    </FooterSection>
  )
}

export default Footer
