import RecentPostsTable from "@/components/RecentPostsTable";
import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header title="Dashboard" />
      <section>
        <RecentPostsTable />
      </section>
    </>
  );
}
