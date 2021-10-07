import User from '../../../models/userModel'
import valid from '../../../utils/valid'
import bcrypt from 'bcrypt'
import { dbConnect } from '../../../utils/dbConnect'

export default async (req, res) => {

  await dbConnect()

  switch (req.method) {
    case "POST":
      try {
        return register(req, res)
      } catch (error) {
        return res.status(400).json({ success: false })
      }

    default:
      res.status(400).json({ success: false })
      break
  }
}

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body

    //Check if user is already in the database
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).json({ msg: "Email already exists" })

    const errMsg = valid(name, email, password)
    if (errMsg) return res.status(400).json({ err: errMsg })

    const passwordHash = await bcrypt.hash(password, 12)

    const newUser = new User({ name, email, password: passwordHash })
    newUser.save()
    console.log(newUser)
    res.json({ msg: "Register Success!" })

  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}