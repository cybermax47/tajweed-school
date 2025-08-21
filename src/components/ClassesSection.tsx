import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Clock, Users, Gift, Video, BookOpen, Heart } from "lucide-react";

const ClassesSection = () => {
  return (
    <section id="classes" className="py-20 pattern-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-arabic text-4xl md:text-5xl mb-6">Our Classes</h2>
          <p className="text-elegant text-lg text-muted-foreground max-w-3xl mx-auto">
            Personalized one-to-one Zoom sessions designed to help you master Quranic recitation 
            with proper Tajweed and understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* Class Duration Card */}
          <Card className="p-8 card-islamic text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="heading-arabic text-xl mb-4">Class Duration</h3>
            <p className="text-muted-foreground mb-4">
              25–40 minutes per session, perfectly timed for focused learning without overwhelming students.
            </p>
            <div className="text-primary font-semibold">Flexible Timing</div>
          </Card>

          {/* One-to-One Sessions Card */}
          <Card className="p-8 card-islamic text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="heading-arabic text-xl mb-4">Live Zoom Sessions</h3>
            <p className="text-muted-foreground mb-4">
              Interactive one-to-one sessions ensuring personalized attention and faster progress.
            </p>
            <div className="text-accent-foreground font-semibold">Global Access</div>
          </Card>

          {/* Free Trial Card */}
          <Card className="p-8 card-islamic text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-gold text-accent-foreground px-3 py-1 text-xs font-semibold rounded-bl-lg">
              FREE
            </div>
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="heading-arabic text-xl mb-4">3-Day Free Trial</h3>
            <p className="text-muted-foreground mb-4">
              Experience our teaching methodology with a completely free 3-day trial period.
            </p>
            <a 
              href="https://wa.me/923349523393?text=I%20want%20to%20book%20a%203-day%20trial%20session"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-gold w-full">Start Free Trial</Button>
            </a>
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