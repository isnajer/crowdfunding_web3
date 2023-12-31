import React from 'react'

const CustomButton = ({ btnType, title, handleClick, styles}) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-normal text-[15px] leading-[26px] text-[#131212] min-h-[52px] w-[200px] px-4 rounded-[10px] ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton
