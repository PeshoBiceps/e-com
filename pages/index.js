import Layout from '../components/Layout';
import MainBanner from '../components/MainBanner';
import MainCarousel from '../components/MainCarousel';
import MainFeaturedProducts from "../components/MainFeaturedProducts";

import Product from '../models/productModel'
import { dbConnect } from '../utils/dbConnect';

export default function Home({ products }) {

  console.log(products)

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
          <h1 className='text-2xl font-bold'>Featured products</h1>
          <MainFeaturedProducts products={products} />
        </section>

      </main>
    </Layout>
  )
}

export async function getStaticProps() {

  await dbConnect()
  const data = await Product.find({ isFeatured: true })

  return {
    props: {
      products: JSON.parse(JSON.stringify({ success: true, data: data }))
    }
  }
}