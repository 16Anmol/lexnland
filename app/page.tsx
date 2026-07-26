import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DownloadSection from "@/components/DownloadSection";
import LaunchingSoon from "@/components/LaunchingSoon";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Properties from "@/components/Properties";
import Testimonials from "@/components/Testimonials";
import AppDemo from "@/components/AppDemo";
import About from "@/components/About";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <DownloadSection />
        <LaunchingSoon />
        <Features />
        <HowItWorks />
        <WhyUs />
        <Properties />
        <Testimonials />
        <AppDemo />
        <About />
        <Roadmap />
        <FAQ />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
