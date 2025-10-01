"use client"

import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="h-[4vw] flex justify-center items-center bg-primary-500 text-secondary-500 text-small border-t-[.1vw] border-t-gray-100">
      © {year}. Բոլոր իրավունքները պաշտպանված են։
    </footer>
  );
}

export default Footer;