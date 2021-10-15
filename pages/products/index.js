import Layout from '../../components/Layout'
import ProductCard from '../../components/Main/ProductCard'

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { dbConnect } from '../../utils/dbConnect'
import Product from '../../models/productModel'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Products = ({ products, page, numberOfProducts }) => {

  const router = useRouter()

  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  console.log(brand)

  const lastPage = Math.ceil(numberOfProducts / 8)

  const handleChangeBrand = e => {
    setBrand(e.target.value)
  }
  const handleChangeCategory = e => {
    setCategory(e.target.value)
  }

  const onChange = () => {
    router.push({
      pathname: '/products',
      query: { brand: brand, category: category }
    })
  }

  useEffect(() => {
    onChange()
  }, [brand, category])

  return (
    <Layout title='Products'>
      <main>
        <section className='max-w-[1200px] w-[90%] mx-auto mt-10'>
          <div className=' ml-2 my-4'>

            <div className='flex space-x-2'>

              <div>
                <select value={category} onChange={handleChangeCategory} className="bg-gray-200 p-2 focus:outline-none shadow-sm" id="category">
                  <option value='shirts'>Shirts</option>
                  <option value='pants'>Pants</option>
                  <option value='hats'>Hats</option>
                </select>
              </div>

              <div>
                <select value={brand} onChange={handleChangeBrand} className="bg-gray-200 p-2 focus:outline-none shadow-sm" id="brand">
                  <option>Nike</option>
                  <option>Adidas</option>
                  <option>Boss</option>
                </select>
              </div>
            </div>



          </div>
          <ProductCard products={products} />
          <div className='flex items-center justify-around h-10 mt-4'>
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

export async function getServerSideProps({ query }) {
  let { page = 1 } = query
  let { category = "" } = query
  let { brand = "" } = query

  const start = +page === 1 ? 0 : (+page - 1) * 8

  await dbConnect()

  const numberOfProducts = await Product.estimatedDocumentCount()
  const filterCategory = category ? { category: category } : {}
  const filterBrand = brand ? { brand: brand } : {}
  const filterAll = category && brand ? { brand: brand, category: category } : {}
  console.log(filter)
  const data = await Product.find().limit(8).skip(start)


  return {
    props: {
      products: JSON.parse(JSON.stringify({ success: true, data: data })),
      numberOfProducts,
      page: +page
    }
  }
}