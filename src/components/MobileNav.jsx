import React from 'react'

const MobileNav = ({ openMenu }) => {
    return (
        <div className={`${openMenu ? 'relative -translate-y-full' : 'translate-y-1/2 fixed top-[1.2rem] left-0 right-0'} md:hidden bg-black z-[1000] rounded-2xl transition-transform duration-300 ease-in w-[80%] mx-auto`}>
            <ul className='flex flex-col items-center gap-4 font-[mintGrotesk] py-2 capitalize'>
                <li className='bg-slate-800 px-6 py-2 rounded-[10px]'><a href="#">still</a></li>
                <li><a href="#">motion</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">instagram</a></li>
                <li><a href="#">email</a></li>
                <li><a href="#">f/24</a></li>
            </ul>

        </div>
    )
}

export default MobileNav
