import logorezasm from '../asset/img/Group 1.png'
import { LockClosedIcon } from '@heroicons/react/solid'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default function Register() {

  function handelRegister(e) {
    e.preventDefault()
    Swal.fire({
      icon: 'success',
      title: 'Welcom to RezaShop',
      text: 'You have entered successfully',
    })
  }

  return (
    <>
     
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-[90vh]">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto w-28"
              src={logorezasm}
              alt="logoreza"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to sign up</h2>
            
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
            <div>
                <label htmlFor="username" className="sr-only">
                  User Name
                </label>
                <input
                
                  name="username"
                  type="text"
                  autoFocus
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-amber-400 focus:border-amber-400 focus:z-10 sm:text-sm"
                  placeholder="User Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-amber-400 focus:border-amber-400 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-amber-400 focus:border-amber-400 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-amber-500 focus:ring-amber-400 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to={'/signup'} className="font-medium text-amber-500 hover:text-amber-400">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
              onClick={(e) => handelRegister(e)}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-300"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-amber-300 group-hover:text-amber-500" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
