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
  Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'

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
const GraphClosePrice = ({
  dateArray,
  priceArray,
}) => {
  const [fetchedData] = useState([])
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [chartOptions, setChartOptions] = useState({})
  useEffect(() => {
    let isLoading = true
    if (isLoading) {
      setChartData({
        labels: priceArray,
        datasets: [
          {
            label: 'Close Price',
            fill: true, 
            data: dateArray,
            backgroundColor: '#606c3890',
            borderColor: '#283618',
            borderWidth: 3,
          },
        ],
      })
    }
    return () => {
      isLoading = false
    }
  }, [dateArray, priceArray, fetchedData])

  useEffect(() => {
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'End of Day Close Price',
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                autoSkip: true,
                maxTicksLimit: 10,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                autoSkip: true,
                maxTicksLimit: 10,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    })
  }, [])
  return (
    <Container maxWidth={'lg'}  >
      <Line options={chartOptions} data={chartData} />
    </Container>
  )
}

export default GraphClosePrice
