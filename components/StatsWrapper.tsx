import Stats from "@/components/Stats";

import { fetchStats } from "@/lib/data";

export default async function StatsWrapper() {
  const statsData = await fetchStats();

  return (
    <section className="mb-5 grid md:grid-cols-3 gap-5">
      <Stats title="Posts" data={statsData.postsCount} />
      <Stats title="Comments" data={statsData.commentsCount} />
      <Stats title="Users" data={statsData.usersCount} />
    </section>
  );
}
