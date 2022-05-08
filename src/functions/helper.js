/**
 * Fetch all closed prices for a given ticker symbol
 */
export const fetchClosePrice = async (tickerSymbol) => {
  let closingPrice = '4'
  if (!tickerSymbol) return
  const response = await fetch(
    `https://data.nasdaq.com/api/v3/datasets/WIKI/${tickerSymbol}.json?api_key=Q2oBUscrof3LCuvfYasc&column_index=${closingPrice}&collapse=monthly&limit=52&order=desc`
  )
  if(!response.ok) return
  const data = await response.json()
  console.log(data)
  return data
}

/**
 * 
 * @param {Array <array>} array - Array of strings 
 * @param {Value <string>} val  - String to search for
 * @returns 
 */
export const checkAvailability = (array, value) => {
  return array.some(function(arrayValue) {
    return value === arrayValue;
  });
}

// check if array includes string value
export const includesString = (array, value) => {
  return array.includes(value);
} // end of includes
