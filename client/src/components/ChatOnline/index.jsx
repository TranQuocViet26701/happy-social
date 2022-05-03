import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import axiosClient from '../../api/axiosClient'
import './ChatOnline.scss'

function ChatOnline({
  onlineUsers,
  handleConversationClick = null,
  currentUser,
}) {
  const [friends, setFriends] = useState([])
  const [onlineFriends, setOnlineFriends] = useState([])

  useEffect(() => {
    const fetchFriendList = async () => {
      try {
        const res = await axiosClient.get('/users/friends/' + currentUser._id)
        setFriends(res)
      } catch (err) {
        console.log(err)
      }
    }

    fetchFriendList()
  }, [currentUser])

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)))
  }, [friends, onlineUsers])

  const handleClick = async (friendId) => {
    if (!handleConversationClick) return

    try {
      const res = await axiosClient.get(
        '/conversations/' + currentUser._id + '/' + friendId
      )
      console.log(res)
      handleConversationClick(res[0]._id)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='chatonline'>
      <div className='chatonline__container'>
        {onlineFriends.map((o) => (
          <div
            key={o._id}
            className='chatonline__friend'
            onClick={() => handleClick(o._id)}
          >
            <div className='chatonline__image'>
              <img src={o?.profilePicture || '/assets/noAvatar.png'} alt='' />
            </div>
            <span className='chatonline__friend__name'>{o.username}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

ChatOnline.propTypes = {
  currentUser: PropTypes.object.isRequired,
  onlineUsers: PropTypes.array,
  handleConversationClick: PropTypes.func,
}

export default ChatOnline
