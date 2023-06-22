import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className='flex-1 w-full flex flex-col'>
      {labelName && (
        <span className='font-epilogue font-medium text-[14px] leading-[22px] text-[#3a3a43] mb-[5px]'>{labelName}</span>
      )}
      {isTextArea ? (
        <textarea 
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          rows={10}
          placeholder={placeholder}
          className='py-[15px] sm:px-[25px] px-[15px] bg-[#FFF8E7] outline-none border-[2px] border-[#3a3a43] bg-transparent font-epilogue text-[#3a3a43] text-[14px] placeholder:text-[#3a3a43] sm:min-w-[300px]'
        />
      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step='0.1'
          placeholder={placeholder}
          className='py-[15px] sm:px-[25px] px-[15px] bg-[#FFF8E7] outline-none border-[2px] border-[#3a3a43] bg-transparent font-epilogue text-[#3a3a43] text-[14px] placeholder:text-[#3a3a43] sm:min-w-[300px]'
        />
      )}
    </label>
  )
}

export default FormField