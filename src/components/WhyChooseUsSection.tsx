import { Globe, Users, BookOpen, Gift, Clock, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Available Worldwide",
      description: "Connect with us from any corner of the globe",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Users,
      title: "Male & Female Instructors",
      description: "Qualified teachers for both boys and girls",
      color: "bg-accent/20 text-accent-foreground"
    },
    {
      icon: BookOpen,
      title: "Personalized Learning Plans",
      description: "Tailored curriculum for every student's needs",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Gift,
      title: "Free 3-Day Trial",
      description: "Experience our teaching quality risk-free",
      color: "bg-accent/20 text-accent-foreground"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Classes that fit your family's routine",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Monitor,
      title: "Interactive Online Experience",
      description: "Engaging digital tools for effective learning",
      color: "bg-accent/20 text-accent-foreground"
    }
  ];

  return (
    <section id="about" className="py-20 pattern-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-arabic text-4xl md:text-5xl mb-6">Why Choose Us</h2>
          <p className="text-elegant text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine traditional Islamic education with modern teaching methods to provide 
            the best Quran learning experience for students worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-islamic p-8 rounded-2xl text-center group fade-in-up hover:shadow-xl"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-10 h-10" />
              </div>
              <h3 className="heading-arabic text-xl mb-4">{feature.title}</h3>
              <p className="text-elegant text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 gradient-gold rounded-full px-6 py-3 mb-6 glow-pulse">
            <Gift className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Limited Time Offer</span>
          </div>
          <h3 className="heading-arabic text-2xl md:text-3xl mb-4">
            Start Your Quran Journey Today
          </h3>
          <p className="text-elegant text-muted-foreground mb-6">
            Join thousands of students who have improved their Quran recitation with us
          </p>
          <a 
            href="https://wa.me/923349523393?text=I%20want%20to%20book%20a%203-day%20trial%20session"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="btn-hero px-8 py-3 rounded-lg font-medium">
              Start Your Free Trial
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;