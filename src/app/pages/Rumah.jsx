import React from 'react';

import 'aos/dist/aos.css';
import AOS from 'aos';
import Nav from "./nav";
import HomeBg from '../Img/Desktop.png'
import Hand from '../Img/Hand.png'
import Rivew from '../Img/View.png'
import Mockup from '../Img/Mockup.png'
import Arm from '../Img/Arm.png'
import Artikel from '../Img/Artikel.png'
import Bmi from '../Img/Bmi.png'

import Image from 'next/image';

import Link from "next/link";

import Instagram from '../Img/Instagram.png'
import Twitter from '../Img/twitter.png'
import Whatsaap from '../Img/Whatsapp.png'
import Linked from '../Img/Linkedin.png'
import Ban from '../Img/Home.png'
import Arrow from '../Img/Arrow.png'
import Homee from '../Img/Home2.png'
import Faq from "./Faq";
import Iklan  from "./Iklan";

import Footer from "./Footer";

import Testimonials from "./Testimonials";
import Script from "next/script";


const Rumah  = () =>{
  
    return(
        <div>
            <Nav/>
            <section id="Home" className=" bg-[#1E5AF9] h-screen flex items-center relative font-poppins py-4  " >
               <div className=''>
        <div className=" flex justify-center ">
             <div className=" max-w-md " data-aos="fade-down">
                <p className="text-white font-poppins text-4xl text-center font-bold">Best Healthy Life style HealthyU</p>
                <p className="text-white font-poppins text-md text-center mt-4">Complete free features make it easier for you to achieve progress in your healthy lifestyle in the future</p>
            </div>           
        </div>
        <div className="lg:px-36 px-0 mt-12 lg:flex gap-20">
            {/* <div className=" flex gap-4">
                <div className="">
                <div className="w-16 h-16 bg-white rounded-md flex justify-center items-center">
                    <Image src={Dumbble} alt=""  className="w-12"/>
                </div>
                <div className="w-16 h-16 bg-white rounded-md mt-4 flex justify-center items-center">
                    <Image src={Suplement} alt="" className="w-8" />
                </div>
               </div>
               <div className="w-16 h-16 bg-white rounded-md flex justify-center items-center">
                    <Image src={Habbit} alt="" className="w-12"/>
               </div>
               <div className="w-16 h-16 bg-white rounded-md flex justify-center items-center">
                    <Image src={Timbang} alt=""  className="w-12"/>
               </div>
            </div> */}
            <div className="flex justify-center lg:justify-start gap-2 mt-2 lg:mt-20  animate-fade-right">
                <div className="flex justify-center items-center w-12 h-12 bg-blue-800 rounded-full hover:opacity-70 hover:scale-70">
                   <Image src={Instagram} className="w-4" alt="ysnfjd"></Image>
                </div>
                <div className="flex justify-center items-center w-12 h-12  rounded-full bg-blue-800 hover:opacity-70 hover:scale-70">
                    <Image src={Twitter} alt="" className="w-4"/>
                </div>
                <div className="flex justify-center items-center w-12 h-12  rounded-full bg-blue-800 hover:opacity-70 hover:scale-70">
                    <Image src={Whatsaap} alt="" className="w-4"/>
                </div>
                <div className="flex justify-center items-center w-12 h-12  rounded-full bg-blue-800 hover:opacity-70 hover:scale-70">
                    <Image src={Linked} alt="" className="w-4"/>
                </div>
            </div>
            <div className="flex justify-center lg:mt-0 mt-3  animate-fade-up">
                <Image src={Hand} alt="" className="lg:w-80 w-20 drop-shadow-lg	" />
            </div>
            <div className="lg:mt-0 mt-4 animate-fade-right"  >
                <div className="flex justify-center lg:justify-start items-center gap-4 hover:rotate-2">
                    <Image src={Rivew} alt=""className="lg:w-32 w-16 " />
                    <p className="text-white font-poppins lg:text-xl text-sm font-medium">400K +</p>
                </div>
                <div className="lg:max-w-sm lg:px-0 px-8 mt-4">
                    <div className="flex justify-center">
                        <p className="lg:text-md text-xs text-white text-center font-poppins lg:text-left">Trusted by several satisfied users, with this feature we have had a big impact on a healthy lifestyle</p>
                    </div>
                    <div className="mt-8 flex lg:justify-start justify-center gap-4">
                        <button className="lg:w-32 w-24 lg:h-12 hover:shadow-none  h-8 bg-gradient-to-r from-slate-50 to-slate-200 shadow-md text-black rounded-md text-xs lg:text-sm font-poppins font-bold">Download Now</button>
                        <button className="text-white lg:text-sm  font-poppins">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
                </div>   
            </section>          
            <section id="About" className=" About h-screen py-8 mx-auto bg-[#F5F6F7] flex justify-center items-center lg:items-center">
                <div className="">
               
                <div className="flex justify-center " data-aos="fade-up">
                    <div className="">
                        <p className="text-3xl text-black font-bold font-poppins text-center ">How it works</p>
                        <p className="text-md text-center font-poppins max-w-md mt-4 text-[#666161]">With our free features to maintain a healthy lifestyle, customers can achieve maximum health</p>
                    </div>
                </div>
                    <div className=" lg:flex lg:flex-row flex-col justify-center  py-4 lg:py-12 gap-20  " data-aos="zoom-in">
                            <div className="lg:mt-0 mt-4  flex flex-col items-center justify-center ">
                                <div className="w-8 h-8 rounded-full bg-blue-700 flex justify-center items-center">
                                    <p className="text-md text-poppins font-bold text-white ">1</p>
                                </div>
                                <div className="mt-2">
                                    <p className="text-md font-poppins text-black font-bold">Install App</p>
                                </div> 
                                <div className="max-w-52 mt-2">
                                    <p className="text-sm font-poppins text-black text-[#666161] text-center">Get information about health in search articles</p>
                                </div>     
                            </div>
                            <div className="lg:mt-0 mt-4  flex flex-col items-center justify-center ">
                                <div className="w-8 h-8 rounded-full bg-blue-700 flex justify-center items-center">
                                    <p className="text-md text-poppins font-bold text-white ">2</p>
                                </div>
                                <div className="mt-2">
                                    <p className="text-md font-poppins text-black font-bold">Crate Your Acoount</p>
                                </div> 
                                <div className="max-w-52 mt-2">
                                    <p className="text-sm font-poppins  text-[#666161] text-center">Get information about health in search articles</p>
                                </div>     
                            </div>
                            <div className="lg:mt-0 mt-4  flex flex-col items-center justify-center ">
                                <div className="w-8 h-8 rounded-full bg-blue-700 flex justify-center items-center">
                                    <p className="text-md text-poppins font-bold text-white ">3</p>
                                </div>
                                <div className="mt-2">
                                    <p className="text-md font-poppins font-bold">Play Training </p>
                                </div> 
                                <div className="max-w-52 mt-2">
                                    <p className="text-sm font-poppins  text-[#666161] text-center">Get information about health in search articles</p>
                                </div>     
                        </div>
                    </div>
                        <div className="lg:flex hidden justify-center gap-5 " data-aos="fade-up" data-aos-offset="200">
                            <Image src={Arm} alt="" className="w-28" />
                            <Image src={Artikel} alt="" className="w-28" />
                            <Image src={Bmi} alt="" className="w-28" />
                        </div>
                         </div>
            </section>
            <section className="h-screen max-auto">
                <div className="lg:flex delay-[300ms] duration-[600ms] taos:[transform:translate3d(200px,-200px,0)] taos:opacity-0" data-taos-offset="500">
                    <div className="lg:w-6/12 hidden lg:block  bg-[#E0E0E0] h-screen">
                        <div className="flex flex-col items-center justify-center py-24 ease-in-out " >
                               <Image src={Ban} alt="" className="w-2/3 hover:scale-110 translate-y-6 transform transition duration-y"/>
                        </div>
                       <div className="px-8">
                            <p className="text-md font-bold text-black">HEALTHYU - 2024</p>
                            <p className="text-sm font-poppins mt-2 text-black">“Create Positif Energy with HealthyU” </p>
                       </div>
                    </div>
                    <div className="lg:w-6/12 lg:h-screen h-screen bg-black flex items-center justify-center px-8">
                        <div className="" data-aos="fade-down">
                            <div className="">
                                <p className="text-md text-white font-medium">/ Overall Health</p>
                                <p className="lg:text-5xl lg:text-left text-center  text-4xl text-white lg:max-w-md mt-8">Change your bad lifestyle for the better now</p>
                                <div className="flex justify-center lg:justify-left">
                                    <div className="w-40 bg-blue-700 h-4 mt-6"></div>
                                </div>
                            </div>
                            <div className="mt-36 lg:flex gap-5 " >
                                <div className="flex justify-center lg:justify-left">
                                <p className="text-sm text-center lg:text-left text-white max-w-xs">HealthyU makes it easy for you to maintain your healthy lifestyle. With our free features, you don't need to be afraid to try</p>
                                </div>
                                <div className="flex justify-center lg:justify-left mt-4">

                                <button className="hover:rotate-2 hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-50 ease-in-out text-black text-sm w-44  rounded-full h-12 bg-gradient-to-r from-slate-50 to-slate-500 flex items-center justify-center gap-5 font-bold">Download app   
                                    <div className="w-8 h-8 bg-[#136DFB]  rounded-full flex items-center justify-center">
                                        <Image src={Arrow} alt="" className="w-4" />
                                    </div>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" bg-white flex px-8 py-16 justify-around">
                <div className="  flex-col justify-center " data-aos="fade-down">
                    <div className="flex justify-center">

                    <div className="max-w-lg">
                        <p className="text-4xl font-bold text-center text-black">What's on healthyU?</p>
                        <p className="text-md text-center font-medium text-[#888181] mt-4 ">What's going on at healthyU, why should it be healthyU. find it all on healthyU download now</p>
                    </div>
                    </div>
                    <div className="flex justify-center mt-12">
                        <div className="grid grid-cols-2 gap-8 ">
                            <div className="lg:w-64 lg:h-40 bg-black px-4 py-4 items-center">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2D2C2C]">
                                    <Image src={Homee} alt="" className="w-4"/>
                                </div>
                                <p className="text-lg font-medium text-white">Page Home</p>
                                <p className="text-xs mt-2 text-[#DFDFDF]">HealthY main page by exploring all the features it contains</p>
                            </div>
                            <div className="lg:w-64 lg:h-40 hover:bg-black text-white bg-[#F6F6F6] px-4 py-4 items-center">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2254C5]">
                                    <Image src={Homee} alt="" className="w-4"/>
                                </div>
                                <p className="text-lg font-medium text-black">Page Search</p>
                                <p className="text-xs mt-2 text-[#686161]">Contains articles about health</p>
                            </div>
                            <div className="lg:w-64 lg:h-40 bg-[#F6F6F6] px-4 py-4 items-center">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2254C5]">
                                    <Image src={Homee} alt="" className="w-4"/>
                                </div>
                                <p className="text-lg font-medium text-black">Page Channel</p>
                                <p className="text-xs mt-2 text-[#686161]">Find tips and tricks on the channel for maintaining a healthy lifestyle</p>
                            </div>
                            <div className="lg:w-64 lg:h-40 bg-[#F6F6F6] px-4 py-4 items-center">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2254C5]">
                                    <Image src={Homee} alt="" className="w-4"/>
                                </div>
                                <p className="text-lg font-medium text-black">Page Profile</p>
                                <p className="text-xs mt-2 text-[#686161]">change accounts and features such as habit training reminders</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex" data-aos="fade-up">
                    <Image src={ Mockup} alt="" className="w-64"/>
                </div>
            </section>
            <Faq/>
           <Testimonials/>
           <Iklan/>
           <Footer/>
           
           <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
           <script>
           AOS.init();
           </script>
        </div>
    )
}

export default Rumah