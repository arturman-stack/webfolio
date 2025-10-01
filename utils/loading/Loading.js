import React from 'react';

const GlobalLoading = () => {
  return (
    <div className="w-full h-screen absolute left-0 top-0 flex justify-center items-center bg-black-400 z-[99999999]">
      <div className="loader"></div>
    </div>
  );
};

export default GlobalLoading;