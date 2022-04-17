import { useContext, useEffect, useState } from 'react'
import axiosClient from '../../api/axiosClient'
import { AuthContext } from '../../context/AuthContext'
import Post from '../Post'
import Share from '../Share'
import './Feed.scss'

export default function Feed({ username }) {
  const [posts, setPosts] = useState([])

  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const url = username
        ? `/posts/profile/${username}`
        : `/posts/timeline/${user._id}`
      const data = await axiosClient.get(url)
      setPosts(
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      )
    }

    fetchPosts()
  }, [username, user._id])

  return (
    <div className='feed'>
      <div className='feed__wrapper'>
        {(!username || username === user.username) && <Share />}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}
