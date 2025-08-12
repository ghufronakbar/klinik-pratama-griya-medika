import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import ArticlesSection from "@/components/ArticlesSection";
import HoursLocation from "@/components/HoursLocation";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { clinicData } from "@/lib/clinic-data";

export default async function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero data={clinicData} />
        <Services data={clinicData} />
        <Advantages />
        <ArticlesSection />
        <HoursLocation />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
