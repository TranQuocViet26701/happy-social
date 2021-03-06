import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:8800/api/v1/',
  headers: { 'Content-Type': 'application/json' },
})

// Interceptor
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const URLs = ['/auth/local/register', '/auth/local']
    // const { config, data, status } = error.response

    // if (URLs.includes(config.url) && status === 400) {
    //   const errorList = data.data || []
    //   const firstError = errorList.length > 0 ? errorList[0] : {}
    //   const messageList = firstError.messages || []
    //   const firstMessage = messageList.length > 0 ? messageList[0] : {}

    //   throw new Error(firstMessage.message)
    // }

    // return Promise.reject(error)
    return error
  }
)

export default axiosClient
