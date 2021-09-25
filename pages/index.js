import Head from 'next/head'
import MainProducts from "../components/MainProducts";


export default function Home() {
  return (
    <div>
      <Head>
        <title>E-com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section>
          <h1 className='text-2xl font-bold'>Products</h1>
          <MainProducts />
        </section>
      </main>
    </div>

  )
}
