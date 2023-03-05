import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://currencyscoop.p.rapidapi.com/latest',
  headers: {
    'X-RapidAPI-Key': '46bac45572mshf0b2f01ae6f2d12p140116jsn3ef3ad3792a7',
    'X-RapidAPI-Host': 'currencyscoop.p.rapidapi.com'
  }
};

// fetch current rates from API (rapidapi.com)
export const fetchData = async () => {
  try {
    const response = await axios.request(options)
    return response.data.response
  } catch (error) {
    console.error(error)
  }
}