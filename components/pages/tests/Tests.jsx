"use client"

import React, {useEffect, useState} from 'react';
import Link from "next/link";

const Tests = ({data}) => {
  const {testsDB} = data;
  const [results, setResults] = useState([]);

  useEffect(() => {
    const storedResults = localStorage.getItem("testResults");
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  return (
    <div className="px-[10vw] pb-[5vw] pt-[2vw] flex flex-col gap-[3vw] min-h-[38.85vw] overflow-hidden">
      <h1 className="text-primary-500 text-h1 font-bold capitalize">{testsDB?.title}</h1>
      <div className="flex flex-wrap gap-[1vw]">
        {testsDB?.tests?.map((test, index) => {
          const percent = results?.find(item => item?.id === test.id)?.percent;
          return (
            <div key={index}
                 className="w-[19vw] h-[10vw] p-[1vw] flex flex-col gap-[.5vw] border-[.15vw] border-primary-500 overflow-hidden relative duration-500 hover:scale-105">
              <h1 className="text-primary-500 text-small font-bold capitalize">{test?.title}</h1>
              <span className="text-extraSmall font-bold">Հարցերի քանակը` {test?.questions?.length}</span>
              {percent !== undefined ? (
                <span className={`w-[5vw] h-[2.5vw] absolute left-0 bottom-0 flex justify-center items-center text-small bg-secondary-500
                  border-t-[.15vw] border-r-[.15vw] border-primary-500 rounded-tr-full duration-500
                  ${percent <= 35 ? "text-[#C8102E]" : percent <= 80 ? "text-[#F6BA00]" : "text-[#13AD54]" }`}
                >{percent}%</span>
              ) : null}
              <Link
                href={`tests/${test?.id}`}
                className="pl-[2vw] pr-[1.5vw] pt-[1vw] pb-[.5vw] absolute right-0 bottom-0 flex justify-center
                items-center text-small bg-black-400 text-secondary-500 border-l-[.15vw] border-t-[.15vw] border-primary-500
                rounded-tl-full duration-500 hover:text-black-500 hover:bg-secondary-500 hover:pr-[2.5vw] hover:pl-[3vw] hover:pb-[1vw] hover:pt-[1.5vw]"
              >{percent !== undefined ? "Փորձել կրկին" : "Սկսել"}</Link>000
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Tests;
