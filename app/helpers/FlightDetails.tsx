// RightPopup.js
import React from 'react';
import { LuClock4 } from "react-icons/lu";
import logo from '../assets/images/bird.png';
import { GoArrowLeft } from "react-icons/go";
import Image from 'next/image';
const FlightDetails = ({ onClose } : any) => {

  const steps = [
    { id: 1, stop: 'DXB • Dubai International Airport', time:'Sat 28 Sept • 2:15'},
    { id: 2, stop: 'RUH • King Khalid International Airport',time: 'Sat 28 Sept • 2:15'},
    { id: 3, stop: 'RUH • King Khalid International Airport', time:'Sat 28 Sept • 2:15'},
    { id: 4, stop: 'CDG • Paris - Charles de Gualle Airport',time:'Sat 28 Sept • 2:15'},
  ];
  return (
    <>
      <div className="fixed inset-0 bg-gray-400 opacity-5 z-40" onClick={onClose}></div>
     <div className="fixed h-dvh w-5/12 right-0 top-1/2 mt-8 mr-4 transform -translate-y-1/2 bg-white border border-gray-300 shadow-lg p-4 rounded-lg z-50">
      <button onClick={onClose} className=" top-0 right-0 m-2 flex justify-center items-center bg-slate-200 h-10 w-10 rounded-full">
        <GoArrowLeft />
      </button>
      <div className="p-4 mt-4 mb-4 border-b-2 border-gray-200">
        <h1 className="text-black text-lg font-medium">Flight Details</h1>
      </div>
      <div className="flex  mt-10">
      {/* Vertical line */}
      <div className="flex flex-col items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Circle at each step */}
            <div className="w-3 h-3 rounded-full bg-white border border-black m-2"></div>

            {/* Line between steps */}
            {index !== steps.length - 1 && (
              <div
                className={`w-0.2 ${
                  index === 1 ? 'h-44 border-dashed border border-gray-600' : 'h-16 border border-black'
                } `}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Steps text on the right side */}
      <div className="ml-4">
        {steps.map((step) => (
          <div key={step.id} className="mb-8">
            <p className="text-sm text-gray-500">{step.time}</p>
            <h1 className="text-black text-md font-medium">{step.stop}</h1>
            {step.id===2 && <div className="flex mt-10 mb-12 text-sm text-gray-500 items-center ml-12">
              <LuClock4 />
              <p className="mb-1 ml-1">Layover 2h 25min</p>
              </div>}
          </div>
        ))}
      </div>
      {/* Airlines */}
      <div className="w-88">
       <div className=" flex ml-24 mb-48 mt-12">
        <Image src={logo} alt="logo" className="h-10 w-10"/>
        <div className="texr-gray-500 text-xs ml-4">
          <p>Saudi Arabian Airlines • SV553</p>
          <p>Economy • A330</p>
          <p>Flight time 3h 45m</p>
        </div>
       </div>
       <div className=" flex ml-24 ">
        <Image src={logo} alt="logo" className="h-10 w-10"/>
        <div className="texr-gray-500 text-xs ml-4">
          <p>Saudi Arabian Airlines • SV553</p>
          <p>Economy • A330</p>
          <p>Flight time 3h 45m</p>
        </div>
       </div>
      </div>
    </div>
    </div>
  </>
  );
   
};

export default FlightDetails;
