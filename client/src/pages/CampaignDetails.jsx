import React, { useState, useEffect } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CustomButton, CountBox } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';

const CampaignDetails = () => {
  const { state } = useLocation();
  const { donate, getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  const fetchDonators = async () => {
    const data = await getDonations(state.pId);

    setDonators(data);
  }

  useEffect(() => {
    if(contract) fetchDonators();
  }, [contract, address])

  const handleDonate = async () => {
    setIsLoading(true);

    await donate(state.pId, amount);

    isLoading(false);
    
  }

  return (
    <div>
      {isLoading && 'Loading...'}
      <div className='bg-[#FFF8E7] flex justify-center flex-col rounded-[10px] sm:p-10 p-4'>
      <div className='w-full flex md:flex-row flex-col mt-10 gap-[30px]'>
        <div className='flex-1 flex-col'>
          <img src={state.image} alt='campaign' className='w-full h-[410px] object-cover rounded-xl'/>
          <div className='relative w-full h-[5px] bg-[#FEDE6D] mt-2'>
            <div className='absolute h-full bg-[#6BB176]' style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%'}}>
            </div>
          </div>
        </div>

        <div className='flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]'>
          <CountBox title='Days Left' value={remainingDays} />
          <CountBox title={`Raised of ${state.target}`} value={state.amountCollected} />
          <CountBox title='Total Donors' value={donators.length} />
        </div>
      </div>
      
      <div className='mt-[60px] flex lg:flex-row flex-col gap-5'>
        <div className='flex-[2] flex flex-col gap-[40px]'>
          <div>
            <h4 className='font-epilogue font-semibold text-[18px] text-[#00000] bg-[#FEDE6D] truncate uppercase'>Creator</h4>

            <div className='mt-[20px] flex flex-row flex-wrap gap-[14px]'>
              <div className='2-[52px] h-[52px] flex items-center justify-center rounded-full cursor-pointer'>
                <img src={thirdweb} alt='user' className='w-[60%] h-[60%] object-contain'/>
              </div>

              <div>
                <h4 className='font-epilogue font-seminold text-[14px] text-[#00000] break-all'>{state.owner}</h4>
                <p className='mt-[4px] font-epilogue font-normal text-[12px] text-[#00000]'>10 Campaings</p>
              </div>

            </div>
          </div>

          <div>
            <h4 className='font-epilogue font-semibold text-[18px] text-[#00000] bg-[#FEDE6D] truncate uppercase'>Story</h4>
            <div className='mt-[20px]'>
            <p className='font-epilogue font-normal text-[14px] text-[#00000] leading-[26px] text-justify'>{state.description}</p>
            </div>
          </div>

          <div>
            <h4 className='font-epilogue font-semibold text-[18px] text-[#00000] bg-[#FEDE6D] truncate uppercase'>Donators</h4>
            <div className='mt-[20px] flex flex-col gap-4'>
              {donators.length > 0 ? donators.map((item, index) => (
                <div>
                  DONATOR
                </div>
              )) : (
                <p className='font-epilogue font-normal text-[14px] text-[#00000] leading-[26px] text-justify'>No donators yet. Be the first one!</p>
              )}
            </div>
          </div>
        </div>
        
        <div className='flex-1'>
          <h4 className='font-epilogue font-semibold text-[18px] text-[#00000] uppercase'>Fund</h4>
          <div className='mt-[20px] flex flex-col p-4 bg-[#FEDE6D] rounded-[10px]'>
            <p className='font-epilogue font-medium text-[20px] leading-[30px] text-center text-[#00000]'>Fund the campaign!</p>
            <div className='mt-[30px]'>
              <input type='number' placeholder='ETH 0.1' step='0.01' className='w-full py-[10px] sm:-[20px] px-[15px] outline-none border-[1px] border-[#00000] bg-[#FFF8E7] font-epilogue text-[#00000] text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]' value={amount} onChange={(e) => setAmount(e.target.value)}/>
              
              <div className='my-[20px] p-4 bg-[#FFF8E7] rounded-[10px]'>
                <h4 className='font-epilogue font-semibold text-[14px] leading-[22px] text-[#00000]'>Back it because you belive in it!</h4>
                <p className='mt-[20px] font-epilogue font-normal leading-[22px] text-[#00000]'>Support the project for no reward.</p>
              </div>

              <CustomButton btnType='button' title='Fund Campaign' styles='w-full bg-[#FFF8E7]' handleClick={handleDonate}/>
            </div>

          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default CampaignDetails
