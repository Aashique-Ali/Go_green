import React, { useState } from "react"
import logo from "../images/logo.jpg"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className=" flex justify-between items-center md:px-20 px-10  pt-6 pb-5 ">
      <div>
        <img src={logo} alt="" className="w-[150px]" />
      </div>
      <div>
        <ul className="hidden md:flex justify-center items-center text-[#254bac] gap-10 text-[18px] ">
          <NavLink>
            <li>Home</li>
          </NavLink>
          <NavLink>
            <li>About Us</li>
          </NavLink>
          <NavLink>
            <li>Premium</li>
          </NavLink>
          <NavLink>
            <li>Blogs</li>
          </NavLink>
          <NavLink>
            <li>
              <button className="hover:bg-orange-500 hover:text-white text-orange-500 border border-orange-500 py-2 px-8 rounded-full">
                Get Started
              </button>
            </li>
          </NavLink>
        </ul>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="block md:hidden cursor-pointer text-[#254bac]"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden bg-white right-0 top-[15%] w-[60%] h-full bg-primary ease-in-out duration-500"
            : "w-[60%] fixed top-[10%] bottom-0 right-[-100%] ease-in-out duration-500"
        }
      >
        <li className="p-4 hover:bg-[#254bac] hover:text-white rounded-xl m-2 cursor-pointer duration-300 text-[#254bac]">
          <NavLink>Home</NavLink>
        </li>
        <li className="p-4 hover:bg-[#254bac] hover:text-white rounded-xl m-2 cursor-pointer duration-300 text-[#254bac]">
          <NavLink>About Us</NavLink>
        </li>
        <li className="p-4 hover:bg-[#254bac] hover:text-white rounded-xl m-2 cursor-pointer duration-300 text-[#254bac]">
          <NavLink>Premium</NavLink>
        </li>

        <li className="p-4 hover:bg-[#254bac] hover:text-white rounded-xl m-2 cursor-pointer duration-300 text-[#254bac]">
          <NavLink>Blogs</NavLink>
        </li>
        <li className="p-4  rounded-xl m-2 cursor-pointer duration-300 ">
          <button className="hover:bg-orange-500 hover:text-white text-orange-500 border border-orange-500 py-2 px-8 rounded-full">
            Get Started
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
