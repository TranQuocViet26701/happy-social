import {
  MdBookmark,
  MdChat,
  MdEvent,
  MdGroup,
  MdHelpOutline,
  MdRssFeed,
  MdSchool,
  MdVideoLibrary,
  MdWorkOutline,
} from 'react-icons/md'
import { Users } from '../../data/dummyData'
import CloseFriend from '../CloseFriend'
import './Sidebar.scss'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__container'>
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
          <button className='sidebar__button'>See more</button>
          <hr className='sidebar__hr' />
          <ul className='sidebar__friendlist'>
            {Users.map((user) => (
              <CloseFriend key={user.id} friend={user} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
