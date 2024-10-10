"use client";
import React, { useEffect, useState } from 'react';
import gif from '../assets/images/procket.png';
import spinner from '../assets/images/spinner.png';
import greentick from '../assets/images/greentick.png';
import { useRouter } from 'next/navigation';  // Import useRouter for client-side redirection
import Image from 'next/image';

function LoadingModal() {
  const router = useRouter();  // Initialize the router
  const [searching, setSearching] = useState(1);
  const [attaching, setAttaching] = useState(3);
  const [serving, setServing] = useState(3);

  const handleSearch = () => {
    setTimeout(() => {
      setSearching(2);
      handleAttach();
    }, 3000);
  };

  const handleAttach = () => {
    setAttaching(1);
    setTimeout(() => {
      setAttaching(2);
      handleServe();
    }, 4000);
  };

  const handleServe = () => {
    setServing(1);
    setTimeout(() => {
      setServing(2);
      router.push('/results');  // Use router.push for client-side navigation
    }, 4000);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <div className="bg-white w-96 h-fit mt-16 rounded-xl border-[1px] shadow-lg">
        <Image src={gif} alt="animated" className="w-36 h-36 rounded-lg animate-bounce ml-28 mt-4" />
        <div className="ml-4 pr-8">
          <div className="flex mb-4 items-center ml-4">
            {(searching === 1 && <div className="w-5 h-5 rounded-full animate-spin">
              <Image src={spinner} alt="Logo" />
            </div>) || (searching === 2 && <div className="">
              <Image src={greentick} alt="Logo" className="object-contain w-5 h-5" />
            </div>)}
            <p className={searching === 3 ? 'text-gray-200 text-xl ml-4' : 'text-gray-500 text-xl ml-4'}>Searching 400+ Flights</p>
          </div>
          <div className="flex mb-4 items-center ml-4">
            {(attaching === 1 && <div className="w-5 h-5 rounded-full animate-spin">
              <Image src={spinner} alt="Logo" />
            </div>) || (attaching === 2 && <div className="">
              <Image src={greentick} alt="Logo" className="object-contain w-5 h-5" />
            </div>)}
            <p className={attaching === 3 ? 'text-gray-300 text-xl ml-8' : 'text-gray-500 text-xl ml-4'}>Attaching Company Rules</p>
          </div>
          <div className="flex mb-8 items-center ml-4">
            {(serving === 1 && <div className="w-5 h-5 rounded-full animate-spin">
              <Image src={spinner} alt="Logo" />
            </div>) || (serving === 2 && <div className="">
              <Image src={greentick} alt="Logo" className="object-contain w-5 h-5" />
            </div>)}
            <p className={serving === 3 ? 'text-gray-300 text-xl ml-8' : 'text-gray-500 text-xl ml-4'}>Serving best Results</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingModal;
