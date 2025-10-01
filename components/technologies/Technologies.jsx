"use client"

import React from 'react';
import Section from "@/components/ui/Section";
import Bytedance from "@/public/assets/svg/Bytedance";

function Technologies({data}) {
  const {technologies} = data;

  return (
    <Section>
      <div className="px-[10vw] pb-[5vw] flex justify-between gap-[2vw]">
        <div className="w-1/2 flex justify-center items-center animate-slide-left">
          <Bytedance/>
        </div>
        <div className="flex flex-col items-end gap-[2vw]">
          <h1
            className="text-primary-500 text-h1/[3vw] font-bold capitalize animate-slide-top">{technologies?.title}</h1>
          <ul className="flex flex-col gap-[1vw] pr-[6vw]">
            {technologies?.info?.map((item) => {
              return (
                <li key={item?.id}
                    className="self-start list-disc text-small font-medium tracking-tight animate-slide-left">{item?.description}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Technologies;