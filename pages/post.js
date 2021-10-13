import { useState } from "react"
import Layout from "../components/Layout"

const Post = () => {

  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [category, setCategory] = useState('Shirts')
  const [isFeatured, setIsFeatured] = useState(false)
  const [brand, setBrand] = useState('')
  const [rating, setRating] = useState(0)
  const [countInStock, setCountInStock] = useState(1)
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeSlug = (e) => {
    setSlug(e.target.value)
  }
  const onChangeCategory = (e) => {
    setCategory(e.target.value)
  }
  const onChangeCheck = (e) => {
    setIsFeatured(e.target.checked)
  }
  const onChangeBrand = (e) => {
    setBrand(e.target.value)
  }
  const onChangeRating = (e) => {
    setRating(e.target.value)
  }
  const onChangeCount = (e) => {
    setCountInStock(e.target.value)
  }
  const onChangePrice = (e) => {
    setPrice(e.target.value)
  }
  const onChangeImage = (e) => {
    setImage(e.target.value)
  }
  const onChangeDescription = (e) => {
    setDescription(e.target.value)
  }

  const submitProduct = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3000/api/products', {
      method: "POST",
      body: JSON.stringify({ name, slug, category, isFeatured, brand, rating, countInStock, price, image, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
    alert('GJ !!!')
  }

  return (
    <Layout>
      <form onSubmit={submitProduct} className='mt-7 max-w-[900px] mx-auto'>
        <div>

          <div className='flex justify-around'>
            <div className='w-full'>
              <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="item-name">
                Item Name
              </label>
              <input onChange={onChangeName} value={name} className=" w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white" id="item-name" type="text" required />
            </div>

            <div className='w-full ml-2'>
              <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="slug">
                Unique Slug "ID"
              </label>
              <input onChange={onChangeSlug} value={slug} className=" w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white" id="slug" type="text" required />
            </div>
          </div>

          <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="category">Categoty</label>
          <div className="relative">
            <select onChange={onChangeCategory} value={category} className=" w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500" id="category" required>
              <option>shirts</option>
              <option>pants</option>
              <option>hats</option>
            </select>
          </div>

          <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <input onChange={onChangeImage} value={image} className=" w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white" id="image" type="text" required />

          <div className='flex items-center'>
            <span className="text-gray-700 mr-2 pb-1">Featured</span>
            <input type='checkbox' name='featured' onChange={onChangeCheck} value={isFeatured} checked={isFeatured} />
          </div>

          <div className='flex justify-around'>
            <div className='w-full'>
              <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                Price
              </label>
              <input onChange={onChangePrice} value={price} className=" w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white" id="price" type='number' required />
            </div>

            <div className='w-full ml-2'>
              <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="brand">
                Brand
              </label>
              <input onChange={onChangeBrand} value={brand} className=" w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white" id="brand" type="text" required />
            </div>
          </div>

          <div className='flex justify-around'>
            <div className='w-full'>
              <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="rating">
                Rating 1-5
              </label>
              <input onChange={onChangeRating} value={rating} className=" w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white" id="rating" type='number' required />
            </div>

            <div className='w-full ml-2'>
              <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                Stock
              </label>
              <input onChange={onChangeCount} value={countInStock} className=" w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white" id="stock" type='number' required />
            </div>
          </div>

          <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="description">
            Description
          </label>
          <input onChange={onChangeDescription} value={description} className=" w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white" id="description" type="text" required />

          <button type='submit' className='w-full bg-black text-white p-2 shadow-md'>SUBMIT</button>
        </div>
      </form>
    </Layout>
  )
}

export default Post
