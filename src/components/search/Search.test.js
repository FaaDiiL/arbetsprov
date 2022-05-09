import {describe, expect} from '@jest/globals'
import React from 'react'
import {
  render,
  waitFor,
  screen,
  fireEvent,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Search from './Search'
import { SnackbarProvider } from 'notistack'
import { fetchTickerDatasetBySymbol } from '../../functions/helper'

const initializeData = {
  dataset: {
    id: 9775687,
    dataset_code: "FB",
    database_code: "WIKI",
    name: "Facebook Inc. (FB) Prices, Dividends, Splits and Trading Volume",
    description: `End of day open, high, low, close and volume, dividends and splits, and split/dividend adjusted open, high, low close and volume for Facebook, Inc. (FB). Ex-Dividend is non-zero on ex-dividend dates. Split Ratio is 1 on non-split dates. Adjusted prices are calculated per CRSP (www.crsp.com/products/documentation/crsp-calculations)\n\nThis data is in the public domain. You may copy, distribute, disseminate or include the data in other products for commercial and/or noncommercial purposes.\n\nThis data is part of Quandl's Wiki initiative to get financial data permanently into the public domain. Quandl relies on users like you to flag errors and provide data where data is wrong or missing. Get involved: connect@quandl.com\n`,
    refreshed_at: "2018-03-27T21:46:11.036Z",
    newest_available_date: "2018-03-27",
    oldest_available_date: "2012-05-18",
    column_names: [
      "Date",
      "Close"
    ],
    frequency: "daily",
    type: "Time Series",
    premium: false,
    limit: 2,
    transform: null,
    column_index: 4,
    start_date: "2012-05-18",
    end_date: "2018-03-27",
    data: [
      [
        "2018-03-31",
        152.19
      ],
      [
        "2018-02-28",
        178.32
      ]
    ],
    collapse: "monthly",
    order: "desc",
    database_id: 4922
  }
}

it('should render out an input element', async () => {
  render(
    <SnackbarProvider>
      <Search />
    </SnackbarProvider>
  )
  const searchInputEl = screen.getByTestId('search-input')
  expect(searchInputEl).toBeInTheDocument()
})

it('input element should have a color primary', async () => {
  render(
    <SnackbarProvider>
      <Search />
    </SnackbarProvider>
  )
  const searchInputEl = screen.getByTestId('search-input')
  expect(searchInputEl).toHaveStyle('color: primary')
})

describe('Try to fetch ticker datasets with ', () => {

it('right queries', async () => {
  const tickerDataset = await fetchTickerDatasetBySymbol('FB', 2)
  global.fetch = jest.fn(() => {
    Promise.resolve({
      json: () => {
        Promise.resolve(initializeData)
      },
    })
  })

  expect(tickerDataset).toMatchObject(initializeData)
})


it('wrong queries', async () => {
  const tickerDataset = await fetchTickerDatasetBySymbol('FBcedse', 2)
  global.fetch = jest.fn(() => {
    Promise.resolve({
      json: () => {
        Promise.resolve(initializeData)
      },
    })
  })

  expect(tickerDataset).toBeNull()
})
})