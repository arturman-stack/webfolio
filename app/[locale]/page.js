import About from "@/components/about/About";
import about from "@/db/about/AboutDB";
import Header from "@/components/header/Header";
import menu from "@/db/menu/MenuDB";
import Info from "@/components/info/Info";
import info from "@/db/info/InfoDB";
import Projects from "@/components/projects/Projects";
import projects from "@/db/projects/ProjectsDB";
import Technologies from "@/components/technologies/Technologies";
import {technologies, technologiesDB} from "@/db/technologies/TechnologiesDB";
import Contact from "@/components/contact/Contact";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const titles = {
    am: "Արթուր Մրտեյան",
    en: "Artur Mrteyan",
    ru: "Артур Мртеян",
  };

  return titles[locale];
}

export default function Home() {
  return (
    <main>
      <Header data={{ menu }}/>
      <About data={{ about }} />
      <Info data={{ info }} />
      <Projects data={{ projects }} />
      <Technologies data={{ technologies, technologiesDB }} />
      <Contact />
      {/*<CreativeLoop />*/}
    </main>
  );
};