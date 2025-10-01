import about from "@/db/about/aboutPageDB";
import About from "@/components/pages/about/About";

export const metadata = {
  title: "InfoTech | Մեր Մասին",
};

export default async function AboutPage() {
  return (
    <main>
      <About data={{about}} />
    </main>
  );
};