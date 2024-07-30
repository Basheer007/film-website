import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import iceRide from "../assets/ice-ride.jpg"
import iceBerg from "../assets/iceberg.jpg"
const VisitGreenland = () => {
    useGSAP(() => {
        gsap.to('.img-1', {
            xPercent: -100, duration: 10, rotate: -3,

            scrollTrigger: {
                trigger: '.img-1',

                scrub: 4,
                start: 'top 200',
                end: 'end 100',


            }
        })
        gsap.to('.img-2', {
            xPercent: 100, rotate: 3, duration: 10, scrollTrigger: {
                trigger: '.img-2',

                scrub: 4,
                start: 'top 200',
                end: 'end 100'
            }
        })
    })
    return (
        <div className=' overflow-hidden  py-20 max-md:p-11 mt-6 md:mt-40. flex items-center md:items-start justify-center relative '>
            <div className='text-center flex flex-col gap-11'>
                <h2 className='font-[mintGrotesk] text-css '>July 2024 - Greenland</h2>
                <h2 className='font-[roslindale] clamp-css'>Visit Greenland</h2>
                <div>
                    <button className='border text-css rounded-[16px] font-[mintGrotesk] duration-300 hover:text-gray-500 px-2 py-1'>Case Study</button>
                </div>
            </div>
            <div className='overflow-hidden  w-full justify-center h-full -mr-11 z-30 flex  absolute left-0 top-0'>
                <div className='w-[100%] h-[100%]  img-1  flex-1'>
                    <img src={iceRide} alt="ice Ride" className=' h-full w-full rounded-3xl object-cover object-top' />
                </div>
                <div className='w-[100%] h-[100%]  img-2 -ml-14  flex-1'>
                    <img src={iceBerg} alt="ice Ride" className='h-full w-full rounded-3xl object-cover object-center' />
                </div>

            </div>
        </div>
    )
}

export default VisitGreenland
