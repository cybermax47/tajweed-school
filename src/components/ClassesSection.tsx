import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Clock, Users, Gift, Video, BookOpen, Heart } from "lucide-react";

const ClassesSection = () => {
  return (
    <section id="classes" className="py-20 pattern-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 rounded-full px-6 py-2 mb-6">
            <span className="text-primary font-semibold text-sm">📚 Explore Our Programs</span>
          </div>
          <h2 className="heading-arabic text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Classes
          </h2>
          <p className="text-elegant text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Personalized one-to-one Zoom sessions designed to help you master Quranic recitation 
            with proper Tajweed and understanding through our proven methodology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 fade-in-stagger">
          {/* Class Duration Card */}
          <Card className="p-8 card-islamic text-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="heading-arabic text-xl mb-4 group-hover:text-primary transition-colors">Class Duration</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                25–40 minutes per session, perfectly timed for focused learning without overwhelming students.
              </p>
              <div className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm">
                Flexible Timing
              </div>
            </div>
          </Card>

          {/* One-to-One Sessions Card */}
          <Card className="p-8 card-islamic text-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Video className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="heading-arabic text-xl mb-4 group-hover:text-accent-foreground transition-colors">Live Zoom Sessions</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Interactive one-to-one sessions ensuring personalized attention and faster progress.
              </p>
              <div className="inline-block bg-accent/10 text-accent-foreground font-semibold px-4 py-2 rounded-full text-sm">
                Global Access
              </div>
            </div>
          </Card>

          {/* Free Trial Card */}
          <Card className="p-8 card-islamic text-center relative overflow-hidden group glow-pulse">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-accent to-primary text-white px-4 py-2 text-xs font-bold rounded-bl-2xl shadow-lg">
              ✨ FREE
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-60"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h3 className="heading-arabic text-xl mb-4 text-primary font-bold">3-Day Free Trial</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Experience our teaching methodology with a completely free 3-day trial period.
              </p>
              <a 
                href="https://wa.me/923349523393?text=I%20want%20to%20book%20a%203-day%20trial%20session"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-hero w-full shadow-lg hover:shadow-xl transition-shadow">
                  Start Free Trial ✨
                </Button>
              </a>
            </div>
          </Card>
        </div>

        {/* Learn More Dialog */}
        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="btn-hero">
                Learn More About Our Classes
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="heading-arabic text-2xl text-center">
                  Complete Class Information
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                {/* Programs Available */}
                <div>
                  <h3 className="heading-arabic text-xl mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Available Programs
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-primary">Quran with Basic Tajweed & Understanding</h4>
                      <p className="text-sm text-muted-foreground">Perfect for beginners and intermediate learners</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-primary">Dua & Azkar Memorization</h4>
                      <p className="text-sm text-muted-foreground">Essential daily prayers and remembrance</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-primary">Hifz Revision for Huffaz</h4>
                      <p className="text-sm text-muted-foreground">Specialized revision sessions for those who have memorized</p>
                    </div>
                  </div>
                </div>

                {/* Schedule Options */}
                <div>
                  <h3 className="heading-arabic text-xl mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Schedule & Timing
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold">Beginner Classes</h4>
                      <p className="text-sm">3 classes per week • 25-30 minutes</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold">Advanced Classes</h4>
                      <p className="text-sm">Daily or alternate days • 30-40 minutes</p>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div>
                  <h3 className="heading-arabic text-xl mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Pricing Plans
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold text-primary">Basic Package</h4>
                      <p className="text-sm">3 classes/week • Perfect for beginners • Affordable rates</p>
                    </div>
                    <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg">
                      <h4 className="font-semibold text-accent-foreground">Premium Package</h4>
                      <p className="text-sm">Daily classes • Advanced Tajweed • Hifz revision</p>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Contact us for detailed pricing information
                  </p>
                </div>

                {/* CTA */}
                <div className="text-center pt-4 border-t">
                  <a 
                    href="https://wa.me/923349523393?text=I%20want%20to%20learn%20more%20about%20your%20classes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn-hero w-full">
                      Contact Us for More Details
                    </Button>
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;