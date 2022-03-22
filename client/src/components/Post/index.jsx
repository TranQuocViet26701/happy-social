import PropTypes from 'prop-types'
import { useState } from 'react'
import { MdMoreHoriz } from 'react-icons/md'
import { Users } from '../../data/dummyData'
import './Post.scss'

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const handleToggleLike = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  const currentUser = Users.find((user) => user.id === post.userId)
  return (
    <div className='post'>
      <div className='post__wrapper'>
        <div className='post__top'>
          <div className='post__top__left'>
            <img
              src={currentUser.profilePicture}
              alt=''
              className='post__profileImg'
            />
            <div className='post__info'>
              <div className='post__author'>{currentUser.username}</div>
              <div className='post__date'>{post.date}</div>
            </div>
          </div>
          <div className='post__top__right'>
            <MdMoreHoriz className='post__top__right__icon' />
          </div>
        </div>
        <div className='post__center'>
          <div className='post__text'>{post.desc}</div>
          <img src={post.photo} alt='' className='post__img' />
        </div>
        <div className='post__bottom'>
          <div className='post__bottom__left'>
            <img
              src='/public/assets/like.png'
              alt=''
              className='post__reaction'
              onClick={handleToggleLike}
            />
            <img
              src='/public/assets/heart.png'
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
