import React from 'react'
import { IoLogoIonic } from "react-icons/io";
import { FaGithub, FaLinkedin  } from "react-icons/fa";

const Navbar = () => {
    const socials = [ 
        {
            id: 'github',
            icon: <FaGithub size={30} color='#b66df5'/>,
            link: 'https://github.com/tonnon'
        },
        {
            id: 'linkedin',
            icon: <FaLinkedin size={30} color='#b66df5'/>,
            link: 'https://www.linkedin.com/in/lucastonnon/'
        }
    ];
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-neon bg-[#03001417] backdrop-blur-md z-50 px-10 xm:px-[0]'>
         <div className="w-full h-full flex flex-row items-center justify-between px-[10px]">
            <IoLogoIonic 
                color='#b66df5'
                size={30}
            />
            <div className="w-auto h-full flex flex-row items-center justify-between">
                <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[5px] py-[5px] rounded-full text-gray-200 gap-1'>
                    <label className="radio flex flex-grow items-center justify-center rounded-lg cursor-pointer">
                        <input
                            type="radio"
                            name="radio"
                            value="all"
                            className="peer hidden"
                            /* checked={true} */
                        />
                        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-white px-5 py-1 rounded-full transition duration-150 ease-in-out">
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
                        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-white px-5 py-1 rounded-full transition duration-150 ease-in-out">
                            Websites
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
                        <span className="tracking-widest peer-checked:bg-gradient-to-r peer-checked:from-[blueviolet] peer-checked:to-[violet] peer-checked:text-white text-white px-5 py-1 rounded-full transition duration-150 ease-in-out">
                            Games
                        </span>
                    </label>
                </div>
            </div>
            <div className='flex flex-row gap-2'> 
            {socials.map((social, id) => (
                <a className="text-white" key={id} href={social.link} target='__blank'>{social.icon}</a>
            ))}
            </div>
         </div>
    </div>
  )
}

export default Navbar
