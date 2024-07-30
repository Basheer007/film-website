import React from 'react'
import vanvideoThumbnail from "../assets/van-video-thumbnail.jpg"
import floatingWater from "../assets/floating-water.jpg"
import beachGirl from "../assets/beach-girl.jpg"
import bridge from "../assets/bridge.jpg"
import Tilt from 'react-parallax-tilt';

const Tiltsection = () => {
    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 10,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 500,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return (
        <div className='min-h-dvh '>
            <div className='text-center flex flex-col gap-11'>
                <h2 className='font-[mintGrotesk] text-css '>July 2024 - India</h2>

                <div>
                    <h2 className='clamp-css font-[roslindale] '>Amelia</h2>
                </div>
            </div>

            <Tilt options={defaultOptions}>

                <div className='preserve p-6 sm:p-11 md:px-20 lg:px-40  w-[80%]  mx-auto  relative flex justify-center items-center h-full'>
                    <div className=''>
                        <img src={vanvideoThumbnail} alt="van-thumbnail" className='rounded-xl' />
                    </div>
                    <div data-tilt className='el absolute top-0 right-0 w-[100px] h-[70px]  sm:w-40 sm:h-28 md:w-48 md:h-40 rounded-xl -z-10 '>
                        <img src={beachGirl} alt="van-thumbnail" className='rounded-xl object-contain w-full h-full' />
                    </div>
                    <div className='el absolute -bottom-2 right-6 w-[100px] h-[70px]  sm:w-40 sm:h-28 md:w-48 md:h-40 rounded-xl'>
                        <img src={bridge} alt="van-thumbnail" className='rounded-xl object-cover object-center w-full h-full' />
                    </div >
                    <div className='el absolute -left-0 top-[40%] w-[100px] h-[70px]  sm:w-40 sm:h-28 md:w-48 md:h-40 rounded-xl'>
                        <img src={floatingWater} alt="van-thumbnail" className='rounded-xl object-cover object-center w-full h-full' />
                    </div>
                </div>
            </Tilt>

        </div>
    )
}

export default Tiltsection
