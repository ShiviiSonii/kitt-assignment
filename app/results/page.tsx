import React from 'react'
import Header from '../helpers/Header'
import Airplane from '../helpers/Airplane'

function page() {
  return (
    <div>
      <Header/>
      <div className="mt-12 ml-40">
        <h1 className="text-gray-400 text-xl ml-28 mb-4">Showing 365 of 967 Results</h1>
        <div className='ml-24'>
          <Airplane/>
        </div>
      </div>
    </div>
  )
}

export default page