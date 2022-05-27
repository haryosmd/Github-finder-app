import React from 'react';
import spinner from './assets/spinner.gif';
// import ripple from './assets/Ripple-1s-200px.gif';

const Spinner = () => {
  return (
    <div className='w-100 mt-20'>
      <img
        width={180}
        className='text-center mx-auto'
        src={spinner}
        alt='Loading...'
      />
    </div>
  );
};

export default Spinner;
