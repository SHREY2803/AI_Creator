import React from 'react';
import TagLine from './Tagline.jsx';

const Heading = ({className, title, text, tag}) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20  `}>
      {tag && (
        <TagLine className={`mb-4 justify-center`}>{tag}</TagLine>
      )}
      {title && <h2 className='h2'>{title}</h2>}
      {text && <p className='mt-4 body-2 text-n-4'>{text}</p>}
    </div>
  )
}

export default Heading
