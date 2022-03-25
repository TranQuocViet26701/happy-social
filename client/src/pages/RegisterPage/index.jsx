import './RegisterPage.scss'

export default function RegisterPage() {
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
          <div className='register__form'>
            <input
              type='text'
              className='register__input'
              placeholder='Username'
            />
            <input
              type='text'
              className='register__input'
              placeholder='Email'
            />
            <input
              type='text'
              className='register__input'
              placeholder='Password'
            />
            <input
              type='text'
              className='register__input'
              placeholder='Retype Password'
            />
            <button className='register__btn'>Sign Up</button>
            <hr className='register__hr' />
            <button className='register__btn--green'>Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
