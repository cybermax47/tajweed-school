const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Classes", href: "#classes" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-emerald-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Main Footer Content */}
        <div className="text-center space-y-8">
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>
          
          {/* Dua Line */}
          <div className="max-w-2xl mx-auto">
            <p className="text-white/70 italic text-lg leading-relaxed">
              "May Allah make the Quran the spring of our hearts."
            </p>
            <p className="text-white/50 text-sm mt-2">
              — Prophet Muhammad (ﷺ)
            </p>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-white/20"></div>
          
          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-white/60 text-sm">
              © 2025 Online Tajweed Academy. All rights reserved.
            </p>
            <p className="text-white/40 text-xs">
              Teaching the Quran with love, patience, and authentic Tajweed worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;