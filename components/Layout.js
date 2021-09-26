import Navbar from './Navbar'
import Head from 'next/dist/shared/lib/head'

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title ? `${title} - PeGo Shop` : `PeGo Shop`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>{children}</main>
    </div >
  )
}

export default Layout
