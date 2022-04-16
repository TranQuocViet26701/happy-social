import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { MdMoreHoriz } from 'react-icons/md'
import TimeAgo from 'react-timeago'
import axiosClient from '../../api/axiosClient'
import { AuthContext } from '../../context/AuthContext'
import './Post.scss'

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const { user } = useContext(AuthContext)

  useEffect(() => {
    setIsLiked(post.likes.includes(user._id))
  }, [post.likes, user._id])

  useEffect(() => {
    const fetchUser = async () => {
      const url = `/users?userId=${post.userId}`
      const data = await axiosClient.get(url)
      setCurrentUser(data)
    }

    fetchUser()
  }, [])

  const handleToggleLike = async () => {
    try {
      await axiosClient.put(`/posts/${post._id}/like`, { userId: user._id })
    } catch (err) {
      console.log(err)
    }
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
      <div className='post__wrapper'>
        <div className='post__top'>
          <div className='post__top__left'>
            <img
              src={currentUser.profilePicture || '/assets/noAvatar.png'}
              alt=''
              className='post__profileImg'
            />
            <div className='post__info'>
              <div className='post__author'>{currentUser.username}</div>
              <div className='post__date'>
                <TimeAgo date={post.createdAt} live={false} />
              </div>
            </div>
          </div>
          <div className='post__top__right'>
            <MdMoreHoriz className='post__top__right__icon' />
          </div>
        </div>
        <div className='post__center'>
          <div className='post__text'>{post.description}</div>
          <img src={post.images[0]?.url} alt='' className='post__img' />
        </div>
        <div className='post__bottom'>
          <div className='post__bottom__left'>
            <img
              src='/assets/like.png'
              alt=''
              className='post__reaction'
              onClick={handleToggleLike}
            />
            <img
              src='/assets/heart.png'
              alt=''
              className='post__reaction'
              onClick={handleToggleLike}
            />
            <span className='post__countReaction'>{like}</span>
          </div>
          <div className='post__bottom__right'>
            <span className='post__countComment'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object,
}
