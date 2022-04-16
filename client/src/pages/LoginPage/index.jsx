import { useContext, useRef } from 'react'
import { login } from '../../api/Auth'
import { AuthContext } from '../../context/AuthContext'
import './LoginPage.scss'

export default function LoginPage() {
  const email = useRef()
  const password = useRef()

  const { user, isFetching, error, dispatch } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    login(
      { email: email.current.value, password: password.current.value },
      dispatch
    )
  }

  return (
    <div className='login'>
      <div className='login__container'>
        <div className='login__left'>
          <h1 className='login__title'>HappySocial</h1>
          <span className='login__text'>
            HappySocial helps you connect and share with the people in your life
          </span>
        </div>
        <div className='login__right'>
          <form className='login__form' onSubmit={handleSubmit}>
            <input
              type='email'
              required
              className='login__input'
              placeholder='Email address or your phone number'
              ref={email}
            />
            <input
              type='password'
              required
              className='login__input'
              placeholder='Password'
              minLength={6}
              ref={password}
            />
            <button className='login__btn' disabled={isFetching}>
              {isFetching ? 'Loading...' : 'Log In'}
            </button>
            <span className='login__forget-password'>Forgotten password?</span>
            <hr className='login__hr' />
            <button className='login__btn--green' disabled={isFetching}>
              {isFetching ? 'Loading...' : 'Create New Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
