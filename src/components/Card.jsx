import React from "react"
import plantLogo from "../images/plant logo.jpg"
import rectangle from "../images/Rectangle box3.png"

const Card = ({ image, value, text }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2 text-center">
      <div
        //   style={{ backgroundImage: `url("${rectangle}")` }}
        className="p-4 rounded-xl relative bg-gradient-to-b from-[#c8e8f6] to-[#eff8fc]"
      >
        <img src={image} alt="" className="w-[40px] bg-transparent" />
      </div>

      <h1 className="text-[#254bac] font-semibold text-xl">{value}</h1>
      <p className="text-xs text-[#254bac] w-[100px]"> {text} </p>
    </div>
  )
}

export default Card
