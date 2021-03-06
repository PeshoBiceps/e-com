import Layout from "../../components/Layout"
import Link from 'next/link'
import { useState } from "react"
import { useRouter } from "next/router";
import valid from '../../utils/valid'

const SignUp = () => {

  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  })

  const router = useRouter();

  const { name, email, password } = userCredentials


  const handleRegister = async (e) => {
    e.preventDefault()
    const errMsg = valid(name, email, password)
    if (errMsg) alert(errMsg)

    //POSTTTT
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json()
      alert(data.msg)

      if (!response.ok) throw new Error(json.message || "Something went wrong");


      setUserCredentials({
        name: "",
        email: "",
        password: "",
      });

      router.replace("/auth/signin");
    } catch (err) {
      console.log(JSON.stringify(err));
    }

  }



  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserCredentials({ ...userCredentials, [name]: value })
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
              <input value={name} onChange={handleChangeInput} className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type='text' name="name" placeholder="name" />
            </div>
            <div className="my-3">
              <label className="block text-md mb-2" htmlFor="email">Email</label>
              <input value={email} onChange={handleChangeInput} className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="email" />
            </div>
            <div className="mt-3">
              <label className="block text-md mb-2" htmlFor="password">Password</label>
              <input value={password} onChange={handleChangeInput} className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password" />
            </div>
            <div>
              <button className="mt-4 mb-3 w-full bg-black hover:bg-black-900 text-white py-2 rounded-md transition duration-100">Register</button>
            </div>
          </form>
          <p className="my-8"> Already have an account ? <span className="cursor-pointer text-sm text-blue-600">
            <Link href='/auth/signin'>
              Sign in
            </Link>
          </span>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp
