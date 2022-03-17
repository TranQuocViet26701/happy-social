import './Sidebar.scss'
import {
  MdRssFeed,
  MdChat,
  MdVideoLibrary,
  MdGroup,
  MdBookmark,
  MdHelpOutline,
  MdWorkOutline,
  MdEvent,
  MdSchool,
} from 'react-icons/md'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__wrapper'>
        <ul className='sidebar__list'>
          <li className='sidebar__item'>
            <MdRssFeed className='sidebar__icon' />
            <span className='sidebar__item__text'>Feed</span>
          </li>
          <li className='sidebar__item'>
            <MdChat className='sidebar__icon' />
            <span className='sidebar__item__text'>Chats</span>
          </li>
          <li className='sidebar__item'>
            <MdVideoLibrary className='sidebar__icon' />
            <span className='sidebar__item__text'>Videos</span>
          </li>
          <li className='sidebar__item'>
            <MdGroup className='sidebar__icon' />
            <span className='sidebar__item__text'>Groups</span>
          </li>
          <li className='sidebar__item'>
            <MdBookmark className='sidebar__icon' />
            <span className='sidebar__item__text'>Bookmarks</span>
          </li>
          <li className='sidebar__item'>
            <MdHelpOutline className='sidebar__icon' />
            <span className='sidebar__item__text'>Questions</span>
          </li>
          <li className='sidebar__item'>
            <MdWorkOutline className='sidebar__icon' />
            <span className='sidebar__item__text'>Jobs</span>
          </li>
          <li className='sidebar__item'>
            <MdEvent className='sidebar__icon' />
            <span className='sidebar__item__text'>Events</span>
          </li>
          <li className='sidebar__item'>
            <MdSchool className='sidebar__icon' />
            <span className='sidebar__item__text'>Courses</span>
          </li>
        </ul>
        <button className='sidebar__button'>Show more</button>
        <hr className='sidebar__hr' />
        <ul className='sidebar__friendlist'>
          <li className='sidebar__friend'>
            <img
              src='https://2sao.vietnamnetjsc.vn/images/2021/11/24/17/15/lisa.jpg'
              alt=''
              className='sidebar__img'
            />
            <span className='sidebar__item__text'>Le Huyen Tran</span>
          </li>
          <li className='sidebar__friend'>
            <img
              src='https://2sao.vietnamnetjsc.vn/images/2021/11/24/17/15/lisa.jpg'
              alt=''
              className='sidebar__img'
            />
            <span className='sidebar__item__text'>Le Huyen Tran</span>
          </li>
          <li className='sidebar__friend'>
            <img
              src='https://2sao.vietnamnetjsc.vn/images/2021/11/24/17/15/lisa.jpg'
              alt=''
              className='sidebar__img'
            />
            <span className='sidebar__item__text'>Le Huyen Tran</span>
          </li>
          <li className='sidebar__friend'>
            <img
              src='https://2sao.vietnamnetjsc.vn/images/2021/11/24/17/15/lisa.jpg'
              alt=''
              className='sidebar__img'
            />
            <span className='sidebar__item__text'>Le Huyen Tran</span>
          </li>
          <li className='sidebar__friend'>
            <img
              src='https://2sao.vietnamnetjsc.vn/images/2021/11/24/17/15/lisa.jpg'
              alt=''
              className='sidebar__img'
            />
            <span className='sidebar__item__text'>Le Huyen Tran</span>
          </li>
          <li className='sidebar__friend'>
            <img
              src='https://2sao.vietnamnetjsc.vn/images/2021/11/24/17/15/lisa.jpg'
              alt=''
              className='sidebar__img'
            />
            <span className='sidebar__item__text'>Le Huyen Tran</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
