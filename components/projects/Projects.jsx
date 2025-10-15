"use client";

import React from 'react';
import SpotlightCard from "@/components/bits/SpotlightCard";

function Projects({data}) {
  const {projects} = data;
  console.log(projects, 'projects');

  return (
    <section className="px-[10vw] py-[5vw] flex justify-between">
      {projects?.map((project) => {
        return (
          <SpotlightCard key={project?.id} className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h1>Name</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, id repudiandae? Aliquid deleniti dolor ea, eos fuga fugiat hic illo in iusto libero omnis quaerat quasi qui sapiente, similique voluptas? Blanditiis, laudantium magnam. Doloremque, praesentium, saepe! Ad assumenda commodi consectetur culpa debitis deleniti, eius exercitationem facilis illum inventore iure laboriosam nisi quo, veniam voluptatum? Cumque dolorem maxime modi perspiciatis quo.</p>
          </SpotlightCard>
        )
      })}
    </section>
  );
}

export default Projects;