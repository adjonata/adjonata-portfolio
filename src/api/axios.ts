import axios from 'axios'

export default axios.create({
  baseURL: process.env.VITE_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
})
