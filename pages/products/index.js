import Layout from '../../components/Layout'
import ProductCard from '../../components/Main/ProductCard'
import { useRouter } from 'next/router';

import { dbConnect } from '../../utils/dbConnect'
import Product from '../../models/productModel'


const Products = ({ products }) => {
  const router = useRouter()


  return (
    <Layout title='Products'>
      <main>
        <section className='max-w-[1200px] w-[90%] mx-auto mt-10'>
          <ProductCard products={products} />
        </section>
      </main>
    </Layout>
  )
}

export default Products

export async function getStaticProps() {

  await dbConnect()

  const data = await Product.find()

  return {
    props: {
      products: JSON.parse(JSON.stringify({ success: true, data: data }))
    }
  }
}