"use client"

import React from 'react';

function About({data}) {
  const {about} = data;
  return (
    <div className="px-[10vw] pb-[5vw] pt-[2vw] flex flex-col gap-[3vw] overflow-hidden">
      <h1 className="text-primary-500 text-h1 font-bold capitalize">{about?.title}</h1>
      {about?.translation?.description ? (
        <div className="min-h-[calc(100dvh-23.5vw)] w-full text-justify font-normal text-[1.1vw] text-gray-600" dangerouslySetInnerHTML={{ __html: (about?.translation?.description)?.['htmlValue'] }} />
      ) : (
        <div className="w-full h-[calc(100dvh-23.5vw)] flex justify-center items-center text-gray-300">Տեղեկություններ չեն գտնվել</div>
      )}
    </div>
  );
}

export default About;
