import { dbConnect } from '../../utils/dbConnect'
import Product from '../../models/productModel'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      const product = new Product({
        name: req.body.name,
        slug: req.body.slug,
        category: req.body.category,
        image: req.body.image,
        price: req.body.price,
        brand: req.body.brand,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        countInStock: req.body.countInStock,
        description: req.body.description,
      })
      try {
        const savedProduct = await product.save()
        res.status(200).json(savedProduct)
      } catch (error) {
        res.status(400).json({ success: false, error: error })
      }
      break
    case 'GET':
      try {
        const product = await Product.find({})
        res.status(200).json({ success: true, data: product })
      } catch (error) {
        res.status(400).json({ success: false, error: error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}