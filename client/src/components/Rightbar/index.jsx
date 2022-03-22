import OnlineFriend from '../OnlineFriend'
import './Rightbar.scss'
import { Users } from '../../data/dummyData'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbar__container'>
        <div className='rightbar__wrapper'>
          <div className='birthday__container'>
            <img src='assets/gift.png' alt='' className='birthday__img' />
            <span className='birthday__text'>
              <span className='birthday__text--bold'>Le Huyen Tran</span> and{' '}
              <span className='birthday__text--bold'>2 other friends</span> have
              a birthday today
            </span>
          </div>
          <hr className='rightbar__hr' />
          <div className='rightbar__ad'>
            <h1 className='rightbar__ad__title'>Sponsored</h1>
            <img src='assets/ad.png' alt='' className='rightbar__ad__img' />
          </div>
          <hr className='rightbar__hr' />
          <h1 className='rightbar__title'>Online friends</h1>
          <ul className='rightbar__friend-list'>
            {Users.map((user) => (
              <OnlineFriend friend={user} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
