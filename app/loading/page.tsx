"use client"

import { Input } from '@/components/ui/input'
import React from 'react'
import { ProgressDemo } from '../helpers/Progress'
import LoadingContainer from '../helpers/LoadingContainer'
import Header from '../helpers/Header'


function page() {

  return (
    <div>
        <Header/>
        <div className='w-[1056px] h-full-screen mt-[50px] mx-auto gap-[80px] px-10 flex rounded-md border-grey border-[1px]'>
            <LoadingContainer/>
        </div>

    </div>
  )
}

export default page