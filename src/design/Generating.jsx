import React from 'react';
import { loading } from '../assets';
//this is our first flying component

//it will be a simple component that will render a image and piece of text
const Generating = ({className}) => {
  return (
    <div className={`flex items-center h-[4rem] px-6 bg-n-8/80 rounded-[2rem] ${className || ''} text-base`}>
      <img 
      className='w-5 h-5 mr-4'
      src={loading} 
      alt="loadingImg" />
      AI is generating your content...
    </div>
  )
}

export default Generating
