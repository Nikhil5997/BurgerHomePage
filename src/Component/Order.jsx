import React from 'react'
import Burger from "../img/new.avif"
import {BsCartCheck} from "react-icons/bs"
// import Burger2 from "../img/images.jpeg"

export default function Order() {
  return (
    <div className='container mx-auto bg-white max-h-fit bg-opacity-25 my-6 rounded'>
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3'>
            <div className='h-40 w-36 xl:h-96 xl:w-96 lg:h-52 lg:w-52 bg-white bg-opacity-50 my-4 rounded-md mx-6'>
                <img src={Burger} alt='' className='rounded'/>
                <h5 className='text-black  xl:text-2xl font-bold text-center'>family Combo</h5>
                <div className='flex justify-evenly '>
                <del><h6 className='text-black  xl:text-2xl font-bold text-center'>$56</h6></del>
                <h6 className='text-black  xl:text-2xl font-bold text-center'> $49</h6>
                    <button className='hover:text-green-800 ml-6'><BsCartCheck size={20}/></button>
                </div>
            </div>
            <div className='h-40 w-36 xl:h-96 xl:w-96 lg:h-52 lg:w-52 bg-white bg-opacity-50 my-4 rounded-md mx-6'>
                <img src={Burger} alt='' className='rounded'/>
                <h5 className='text-black  xl:text-2xl font-bold text-center'>family Combo</h5>
                <div className='flex justify-evenly '>
                <del><h6 className='text-black  xl:text-2xl font-bold text-center'>$56</h6></del>
                <h6 className='text-black  xl:text-2xl font-bold text-center'> $49</h6>
                    <button className='hover:text-green-800 ml-6'><BsCartCheck size={20}/></button>
                </div>
            </div>
            <div className='h-40 w-36 xl:h-96 xl:w-96 lg:h-52 lg:w-52 bg-white bg-opacity-50 my-4 rounded-md mx-6'>
                <img src={Burger} alt='' className='rounded'/>
                <h5 className='text-black  xl:text-2xl font-bold text-center'>family Combo</h5>
                <div className='flex justify-evenly '>
                <del><h6 className='text-black  xl:text-2xl font-bold text-center'>$56</h6></del>
                <h6 className='text-black  xl:text-2xl font-bold text-center'> $49</h6>
                    <button className='hover:text-green-800 ml-6'><BsCartCheck size={20}/></button>
                </div>
            </div>
            <div className='h-40 w-36 xl:h-96 xl:w-96 lg:h-52 lg:w-52 bg-white bg-opacity-50 my-4 rounded-md mx-6'>
                <img src={Burger} alt='' className='rounded'/>
                <h5 className='text-black  xl:text-2xl font-bold text-center'>family Combo</h5>
                <div className='flex justify-evenly '>
                <del><h6 className='text-black  xl:text-2xl font-bold text-center'>$56</h6></del>
                <h6 className='text-black  xl:text-2xl font-bold text-center'> $49</h6>
                    <button className='hover:text-green-800 ml-6'><BsCartCheck size={20}/></button>
                </div>
            </div>
            <div className='h-40 w-36 xl:h-96 xl:w-96 lg:h-52 lg:w-52 bg-white bg-opacity-50 my-4 rounded-md mx-6'>
                <img src={Burger} alt='' className='rounded'/>
                <h5 className='text-black  xl:text-2xl font-bold text-center'>family Combo</h5>
                <div className='flex justify-evenly '>
                <del><h6 className='text-black  xl:text-2xl font-bold text-center'>$56</h6></del>
                <h6 className='text-black  xl:text-2xl font-bold text-center'> $49</h6>
                    <button className='hover:text-green-800 ml-6'><BsCartCheck size={20}/></button>
                </div>
            </div>
            <div className='h-40 w-36 xl:h-96 xl:w-96 lg:h-52 lg:w-52 bg-white bg-opacity-50 my-4 rounded-md mx-6'>
                <img src={Burger} alt='' className='rounded'/>
                <h5 className='text-black  xl:text-2xl font-bold text-center'>family Combo</h5>
                <div className='flex justify-evenly '>
                <del><h6 className='text-black  xl:text-2xl font-bold text-center'>$56</h6></del>
                <h6 className='text-black  xl:text-2xl font-bold text-center'> $49</h6>
                    <button className='hover:text-green-800 ml-6'><BsCartCheck size={20}/></button>
                </div>
            </div>
            <div className='h-40 w-36 xl:h-96 xl:w-96 lg:h-52 lg:w-52 bg-white bg-opacity-50 my-4 rounded-md mx-6'>
                <img src={Burger} alt='' className='rounded'/>
                <h5 className='text-black  xl:text-2xl font-bold text-center'>family Combo</h5>
                <div className='flex justify-evenly '>
                <del><h6 className='text-black  xl:text-2xl font-bold text-center'>$56</h6></del>
                <h6 className='text-black  xl:text-2xl font-bold text-center'> $49</h6>
                    <button className='hover:text-green-800 ml-6'><BsCartCheck size={20}/></button>
                </div>
            </div>
            <div className='h-40 w-36 xl:h-96 xl:w-96 lg:h-52 lg:w-52 bg-white bg-opacity-50 my-4 rounded-md mx-6'>
                <img src={Burger} alt='' className='rounded'/>
                <h5 className='text-black  xl:text-2xl font-bold text-center'>family Combo</h5>
                <div className='flex justify-evenly '>
                <del><h6 className='text-black  xl:text-2xl font-bold text-center'>$56</h6></del>
                <h6 className='text-black  xl:text-2xl font-bold text-center'> $49</h6>
                    <button className='hover:text-green-800 ml-6'><BsCartCheck size={20}/></button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
