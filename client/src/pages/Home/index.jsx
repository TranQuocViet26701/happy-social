import Feed from '../../components/Feed'
import Rightbar from '../../components/Rightbar'
import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import './Home.scss'

function Home() {
  return (
    <>
      <Topbar />
      <div className='home__container'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  )
}

export default Home
