import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>


      <Navbar />
      <main className='my-10'>{children}</main>
    </div>
  )
}

export default Layout
