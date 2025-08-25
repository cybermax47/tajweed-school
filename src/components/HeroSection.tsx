
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-islamic-banner.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Beautiful Islamic calligraphy and mosque silhouettes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-emerald-600/10"></div>
      </div>
      
      {/* Floating Islamic Pattern */}
      <div className="absolute top-20 right-20 w-32 h-32 opacity-20 float-animation">
        <div className="w-full h-full bg-gold-400 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-32 left-16 w-24 h-24 opacity-15 float-animation" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full bg-emerald-400 rounded-full blur-sm"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto fade-in-up">
        {/* Quranic Ayah - Main Focus */}
        <div className="mb-8">
          <h1 className="heading-arabic text-4xl md:text-6xl lg:text-7xl mb-4 text-white hero-text-glow font-bold">
            وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ
          </h1>
          <p className="text-elegant text-lg md:text-xl text-gold-400 mb-2 italic font-medium">
            "And We have certainly made the Qur'an easy for remembrance, so is there any who will remember?"
          </p>
          <p className="text-sm md:text-base text-white/80">
            — Surah Al-Qamar 54:17
          </p>
        </div>

        <h2 className="text-elegant text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 font-light">
          Learn the Quran with Perfection
        </h2>
        <p className="text-elegant text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          One-to-one live Zoom classes for boys and girls worldwide
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/923349523393?text=I%20want%20to%20book%20a%203-day%20trial%20session"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="btn-hero text-lg px-8 py-6 glow-pulse shadow-xl">
              Book Free 3-Day Trial
            </Button>
          </a>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400 transition-all duration-300 shadow-lg"
            onClick={() => {
              const element = document.querySelector('#classes') as HTMLElement;
              if (element) {
                const headerHeight = 80;
                const elementPosition = element.offsetTop - headerHeight;
                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
              }
            }}
          >
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
