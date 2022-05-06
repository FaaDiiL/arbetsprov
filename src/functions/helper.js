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
  return data
}
