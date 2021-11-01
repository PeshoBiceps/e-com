import { buffer } from "micro"

import { dbConnect } from '../../utils/dbConnect'
import Order from '../../models/orderModel'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const endpointSecret = 'whsec_L4VPPMW92NMXyJbiNDUr82gwrtIrlGhJ'

const fulfillOrder = async (session) => {
  console.log('Fulfilling order', session)
  console.log(session.customer_details.email, session.amount_total, JSON.parse(session.metadata.images))
  //Save order to database
  await dbConnect()
  const order = new Order({
    email: session.customer_details.email,
    totalAmount: session.amount_total / 100,
    images: JSON.parse(session.metadata.images),

  })
  await order.save()
}

export default async (req, res) => {
  if (req.method === 'POST') {

    const rawBody = await buffer(req);
    const signature = req.headers['stripe-signature']

    let event

    //Verify that the event posted came from stripe 
    try {
      event = stripe.webhooks.constructEvent(rawBody.toString(), signature, endpointSecret)
    } catch (err) {
      console.log("ERROR", err.message)
      return res.status(400).send(`Webhook error: ${err.message}`)
    }

    //Handle the checkout session 
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      //Fulfill the order
      return fulfillOrder(session).then(() => res.status(200)).catch(err => res.status(400).send(`Webhook Error: ${err.message}`))
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};