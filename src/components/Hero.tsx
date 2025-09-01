import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/image.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Fonction pour télécharger le CV
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/ALTERNANCE_DATA_ET_IA.pdf";
    link.download = "Ross-Gildas-KETCHA-CV-DATA-&-IA.pdf"; 
    link.click();
  };

  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in text-center flex flex-col items-center order-2 lg:order-1 mb-16 lg:mb-0">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground my-0 mx-0 px-0 text-5xl">Bonjour, je suis</span>
              <span className="block bg-accent-gradient bg-clip-text text-transparent text-3xl">
                Ross Gildas KETCHA
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Passionné par les métiers de la data et motivé par l’envie de donner du sens aux données grâce à des solutions innovantes
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button variant="hero" size="xl" onClick={() => scrollToSection('projects')} className="min-w-[200px]">
                Voir mes projets
              </Button>
              <Button variant="glass" size="xl" onClick={() => scrollToSection('contact')} className="min-w-[200px]">
                <Mail className="mr-2 h-5 w-5" />
                Me contacter
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-8">
              <a href="https://github.com/Ross260" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-all duration-300">
                  <Github className="h-6 w-6" />
                </Button>
              </a>

              <a href="https://www.linkedin.com/in/ross-gildas-ketcha-a39a172b0" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-all duration-300">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </a>

              <a href="mailto:rossketcha@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-all duration-300">
                  <Mail className="h-6 w-6" />
                </Button>
              </a>
            </div>

            {/* Download CV */}
            <div className="pt-4">
              <Button 
                variant="outline" 
                className="border-primary/30 hover:border-primary/60 cv-download-btn"
                onClick={handleDownloadCV} // ajout de l'événement
              >
                <Download className="mr-2 h-4 w-4" />
                Télécharger CV
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 mt-16 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-gradient rounded-full blur-3xl opacity-20 scale-110" />
              <img src={profileImage} alt="Photo de profil" className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/20 shadow-elegant" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default Hero;
