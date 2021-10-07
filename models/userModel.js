import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      max: 100,
      min: 4,
      required: true
    },
    email: {
      type: String,
      max: 100,
      min: 4,
      required: true,
      unique: true
    },
    password: {
      type: String,
      max: 255,
      min: 6,
      required: true
    },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

let Dataset = mongoose.models.user || mongoose.model("user", userSchema)

export default Dataset