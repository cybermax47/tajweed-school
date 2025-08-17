import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-islamic-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Beautiful Islamic calligraphy and mosque silhouettes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"></div>
      </div>
      
      {/* Floating Islamic Pattern */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-20 float-animation">
        <div className="w-full h-full bg-accent rounded-full"></div>
      </div>
      <div className="absolute bottom-32 left-16 w-24 h-24 opacity-15 float-animation" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full bg-primary-glow rounded-full"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto fade-in-up">
        <h1 className="heading-arabic text-5xl md:text-7xl lg:text-8xl mb-6 hero-text-glow text-white">
          Learn the Quran with Tajweed
        </h1>
        <h2 className="text-elegant text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 font-light">
          Anywhere in the World
        </h2>
        <p className="text-elegant text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          One-to-one live Zoom sessions • For Boys & Girls • From Basics to Hifz Revision
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="btn-hero text-lg px-8 py-6 glow-pulse">
            Book Free 3-Day Trial
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10">
            View Classes
          </Button>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-white/70 text-sm">
          <p>✨ Trusted by families in 25+ countries worldwide</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;