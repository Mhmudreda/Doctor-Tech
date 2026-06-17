import React, { use, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';


export default function Appointment() {

  const {docId} = useParams();
  const { doctors , currencySymbol } = useContext(AppContext);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const[ docInfo , setDocInfo ] = useState({});
  const [docSlots, setDocSlots ] = useState([])
  const [slotIndex, setSlotIndex ] = useState(0)
  const [slotTime, setSlotTime ] = useState("");

  const getAvailableSlots = () => {

    setDocSlots([])
      let today = new Date();
      for(let i=0; i<7; i++){
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        let endtime = new Date();
        endtime.setDate(today.getDate() + i);
        endtime.setHours(21,0,0,0);

        if(today.getDate() === currentDate.getDate()){
          currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() +1 : 10 );
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0 );
        }else{
          currentDate.setHours(10);
          currentDate.setMinutes(0);
        }
        let timeSlots = [];


        while(currentDate < endtime){
          let formattedTime = currentDate.toLocaleDateString([], {hour: '2-digit', minute:'2-digit'});
          timeSlots.push({
            dateTime: new Date(currentDate),
            time: formattedTime
          })

          currentDate.setMinutes(currentDate.getMinutes() + 30);

          }
          setDocSlots(prev => ([...prev, timeSlots]))
      }

    
   
  }

  useEffect(() => {

    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {


    console.log(docSlots);
    

  },[docSlots ]);


  const fetchDocInfo = () => {

    const docInfo= doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    
  }

  useEffect(() => {

    fetchDocInfo();
  }, [ doctors ,docId]);

  return <>
  <div>
    <div className='flex flex-col sm:flex-row gap-4'>

      <div>
        <img className='bg-blue-500 w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
      </div>

    <div className='flex-1 border border-gray-300 rounded-lg p-8 py-7 bg-white mx-2  sm:mx-0 mt-[-88px] sm:mt-0'>
        <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} <img className='w-4' src={assets.verified_icon} alt="" /></p>
        <div className='flex  items-center gap-2 text-sm mt-1 text-gray-600 '>
          <p>{docInfo.degree} - {docInfo.speciality}</p>
          <button className='py-.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
        </div>
        
        <div>
          <p className=' flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
          <p className='text-sm text-gray-500  max-w-[700px] mt-1'>{docInfo.about}</p>
        </div>
        <p className='text-gray-500 font-medium mt-4'>Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees} </span></p>

      </div> 
    </div>
    
  </div>

  
  
   
  
  
  
  
  </>
}
