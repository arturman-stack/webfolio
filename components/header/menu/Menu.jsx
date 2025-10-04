'use client';

import React from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation";
import {Translation} from "@/utils/translation";

const Menu = ({data}) => {
	let {menu} = data;
	const currentPathname = usePathname();

	return (
		<div className="h-full w-max flex items-center relative">
			<nav className="w-full h-full">
				<ul className="h-full flex justify-start gap-[1vw] font-normal">
					{menu?.map(({id, translation, link, status}) => {
						const title = Translation(translation, "name");
						return status ? (
							<li key={id} className="h-full flex justify-center items-center">
								<Link
									href={link || `#`}
									className={`group h-[1vw] flex items-center text-black-500 no-underline 
									${currentPathname === `/${title}` ? 'text-gray-600' : 'text-white-600'}`}
								>
                  <span className="relative h-[1vw] overflow-hidden">
                    <span
											className="flex flex-col transition-transform duration-700 ease group-hover:-translate-y-[1vw] cursor-pointer">
                      <span
												className="block text-[1vw] font-normal leading-[1vw] origin-right transition-transform duration-700 group-hover:rotate-[20deg] cursor-pointer">
                        {title}
                      </span>
                      <span
												className="block text-[1vw] font-normal leading-[1vw] origin-left rotate-[20deg] transition-transform duration-700 group-hover:rotate-0 cursor-pointer">
                        {title}
                      </span>
                    </span>
                  </span>
								</Link>
							</li>
						) : null
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
