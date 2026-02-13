"use client"

import React from 'react';
import Section from "@/components/ui/Section";
import Analytic from "@/public/assets/svg/Analytic";

function Case({data}) {
  const {caseData} = data;

  return (
    <Section>
      <div className="px-[10vw] py-[5vw] flex justify-between gap-[2vw] overflow-hidden">
        <div className="w-1/2 flex flex-col gap-[2vw]">
          <h1 className="text-primary-500 text-h1/[3vw] font-bold capitalize animate-slide-top">{caseData?.title}</h1>
          <ul className="flex flex-col gap-[1vw] px-[3vw]">
            {caseData?.info?.map((item) => {
              return (
                <li key={item?.id}
                    className="list-disc text-small font-medium tracking-tight animate-slide-left">{item?.description}</li>
              )
            })}
          </ul>
        </div>
        <div className="w-1/2 flex justify-center items-center animate-slide-right">
          <Analytic />
        </div>
      </div>
    </Section>
  );
}

export default Case;