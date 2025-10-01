'use client';

import React from 'react';
import './GlitchText.css'; // custom styles

export default function GlitchText() {
  return (
    <div className="w-full flex justify-center items-center py-[2vw] bg-black-500">
      <h1 className="glitch-text" data-text="InfoTech">
        InfoTech
      </h1>
    </div>
  );
}
