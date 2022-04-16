import { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import axiosClient from '../../api/axiosClient'
import './RegisterPage.scss'

export default function RegisterPage() {
  const history = useHistory()

  const email = useRef()
  const password = useRef()
  const username = useRef()
  const retypePassword = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password.current.value !== retypePassword.current.value) {
      retypePassword.current.setCustomValidity(`Password doesn't match`)
    }

    const user = {
      email: email.current.value,
      username: username.current.value,
      password: password.current.value,
    }

    try {
      await axiosClient.post('/auth/register', user)
      history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='register'>
      <div className='register__container'>
        <div className='register__left'>
          <h1 className='register__title'>HappySocial</h1>
          <span className='register__text'>
            HappySocial helps you connect and share with the people in your life
          </span>
        </div>
        <div className='register__right'>
          <form className='register__form' onSubmit={handleSubmit}>
            <input
              type='text'
              className='register__input'
              placeholder='Username'
              ref={username}
              required
            />
            <input
              type='email'
              className='register__input'
              placeholder='Email'
              ref={email}
              required
            />
            <input
              type='password'
              className='register__input'
              placeholder='Password'
              ref={password}
              minLength={6}
              required
            />
            <input
              type='password'
              className='register__input'
              placeholder='Retype Password'
              ref={retypePassword}
              minLength={6}
              required
            />
            <button className='register__btn' type='submit'>
              Sign Up
            </button>
            <hr className='register__hr' />
            <button className='register__btn--green'>Log Into Account</button>
          </form>
        </div>
      </div>
    </div>
  )
}
