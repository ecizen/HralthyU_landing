
import React from 'react'
import TES3 from '../Img/TES5.svg'
import TES4 from '../Img/TES6.svg'
import TES5 from '../Img/TES7.png'
import Image from 'next/image';

export default function Iklan() {
  return (
    <div className=" lg:py-24 px-8 py-8 lg:px-24 bg-blue-800 flex relative   items-center" >
        <div className="flex">

        <div className="mx-auto">
            <div className="max-w-lg">
                <p role='tittle' className='text-4xl text-white font-poppins font-bold '>Manage Your Healthy Style from your mobile</p>
            </div>
            <div className="max-w-lg pt-4">
                <p className='text-sm font-normal text-white'>Download the app to manage your projects, keep track of the progress and complete tasks without procastinating. Stay on track and complete on time!</p>
            </div>
            <div className="lg:hidden mt-8 flex justify-center ">
                <Image src={TES5} alt="" className='w-52' />
            </div>
            <div className="pt-8 flex  lg:justify-start justify-center">
                <button className='w-32 h-12 bg-white text-sm font-poppins text-black font-bold rounded md shadow-lg'>Try Now</button>
            </div>
        </div>
        <div className="hidden lg:flex">
            <Image src={TES3} alt="" className='w-48 right-20 bottom-0 absolute'/>
            <Image src={TES4} alt="" className='w-48 right-72 top-0 absolute'/>
        </div>
        </div>
    </div>
  )
}