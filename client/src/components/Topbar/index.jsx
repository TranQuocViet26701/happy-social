import { useContext } from 'react'
import { MdChat, MdNotifications, MdPerson, MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './Topbar.scss'

export default function Topbar() {
  const { user } = useContext(AuthContext)

  return (
    <div className='topbar__container'>
      <div className='topbar__left'>
        <Link to='/'>
          <span className='logo'>HappySocial</span>
        </Link>
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
        <Link to={`/profile/${user.username}`}>
          <img
            src={user.profilePicture || '/assets/noAvatar.png'}
            alt=''
            className='topbar__img'
          />
        </Link>
      </div>
    </div>
  )
}
