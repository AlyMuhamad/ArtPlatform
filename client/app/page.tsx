import CTA from './(components)/CTA';
import Cards from './(components)/Cards';
import FeatureRow from './(components)/FeatureRow';
import Footer from './(components)/Footer';
import HeroSection from './(components)/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Cards />
      <FeatureRow />
      <CTA />
      <Footer />
    </main>
  );
}
