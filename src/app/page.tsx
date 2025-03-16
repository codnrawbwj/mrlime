import LandingPage from "@/components/LandingPage";
import TopNav from "@/components/TopNav";

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="max-w-7xl mx-auto px-4">
        <LandingPage />
      </main>
    </>
  );
}
