import { useState } from "react";
import {SlArrowUp, SlArrowDown}from "react-icons/sl"

const SimpleSelect = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectOptions = ["Weekly", "Monthly", "Yearly"]
 
  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#2A2A2A] relative cursor-pointer flex items-center justify-center gap-2 px-5 py-2 md:py-3 border border-darkGray rounded"
      >
        <p className="text-[#C8C8C8B0] font-medium text-base w-full">Select Duration</p>
        {isOpen ? <span><SlArrowUp className="text-[#C8C8C8] text-[16px]" /></span> : <span><SlArrowDown className="text-[#C8C8C8] text-[16px]"/></span>}
      </div>

      {
        isOpen && (<div className="absolute z-10 bg-[#2A2A2A] text-center flex flex-col py-3 px-3 gap-4 rounded items-center border border-darkGray w-full mt-2">
                    {
                      selectOptions.map((item, index) => (
                        <span
                        onClick={() => setIsOpen(!isOpen)}
                        key={index}
                         className="text-[#9F9F9F] font-medium pb-2 text-base border-b border-[#9F9F9F] w-full cursor-pointer ">{item}</span>
                      ))
                    }
          </div>)
      }
    </div>
  );
};

export default SimpleSelect;
