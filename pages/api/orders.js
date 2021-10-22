import { dbConnect } from '../../utils/dbConnect'
import Order from '../../models/orderModel'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  console.log(req.body.items)


  switch (method) {
    case 'POST':
      const order = new Order({
        email: req.body.email,
        totalAmount: req.body.totalAmount,
        items: req.body.items,
        paymentType: req.body.paymentType
      })
      try {
        const savedOrder = await order.save()
        res.status(200).json(savedOrder)
      } catch (error) {
        res.status(400).json({ success: false, error: error })
      }
      break
    case 'GET':
      try {
        const order = await Order.find({})
        res.status(200).json({ success: true, data: order })
      } catch (error) {
        res.status(400).json({ success: false, error: error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}