import React from 'react'
import mountain from "../assets/mountain.jpeg"
import iceMountain from "../assets/ice-mountain.jpeg"
import sleepingGirl from "../assets/girl.jpg"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
const About = () => {
    useGSAP(() => {
        gsap.fromTo('.dot', { delay: 2, y: -8, }, { y: 0, stagger: .2, repeat: -1, })
    })
    return (
        <div className='min-h-dvh py-4 my-28'>
            <div className='container mx-auto flex flex-col gap-20 items-center justify-center '>
                <div className=' flex flex-col items-center gap-4'>
                    <h1 className=' text-center about-text'>A <img src={mountain} className='w-10 inline-block align-baseline hover:scale-[3] hover:rotate-[15deg] transition-transform filter blur-[1px] hover:blur-0 duration-1000  mx-2 rounded-lg h-14 md:w-20 md:h-24' alt="moutain" /> tiny mountain village</h1>
                    <h1 className=' align-baseline about-text'><img src={iceMountain} className='w-10 inline-block align-baseline hover:scale-[3] hover:rotate-[-15deg] filter blur-[1px] hover:blur-0  transition-transform duration-1000  mx-2 rounded-lg h-14 md:w-20 md:h-24' alt="moutain" />where it all</h1>
                    <h1 className=' align-baseline about-text'>began <span className='dot inline-block'>.</span><span className='dot inline-block'>.</span><span className='dot inline-block'>.</span><img src={sleepingGirl} className='w-[100px] rounded-lg inline-block align-baseline mx-4 md:w-[120px] hover:scale-[3] transition-transform hover:rotate-[15deg] filter blur-[1px] hover:blur-0 duration-1000  ' alt="moutain" /></h1>
                </div>
                <div className='text-center px-11 text-css font-[mintGrotesk]'>
                    Basheer Ahamed (Basheerahamed1n@gmail.com) is an outdoor, travel, and commercial photographer, filmmaker, and storyteller from the Dolomites in India. Her work focuses on capturing wild and rugged landscapes with a vivid color palette and dreamy elements. Her love for photography has spilled over into filmmaking which is one of the main creative outlets she pursues today.
                </div>
            </div>

        </div>
    )
}

export default About
