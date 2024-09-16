import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-full flex justify-center items-center">
      <Image src="/loadingSpinner.svg" width={64} height={64} alt="" />
    </div>
  );
}
