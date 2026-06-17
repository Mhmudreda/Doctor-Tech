import React from 'react'
import { assets } from '../assets/assets'

export default function Footer() {
  return <>

  
<footer className="bg-neutral-primary-soft md:text-center mt-20">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <a href="https://flowbite.com/" className="flex items-center">
        <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-heading uppercase">COMPANY</h2>
          <ul className="text-body font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline text-gray-500">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-500">About</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-heading uppercase">GET IN TOUCH</h2>
          <ul className="text-body font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline text-gray-500">+0-000-000-000</a>
            </li>
           
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Legal</h2>
          <ul className="text-body font-medium">
            <li className="mb-4">
              <a href="#" className="hover:underline text-gray-500">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-500">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 border-default sm:mx-auto lg:my-8" />
           <span className="block text-sm text-body sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
  </div>
</footer>


  
  
  </>
}
