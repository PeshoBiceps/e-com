import Layout from "../components/Layout"
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from "react"

const Register = () => {

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleRegister = async (e) => {
    e.preventDefault()

    const name = nameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value

    const response = await fetch('http://localhost:5000/user/register', {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    alert(data.msg)
  }

  return (
    <Layout title='Register'>
      <div className='flex mt-10 sm:mt-0'>

        <div className="min-h-screen hidden sm:block sm:w-[50vw] bg-no-repeat bg-cover bg-center bg-login-bg ">

        </div>

        <div className='flex flex-col m-auto'>
          <form onSubmit={handleRegister}>
            <div>
              <h1 className="text-2xl font-bold">Register your account</h1>
            </div>
            <div className="my-3">
              <label className="block text-md mb-2" htmlFor="name">Name</label>
              <input ref={nameRef} className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type='text' name="name" placeholder="name" />
            </div>
            <div className="my-3">
              <label className="block text-md mb-2" htmlFor="email">Email</label>
              <input ref={emailRef} className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="email" />
            </div>
            <div className="mt-3">
              <label className="block text-md mb-2" htmlFor="password">Password</label>
              <input ref={passwordRef} className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password" />
            </div>
            <div>
              <button className="mt-4 mb-3 w-full bg-black hover:bg-black-900 text-white py-2 rounded-md transition duration-100">Register</button>
            </div>
          </form>
          <p className="mt-8"> Already have an account ? <span className="cursor-pointer text-sm text-blue-600">
            <Link href='/login'>
              Sign in
            </Link>
          </span>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Register
