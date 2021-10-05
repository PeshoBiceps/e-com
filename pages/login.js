import Layout from "../components/Layout"
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from "react-redux"
import { useState } from "react"

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log(password)

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/user/login', {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    alert(data.msg)
  }

  return (
    <Layout title='Login'>
      <div className='flex mt-10 sm:mt-0'>

        <div className="min-h-screen hidden sm:block sm:w-[50vw] bg-no-repeat bg-cover bg-center bg-login-bg ">

        </div>

        <div className='flex flex-col m-auto'>
          <form onSubmit={handleLogin}>
            <div>
              <h1 className="text-2xl font-bold">Login to your account</h1>
            </div>
            <div className="my-3">
              <label className="block text-md mb-2" htmlFor="email">Email</label>
              <input onChange={handleEmail} className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="email" />
            </div>
            <div className="mt-5">
              <label className="block text-md mb-2" htmlFor="password">Password</label>
              <input onChange={handlePassword} className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password" />
            </div>
            <div className="flex">
              <span className="text-sm text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
            </div>
            <div>
              <button className="mt-4 mb-3 w-full bg-black hover:bg-black-900 text-white py-2 rounded-md transition duration-100">Login now</button>
            </div>
          </form>
          <p className="mt-8"> Dont have an account? <span className="cursor-pointer text-sm text-blue-600">
            <Link href='/register'>
              Join free today
            </Link>
          </span></p>
        </div>
      </div>
    </Layout>
  )
}

export default Login
