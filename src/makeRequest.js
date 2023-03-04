export const makeRequest = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
  }
};