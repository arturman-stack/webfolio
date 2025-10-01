import testDB from "@/db/tests/TestsDB";
import Test from "@/components/pages/tests/Test";

export const metadata = {
  title: "InfoTech | Թեստեր",
};

export default async function TestPage({params}) {
  const { id } = await params;
  const test = testDB?.tests?.find(item => item?.id === Number(id));

  return (
    <main>
      <Test data={{test}} />
    </main>
  );
};