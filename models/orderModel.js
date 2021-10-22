import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    totalAmount: {
      type: Number,
      required: true
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        price: {
          type: Number,
          required: true,
        },
        qty: {
          type: Number,
          required: true,
        }
      }
    ],
    paymentType: {
      type: String,
      enum: ["cash", "card"],
      required: true,
    }
  },
  { timestamps: true }
)

export default mongoose.models.order || mongoose.model("order", orderSchema)