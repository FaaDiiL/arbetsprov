/**
 * Fetch all closed prices for a given ticker symbol
 */
/**
 *
 * @param {string} tickerSymbol - The tickersymbol as a string ex. "FB" or "AAPL"
 * @returns {Promise} - Returns a promise with dataset_data object
 * @description This function is used to fetch dataset_data object for a given tickersymbol
 * @json data.dataset_data - The dataset_data object
 *
 */
export const fetchClosePrice = async (tickerSymbol) => {
  let closingPrice = '4'
  if (!tickerSymbol) return
  const response = await fetch(
    `https://data.nasdaq.com/api/v3/datasets/WIKI/${tickerSymbol}.json?api_key=${process.env.REACT_APP_API_KEY}&column_index=${closingPrice}&collapse=monthly&limit=52&order=desc`
  )
  if (!response.ok) return
  const data = await response.json()
  return data
}

/**
 *
 * @param {Array <array>} array - Array of strings
 * @param {Value <string>} val  - String to search for
 * @returns
 */
export const checkAvailability = (array, value) => {
  return array.some(function (arrayValue) {
    return value === arrayValue
  })
}

// check if array includes string value
/**
 * 
 * @param {*} array - Array of strings 
 * @param {*} value - Control String
 * @returns {boolean} - Returns true if array includes value
  * @description This function is used to check if an array includes the string value 
 */
export const includesString = (array, value) => {
  return array.includes(value)
} // end of includes

// --------------- Initialize - Object /  Initialize function ---------------
/**
 *
 * @param {Object <Object>} object
 * @param {priceArray <Array>} priceArray  - Array of <Number> values
 * @param {dataArray <Array>} dataArray  - Array of <String> values
 * @returns {Object <Object>} - Returns an object of labels & datasets for the chart
 * @description This function is used to initialize the chart
 *
 */
export const initializingChartData = ({ priceArray, dateArray }) => ({
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

/**
 *
 * @Description This Object to initialize chart options
 *
*/
export const initializingChartOptions = {
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
}
