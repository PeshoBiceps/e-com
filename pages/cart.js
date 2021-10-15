import Layout from "../components/Layout"
import { useSelector } from "react-redux";

import Product from '../models/productModel'
import { dbConnect } from '../utils/dbConnect';
import CartItem from "../components/Cart/CartItem";

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const quantity = useSelector((state) => state.cart.quantity);
  const total = useSelector((state) => state.cart.totalAmount);

  return (
    <Layout title='Cart'>
      <div className='max-w-[1200px] mx-auto mt-3 sm:mt-10 p-2'>
        <h1 className='text-2xl font-semibold'>Shopping Cart</h1>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col flex-grow mt-3 sm:mt-6'>
            {quantity !== 0 ? (
              cartItems.map(item => <CartItem item={item} key={item._id} />)
            ) : (
              <h1>Your cart is empty </h1>
            )
            }
          </div>

          <div className='min-w-[240px] max-h-[300px] py-6 px-2'>
            <div className='flex flex-col space-y-6'>
              <div className='flex justify-between'>
                <p>Total: </p><span className='font-semibold'>{total} EUR</span>
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