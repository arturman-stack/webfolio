"use client"

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically load ReactPlayer on the client only
const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
  loading: () => <p
    className="w-full h-full flex justify-center items-center bg-primary-500 text-white-500 animate-pulse">Տեսանյութը
    Բեռնվում է...</p>,
});

function Videos({data}) {
  const {videos} = data;
  return (
    <div className="px-[10vw] pb-[5vw] pt-[2vw] flex flex-col gap-[3vw] overflow-hidden">
      <h1 className="text-primary-500 text-h1 font-bold capitalize animate-slide-left">{videos?.title}</h1>
      {videos?.video?.length ? (
        <div className="min-h-[calc(100dvh-23.5vw)] grid grid-cols-2 gap-[2vw]">
          {videos?.video?.map((video, index) => {
            return (
              <div key={index}
                   className={`relative h-max flex flex-col border-[.2vw] border-primary-500 duration-500 hover:scale-105 row-span-1 ${(index + 1) % 4 === 1 ? "animate-slide-left" : "animate-slide-right"}`}>
                <div className={`w-full aspect-w-16 aspect-h-9`}>
                  <ReactPlayer
                    url={video?.url || ""}
                    controls
                    width="100%"
                    height="100%"
                    className="rounded-lg shadow-md w-full h-full"
                  />
                </div>
                <p className="w-full text-small p-[1vw] capitalize bg-primary-500 text-secondary-500">{video?.title}</p>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="w-full h-[calc(100dvh-23.5vw)] flex justify-center items-center text-gray-300">Տեսանյութեր չեն գտնվել</div>
      )}
    </div>
  )
    ;
}

export default Videos;
