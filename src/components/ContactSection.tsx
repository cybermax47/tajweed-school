import { Phone, Mail, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "+923349523393",
      href: "tel:+923349523393"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Quick Chat",
      href: "https://wa.me/923349523393?text=Assalamualaikum%2C%20I%20want%20to%20book%20a%203%20day%20trial%20session"
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@onlinetajweedacademy.com",
      href: "mailto:contact@onlinetajweedacademy.com"
    }
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/923349523393",
      color: "bg-green-600"
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "#",
      color: "bg-blue-600"
    },
    {
      icon: Instagram,
      label: "Instagram", 
      href: "#",
      color: "bg-gradient-to-br from-purple-600 to-pink-600"
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "#",
      color: "bg-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-beige-50">
      <div className="container mx-auto px-4 lg:px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Copy */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-emerald-900">
                Get in Touch
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-gold-400 rounded-full"></div>
              <p className="body-text text-lg text-ink-600 leading-relaxed">
                Prefer WhatsApp? So do we. Reach us instantly for quick responses 
                and easy enrollment. We're here to guide you on your Quranic journey.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="body-text text-ink-600">
                <strong>Ready to begin?</strong> Contact us through any of the methods below. 
                Our team typically responds within an hour.
              </p>
              
              <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-900">Usually respond within 1 hour</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Methods */}
          <div className="space-y-8">
            
            {/* Contact Chips */}
            <div className="space-y-4">
              <h3 className="heading-section text-xl text-emerald-900 font-semibold">
                Contact Methods
              </h3>
              
              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-emerald-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="contact-chip">
                      <method.icon />
                    </div>
                    <div>
                      <div className="font-semibold text-emerald-900 group-hover:text-emerald-700">
                        {method.label}
                      </div>
                      <div className="body-muted text-sm">
                        {method.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="heading-section text-xl text-emerald-900 font-semibold">
                Follow Us
              </h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.label}
                  >
                    <div className={`contact-chip ${social.color} hover:scale-110 transition-transform duration-300`}>
                      <social.icon />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-ink-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Final CTA */}
            <div className="bg-gradient-to-r from-emerald-100 to-gold-100 p-6 rounded-xl border border-emerald-200">
              <h4 className="heading-section text-lg text-emerald-900 font-semibold mb-2">
                Start Your Journey Today
              </h4>
              <p className="body-muted text-sm mb-4">
                Join thousands of students worldwide who have improved their Quranic recitation with our personalized approach.
              </p>
              <a 
                href="https://wa.me/923349523393?text=I%20want%20to%20book%20a%203%20day%20trial%20session"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                Book Free Trial Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;