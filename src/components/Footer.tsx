import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ross260', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ross-gildas-ketcha-a39a172b0', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rossketcha@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Accueil', href: 'hero' },
    { label: 'À propos', href: 'about' },
    { label: 'Certifications', href: 'certifications' },
    { label: 'Projets', href: 'projects' },
    { label: 'Contact', href: 'contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-accent-gradient bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Développeur web passionné, créateur d'expériences numériques exceptionnelles 
              avec des technologies modernes.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 rossketcha@gmail.com</p>
              <p>📱 +33 (0)6 62 02 64 80</p>
              <p>📍 Paris, île-de-France</p>
            </div>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="mt-4"
            >
              Démarrer un projet
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-muted-foreground text-sm flex items-center gap-2">
            <span>© {currentYear} Portfolio</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary/10 transition-colors"
            >
              Retour en haut ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;