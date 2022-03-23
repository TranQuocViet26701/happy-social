import React from 'react'
import './LoginPage.scss'

export default function LoginPage() {
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
          <div className='login__form'>
            <input
              type='text'
              className='login__input'
              placeholder='Email address or your phone number'
            />
            <input
              type='text'
              className='login__input'
              placeholder='Password'
            />
            <button className='login__btn'>Log In</button>
            <span className='login__forget-password'>Forgotten password?</span>
            <hr className='login__hr' />
            <button className='login__btn--green'>Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
