import { Input } from '@/components/ui/input'
import React from 'react'
import searchIcon from "../assets/images/search-vector.png"
import crossIcon from "../assets/images/cross-icon.png"
import { ProgressDemo } from './Progress'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <div>
      <div className='flex items-center'>
        <div className='flex justify-around items-center h-[50px] w-[662px] rounded-full border-[1px] px-[12px] py-[24px] border-[#E6E8EB] my-6 mx-60'>
            <Input type="text" placeholder="CDG Paris Charles De Guale" className='w-[200px] h-[16px] max-w-[200px] rounded-none p-4 text-[16px]' style={{borderTop : "none",borderBottom : "none",borderLeft:"none"}}/>
            <Input type="text" placeholder="DXB Dubai International Airport"  className='w-[200px] h-[16px] max-w-[200px] rounded-none p-4 text-[16px] text-black' style={{borderTop : "none",borderBottom : "none",borderLeft : "none"}}/>
            <Input type="text" placeholder="Jun 25 - Jul 2"  className='w-[180px] h-[16px] max-w-[200px] rounded-none font-bold p-4 text-[16px]' style={{borderTop : "none",borderBottom : "none",borderLeft : "none"}}/>
            <div className='w-[34px] h-[34px] rounded-full bg-[#E5EBEB] flex items-center justify-center'>
            <Image src={searchIcon} alt='search-icon' className='text-black'/>
            </div>
        </div>
        <div className='w-[34px] h-[34px] rounded-full border-[1px] border-[#E6E8EB] flex items-center justify-center'>
          <Link href="/">
          <Image src={crossIcon} alt='search-icon' className='text-black'/>
          </Link>
        </div>
        </div>
        <ProgressDemo />
    </div>
  )
}

export default Header