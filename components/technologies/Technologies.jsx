"use client"

import React from 'react';
import {Translation} from "@/utils/translation";
import ScrollFloat from "@/components/bits/ScrollFloat";
import Line from "@/components/ui/Line";
import DitherVeil from "@/components/bits/DitherVeil";

function Technologies({data}) {
	const {technologiesDB} = data;
	const title = Translation(technologiesDB?.translation, "title");
	const categories = Translation(technologiesDB?.translation, "categories");

	return (
		<section className="flex justify-between py-[12vw] relative mobile:flex-col" id="skills">
			<div className="absolute top-[5vw] left-1/2 -translate-x-1/2 mobile:static mobile:text-center mobile:translate-x-0 mobile:mt-[5vw]">
				<ScrollFloat textClassName="text-[3vw] mobile:text-[6vw]">{title}</ScrollFloat>
			</div>

			<div className="w-[50vw] h-[45vw] mobile:w-full mobile:h-max mobile:static sticky top-0 bg-transparent">
				<DitherVeil
					src="https://images.unsplash.com/photo-1737071371043-761e02b1ef95?q=80&w=1400&auto=format&fit=crop"
					pattern="floyd"
					pixelSize={2}
					inkColor="#00000000"
					paperColor="#f4f1ea"
					revealRadius={200}
					softness={0.6}
					linger={1}
					fit="contain"
					rimColor="#a78bfa"
					palette="duotone"
					levels={2}
					contrast={1.15}
					brightness={0}
					rim={0}
					reverse={false}
					wander={false}
					clickBurst
				/>
			</div>

			<div className="w-[50vw] px-[5vw] flex flex-col items-center relative mobile:w-full mobile:px-[10%] mobile:pb-[10vw] mobile:pt-0 overflow-x-hidden">
				<div className="grid grid-cols-1">
					{categories?.map((category) => (
						<div key={category?.id} className="rounded-2xl pt-6 shadow-sm mobile:pt-[3vw]">
							<h3 className="text-[1.5vw] font-medium mb-[1vw] mobile:text-[3.5vw] mobile:mb-[1.5vw]">{category.title}</h3>
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

			{/* Line Gradient Style */}
			<Line />
		</section>
	);
}

export default Technologies;