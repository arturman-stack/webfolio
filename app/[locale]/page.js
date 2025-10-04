import About from "@/components/about/About";
import Case from "@/components/case/Case";
import Technologies from "@/components/technologies/Technologies";
import about from "@/db/about/AboutDB";
import caseData from "@/db/case/CaseDB";
import technologies from "@/db/technologies/TechnologiesDB";
import Header from "@/components/header/Header";
import menu from "@/db/menu/MenuDB";

export default function Home() {
  return (
    <main>
      <Header data={{menu}}/>
      <About data={{ about }} />
    </main>
  );
};