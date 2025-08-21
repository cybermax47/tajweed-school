import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ClassesSection from "@/components/ClassesSection";
import ReviewsSection from "@/components/ReviewsSection";
import TrialOfferSection from "@/components/TrialOfferSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ClassesSection />
        <ReviewsSection />
        <TrialOfferSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />

      {/* WhatsApp Floating Button - Enhanced */}
      <a 
        href="https://wa.me/923349523393?text=Assalamualaikum%2C%20I%20want%20to%20book%20a%203%20day%20trial%20session"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        <div className="contact-chip w-16 h-16 bg-green-500 hover:bg-green-600 pulse-glow">
          <MessageCircle className="w-8 h-8" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Book Free Trial
        </div>
      </a>
    </div>
  );
};

export default Index;
