import './Topbar.scss'
import { MdSearch, MdPerson, MdNotifications, MdChat } from 'react-icons/md'

export default function Topbar() {
  return (
    <div className='topbar__container'>
      <div className='topbar__left'>
        <span className='logo'>HappySocial</span>
      </div>
      <div className='topbar__center'>
        <div className='search__bar'>
          <MdSearch className='search__icon' />
          <input
            placeholder='Search on HappySocial'
            className='search__input'
          />
        </div>
      </div>
      <div className='topbar__right'>
        <div className='topbar_links'>
          <span className='topbar__link'>HomePage</span>
          <span className='topbar__link'>Timeline</span>
        </div>
        <div className='topbar__icons'>
          <div className='topbar__icon__item'>
            <MdPerson />
            <span className='topbar__icon__badge'>1</span>
          </div>
          <div className='topbar__icon__item'>
            <MdChat />
            <span className='topbar__icon__badge'>2</span>
          </div>
          <div className='topbar__icon__item'>
            <MdNotifications />
            <span className='topbar__icon__badge'>3</span>
          </div>
        </div>
        <img
          src='https://2sao.vietnamnetjsc.vn/images/2021/11/24/17/15/lisa.jpg'
          alt=''
          className='topbar__img'
        />
      </div>
    </div>
  )
}
