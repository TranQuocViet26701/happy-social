import OnlineFriend from '../OnlineFriend'
import './Rightbar.scss'
import { Users } from '../../data/dummyData'

export default function Rightbar({ user }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className='birthday__container'>
          <img src='/assets/gift.png' alt='' className='birthday__img' />
          <span className='birthday__text'>
            <span className='birthday__text--bold'>Le Huyen Tran</span> and{' '}
            <span className='birthday__text--bold'>2 other friends</span> have a
            birthday today
          </span>
        </div>
        <hr className='rightbar__hr' />
        <div className='rightbar__ad'>
          <h1 className='rightbar__ad__title'>Sponsored</h1>
          <img src='/assets/ad.png' alt='' className='rightbar__ad__img' />
        </div>
        <hr className='rightbar__hr' />
        <h1 className='rightbar__title'>Online friends</h1>
        <ul className='rightbar__friend-list'>
          {Users.map((user) => (
            <OnlineFriend key={user.id} friend={user} />
          ))}
        </ul>{' '}
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h1 className='rightbar__title'>Intro</h1>
        <div className='rightbar__info'>
          <div className='rightbar__info__item'>
            <span className='rightbar__info--key'>City:</span>
            <span className='rightbar__info--value'>{user.city}</span>
          </div>
          <div className='rightbar__info__item'>
            <span className='rightbar__info--key'>From:</span>
            <span className='rightbar__info--value'>{user.from}</span>
          </div>
          <div className='rightbar__info__item'>
            <span className='rightbar__info--key'>Relationship:</span>
            <span className='rightbar__info--value'>
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 2
                ? 'Married'
                : 'In a relationship'}
            </span>
          </div>
        </div>
        <h1 className='rightbar__title'>Your friends</h1>
        <div className='rightbar__followings'>
          <div className='rightbar__following'>
            <img
              src='https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/person/1.jpeg'
              alt=''
              className='rightbar__following__img'
            />
            <span className='rightbar__following__name'>
              Le Huyen Tran qwer7qwertyu
            </span>
          </div>
          <div className='rightbar__following'>
            <img
              src='https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/person/2.jpeg'
              alt=''
              className='rightbar__following__img'
            />
            <span className='rightbar__following__name'>Le Huyen Tran</span>
          </div>
          <div className='rightbar__following'>
            <img
              src='https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/person/3.jpeg'
              alt=''
              className='rightbar__following__img'
            />
            <span className='rightbar__following__name'>Le Huyen Tran</span>
          </div>
          <div className='rightbar__following'>
            <img
              src='https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/person/4.jpeg'
              alt=''
              className='rightbar__following__img'
            />
            <span className='rightbar__following__name'>Le Huyen Tran</span>
          </div>
          <div className='rightbar__following'>
            <img
              src='https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/person/5.jpeg'
              alt=''
              className='rightbar__following__img'
            />
            <span className='rightbar__following__name'>Le Huyen Tran</span>
          </div>
          <div className='rightbar__following'>
            <img
              src='https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/person/6.jpeg'
              alt=''
              className='rightbar__following__img'
            />
            <span className='rightbar__following__name'>Le Huyen Tran</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className='rightbar__container'>
        <div className='rightbar__wrapper'>
          {user ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
      </div>
    </div>
  )
}
