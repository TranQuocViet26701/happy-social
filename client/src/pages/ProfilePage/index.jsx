import Feed from '../../components/Feed'
import Rightbar from '../../components/Rightbar'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import './ProfilePage.scss'

function ProfilePage() {
  return (
    <>
      <Topbar />
      <div className='profile__container'>
        <Sidebar />
        <div className='profile__right'>
          <div className='profile__right-top'>
            <div className='profile__cover'>
              <img
                src='https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/post/8.jpeg'
                alt=''
                className='profile__cover-img'
              />
              <img
                src='https://raw.githubusercontent.com/safak/youtube/react-social-ui/public/assets/person/4.jpeg'
                alt=''
                className='profile__user-img'
              />
            </div>
            <div className='profile__info'>
              <h4 className='profile__info__name'>Tran Quoc Viet</h4>
              <span className='profile__info__desc'>
                I'm willing to get new challenge
              </span>
            </div>
          </div>
          <div className='profile__right-bottom'>
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
