import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ModesSection from "@/components/ModesSection";
import ChatInterfaceSection from "@/components/ChatInterfaceSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import ProvidersSection from "@/components/ProvidersSection";
import InstallSection from "@/components/InstallSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#08080f] min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ModesSection />
      <ChatInterfaceSection />
      <ScreenshotsSection />
      <ProvidersSection />
      <InstallSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  );
}
