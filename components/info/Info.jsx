"use client";

import React from 'react';
import {Translation} from "@/utils/translation";
import ScrollFloat from "@/components/bits/ScrollFloat";

function Info({data}) {
	const {info} = data;
	const title = Translation(info?.translation, "name");
	const description = Translation(info?.translation, "description");

	return (
		<section className="py-[2vw] flex flex-col items-center gap-[2vw]">
			<ScrollFloat textClassName="text-[3vw]">{title}</ScrollFloat>
			<p className="w-1/2 text-center text-[1.1vw]">{description}</p>
		</section>
	);
}

export default Info;