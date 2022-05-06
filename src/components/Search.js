import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import tickersJson from '../local-json/tickers.json'
import { fetchClosePrice } from '../functions/helper'
import styled from 'styled-components'
import '../App.css'

const SearchSection = styled.div`
  .error {
    text-align: left;
    color: red;
  }
`

const Search = ({
  setTickerName,
  setSearchFieldValue,
  setDateArray,
  setPriceArray,
}) => {
  const [fetchedData, setFetchedData] = useState([])
  const [tickers, setTickers] = useState([])
  const [error, setError] = useState({ notFoundTicker: false })
  const [textFieldValue, setTextFieldValue] = useState('')
  useEffect(() => {
    setTickers([...tickersJson.tickers].map((ticker) => ticker.symbol))
  }, [])

  return (
    <SearchSection>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          console.log(tickers?.some(textFieldValue))
        }}
      >
        {error.notFoundTicker && textFieldValue === '' && (
          <small className='error'>Ticker not found</small>
        )}
        <Autocomplete
          id='combo-box-demo'
          options={tickers}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          renderInput={(params) => {
            console.log(params.inputProps.value)
            return(
            <TextField
            value={textFieldValue}
              {...params}
              label='Search a ticker symbol'
              variant='outlined'
              onChange={(event) => {
                if (event.target.value)
                setTextFieldValue(event.target.value)
                setSearchFieldValue(event.target.value)
              }}
            />
          )}}
          onChange={(event, value) => {
            setSearchFieldValue(value)
            fetchClosePrice(value).then((data) => {
              setFetchedData(data)
              let newDateArr = []
              let newPriceArr = []
              setTickerName(data?.dataset?.name)
              data?.dataset?.data.forEach((day) => {
                newDateArr.unshift(day[0])
                newPriceArr.unshift(day[1])
              })
              setDateArray(newPriceArr)
              setPriceArray(newDateArr)
            })
          }}
        />
      </form>
    </SearchSection>
  )
}

export default Search
