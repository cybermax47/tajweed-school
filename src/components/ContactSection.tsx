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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 card-islamic">
            <h3 className="heading-arabic text-2xl mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number (Optional)
                </label>
                <Input id="phone" type="tel" placeholder="+92-300-1234567" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Tell us about your learning goals and any questions you have..."
                />
              </div>
              <Button type="submit" className="w-full btn-hero">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 card-islamic">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+92-300-1234567</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-islamic">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">info@tajweedacademy.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-islamic">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-muted-foreground">Quick responses guaranteed</p>
                </div>
              </div>
              <Button className="w-full btn-gold">
                Chat on WhatsApp
              </Button>
            </Card>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-center">Follow Us</h4>
              <div className="flex justify-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Facebook className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;