import Layout from '../components/Layout';
import MainBanner from '../components/MainBanner';
import MainCarousel from '../components/MainCarousel';
import MainProducts from "../components/MainProducts";


export default function Home({ products }) {



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
          <MainProducts products={products} />
        </section>

      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const products = await fetch('http://localhost:5000/api/product').
    then((res) => res.json())
  return {
    props: {
      products
    }
  }
}