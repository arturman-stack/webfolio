"use client";

import React from 'react';
import SpotlightCard from "@/components/bits/SpotlightCard";
import {useTranslation} from "react-i18next";
import ScrollFloat from "@/components/bits/ScrollFloat";
import {Translation} from "@/utils/translation";

function Projects({data}) {
  const {projects} = data;
  const {t} = useTranslation();

  return (
    <section className="px-[10vw] py-[5vw] flex flex-col justify-center items-center gap-[2vw]" id="projects">
      <ScrollFloat textClassName="text-[3vw]">{t("projects")}</ScrollFloat>

      <div className="grid grid-cols-2 gap-[2vw] px-[10vw]">
        {projects?.map((project) => {
          const title = Translation(project?.translation, "name");
          const description = Translation(project?.translation, "description");

          return (
            <SpotlightCard
              key={project?.id}
              className="!border-[#e5e5e540] px-[2.5vw] py-[1.5vw] flex flex-col gap-[.5vw] cursor-default"
              spotlightColor="rgba(0, 229, 255, 0.8)"
            >
              <h1 className="text-[1.1vw]">{title}</h1>
              <p className="text-[.9vw] text-gray-300">{description}</p>
            </SpotlightCard>
          )
        })}
      </div>
    </section>
  );
}

export default Projects;