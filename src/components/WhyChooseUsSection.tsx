
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserCheck, Users, GraduationCap, Globe } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Certified Tajweed Tutors",
      description: "Learn from qualified teachers with authentic Ijazah and years of teaching experience in Quranic sciences.",
      gradient: "from-emerald-500 to-emerald-700"
    },
    {
      icon: Users,
      title: "One-to-One Attention", 
      description: "Personalized learning plans tailored to your pace, level, and goals. Every student gets individual focus.",
      gradient: "from-emerald-600 to-emerald-800"
    },
    {
      icon: GraduationCap,
      title: "From Basics to Hifz",
      description: "Comprehensive programs covering Noorani Qaida, Tajweed rules, Quran reading, memorization, and revision support.",
      gradient: "from-emerald-500 to-gold-400"
    },
    {
      icon: Globe,
      title: "Global & Flexible",
      description: "Available worldwide with flexible scheduling across all timezones. Learn at your convenience, anywhere, anytime.",
      gradient: "from-gold-400 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-arabic text-4xl md:text-5xl mb-6 text-emerald-900">
            Why Choose Tajweed School?
          </h2>
          <p className="text-elegant text-lg text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of traditional Islamic education with modern technology. 
            Join thousands of students who have transformed their Quranic journey with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 fade-in-stagger">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-feature p-8 text-center group hover:shadow-xl transition-all duration-300 border-2 border-emerald-200/50 bg-gradient-to-br from-white to-emerald-50/50"
            >
              {/* Icon with Gradient Background */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="heading-section text-xl mb-4 text-emerald-900 group-hover:text-emerald-600 transition-colors">
                {feature.title}
              </h3>
              <p className="body-text text-emerald-700 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a 
            href="https://wa.me/923349523393?text=I%20want%20to%20book%20a%203%20day%20trial%20session"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="btn-hero text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 glow-pulse">
              Start Your Free Trial Today
            </Button>
          </a>
          <p className="text-sm text-emerald-600 mt-4 font-medium">
            ✨ No commitment • 3 days completely free • Join anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
