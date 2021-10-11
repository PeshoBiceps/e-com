import Layout from '../components/Layout';
import Banner from '../components/Main/Banner';
import Carousele from '../components/Main/Carousel';
import FeaturedProducts from "../components/Main/FeaturedProducts";
import Browse from '../components/Main/Browse'

import Product from '../models/productModel'
import { dbConnect } from '../utils/dbConnect';

export default function Home({ products }) {
  return (
    <Layout>
      <main className=''>
        <section>
          <Banner />
        </section>

        <section className='mx-[3%] my-6 sm:my-11'>
          <Carousele />
        </section>

        <section className='max-w-[1200px] w-[90%] mx-auto'>
          <Browse />
        </section>

        <section className='max-w-[1200px] w-[90%] mx-auto'>
          <h1 className='text-2xl font-bold'>Featured products</h1>
          <FeaturedProducts products={products} />
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