import Layout from '../../components/Layout'
import ProductCard from '../../components/Main/ProductCard'
import { useRouter } from 'next/router';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import { dbConnect } from '../../utils/dbConnect'
import Product from '../../models/productModel'


const Products = ({ products, page, numberOfProducts }) => {
  console.log(products.data)
  const router = useRouter()

  console.log(numberOfProducts)

  const lastPage = Math.ceil(numberOfProducts / 6)

  return (
    <Layout title='Products'>
      <main>
        <section className='max-w-[1200px] w-[90%] mx-auto mt-10'>
          <ProductCard products={products} />
          <div className='flex items-center justify-around h-10'>
            <button onClick={() => router.push(`/products?page=${page - 1}`)} disabled={page <= 1} className='bg-black text-white px-4 py-1 shadow-sm'><AiOutlineLeft /></button>
            <p className='text-xs'>{page}</p>
            <button onClick={() => router.push(`/products?page=${page + 1}`)} disabled={page >= lastPage} className='bg-black text-white px-4 py-1 shadow-sm'><AiOutlineRight /></button>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Products

export async function getServerSideProps({ query: { page = 1 } }) {

  const start = +page === 1 ? 0 : (+page - 1) * 6

  await dbConnect()

  const numberOfProducts = await Product.estimatedDocumentCount()
  const data = await Product.find().limit(6).skip(start)


  return {
    props: {
      products: JSON.parse(JSON.stringify({ success: true, data: data })),
      numberOfProducts,
      page: +page
    }
  }
}