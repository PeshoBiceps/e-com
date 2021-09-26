import Layout from '../components/Layout';
import MainBanner from '../components/MainBanner';
import MainCarousel from '../components/MainCarousel';
import MainProducts from "../components/MainProducts";


export default function Home() {
  return (
    <Layout>
      <main className=''>
        <section>
          <MainBanner />
        </section>

        <section className='mx-[3%] my-6 sm:my-11'>
          <MainCarousel />
        </section>

        <section className='max-w-[1200px] w-[90%] mx-auto'>
          <h1 className='text-2xl font-bold'>Products</h1>
          <MainProducts />
        </section>

      </main>
    </Layout>
  )
}