import Hero from "../../components/Hero";
import FeaturesSection from './../../components/FeaturesSection';
import HowItWorks from './../../components/HowItWorks';
import Statistics from './../../components/Statistics';
import EmergencyCTA from './../../components/EmergencyCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Statistics />
      <FeaturesSection />
      <EmergencyCTA />
    </>
  );
}