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

  const lastPage = Math.ceil(numberOfProducts / 8)

  const handleChangeBrand = e => {
    setBrand(e.target.value)
  }

  const allProducts = () => {
    setBrand('')
    setCategory('')
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
        <section className='max-w-[1300px] w-[90%] mx-auto mt-2 sm:mt-10' >
          <div className='flex flex-col sm:flex-row'>

            <div className='px-2 py-4 space-x-3 min-w-[140px]'>
              <h1 className='font-semibold mb-2 sm:border-b cursor-pointer' onClick={allProducts}>All products</h1>
              <div className='text-sm flex justify-around sm:flex-col'>
                <p className='border-b sm:border-none cursor-pointer' onClick={() => setCategory('shirts')}>Shirts</p>
                <p className='border-b sm:border-none cursor-pointer' onClick={() => setCategory('pants')}>Pants</p>
                <p className='border-b sm:border-none cursor-pointer' onClick={() => setCategory('hats')}>Hats</p>
              </div>
            </div>

            <div className='flex-col  mt-1 sm:mt-3'>
              <div className='flex px-2 space-x-1'>
                <div>
                  <select onChange={handleChangeBrand} className="bg-gray-200 p-1 text-sm focus:outline-none focus:bg-gray-200 shadow-sm" id="brand">
                    <option selected defaultValue disabled hidden>Choose a brand</option>
                    <option>Nike</option>
                    <option>Adidas</option>
                    <option>Karl Lagerfeld</option>
                    <option>HUGO</option>
                    <option>Calvin Klein</option>
                    <option>EA7</option>
                  </select>
                </div>
              </div>

              {products.data.length === 0 ? (<div>No products found</div>) :
                (
                  <>
                    <ProductCard products={products} />
                    <div className='flex items-center justify-around h-10 mt-4'>
                      <button onClick={() => router.push({
                        pathname: '/products',
                        query: { brand: brand, category: category, page: `${page - 1}` }
                      })}
                        disabled={page <= 1}
                        className='bg-black text-white px-4 py-1 shadow-sm'><AiOutlineLeft /></button>
                      <p className='text-xs'>{page}</p>
                      <button onClick={() => router.push({
                        pathname: '/products',
                        query: { brand: brand, category: category, page: `${page + 1}` }
                      })} disabled={page >= lastPage} className='bg-black text-white px-4 py-1 shadow-sm'><AiOutlineRight /></button>
                    </div>
                  </>
                )}
            </div>
          </div>
        </section>
      </main>
    </Layout >
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

  const filter = category && brand ? { category: category, brand: brand } : category ? { category: category } : brand ? { brand: brand } : {}
  const data = await Product.find(filter).limit(8).skip(start)

  return {
    props: {
      products: JSON.parse(JSON.stringify({ success: true, data: data })),
      numberOfProducts,
      page: +page
    }
  }
}