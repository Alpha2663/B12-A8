import React from 'react';
import heroImage from '../assets/hero.png';
import playstoreImg from "../assets/google-play-store_1273375-1205.jpg"
import iostoreImg from "../assets/App_Store_(iOS).svg.png"
import { BiColorFill } from 'react-icons/bi';


const Banner = () => {
    const handlePlayStore = () => {
        window.open('https://play.google.com/store/apps?hl=en')
    }
    const handleIosStore = () => {
        window.open('https://www.apple.com/app-store/')
    }
    return (
        <>
        <div className="bg-gray-200 justify-center ">
            <div className="container mx-auto px-4  flex-col md:flex-row items-center">
                <div className="md:w-full text-between md:text-between mb-10 md:mb-0">
                    <h1 className="pt-12 text-4xl md:text-5xl font-bold mb-4 text-center">We Build <br /> 
                    <span style={{color:'blueviolet'}}>Productive</span> Apps</h1>
                    <p className="pt-4 text-lg md:text-xl mb-8 text-center">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                   <div className='py-5 flex gap-3 justify-center items-center'>
                     <div onClick={handlePlayStore} className='flex border-1 justify-center items-center gap-2 p-2 rounded-lg hover:cursor-pointer'>
                        <img className="h-[48px] bg-cover " src={playstoreImg}></img>
                        <a href="#" className=" text-black font-semibold">Play Store</a>
                    </div>
                    <div className='py-5 flex gap-3 justify-center items-center'>
                    <div onClick={handleIosStore} className='flex border-1 justify-center items-center gap-2 p-2 rounded-lg hover:cursor-pointer' >
                        <img className= "h-[48px] bg-cover " src={iostoreImg}></img>
                         <a href="#" className=" text-black font-semibold">App Store</a>
                    </div>
                    </div>
                   </div>
                </div>
                <div className="flex justify-center">
                    <img src={heroImage} alt="Hero Image" className=" justify-center w- " />
                </div>
            </div>
        </div>

          

            </>

    );
};

export default Banner;