import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'

function Signup() {
  const [signup, setSignup] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSignup({
      ...signup,
      [name]: value,
      f,
    })
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/signup',
        signup,
        {
          headers: { Accept: 'application/json' },
        }
      )
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="h-screen w-full bg-darkBlue overflow-x-hidden">
      <div className="container mx-auto px-6">
        <figure className="mt-14">
          <svg
            width="33"
            height="27"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto text-center"
          >
            <path
              d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
              fill="#FC4747"
            />
          </svg>
        </figure>
        <div className="card w-full md:w-96 lg:w-96 mx-auto bg-semiDarkBlue mt-16 ">
          <div className="w-10/12 mx-auto my-6">
            <h2 className="text-pureWhite text-4xl font-Outfit font-extralight mb-5 mt-2">
              Sign Up
            </h2>
            <form onSubmit={handleSignup}>
              <input
                type="email"
                value={signup.email}
                name="email"
                onChange={handleInputChange}
                placeholder="Email address"
                className="input w-full max-w-xs mt-4 text-greyishBlue font-extralight bg-transparent rounded-none caret-tomatoRed focus:text-pureWhite focus:font-extralight focus:outline-none border-x-0 border-t-0 border-b-1 border-greyishBlue focus:border-pureWhite placeholder:font-Outfit placeholder:text-pureWhite/50 placeholder:font-extralight"
              />
              <input
                type="text"
                value={signup.password}
                name="password"
                onChange={handleInputChange}
                placeholder="Password"
                className="input relative w-full max-w-xs mt-4 text-greyishBlue font-extralight bg-transparent rounded-none caret-tomatoRed focus:text-pureWhite focus:font-extralight focus:outline-none border-x-0 border-t-0 border-b-1 border-greyishBlue focus:border-pureWhite placeholder:font-Outfit placeholder:text-pureWhite/50 placeholder:font-extralight"
              />

              <input
                type="text"
                placeholder="Repeat password"
                className="input relative w-full max-w-xs mt-4 text-greyishBlue font-extralight bg-transparent rounded-none caret-tomatoRed focus:text-pureWhite focus:font-extralight focus:outline-none border-x-0 border-t-0 border-b-1 border-greyishBlue focus:border-pureWhite placeholder:font-Outfit placeholder:text-pureWhite/50 placeholder:font-extralight"
              />
              <button
                type="submit"
                className="btn bg-tomatoRed w-full normal-case font-Outfit font-extralight mt-10 hover:text-semiDarkBlue hover:bg-pureWhite border-none"
              >
                Create an account
              </button>
            </form>

            <p className="text-center text-pureWhite font-Outfit font-extralight mt-5 mb-2">
              Already have an account?{' '}
              <span className="text-tomatoRed">
                <Link href="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
