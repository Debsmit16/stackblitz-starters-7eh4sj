import { Hero } from '@/components/home/Hero';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { HowItWorks } from '@/components/home/HowItWorks';

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <FeaturedProducts />
      <HowItWorks />
    </div>
  );
}