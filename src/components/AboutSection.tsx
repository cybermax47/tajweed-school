import { Book, Users, Clock, Globe, Heart, Star } from "lucide-react";
import quranImage from "@/assets/quran-book.jpg";

const AboutSection = () => {
  const services = [
    {
      icon: Book,
      title: "Quran with Tajweed & Understanding",
      description: "Learn proper pronunciation and comprehension"
    },
    {
      icon: Users,
      title: "One-to-One Zoom Sessions",
      description: "Personalized attention with qualified instructors"
    },
    {
      icon: Heart,
      title: "Dua & Azkar Memorization",
      description: "Build a strong spiritual foundation"
    },
    {
      icon: Star,
      title: "Hifz Revision for Huffaz",
      description: "Maintain and strengthen your memorization"
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "25–40 minute classes that fit your schedule"
    },
    {
      icon: Globe,
      title: "Available Worldwide",
      description: "Connect from anywhere in the world"
    }
  ];

  return (
    <section className="py-20 pattern-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 rounded-full px-6 py-2 mb-6">
            <span className="text-primary font-semibold text-sm">🕌 About Us</span>
          </div>
          <h2 className="heading-arabic text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            About Our Academy
          </h2>
          <p className="text-elegant text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a dedicated team of qualified Quran tutors offering personalized online classes 
            to help you connect with the Quran through proper Tajweed, understanding, and daily practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={quranImage} 
              alt="Beautiful open Quran with Arabic text for Islamic education" 
              className="w-full h-auto rounded-2xl shadow-lg card-islamic"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="heading-arabic text-3xl mb-6">Why Choose Online Quran Learning?</h3>
            <p className="text-elegant text-muted-foreground mb-6 leading-relaxed">
              In today's digital world, learning the Quran online offers unparalleled convenience 
              and flexibility while maintaining the quality and reverence of traditional Islamic education.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Learn from the comfort of your home
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Access qualified teachers globally
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Flexible scheduling for busy families
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Personalized learning experience
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-stagger">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-islamic p-8 rounded-2xl text-center group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-300">
                  <service.icon className="w-10 h-10 text-primary group-hover:text-accent-foreground transition-colors" />
                </div>
                <h4 className="heading-arabic text-xl mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-elegant text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;