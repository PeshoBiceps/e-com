import Navbar from './Navbar'
import Head from 'next/dist/shared/lib/head'
import Footer from './Footer'

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title ? `${title} - PeGo Shop` : `PeGo Shop`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className='min-h-[85vh]'>{children}</main>
      <Footer />
    </div >
  )
}

export default Layout
