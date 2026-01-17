"use client"

import React from 'react';
import InfiniteScroll from "@/components/bits/InfiniteScroll";
import {Translation} from "@/utils/translation";
import ScrollFloat from "@/components/bits/ScrollFloat";
import Line from "@/components/ui/Line";

function Technologies({data}) {
	const {technologies, technologiesDB} = data;
	const title = Translation(technologiesDB?.translation, "title");
	const categories = Translation(technologiesDB?.translation, "categories");

	return (
		<section className="flex justify-between relative mobile:flex-col" id="skills">
			<div className="absolute top-[5vw] left-1/2 -translate-x-1/2 mobile:static mobile:text-center mobile:translate-x-0 mobile:mt-[5vw]">
				<ScrollFloat textClassName="text-[3vw] mobile:text-[6vw]">{title}</ScrollFloat>
			</div>

			<div className="w-[50vw] px-[5vw] pt-[12vw] flex flex-col items-center relative mobile:w-full mobile:px-[10%] mobile:pb-[10vw] mobile:pt-0">
				<div className="grid grid-cols-1">
					{categories?.map((category) => (
						<div key={category?.id} className="rounded-2xl pt-6 shadow-sm mobile:pt-[3vw]">
							<h3 className="text-[1.5vw] font-medium mb-[.5vw] mobile:text-[3.5vw] mobile:mb-[1vw]">{category.title}</h3>
							<ul className="flex flex-wrap gap-[.5vw] mobile:gap-[1.5vw]">
								{category.items.map((tech, i) => (
									<li
										key={i}
										className="!w-max !h-max px-[1vw] py-[.4vw] text-[1.2vw] border border-gray-100 shadow-inner shadow-gray-400 rounded-full mobile:text-[3vw] mobile:px-[2vw] mobile:py-[1vw]"
									>
										{tech}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<Line className="mobile:-right-20 hidden mobile:block" />
			</div>

			<div className="w-[50vw] h-[55vw] mobile:w-full relative">
				<InfiniteScroll
					items={technologies}
					isTilted={true}
					tiltDirection='right'
					autoplay={true}
					autoplaySpeed={3}
					autoplayDirection="down"
					pauseOnHover={true}
					width="max-content"
					itemMinHeight="max-content"
				/>
			</div>

			{/* Line Gradient Style */}
			<Line />
		</section>
	);
}

export default Technologies;