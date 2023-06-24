import React from 'react'
import { useNavigate } from 'react-router-dom';
import { loader } from '../assets';
import FundCard from './FundCard';

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign })
  }

  const ids = campaigns.map(campaign => campaign.id);
  const hasDuplicates = new Set(ids).size !== ids.length;
  console.log('Has duplicate IDs:', hasDuplicates);

  return (
    <div className='bg-[#FFF8E7] flex justify-center flex-col rounded-[10px] sm:p-10 p-4'>
        <h1 className='text-[18px] font-bold text-[#3a3a43]  font-epilogue text-left'>{title} ({campaigns.length})</h1>

        <div className='flex flex-wrap mt-[20px] gap-[26px]'>
            {isLoading && (
                <img src={loader} alt='loader' className='w-[100px] h-[100px] object-contain'/>
            )}

            {!isLoading && campaigns.length === 0 && (
                <p className='font-epilogue font-semibold text-[14px] leading-[30px] text-[#3a3a43]'>
                    You have not created any campaigns yet.
                </p>
            )}

            {/* loop over campaigns & show campaign cards */}
            {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => <FundCard 
            key={campaign.id}
            {...campaign}
            handleClick={() => handleNavigate(campaign)}
            />)}

        </div>
    </div>
  )
}

export default DisplayCampaigns