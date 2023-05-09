import React from 'react'
import offer from "../img/offer.jpeg"
import offer2 from "../img/offer2.jpeg"
import offer3 from "../img/offer3.jpeg"


export default function family() {
  return (
    <div className='container mx-auto bg-white bg-opacity-25 h-screen py-3 grid grid-cols-1 rounded-md'>
        <div className='bg-white h-44 w-[80%] mx-auto rounded-md'>
            <img src={offer} alt='offer expire' className='bg-contain h-[80%] w-full '/>
            <h4 className='text-2xl font-bold mx-6 '>$8588</h4>
        </div>
        <div className='bg-white h-44 w-[80%] my-6 mx-auto rounded-md'>
            <img src={offer2} alt='offer expire' className='bg-contain h-[80%] w-full'/>
            <h4 className='text-2xl font-bold mx-6 '>$8588</h4>
        </div>
        <div className='bg-white h-44 w-[80%]  mx-auto rounded-xs'>
            <img src={offer3} alt='offer expire' className='bg-contain h-[80%] w-full'/>
            <h4 className='text-2xl font-bold mx-6 '>$8588</h4>
        </div>
    </div>
  )
}
