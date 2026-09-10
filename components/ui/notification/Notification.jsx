'use client';

import React from 'react';
import {X} from 'lucide-react';
import {AnimatePresence, motion} from 'framer-motion';
import {IoWarningOutline} from "react-icons/io5";
import {FaRegCheckCircle} from "react-icons/fa";
import {BiCommentError} from "react-icons/bi";
import {MdInfoOutline} from "react-icons/md";
import GlassSurface from "@/components/bits/GlassSurface";

const config = {
  warning: {
    bg: 'bg-warning-light',
    accent: 'bg-warning',
    border: 'border-warning',
    icon: <IoWarningOutline className="size-[2vw] shrink-0 text-c-900"/>,
  },
  success: {
    bg: 'bg-success-light',
    accent: 'bg-success',
    border: 'border-success',
    icon: <FaRegCheckCircle className="size-[2vw] shrink-0 text-c-900"/>,
  },
  error: {
    bg: 'bg-error-light',
    accent: 'bg-error',
    border: 'border-error',
    icon: <BiCommentError className="size-20 shrink-0 text-c-900"/>,
  },
  info: {
    bg: 'bg-info-light',
    accent: 'bg-info',
    border: 'border-info',
    icon: <MdInfoOutline className="size-20 shrink-0 text-c-900"/>,
  },
};

export default function Notification({items, onDismiss}) {
  return (
    <div className="fixed bottom-[3vw] right-[3vw] z-999 flex w-max max-w-160 flex-col gap-[1vw] pointer-events-none">
      <AnimatePresence>
        {items.map((item) => {
          const style = config[item?.type];

          return (
            <motion.div
              key={item.id}
              layout
              initial={{opacity: 0, y: 24, scale: 0.95}}
              animate={{opacity: 1, y: 0, scale: 1}}
              exit={{opacity: 0, y: 12, scale: 0.95, transition: {duration: 0.2}}}
              className={`pointer-events-auto relative flex gap-8 w-full overflow-hidden ${style?.bg}`}
            >
              <GlassSurface
                className="!w-max !h-max duration-300 mx-auto flex !rounded-full w-screen-sm items-center justify-between p-[.5vw] !relative pointer-events-auto mobile:py-[2vw] mobile:px-[2vw] mobile:mx-2"
                childrenClassName="gap-[.5vw]"
              >
                {/* Side Accent Bar */}
                <div className={`flex justify-center p-[.5vw]`}>
                  {style?.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col gap-8 text-[.8vw]">
                    {item?.title ? (
                      <h3 className="text-c-900 text-[.8vw] font-bold">{item.title}</h3>
                    ) : null}

                    {item?.description ? (
                      <p className="text-c-900 text-[.8vw] font-normal">{item.description}</p>
                    ) : null}
                  </div>
                </div>

                {/* Close Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => onDismiss(item?.id)}
                    className="w-max h-max p-[.5vw] rounded-sm text-c-900 hover:bg-c-900/10 transition-colors cursor-pointer"
                    aria-label="Dismiss"
                  >
                    <X className="size-[1vw]"/>
                  </button>
                </div>
              </GlassSurface>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}