import Navigation from "@/components/Navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto max-w-[1920px] p-3 md:p-5 h-full grid grid-rows-[1fr_auto] md:grid-rows-none md:grid-cols-[auto_1fr] gap-3 md:gap-5">
      <Navigation />
      <section className="md:py-3 overflow-auto">
        {children}
      </section>
    </main>
  );
}
