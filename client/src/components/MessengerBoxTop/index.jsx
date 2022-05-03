import PropsTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaVideo } from 'react-icons/fa'
import { HiDotsCircleHorizontal } from 'react-icons/hi'
import axiosClient from '../../api/axiosClient'
import './MessengerBoxTop.scss'

function MessengerBoxTop({ currentChat, currentUser }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUserFromConversation = async () => {
      try {
        const { members } = currentChat
        const friendId =
          members[0] === currentUser._id ? members[1] : members[0]

        const res = await axiosClient.get('/users', {
          params: {
            userId: friendId,
          },
        })
        setUser(res)
      } catch (err) {
        console.log(err)
      }
    }

    fetchUserFromConversation()
  }, [currentChat, currentUser._id])

  return (
    <>
      <div className='messenger__box__top__left'>
        {user ? (
          <>
            <img
              src={`${user.profilePicture || '/assets/noAvatar.png'}`}
              alt=''
            />
            <span>{user.username}</span>
          </>
        ) : (
          'Loading...'
        )}
      </div>
      <div className='messenger__box__top__right'>
        <div className='messenger__box__top__right__icon'>
          <BsTelephoneFill />
        </div>
        <div className='messenger__box__top__right__icon'>
          <FaVideo />
        </div>
        <div className='messenger__box__top__right__icon'>
          <HiDotsCircleHorizontal />
        </div>
      </div>
    </>
  )
}

MessengerBoxTop.propTypes = {
  currentChat: PropsTypes.object.isRequired,
  currentUser: PropsTypes.object.isRequired,
}

export default MessengerBoxTop
