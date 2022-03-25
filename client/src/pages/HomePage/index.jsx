import { Feed, Rightbar, Sidebar, Topbar } from '../../components'
import './HomePage.scss'

function HomePage() {
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

export default HomePage
