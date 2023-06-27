import React from 'react'

const CountBox = ({ title, value }) => {
  return (
    <div className='flex flex-col items-center w-[150px] rounded-[10px]'>
        <h4 className='font-epilogue font-bold text-[20px] text-[#00000] p-3 bg-[#FEDE6D] rounded-t-[10px] w-full truncate'>{value}</h4>
        <p className='font-epilogue font-normal text-[16px] text-[#00000] px-3 py-2 w-full rounded-b-[10px]'>{title}</p>
    </div>
  )
}

export default CountBox