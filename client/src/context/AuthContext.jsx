import { createContext, useReducer } from 'react'
import { AuthReducer } from './AuthReducer'

const INITIAL_STATE = {
  user: {
    _id: '622ef776a376cd8163848aba',
    username: 'doraemon',
    email: 'doraemon@gmail.com',
    profilePicture: '',
    coverPicture: '',
    followers: ['622ef3f4592294ade3614d73'],
    followings: ['622ef3f4592294ade3614d73'],
    isAdmin: true,
    description: 'this is my first description',
  },
  isFetching: false,
  error: false,
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
