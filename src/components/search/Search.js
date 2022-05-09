import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import {
  fetchTickerDatasetBySymbol,
  matchSearchFieldValueWithTickerSymbols,
} from '../../functions/helper'
import { SearchSection, theme } from './Search.style'
import { useSnackbar } from 'notistack'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import { Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { getTickerSymbols } from '../../functions/helper'
const Search = ({
  setFetchedData,
  setTickerName,
  searchFieldValue,
  setSearchFieldValue,
  setDateArray,
  setPriceArray,
}) => {
  // Snackbar popup HOF('Higer Order Function')
  const { enqueueSnackbar } = useSnackbar()
  // ---------- States ----------
  const tickerSymbols = getTickerSymbols
  const [valueSelectedByTheUser, setValueSelectedByTheUser] = useState('')
  const [open, setOpen] = React.useState(false)

  /**
   *
   * @param {*} event
   * @description This function is used to handle the form-submit of the search field.
   * It will check if the ticker is available in the tickersJson file.
   * If it is available, it will fetch the tickers-data and set it to the fetchedData-state.
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

    /*
     * checks that the search field does not match any of the ticker symbols in
     * the array, and triggers the snack bar with a error message
     */
    if (
      !matchSearchFieldValueWithTickerSymbols(tickerSymbols, searchFieldValue)
    ) {
      enqueueSnackbar(`Ticker "${searchFieldValue}" not found.`, {
        variant: 'error',
      })
      return
    }

    // Fetch the close price for the ticker
    const data = await fetchTickerDatasetBySymbol(
      searchFieldValue?.toUpperCase()
    )

    // Show a snackbar with the error message and return if the fetching failed
    if (!data) {
      enqueueSnackbar('Ticker not found.', { variant: 'error' })
      return
    }

    setFetchedData(data)

    // Removes all characters after the parentheses
    const tickerName = data.dataset.name.substring(
      0,
      data.dataset.name.indexOf(`)`) + 1
    )
    setTickerName(tickerName)

    // Set the date array to the state
    setDateArray(data.dataset.data.map((item) => item[1]).reverse())
    // Set the price array to the state
    setPriceArray(data.dataset.data.map((item) => item[0]).reverse())
  }

  /**
   *
   * @param {event} event
   * @param {value} value
   * @param {reason} reason
   * @description This function is used to handle the change of the search field.
   * depending on what reason that triggered the function, and set the value to the -searchFieldValue
   * & valueSelectedByTheUser-state or just return from the function.
   */
  const handleInputChange = (event, value, reason) => {
    if (reason === 'reset') {
      setOpen(false)
    }

    if (reason === 'selectOption') {
      setSearchFieldValue(event.target.innerHTML.toString().toUpperCase())
      setValueSelectedByTheUser(event.target.innerHTML.toString().toUpperCase())
    }

    if (reason === 'clear') {
      setOpen(false)
      return
    }

    if (reason === 'input') {
      setOpen(true)
      setSearchFieldValue(event.target.value.toString().toUpperCase())
      setValueSelectedByTheUser(event.target.value.toString().toUpperCase())
    }
  }

  /**
   *
   * @description This function is used to check if the pressed key is enter.
   * If it is, it will copy the searchFieldValue -state to the valueSelectedByTheUser -state
   * and trigger the handleSubmit function.
   *
   */
  const handleKeyUp = (event) => {
    event.preventDefault()
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      event.preventDefault()
      setSearchFieldValue((prev) => (prev = valueSelectedByTheUser))
      handleSubmit(event)
      // event.target.blur()
    }
  }

  /**
   *
   * @description This function is used to pick the value from the autocomplete-list.
   * It will set the value to the -valueSelectedByTheUser & searchFieldValue-state.
   */
  const changingValuesFromListNavigation = (event, value) => {
    // Close the autocomplete list if searchField is empty
    if (!value) {
      setOpen(false)
      return
    }
    setSearchFieldValue((prev) => (prev = value))
    setValueSelectedByTheUser((prev) => (prev = value))
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
              getOptionLabel={(option) => {
                if (typeof option === 'string') {
                  return option
                }
              }}
              onInputChange={handleInputChange}
              // onChange={handleInputChange}
              onChange={changingValuesFromListNavigation}
              renderInput={(params) => (
                <TextField
                  data-testid='search-input'
                  data-aria-label='search-field'
                  color='primary'
                  {...params}
                  label='Search'
                  variant='outlined'
                  onKeyUp={handleKeyUp}
                />
              )}
            />
            <Button
              title='search-btn'
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
