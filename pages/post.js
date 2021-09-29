import { useState } from "react"
import Layout from "../components/Layout"

const Post = () => {

  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [category, setCategory] = useState('')
  const [isFeatured, setIsFeatured] = useState(false)

  console.log(name, slug, isFeatured)

  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeSlug = (e) => {
    setSlug(e.target.value)
  }
  const onChangeCheck = (e) => {
    setIsFeatured(e.target.checked)
  }

  const submitProduct = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/product', {
      method: "POST",
      body: JSON.stringify({ name, slug, isFeatured }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
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
            <select className=" w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500" id="category" required>
              <option>Shirts</option>
              <option>Pants</option>
              <option>Hats</option>
            </select>
          </div>

          <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <input className=" w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white" id="image" type="text" required />

          <div className='flex items-center'>
            <span className="text-gray-700 mr-2 pb-1">Featured</span>
            <input type='checkbox' name='featured' onChange={onChangeCheck} checked={isFeatured} />
          </div>

          <div className='flex justify-around'>
            <div className='w-full'>
              <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                Price
              </label>
              <input className=" w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white" id="price" type='number' required />
            </div>

            <div className='w-full ml-2'>
              <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="brand">
                Brand
              </label>
              <input className=" w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white" id="brand" type="text" required />
            </div>
          </div>

          <div className='flex justify-around'>
            <div className='w-full'>
              <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="rating">
                Rating 1-5
              </label>
              <input className=" w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white" id="rating" type='number' required />
            </div>

            <div className='w-full ml-2'>
              <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                Stock
              </label>
              <input className=" w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white" id="stock" type='number' required />
            </div>
          </div>

          <label className=" text-gray-700 text-xs font-bold mb-2" htmlFor="description">
            Description
          </label>
          <input className=" w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white" id="description" type="text" required />

          <button type='submit' className='w-full bg-black text-white p-2 shadow-md'>SUBMIT</button>
        </div>
      </form>
    </Layout>
  )
}

export default Post
