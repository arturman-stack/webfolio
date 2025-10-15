import About from "@/components/about/About";
import about from "@/db/about/AboutDB";
import Header from "@/components/header/Header";
import menu from "@/db/menu/MenuDB";
import Info from "@/components/info/Info";
import info from "@/db/info/InfoDB";
import CreativeLoop from "@/components/ui/CreativeLoop";
import Projects from "@/components/projects/Projects";
import projects from "@/db/projects/ProjectsDB";

export default function Home() {
  return (
    <main>
      <Header data={{ menu }}/>
      <About data={{ about }} />
      <Projects data={{ projects }} />
      <Info data={{ info }} />
      <CreativeLoop />
    </main>
  );
};