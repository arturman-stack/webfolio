import About from "@/components/about/About";
import about from "@/db/about/AboutDB";
import Header from "@/components/header/Header";
import menu from "@/db/menu/MenuDB";
import Info from "@/components/info/Info";
import info from "@/db/info/InfoDB";
import CreativeLoop from "@/components/ui/CreativeLoop";
import Projects from "@/components/projects/Projects";
import projects from "@/db/projects/ProjectsDB";
import Technologies from "@/components/technologies/Technologies";
import technologies from "@/db/technologies/TechnologiesDB";
import websites from "@/db/websites/WebsitesDB";

const title_am = "Արթուր Մրտեյան";
const title_en = "Arthur Mrteyan";
const title_ru = "Артур Мртеян";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return locale === "en" ? title_en : locale === "ru" ? title_ru : title_am;
}

export default function Home() {
  return (
    <main>
      <Header data={{ menu }}/>
      <About data={{ about }} />
      <Info data={{ info }} />
      <Projects data={{ projects }} />
      <Technologies data={{ technologies, websites }} />
      <CreativeLoop />
    </main>
  );
};