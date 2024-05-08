import Card from "@/components/Card";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Works from "./components/Works";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <Hero />
      <AboutUs />
      <Works />
      <Menu />
    </main>
  );
}
