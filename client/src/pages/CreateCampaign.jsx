import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if(exists) {
        setisLoading(true)
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)})
        setisLoading(false);
        navigate('/');
      } else {
        alert('Provide validimage URL')
        setForm({ ...form, image: ''});
      }
    })
  }

  return (
    <div className='bg-[#FFF8E7] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-1'>
      {isLoading && <Loader />}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-transparent rounded-[10px]'>
        <h1 className='justify-center items-center sm:text-[25px] text-[18px] leading-[38px] font-epilogue font-bold text-[#3a3a43]'>Start a New Campaign!</h1>
      </div>

      <form onSubmit={handleSubmit} className='w-full mt-[20px] flex flex-col gap-[30px]'>
      <div className='flex flex-wrap gap-[40px]'>
        <FormField 
          labelName='Your Name *'
          placeholder="Jane Doe"
          inputType="text"
          value={form.name}
          handleChange={(e) => handleFormFieldChange('name', e)}
        />
        <FormField 
          labelName='Campaign Title *'
          placeholder="Write title"
          inputType="text"
          value={form.title}
          handleChange={(e) => handleFormFieldChange('title', e)}
        />
      </div>

      <FormField 
        labelName='Story *'
        placeholder="Write your story"
        isTextArea
        value={form.description}
        handleChange={(e) => handleFormFieldChange('description', e)}
        className='mb-[5px]'
      />

      <div className='w-full flex justfify-center items-center p-4'>
        <img src={money} alt="money" className='w-[35px] h-[35px]' />
        <h4 className='font-epilogue font-semibold text-[18px] text-[#3a3a43] ml-[20px]'>
          You will get 100% of the raised amount
        </h4>
      </div>

      <div className='flex flex-wrap gap-[40px]'>
        <FormField 
          labelName='Goal *'
          placeholder="ETH 0.50"
          inputType="text"
          value={form.target}
          handleChange={(e) => handleFormFieldChange('target', e)}
        />
        <FormField 
          labelName='End date *'
          placeholder="End Date"
          inputType="date"
          value={form.deadline}
          handleChange={(e) => handleFormFieldChange('deadline', e)}
        />     
      </div>

      <FormField 
          labelName='Campaign Image *'
          placeholder="Image URL of your campaign"
          inputType="url"
          value={form.image}
          handleChange={(e) => handleFormFieldChange('image', e)}
        />   

      <div className='flex justify-center items-center mt-[20px]'>
        <CustomButton 
          btnType="submit"
          title="Submit new campaign"
          styles="bg-transparent outline-none border-[2px] border-[#3a3a43] font-epilogue font-light text-[#3a3a43] text-[14px] placeholder:text-[#3a3a43]"
        />
      </div>
      </form>
    </div>
  )
}

export default CreateCampaign
