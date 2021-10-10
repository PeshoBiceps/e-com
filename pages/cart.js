import Layout from "../components/Layout"
import Image from 'next/image'
import { AiOutlineClose } from 'react-icons/ai'

import Product from '../models/productModel'
import { dbConnect } from '../utils/dbConnect';

const Cart = ({ products }) => {

  return (
    <Layout title='Cart'>
      <div className='max-w-[1200px] mx-auto mt-3 sm:mt-10 p-2'>
        <h1 className='text-2xl font-semibold'>Shopping Cart</h1>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col flex-grow mt-3 sm:mt-6'>
            {products.data.map((product) => (
              <div className='flex border-b shadow-sm py-4 first:border-t ml-2 mr-8'>
                <div className='relative h-52 w-40'>
                  <Image
                    src={product.image}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='pl-3 flex flex-grow'>
                  <div className='flex-grow space-y-2'>
                    <p className='text-gray-400 text-sm'>{product.name}</p>
                    <p className='font-semibold'>{product.brand}</p>
                    <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="size">Size:</label>
                    <div className="relative">
                      <select className="text-sm bg-gray-200" id="size" required>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                      </select>
                    </div>
                  </div>
                  <div className='flex flex-col items-end justify-between'>
                    <button><AiOutlineClose className='text-red-600 text-xl' /></button>
                    <p className='font-semibold'>{product.price} EUR</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='min-w-[240px] max-h-[300px] py-6 px-2'>
            <div className='flex flex-col space-y-6'>
              <div className='flex justify-between'>
                <p>Total: </p><span className='font-semibold'>123 EUR</span>
              </div>

              <div className="relative">
                <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="delivery">Delivery method:</label>
                <select className=" w-full bg-gray-200 text-gray-700 py-2 px-2 pr-8 focus:outline-none" id="delivery" required>
                  <option>Free Delivery</option>
                </select>
              </div>

              <button className='p-2 w-full bg-black text-white shadow-sm'>
                Checkout
              </button>
            </div>

          </div>
        </div>
      </div>
    </Layout >
  )
}

export default Cart

export async function getStaticProps() {

  await dbConnect()
  const data = await Product.find({ isFeatured: true })

  return {
    props: {
      products: JSON.parse(JSON.stringify({ success: true, data: data }))
    }
  }
}