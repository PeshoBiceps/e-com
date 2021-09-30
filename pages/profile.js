import Layout from "../components/Layout"
import Image from 'next/image'

const Profile = () => {
  return (
    <Layout title='My Profile'>
      <div className='flex'>

        <div class="min-h-screen hidden sm:block sm:w-[50vw] bg-no-repeat bg-cover bg-center bg-login-bg ">

        </div>

        <div>
          <form>
            <div>
              <span class="text-sm text-gray-900">Welcome back</span>
              <h1 class="text-2xl font-bold">Login to your account</h1>
            </div>
            <div class="mt-5">
              <label class="block text-md mb-2" for="password">Password</label>
              <input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="password" />
            </div>
            <div class="my-3">
              <label class="block text-md mb-2" for="email">Email</label>
              <input class="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="password" placeholder="email" />
            </div>
            <div class="flex justify-between">
              <div>
                <input class="cursor-pointer" type="radio" name="rememberme" />
                <span class="text-sm">Remember Me</span>
              </div>
              <span class="text-sm text-blue-700 hover:underline cursor-pointer">Forgot password?</span>
            </div>
            <div class="">
              <button class="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login now</button>
              <div class="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100" >

                <img className="h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt="" />
                <button >Or sign-in with google</button>
              </div>
            </div>
          </form>
          <p class="mt-8"> Dont have an account? <span class="cursor-pointer text-sm text-blue-600"> Join free today</span></p>
        </div>
      </div>
    </Layout>
  )
}

export default Profile
