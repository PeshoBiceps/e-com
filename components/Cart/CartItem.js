import { useDispatch } from "react-redux";
import Image from 'next/image'
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

import { removeItem, addItem, clearItemFromCart } from '../../features/cart/cartSlice'

const CartItem = ({ item }) => {
  const { _id, image, name, brand, price, quantity } = item
  const dispatch = useDispatch();

  const handleRemoveItem = () => dispatch(removeItem(item));
  const handleAddItem = () => dispatch(addItem(item));
  const handleClearItem = () => dispatch(clearItemFromCart(item));

  return (
    <div key={_id} className='flex border-b shadow-sm py-4 first:border-t ml-2 mr-8 text-gray-700'>
      <div className='relative h-52 w-40'>
        <Image
          src={image}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='pl-3 flex flex-grow'>
        <div className='flex flex-col justify-between flex-grow space-y-2'>
          <div>
            <p className='text-gray-400 text-sm'>{name}</p>
            <p className='font-semibold'>{brand}</p>
          </div>
          <div className="relative">
            <div className='flex'>
              <p className='text-xs font-bold mt-[2px]'>Qty:</p>
              <div className='flex items-center ml-1 text-md' >
                <AiOutlineLeft onClick={handleRemoveItem} className='hover:bg-gray-200 rounded-xl cursor-pointer transition ease-out delay-75' />{quantity}
                <AiOutlineRight onClick={handleAddItem} className=' hover:bg-gray-200 rounded-xl cursor-pointer transition ease-out delay-75' />
              </div>
            </div>
            <label className="text-xs font-bold mb-2" htmlFor="size">Size:</label>
            <select className="text-sm bg-gray-200 ml-1 outline-none" id="size" required>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col items-end justify-between'>
          <button onClick={handleClearItem} ><AiOutlineClose className='text-red-600 text-xl' /></button>
          <div className='flex flex-col items-end'>
            <p className='text-sm'>{price} EUR</p>
            <p className='font-semibold'>Total {quantity * price} EUR</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
