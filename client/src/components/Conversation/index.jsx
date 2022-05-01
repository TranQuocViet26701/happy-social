import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './Conversation.scss'
import axiosClient from '../../api/axiosClient'

function Conversation({ conversation, currentUser, selected = false }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const { members } = conversation
    const friendId = members[0] === currentUser._id ? members[1] : members[0]

    const fetchUSer = async () => {
      try {
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

    fetchUSer()
  }, [conversation, currentUser._id])

  return (
    <div className={`${selected ? 'conversation selected' : 'conversation'}`}>
      {user ? (
        <>
          <img
            src={user.profilePicture || '/assets/noAvatar.png'}
            alt=''
            className='conversation__image'
          />
          <span className='conversation__name'>{user.username}</span>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  )
}

Conversation.propTypes = {
  conversation: PropTypes.object.isRequired,
}

export default Conversation
