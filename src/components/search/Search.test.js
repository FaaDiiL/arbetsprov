import { describe, expect } from '@jest/globals'
import React from 'react'
import {
  render,
  screen,
} from '@testing-library/react'
import '@testing-library/jest-dom'
import Search from './Search'
import { SnackbarProvider } from 'notistack'
import { fetchTickerDatasetBySymbol, initializeData } from '../../functions/helper'


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

describe('Try to fetch ticker datasets with', () => {
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
