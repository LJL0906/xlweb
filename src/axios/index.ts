import axios from 'axios'

const baseURL = import.meta.env.VITE_APP_API

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// http request 拦截器
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// http response 拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.error(error)
  },
)

export default instance
