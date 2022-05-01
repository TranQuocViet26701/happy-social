import React, { useContext, useEffect, useRef, useState } from 'react'
import { IoSend } from 'react-icons/io5'
import { MdSearch } from 'react-icons/md'
import { useHistory, useRouteMatch } from 'react-router-dom'
import axiosClient from '../../api/axiosClient'
import {
  ChatOnline,
  Conversation,
  Message,
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

  const newMessage = useRef('')
  const scrollRef = useRef(null)
  const currentChat = params?.conversationId || ''

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
        const res = await axiosClient.get('/messages/' + currentChat)
        setMessages(res)
      } catch (err) {
        console.log(err)
      }
    }

    if (currentChat) {
      fetchMessages()
    }
  }, [currentChat])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages])

  const handleConversationClick = (conversationId) => {
    history.push('/messenger/' + conversationId)
  }

  const handleSubmitMessage = async () => {
    if (!newMessage.current.value) return

    try {
      const res = await axiosClient.post('/messages', {
        conversationId: currentChat,
        sender: user._id,
        text: newMessage.current.value,
      })

      setMessages([...messages, res])
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
                    selected={currentChat === conversation._id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='messenger__box'>
          <div className='messenger__box__top'>
            {currentChat && (
              <MessengerBoxTop currentChat={currentChat} currentUser={user} />
            )}
          </div>
          <div className='messenger__box__center'>
            {messages.map((message) => (
              <div ref={scrollRef} key={message._id}>
                <Message message={message} own={message.sender === user._id} />
              </div>
            ))}
          </div>
          <div className='messenger__box__bottom'>
            <textarea
              name=''
              id=''
              placeholder='Aa'
              ref={newMessage}
            ></textarea>
            <div className='messenger__box__bottom__icon'>
              <IoSend onClick={handleSubmitMessage} />
            </div>
          </div>
        </div>
        <div className='messenger__online'>
          <h4 className='messenger__online__title'>Online Friends</h4>
          <ChatOnline />
        </div>
      </div>
    </>
  )
}

Messenger.propTypes = {}

export default Messenger
