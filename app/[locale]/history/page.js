import history from "@/db/history/historyPageDB";
import History from "@/components/pages/history/History";

export const metadata = {
  title: "InfoTech | Պատմություն",
};

export default async function AboutPage() {
  return (
    <main>
      <History data={{history}} />
    </main>
  );
};