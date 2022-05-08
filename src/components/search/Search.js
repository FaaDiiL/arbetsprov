import React, { useEffect, useState, useRef } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import tickersJson from '../../local-json/tickers.json'
import { fetchClosePrice, checkAvailability } from '../../functions/helper'
import { SearchSection, theme } from './Search.style'
import { useSnackbar } from 'notistack'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import { Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

const Search = ({
  setFetchedData,
  setTickerName,
  searchFieldValue,
  setSearchFieldValue,
  setDateArray,
  setPriceArray,
}) => {
  const searchFieldElement = useRef(null)
  const { enqueueSnackbar } = useSnackbar()
  // enqueueSnackbar('Ticker not found.', { variant: 'error' })
  // States
  const [isMyInputFocused, setIsMyInputFocused] = useState(false)
  const [tickerSymbols, setTickerSymbols] = useState([])
  const [submittedValue, setSubmittedValue] = useState('')
  const [open, setOpen] = React.useState(false)
  useEffect(() => {
    let isLoading = true

    // Get all tickerSymbols from the tickersJson file and set them to the tickerSymbols state
    const getTickerSymbols = tickersJson.tickers
      .map((ticker) => ticker)
      .map((ticker) => ticker.symbol)

    if (isLoading) {
      setTickerSymbols(getTickerSymbols)
    }

    // Cleanup function
    return () => {
      isLoading = false
    }
  }, [])

  /**
   *
   * @param {*} event
   * @returns
   * @description This function is used to handle the form-submit of the search field
   * It will check if the ticker is available in the tickersJson file
   * If it is available, it will fetch the tickers-data and set it to the fetchedData-state
   * If it is not available, it will show a snackbar with the error message
   *
   */
  const handleSubmit = async (event) => {
    event.preventDefault()
    setOpen(false)
    if (!searchFieldValue) {
      enqueueSnackbar('Try to type a ticker symbol.', { variant: 'error' })
      return
    }
    // Check if the ticker is available
    if (!checkAvailability(tickerSymbols, searchFieldValue)) {
      enqueueSnackbar(`Ticker "${searchFieldValue}" not found.`, {
        variant: 'error',
      })
      return
    }
    // Fetch the close price for the ticker
    const data = await fetchClosePrice(searchFieldValue?.toUpperCase())

    if (!data) {
      enqueueSnackbar('Ticker not found.', { variant: 'error' })
      return
    }
    // Set the fetched data to the state
    setFetchedData(data)
    // Set the ticker name to the state
    setTickerName(data.dataset.name)
    // Set the date array to the state
    setDateArray(data.dataset.data.map((item) => item[1]).reverse())
    // Set the price array to the state
    setPriceArray(data.dataset.data.map((item) => item[0]).reverse())
  }

  // handleInputChange
  const handleInputChange = (event, value, reason) => {
    console.log(reason)
    event.preventDefault()
    if (reason === 'reset') {
      event.preventDefault()
      setOpen(false)
    }
    if (reason === 'selectOption') {
      event.preventDefault()
      setSearchFieldValue(event.target.innerHTML.toString().toUpperCase())
      setSubmittedValue(event.target.innerHTML.toString().toUpperCase())
    }
    if (reason === 'clear') {
      event.preventDefault()
      setOpen(false)
      return
    }
    if (reason === 'input') {
      event.preventDefault()
      setOpen(true)
      setSearchFieldValue(event.target.value.toString().toUpperCase())
      setSubmittedValue(event.target.value.toString().toUpperCase())
    }
  }

  // handleKeyPress
  const handleKeyUp = (event) => {
    event.preventDefault()
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      event.preventDefault()
      console.log(event.target.defaultValue)
      setSearchFieldValue((prev) => (prev = submittedValue))
      handleSubmit(event)
      // event.target.blur()
    }
  }
  const testItNow = (value) => {
    if (!value) {
      setOpen(false)
      return
    }
    setSearchFieldValue((prev) => (prev = value))
    setSubmittedValue((prev) => (prev = value))
  }
  return (
    <Container
      maxWidth='xl'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '17rem' },
      }}
    >
      <SearchSection>
        <ThemeProvider theme={theme}>
          <form onSubmit={(event) => event.preventDefault()}>
            <Autocomplete
              value={searchFieldValue}
              inputValue={searchFieldValue}
              open={open}
              id='combo-box-demo'
              options={tickerSymbols}
              freeSolo
              getOptionLabel={(option) => option}
              onInputChange={handleInputChange}
              // onChange={handleInputChange}
              onChange={(event, value) => {
                console.log(value)
                console.log(event)
                testItNow(value)
              }}
              renderInput={(params) => (
                <TextField
                  ref={searchFieldElement}
                  color='primary'
                  {...params}
                  label='Search'
                  variant='outlined'
                  onKeyUp={handleKeyUp}
                />
              )}
            />
            <Button
              size='medium'
              color='primary'
              onClick={handleSubmit}
              variant='contained'
              startIcon={<SearchIcon />}
            >
              SEARCH
            </Button>
          </form>
        </ThemeProvider>
      </SearchSection>
    </Container>
  )
}
export default Search
