import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "https://api.real-estate-manager.redberryinternship.ge/api/",
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    }
  });