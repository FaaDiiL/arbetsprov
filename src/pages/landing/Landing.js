import React, { useState } from 'react'
import Search from '../../components/search/Search'
import GraphClosePrice from '../../components/graph/GraphClosePrice'
import { Container, Paper } from '@mui/material'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { MainSection } from './Landing.style'

function Landing() {
  // States
  const [fetchedData, setFetchedData] = useState([])
  const [searchFieldValue, setSearchFieldValue] = useState('')
  const [dateArray, setDateArray] = useState([])
  const [priceArray, setPriceArray] = useState([])
  const [tickerName, setTickerName] = useState('')
  return (
    <>
      <Header />
      <MainSection className='Landing'>
        <Container maxWidth='xl'>
          <Paper elevation={24} sx={{ padding: '50px 50px' }}>
            <Search
              setTickerName={setTickerName}
              setSearchFieldValue={setSearchFieldValue}
              searchFieldValue={searchFieldValue}
              setDateArray={setDateArray}
              setPriceArray={setPriceArray}
              setFetchedData={setFetchedData}
            />

            <GraphClosePrice
              tickerName={tickerName}
              searchFieldValue={searchFieldValue}
              dateArray={dateArray}
              priceArray={priceArray}
              setFetchedData={setFetchedData}
              fetchedData={fetchedData}
            />
          </Paper>
        </Container>
      </MainSection>
      <Footer />
    </>
  )
}

export default Landing
