import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Star, Clock, Users } from "lucide-react";

const TrialOfferSection = () => {
  const trialFeatures = [
    {
      icon: Clock,
      title: "3 Full Sessions",
      description: "Experience our complete teaching methodology"
    },
    {
      icon: Users,
      title: "Meet Your Instructor",
      description: "Get to know your dedicated Quran teacher"
    },
    {
      icon: Star,
      title: "Personalized Assessment",
      description: "Receive customized learning recommendations"
    },
    {
      icon: Gift,
      title: "No Commitment Required",
      description: "Absolutely free with no strings attached"
    }
  ];

  return (
    <section className="py-20 pattern-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Offer Card */}
          <Card className="relative overflow-hidden card-islamic p-8 md:p-12 text-center mb-12">
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-accent/20 rounded-full float-animation"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary/20 rounded-full float-animation" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-6 py-3 mb-6">
                <Gift className="w-5 h-5 text-accent-foreground" />
                <span className="text-accent-foreground font-semibold">Limited Time Offer</span>
              </div>
              
              <h2 className="heading-arabic text-4xl md:text-5xl mb-6">
                Start Your Quran Journey Today
              </h2>
              
              <p className="text-elegant text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Experience the beauty of learning Quran with proper Tajweed through our 
                <span className="text-primary font-semibold"> completely free 3-day trial</span> program.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="btn-hero text-lg px-10 py-6 glow-pulse">
                  Book Your Free Trial Now
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-10 py-6">
                  Learn More About Our Classes
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                ✨ Join over 2,000+ students who started with our free trial
              </p>
            </div>
          </Card>

          {/* Trial Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trialFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 card-islamic text-center fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-arabic text-lg mb-3">{feature.title}</h3>
                <p className="text-elegant text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">2000+</div>
                <div className="text-sm text-muted-foreground">Happy Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Trial to Enrollment Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialOfferSection;