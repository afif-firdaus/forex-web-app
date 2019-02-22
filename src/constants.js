const API_KEY = process.env.REACT_APP_API_KEY
const API_BASE = 'https://min-api.cryptocompare.com/data/pricemulti'

export const INTERVAL = 1e4 // 10 seconds
export const API_URL = `${API_BASE}?api_key=${API_KEY}`