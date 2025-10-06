"use client";

import React from 'react';
import CurvedLoop from "@/components/bits/CurvedLoop";
import {useTranslation} from "react-i18next";

function CreativeLoop() {
	const {t} = useTranslation();
	return (
		<section className="w-full h-[30vw]">
		<CurvedLoop
			marqueeText={t("creative_title")}
			speed={3}
			curveAmount={300}
		/>
		</section>
	);
}

export default CreativeLoop;