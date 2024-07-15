import React from 'react';

const HomeHero = (props) => {
  return (
    <div className='relative w-full h-full'>
      <div className='relative z-0 w-full h-[500px]'>
        <img 
          src={props.image} 
          className='w-full h-full object-cover' 
          alt='Ipad Pro' 
        />
      </div>
      <div className='absolute inset-0 z-10 flex flex-col items-center mt-10 justify-center'>
        <h1 className='text-5xl font-bold text-center text-white'>{props.Heading}</h1>
        <p className='text-2xl font-semibold text-center text-white w-[40%] mt-5'>
          {props.Para}
        </p>
        <div className='mt-10 w-full h-full flex flex-row justify-center'>
          <a 
            href={props.address} 
            className='bg-blue text-center text-xl pt-2 w-[10%] mr-2 h-12 font-semibold rounded-full' 
          >
            Learn More
          </a>
          <a 
            href='#' 
            className='bg-white text-black text-xl font-semibold ml-2 pt-2 text-center rounded-full h-12 w-[10%]'
          >
            About
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
