import React, { useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';
import useTheme from '../../contexts/themeMode';

const ThemeBtn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    const darkmodestatus = e.currentTarget.checked;

    if(darkmodestatus){
        darkTheme()
    }else{
        lightTheme()
    }
  };

  const {themeMode, darkTheme, lightTheme} = useTheme()

  return (
    <>
      <label className='flex items-center cursor-pointer'>
        <div className='relative inline-block w-14 h-8'>
          <input
            type='checkbox'
            checked={themeMode === "dark"}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div className={`bg-gray-300 w-full  h-full rounded-full relative ${
                isChecked ? 'bg-[#334155]' : 'bg-[#a5f3fc]'
              }`}>
            <div
              className={`dot absolute left-1 flex justify-center items-center top-1 h-6 w-6 rounded-full bg-white transition-transform transform ${
                isChecked ? 'translate-x-full' : 'translate-x-0'
              }`}
            >

            <span className='text-body-color'>{isChecked ? <MdDarkMode /> : <MdOutlineLightMode />}</span>
            </div>
          </div>
        </div>
      </label>
    </>
  );
};

export default ThemeBtn;
