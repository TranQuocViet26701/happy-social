import React, { useContext, useEffect, useRef, useState } from 'react'
import { MdSearch } from 'react-icons/md'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { io } from 'socket.io-client'
import axiosClient from '../../api/axiosClient'
import {
  ChatOnline,
  Conversation,
  Message,
  MessengerBoxBottom,
  MessengerBoxTop,
  Topbar,
} from '../../components'
import { AuthContext } from '../../context/AuthContext'
import './Messenger.scss'

function Messenger() {
  const { params } = useRouteMatch()
  const history = useHistory()
  const { user } = useContext(AuthContext)
  const [conversations, setConversations] = useState([])
  const [messages, setMessages] = useState([])
  const [arrivalMessage, setarrivalMessage] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])

  const scrollRef = useRef(null)
  const socket = useRef()
  const currentChat =
    params && params.conversationId
      ? conversations.find((conv) => conv._id === params.conversationId)
      : undefined

  useEffect(() => {
    socket.current = io('ws://localhost:8900')
    socket.current.on('getMessage', (data) => {
      if (data.senderId !== user._id) {
        setarrivalMessage({
          _id: data._id,
          sender: data.senderId,
          text: data.text,
          createdAt: Date.now(),
        })
      }
    })
  }, [user])

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage])
  }, [arrivalMessage, currentChat])

  useEffect(() => {
    socket.current.emit('addUser', user._id)
    socket.current.on('getUsers', (users) => {
      console.log(users)
      setOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId === f))
      )
    })
  }, [user])

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        const res = await axiosClient.get('/conversations/' + user._id)
        setConversations(res)
      } catch (err) {
        console.log(err)
      }
    }

    fetchConversation()
  }, [user._id])

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axiosClient.get('/messages/' + params.conversationId)
        setMessages(res)
      } catch (err) {
        console.log(err)
      }
    }

    if (params.conversationId) {
      fetchMessages()
    }
  }, [params?.conversationId])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages])

  const handleConversationClick = (conversationId) => {
    history.push('/messenger/' + conversationId)
  }

  const handleSubmitMessage = async (newMessage) => {
    if (!newMessage) return

    const receiverId = currentChat.members.find((mem) => mem !== user._id)

    try {
      const res = await axiosClient.post('/messages', {
        conversationId: currentChat._id,
        sender: user._id,
        text: newMessage,
      })

      setMessages([...messages, res])

      socket.current?.emit('sendMessage', {
        _id: res._id,
        senderId: user._id,
        receiverId,
        text: newMessage,
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Topbar />
      <div className='messenger'>
        <div className='messenger__menu'>
          <div className='messenger__menu__input'>
            <MdSearch className='search__icon' />
            <input type='text' placeholder='Search Messenger' />
          </div>
          <div className='conversations'>
            <div className='conversations__container'>
              {conversations.map((conversation) => (
                <div
                  key={conversation._id}
                  onClick={() => handleConversationClick(conversation._id)}
                >
                  <Conversation
                    conversation={conversation}
                    currentUser={user}
                    selected={
                      params && params.conversationId
                        ? params.conversationId === conversation._id
                        : false
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='messenger__box'>
          {currentChat ? (
            <>
              <div className='messenger__box__top'>
                <MessengerBoxTop currentChat={currentChat} currentUser={user} />
              </div>
              <div className='messenger__box__center'>
                {messages.map((message) => (
                  <div ref={scrollRef} key={message._id}>
                    <Message
                      message={message}
                      own={message.sender === user._id}
                    />
                  </div>
                ))}
              </div>
              <div className='messenger__box__bottom'>
                <MessengerBoxBottom handleSubmitMessage={handleSubmitMessage} />
              </div>
            </>
          ) : (
            <div className='messenger__box__empty'>
              Open a conversation to start a chat.
            </div>
          )}
        </div>
        <div className='messenger__online'>
          <h4 className='messenger__online__title'>Online Friends</h4>
          <ChatOnline
            currentUser={user}
            onlineUsers={onlineUsers}
            handleConversationClick={handleConversationClick}
          />
        </div>
      </div>
    </>
  )
}

Messenger.propTypes = {}

export default Messenger
