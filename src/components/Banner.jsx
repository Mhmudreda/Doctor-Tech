import React from 'react'
import { assets } from './../assets/assets';
import { useNavigate } from 'react-router-dom';

export default function Banner() {

  const navigate = useNavigate()

  return <>

  <div className='flex bg-blue-500 rounded-lg px-10 sm:px-10 md:px-14 lg:px-12 my-20  '>

         <div className='flex-1 py-8 sm:py-10 md:py-16 lg:pl-5'>
          <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>

            <p>Book Appointment</p>
            <p className='mt-4'>With 100+ Trusted Doctors</p>
            
          </div>
          <button onClick={()=>{navigate('/login') ; scrollTo(0,0)}} className= 'mt-5 bg-white text-black px-8 py-3 rounded-full font-light hidden md:block cursor-pointer '>Create account</button>

         </div>
         <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
          <img className='w-full absolute border-0 bottom-0 right-0 max-w-md ' src={assets.appointment_img} alt="" />
         </div>




  </div>


  
  
  
  
  </>
}
