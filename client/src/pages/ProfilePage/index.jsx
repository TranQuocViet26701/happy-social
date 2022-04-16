import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosClient from '../../api/axiosClient'
import { Feed, Rightbar, Sidebar, Topbar } from '../../components'
import './ProfilePage.scss'

function ProfilePage() {
  const { username } = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const data = await axiosClient.get(`/users?username=${username}`)
      setUser(data)
    }

    fetchUser()
  }, [username])

  return (
    <>
      <Topbar />
      <div className='profile__container'>
        <Sidebar />
        <div className='profile__right'>
          <div className='profile__right-top'>
            <div className='profile__cover'>
              <img
                src={user.coverPicture || '/assets/noCover.png'}
                alt=''
                className='profile__cover-img'
              />
              <img
                src={user.profilePicture || '/assets/noAvatar.png'}
                alt=''
                className='profile__user-img'
              />
            </div>
            <div className='profile__info'>
              <h4 className='profile__info__name'>{user.username}</h4>
              <span className='profile__info__desc'>
                {user.description || `I'm willing to get new challenge`}
              </span>
            </div>
          </div>
          <div className='profile__right-bottom'>
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
