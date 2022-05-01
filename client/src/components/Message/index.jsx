import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import axiosClient from '../../api/axiosClient'
import './Message.scss'
import TimeAgo from 'react-timeago'

function Message({ message, own }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (!own) {
      const fetchUser = async () => {
        try {
          const res = await axiosClient.get('/users', {
            params: {
              userId: message.sender,
            },
          })
          setUser(res)
        } catch (err) {
          console.log(err)
        }
      }

      fetchUser()
    }
  }, [message.sender, own])

  return (
    <div className={`${own ? 'message own' : 'message'}`}>
      {!own && (
        <img
          src={`${user?.profilePicure || '/assets/noAvatar.png'}`}
          alt=''
          className='message__image'
        />
      )}
      <div className='message__right'>
        <div className={`${own ? 'message__text own' : 'message__text'}`}>
          {message.text}
        </div>
        <div className={`${own ? 'message__time own' : 'message__time'}`}>
          <TimeAgo date={message.createdAt} live={false} />
        </div>
      </div>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
  own: PropTypes.bool.isRequired,
}

export default Message
