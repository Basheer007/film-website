import React, { useRef } from 'react'
import heroThumbnail from '../assets/heroThumbnail.jpg'
import hero from '../assets/hero.mp4'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
const Hero = () => {
    const videoContainer = useRef(null);


    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(videoContainer.current, { scale: 0, duration: 2, transformOrigin: 'center bottom', ease: "power2.out", })
        tl.from('#heading', { y: 20, opacity: 0, stagger: 0.2, rotate: 10, transformOrigin: 'center left' }, "-=1")
    })
    return (
        <section className=' container h-[80vh] max-md:p-6 mx-auto mt-[5rem] max-md:-mt-[10rem] relative rounded-3xl -z-20'>
            <div ref={videoContainer} className='h-full  w-full   z-[10] rounded-3xl  '>
                <video className='h-full relative w-full -z-20 object-cover rounded-3xl' muted autoPlay loop poster={heroThumbnail} >
                    <source src={hero} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
                <div className='absolute top-1/2 -translate-x-1/2 font-[roslindale] md:leading-10  sm:leading-8 leading-5 text-[100px] clamp-css -translate-y-1/2 left-1/2 '>
                    <h1 id='heading' className='uppercase'>BasheerAhamed</h1> <br />
                    <h1 id='heading' className='uppercase'>Photographer&</h1> <br />
                    <h1 id='heading' className='uppercase text-center'>filmmaker</h1>
                </div>
            </div>
        </section>
    )
}

export default Hero
