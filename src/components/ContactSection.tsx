import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-arabic text-4xl md:text-5xl mb-6 text-white">Contact Us</h2>
          <p className="text-elegant text-lg text-white/90 max-w-3xl mx-auto">
            Ready to begin your Quran journey? Get in touch with us today and let's start 
            your path to beautiful Quranic recitation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <Card className="p-12 card-islamic mb-12">
            <h3 className="heading-arabic text-3xl mb-6">Ready to Begin Your Quran Journey?</h3>
            <p className="text-elegant text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students worldwide who have improved their Quranic recitation with our 
              personalized one-to-one classes. Start with a completely free 3-day trial.
            </p>
            <a 
              href="https://wa.me/923349523393?text=I%20want%20to%20book%20a%203-day%20trial%20session"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-hero text-lg px-12 py-6 glow-pulse">
                Book Free 3-Day Trial Now
              </Button>
            </a>
          </Card>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 card-islamic">
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">WhatsApp</h4>
                  <p className="text-white/80 text-sm">+923349523393</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-islamic">
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-white/80 text-sm">info@tajweedacademy.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-islamic">
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">Quick Response</h4>
                  <p className="text-white/80 text-sm">Usually within 1 hour</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-center text-xl">Connect With Us</h4>
            <div className="flex justify-center gap-6">
              <a 
                href="https://wa.me/923349523393" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <p className="text-white/70 text-xs mt-2">WhatsApp</p>
              </a>
              
              <div className="group">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
                <p className="text-white/70 text-xs mt-2">Instagram</p>
              </div>
              
              <div className="group">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <Facebook className="w-7 h-7 text-white" />
                </div>
                <p className="text-white/70 text-xs mt-2">Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;