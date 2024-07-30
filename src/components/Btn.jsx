import React from 'react'

const Btn = ({ name }) => {
    return (
        <li className='border rounded-[19px]  group h-[30px] px-4 py-1 overflow-hidden'>
            <a href="#" className='flex flex-col w-full h-full overflow-hidden'>
                <span className='inline-block group-hover:-translate-y-full transition-all duration-300 '>{name}</span>
                <span className='inline-block group-hover:-translate-y-full transition-all duration-300'>{name}</span>
            </a>
        </li>
    )
}

export default Btn
