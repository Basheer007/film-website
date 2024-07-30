import React, { useState } from 'react'
import Btn from './Btn'

const Navbar = ({ openMenufunc, openMenu }) => {
    function handleMouseMove(e) {
        let postion = e.target.getBoundingClientRect();
        let x = e.pageX - postion.left - postion.width / 2;
        let y = e.pageY - postion.top - postion.height / 2;
        e.target.style.transform = `translate(${x * 0.3}px,${y * 0.3}px)`
    }
    function handlemouseLeave(e) {

        e.target.style.transform = ``
    }

    function handlemenu(e) {
        openMenufunc(!openMenu)
    }
    return (
        <header className='fixed left-0 py-2 right-0 backdrop-blur-lg h-14 top-0 z-[200] px-4 '>
            <nav className='flex justify-between  z-[200] capitalize items-center h-full container mx-auto'>
                <ul className='flex gap-4 items-center text-[14px] font-[mintGrotesk] font-bold max-md:hidden'>
                    <Btn name={"still"} />
                    <Btn name={"motion"} />
                    <Btn name={"about"} />

                </ul>
                <div className=' transition-transform duration-150 mt-2 font-odibee  text-2xl'>
                    <a href="#" onMouseMove={handleMouseMove} onMouseLeave={handlemouseLeave} className='inline-block transition-transform duration-150'> BasheerDev.</a>
                </div>
                <ul className='flex gap-4 items-center text-[14px] font-[mintGrotesk] font-bold max-md:hidden'>
                    <Btn name={"instagram"} />
                    <Btn name={"email"} />
                    <Btn name={"f/24"} />

                </ul>
                <button onClick={handlemenu} className='border rounded-[19px] flex items-center  group h-[30px] px-4  overflow-hidden md:hidden'>
                    <li className='flex flex-col w-full h-full overflow-hidden items-center font-odibee font-normal'>

                        <span className={`${openMenu ? "-translate-y-full" : "translate-y-0"} inline-block  transition-all duration-300`}>close</span>
                        <span className={`${openMenu ? "-translate-y-full" : "translate-y-0"} inline-block  transition-all duration-300`}>menu</span>

                    </li>
                </button>
            </nav>

        </header >
    )
}

export default Navbar
