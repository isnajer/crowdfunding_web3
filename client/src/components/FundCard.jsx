import React from 'react'

import { thirdweb } from '../assets';
import { daysLeft } from '../utils';

const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
    const remainingDays = daysLeft(deadline);


  return (
    <div className='sm:w-[288px] w-full rounded-[15px] bg-white cursor-pointer shadow-2xl' onClick={handleClick}>
        <img src={image} alt='fund' className='w-full h-[150px] object-cover rounded-[15px]'/>

        <div className='flex flex-col p-4'>
            {/* <div className='flex flex-row items-center mb-[18px]'>
                <img alt='tag' className='w-[17px] h-[17px] object-contain'/>
                <p className='ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#00000]'>Health</p>
            </div> */}

            <div className='block '>
                <h3 className='font-epilogue font-semibold text-[16px] text-[#00000] text-left leading-[26px] truncate'>{title}</h3>
                <p className='mt-[5px] font-epilogue font-normal text-[#00000] text-left leading-[18px] truncate'>{description}</p>
            </div>

            <div className='flex justify-between flex-wrap mt-[15px] gap-2'>
                <div className='flex flex-col'>
                    <h4 className='font-epilogue font-semibold text-[14px] text-[#00000] leading-[22px] '>{amountCollected}</h4>
                    <p className='mt-[3px] font-epilogue font-normal text-[13px] leading-[18px] text-[#00000] sm:-max-w-[120px] truncate'>Raised of {target}</p>
                </div>

                <div className='flex flex-col'>
                    <h4 className='font-epilogue font-semibold text-[14px] text-[#00000] leading-[22px] '>{remainingDays}</h4>
                    <p className='mt-[3px] font-epilogue font-normal text-[13px] leading-[18px] text-[#00000] sm:-max-w-[120px] truncate'>Days Left</p>
                </div>
            </div>

            {/* display owner of campaign */}
            <div className='flex items-center mt-[20px] gap-[12px]'>
                <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#3a3a43]'>
                    <img src={thirdweb} alt='user' className='w-[100%] h-[100%] object-contain'/>
                </div>
                <p className='flex-1 font-epilogue font-normal text-[14px] text-[#00000] truncate'>by: <span className='text-[#00000]'>{owner}</span></p>
            </div>

        </div>

    </div>
  )
}

export default FundCard