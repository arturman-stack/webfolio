import Tests from "@/components/pages/tests/Tests";
import testsDB from "@/db/tests/TestsDB";

export const metadata = {
  title: "InfoTech | Թեստեր",
};

export default async function AboutPage() {
  return (
    <main>
      <Tests data={{testsDB}} />
    </main>
  );
};