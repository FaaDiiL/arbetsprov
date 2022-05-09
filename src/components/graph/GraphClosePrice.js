import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import {initializingChartData, initializingChartOptions } from '../../functions/helper'

// Chart.js plugin implementation
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  Filler
)
const GraphClosePrice = ({ fetchedData, dateArray, priceArray, tickerName }) => {  
  // ----- States -----
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [chartOptions, setChartOptions] = useState(initializingChartOptions)

  // ----- Side-effect handlers -----
  // This function runs every time one of the 'dataArray, priceArray or fetchedData' -state changes
  useEffect(() => {
    let isLoading = true

    if (isLoading) {
      // Preventing memory leak
      setChartData(initializingChartData({priceArray, dateArray}))
      setChartOptions(initializingChartOptions)
    }

    return () => {
      isLoading = false
    }
  }, [dateArray, priceArray, fetchedData])

  return (
    <Container maxWidth={'lg'}>
      {tickerName && <h3 className='ticker-name'>{tickerName}</h3>}
      <Line options={chartOptions} data={chartData} />
    </Container>
  )
}

export default GraphClosePrice
