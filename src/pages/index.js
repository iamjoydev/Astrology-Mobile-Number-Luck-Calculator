import dynamic from "next/dynamic";

const MobileAnalyzer = dynamic(() => import("../components/MobileAnalyzer"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <MobileAnalyzer />
    </div>
  );
}
