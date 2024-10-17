import React from "react"
import plantLogo from "../images/plant logo.jpg"
import personLogo from "../images/person logo.jpg"
import chatLogo from "../images/chat.jpg"
import illustration from "../images/Illustration.png"
import Card from "./Card"

const Hero = () => {
  return (
    <div className="flex text-center md:text-start flex-col md:flex-row justify-center gap-14 items-center md:pl-16 md:pr-5">
      <div className="flex  flex-col justify-center items-center gap-20">
        <div>
          <h2 className="text-2xl text-[#254bac] font-bold">Join our</h2>
          <h1 className="md:text-[80px] text-6xl text-[#c1d230] font-bold mb-5">
            Green Team
          </h1>
          <p className="md:w-[500px] w-[400px] text-[#254bac] pb-8 mb-5">
            A community to educate, empower, and inspire People around the world
            to care for plants cultivate their indoor jungles, and grow more joy
            in their lives.
          </p>
          <button className="bg-orange-500 py-2 px-10 text-white rounded-full">
            JOIN US
          </button>
        </div>
        <div className="flex justify-start items-center md:gap-20 gap-10">
          <Card image={plantLogo} value={"2000+"} text={"Plants Planted"} />
          <Card image={personLogo} value={"12000+"} text={"Members"} />
          <Card image={chatLogo} value={"300+"} text={"Quizes & Blogs"} />
        </div>
      </div>
      <div className="order-first md:order-last flex justify-center items-center pl-5">
        <img src={illustration} alt="" className="w-[550px] " />
      </div>
    </div>
  )
}

export default Hero
