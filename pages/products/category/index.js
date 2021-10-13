import Layout from '../../../components/Layout';
import ProductCard from '../../../components/Main/ProductCard';
import { useRouter } from 'next/router';

import { dbConnect } from "../../../utils/dbConnect"
import Product from '../../../models/productModel'

const Category = ({ products }) => {
  return (
    <Layout title='Category'>
      <main>
        <section className='max-w-[1200px] w-[90%] mx-auto mt-10'>
          <ProductCard products={products} />
        </section>
      </main>
    </Layout>
  )
}

export default Category


export async function getServerSideProps(params) {

  let category = params.query.q
  console.log(category)

  await dbConnect()

  const data = await Product.find({ category: category })

  return {
    props: {
      products: JSON.parse(JSON.stringify({ success: true, data: data }))
    }
  }
}