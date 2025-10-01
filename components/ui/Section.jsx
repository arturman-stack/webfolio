"use client"

import React from 'react';
import {useInView} from "@/utils/hooks/useInView";

const Section = ({children}) => {
    const [sectionRef, isSectionVisible] = useInView();

    return (
        <section
            ref={sectionRef}
            className={`transition-all duration-1000 ease-out ${
                isSectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
        >
            {children}
        </section>
    );
};

export default Section;
