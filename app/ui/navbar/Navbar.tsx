import React from 'react'
import { IoLogoIonic } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#b66df5]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
         <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
            <IoLogoIonic 
                color='#b66df5'
                size={30}
            />
            <div className="w-auto h-full flex flex-row items-center justify-between md:mr-20">
                <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[10px] py-[5px] rounded-full text-gray-200 gap-5'>
                    <label className="radio flex flex-grow items-center justify-center rounded-lg cursor-pointer">
                        <input
                            type="radio"
                            name="radio"
                            value="all"
                            className="peer hidden"
                            /* checked="" */
                        />
                        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 px-5 py-1 rounded-full transition duration-150 ease-in-out">
                            All
                        </span>
                    </label>
                    <label className="radio flex flex-grow items-center justify-center rounded-full cursor-pointer">
                        <input
                            type="radio"
                            name="radio"
                            value="websites"
                            className="peer hidden"
                            /* checked="" */
                        />
                        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 px-5 py-1 rounded-full transition duration-150 ease-in-out">
                            Wensites
                        </span>
                    </label>
                    <label className="radio flex flex-grow items-center justify-center rounded-full cursor-pointer">
                        <input
                            type="radio"
                            name="radio"
                            value="games"
                            className="peer hidden"
                            /* checked="" */
                        />
                        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-gray-700 px-5 py-1 rounded-full transition duration-150 ease-in-out">
                            Games
                        </span>
                    </label>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Navbar
