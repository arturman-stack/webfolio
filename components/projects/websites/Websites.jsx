import React from 'react';
import CardSwap, {Card} from "@/components/bits/CardSwap";
import BackImage from "@/components/ui/images/BackImage";
import {Translation} from "@/utils/translation";
import Link from "next/link";

function Websites({data}) {
	const {websites} = data;

	return (
		<div className="w-[30vw] h-[30vw] relative">
			<CardSwap
				cardDistance={60}
				verticalDistance={70}
				delay={5000}
				pauseOnHover={true}
				width="100%"
				height="100%"
			>
				{websites?.map((website) => {
					const title = Translation(website?.translation, "title");
					const image = Translation(website?.translation, "image");
					const href = Translation(website?.translation, "href");

					return (
						<Card key={website?.id} customClass="overflow-hidden">
							<Link href={href} target="_blank" className="w-full h-full flex flex-col">
								<div className="w-full text-[.7vw] px-[.7vw] py-[.2vw] bg-black-500 border-b border-b-white-500/30">
									{website?.title}
								</div>
								<div className="w-full h-[calc(100%-1.3vw)]" title={title}>
									<BackImage
										width={1440}
										height={900}
										src={image}
										alt={title}
										className="w-full h-full object-center object-fill"
									/>
								</div>
							</Link>
						</Card>
					)
				})}
			</CardSwap>
		</div>
	);
}

export default Websites;