import axiosClient from './axiosClient'

export const login = async (userCredentials, dispatch) => {
  dispatch({ type: 'LOGIN_START' })
  try {
    const data = await axiosClient.post('/auth/login', userCredentials)
    dispatch({ type: 'LOGIN_SUCCESS', payload: data })
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err })
  }
}
