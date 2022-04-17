import { useContext, useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../../api/axiosClient'
import { AuthContext } from '../../context/AuthContext'
import { Users } from '../../data/dummyData'
import OnlineFriend from '../OnlineFriend'
import './Rightbar.scss'
import { IoPersonAdd, IoPersonRemove } from 'react-icons/io5'

export default function Rightbar({ user }) {
  const { user: currentUser, dispatch } = useContext(AuthContext)
  const [friends, setFriends] = useState([])

  const followed = currentUser.followings.includes(user?._id)

  useEffect(() => {
    const getFriendList = async () => {
      try {
        if (user && user._id) {
          const friendList = await axiosClient.get(`/users/friends/${user._id}`)
          setFriends(friendList)
        }
      } catch (err) {
        console.log(err)
      }
    }

    getFriendList()
  }, [user?._id])

  const handleChangeFollow = async () => {
    try {
      if (followed) {
        await axiosClient.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        })

        dispatch({ type: 'UNFOLLOW', payload: user._id })
      } else {
        await axiosClient.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        })
        dispatch({ type: 'FOLLOW', payload: user._id })
      }
    } catch (err) {
      console.log(err)
    }
  }

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
        {user.username !== currentUser.username && (
          <button
            className={`rightbar__btn--${followed ? 'unfollow' : 'follow'}`}
            onClick={handleChangeFollow}
          >
            {followed ? 'Unfollow' : 'Follow'}
            {followed ? <IoPersonRemove /> : <IoPersonAdd />}
          </button>
        )}
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
          {friends.map((f) => (
            <Link
              to={`/profile/${f.username}`}
              key={f._id}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <div className='rightbar__following'>
                <img
                  src={f.profilePicture || '/assets/noAvatar.png'}
                  alt=''
                  className='rightbar__following__img'
                />
                <span className='rightbar__following__name'>{f.username}</span>
              </div>
            </Link>
          ))}
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
