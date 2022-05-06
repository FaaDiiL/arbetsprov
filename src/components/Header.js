import React from 'react'
import styled from 'styled-components'

const HeaderSection = styled.header`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300&display=swap');

  text-align: center;
  width: 100%;
  height: 150px;
  background-color: #405842;
  color:#fff;
  font-size:1.7rem;
  /* letter-spacing: 0.15rem; */
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:50px;
  small{ 
       font-size:1rem;
     }
  
`
const Header = () => {
  return (
    <HeaderSection>
      <h1>SEARCH TICKER</h1>
    </HeaderSection>
  )
}

export default Header
