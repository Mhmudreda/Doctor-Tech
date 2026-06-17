import React, { useState } from 'react'
import { assets } from './../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';


export default function img() {

    const navigate = useNavigate()

    const [showMenu , setShowMenu] = useState(false);
        const [token , setTokn] = useState(true);

    
  return <>
   <div className='flex items-center justify-between text-sm mb-5 bg-white  p-4'>
        
        <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'><li>HOME</li> </NavLink>
            <NavLink to='/doctors'><li>ALL DOCTORS</li> </NavLink>
            <NavLink to='/about'><li>ABOUT</li> </NavLink>
            <NavLink to='/contact'><li>CONTACT</li> </NavLink>

        </ul>
        <div className='flex items-center gap-4'>
            {
                token?
                <div className='flex items-center gap-2 cursor-pointer relative group'>
                    <img  className='w-10  rounded-full ' src={assets.profile_pic} alt="" />
                    <img  className='w-2 ' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden z-10 group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p  onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={()=>setTokn(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
                </div>
               
                :<button onClick={()=>navigate('/login')} className='bg-blue-400 text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer'>Create account</button>

            }
        </div>

    </div>
  
  
  </>
   
  
}
