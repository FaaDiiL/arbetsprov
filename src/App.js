import './App.css'
import React, { useState } from 'react'
import Search from './components/Search'
import GraphClosePrice from './components/GraphClosePrice'
import { Container, Paper } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'

const MainSection = styled.main`
.ticker-name {
  padding: 20px 0;
}
margin:0 auto;
  min-height: calc(100vh - 400px);
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

function App() {
  const [fetchedData, setFetchedData] = useState([])
  const [searchFieldValue, setSearchFieldValue] = useState('')
  const [dateArray, setDateArray] = useState([])
  const [priceArray, setPriceArray] = useState([])
  const [tickerName, setTickerName] = useState('')
  return (
    <>
      <Header />
      <MainSection  className='App'>
        <Container maxWidth='xl'>
        <Paper elevation={24} sx={{padding:'50px 50px'}} >

        <Search
        setTickerName={setTickerName}
          setSearchFieldValue={setSearchFieldValue}
          setDateArray={setDateArray}
          setPriceArray={setPriceArray}
          setFetchedData={setFetchedData}
        />
        {tickerName && <h3 className='ticker-name'>{tickerName}</h3>}
        <GraphClosePrice
          searchFieldValue={searchFieldValue}
          dateArray={dateArray}
          priceArray={priceArray}
          setFetchedData={setFetchedData}
        />
        </Paper>
        </Container>
     
      </MainSection>
      <Footer />
    </>
  )
}

export default App
