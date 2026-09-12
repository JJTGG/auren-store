import CategoryStrip from "@/components/home/CategoryStrip";
import EditorialSection from "@/components/home/EditorialSection";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import Hero from "@/components/home/Hero";
import TrendingProducts from "@/components/home/TrendingProducts";
import ValueProps from "@/components/home/ValueProps";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryStrip />
      <FeaturedCollection />
      <EditorialSection />
      <TrendingProducts />
      <ValueProps />
    </main>
  );
}