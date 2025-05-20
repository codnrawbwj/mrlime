import LandingPage from "@/components/LandingPage";

export default async function Home() {
  const revalidate = 86400;

  try {
    const response = await fetch("https://mr-lime.onrender.com/api/cocktails", {
      next: { revalidate },
    });

    const cocktailList = await response.json();
    console.log(cocktailList);

    return (
      <main className="max-w-7xl mx-auto px-4">
        <LandingPage />
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch cocktails:", error);
    return (
      <main className="max-w-7xl mx-auto px-4">
        <LandingPage />
      </main>
    );
  }
}
