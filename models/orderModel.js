import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    totalAmount: {
      type: Number,
    },
    images: [String],
    paymentType: {
      type: String,
      enum: ["cash", "card"],
    }
  },
  { timestamps: true }
)

export default mongoose.models.order || mongoose.model("order", orderSchema)