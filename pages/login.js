import Layout from "../components/Layout"
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from "react-redux"

const Login = () => {

  return (
    <Layout title='Login'>
      <div className='flex mt-10 sm:mt-0'>

        <div className="min-h-screen hidden sm:block sm:w-[50vw] bg-no-repeat bg-cover bg-center bg-login-bg ">

        </div>

        <div className='flex flex-col m-auto'>
          <form>
            <div>
              <h1 className="text-2xl font-bold">Login to your account</h1>
            </div>
            <div className="my-3">
              <label className="block text-md mb-2" htmlFor="email">Email</label>
              <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="password" placeholder="email" />
            </div>
            <div className="mt-5">
              <label className="block text-md mb-2" htmlFor="password">Password</label>
              <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password" />
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
