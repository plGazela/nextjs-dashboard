import HeaderBreadcrumb from "@/components/HeaderBreadcrumb";

export default function Header({ 
  title, 
}: {  
  title: string;
}) {
  return(
    <header className="mb-5">
      <h1 className="mb-3 text-3xl font-bold">{title}</h1>
      <HeaderBreadcrumb />
    </header>
  );
}
