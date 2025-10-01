import Videos from "@/components/pages/videos/Videos";
import videos from "@/db/videos/VideosDB";

export const metadata = {
  title: "InfoTech | Տեսանութեր",
};

export default async function VideosPage() {
  return (
    <main>
      <Videos data={{videos}} />
    </main>
  );
};