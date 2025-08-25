import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Classes", href: "#classes" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'header-glass shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-900 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="heading-section text-lg font-bold text-emerald-900">Online Tajweed Academy</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="body-text text-sm font-medium hover:text-emerald-600 transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex">
            <a 
              href="https://wa.me/923349523393?text=I%20want%20to%20book%20a%203%20day%20trial%20session"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="btn-hero px-6 py-2 rounded-lg font-medium">
                Free Trial
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="body-text font-medium text-left hover:text-emerald-600 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <a 
                href="https://wa.me/923349523393?text=I%20want%20to%20book%20a%203%20day%20trial%20session"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <Button className="btn-hero w-full py-3 rounded-lg font-medium">
                  Book Free Trial
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;