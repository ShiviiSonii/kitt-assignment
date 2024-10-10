import React from 'react'
import { SearchHelper } from './helpers/Search'
import { DatePicker } from './helpers/DatePicker'
import { Button } from '@/components/ui/button'
import searchIcon from "./assets/images/search-icon.png"
import Link from 'next/link'
import Image from 'next/image'

function Home() {
  return (
    <div className='mt-[106px] ml-[72px]'>
    <h1 className='text-center text-2xl w-400 text-[36px]'>Good afternoon, Brian</h1>
    <div className='w-[1057px] h-[252px] mt-[60px] ml-36 border-[1px] px-[24px] py-[28px] gap-[32px] rounded-sm'>
      <div className='w-[1001px] h-[120px]'>
        <div className='gap-[8px] h-[36px] w-[127px] mb-[10px] border-[1px] text-center py-1 rounded-sm font-[400px] bg-[#F5F7FA] border-none font-semibold'>Flights</div>
          <div className='flex justify-between'>
            <SearchHelper placeholder="Where from?"/>
            <SearchHelper placeholder="Where to?"/>
            <DatePicker placeholder="Departure"/>
            <DatePicker placeholder="Return"/>
          </div>
      </div>
      <div className='flex justify-end'>
        <Link href={"/loading"}>
        <Button className='bg-[#003E39] w-[249px] h-[48px] rounded-sm p-[16px] gap-[12px] text-[16px] font-medium leading-4'>
         <div>
          <div className='flex gap-2'>
            <Image src={searchIcon} alt='search-icon'/>
            Search flights
          </div>
         </div>
          </Button>
        </Link>
      </div>
    </div>
   
    </div>
  )
}

export default Home