import CategoryStrip from "@/components/home/CategoryStrip";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryStrip />
      <FeaturedCollection />
    </main>
  );
}