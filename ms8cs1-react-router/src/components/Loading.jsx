import React from "react";
import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    // // SIMPLE ONE MADE FROM WINDOWS EMOJI...
    // <div className='flex justify-center items-center'>
    //   <p className='my-8 text-amber-900 text-8xl animate-spin'>🛞</p>
    // </div>

    <div className="flex justify-center items-center mx-auto w-11/12 min-h-[calc(100vh-285px)]">
      <PuffLoader />
    </div>
  );
};

export default Loading;
