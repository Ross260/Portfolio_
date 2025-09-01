import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const {
    ref,
    hasIntersected
  } = useIntersectionObserver({
    threshold: 0.1
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuration EmailJS
      const serviceID = 'service_ya4he0q'; // Le service ID
      const templateID = 'template_avxxm7t'; // template ID
      const publicKey = 'EEDry2HRfDUVp5Lgc'; // clé publique

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'rossketcha@gmail.com',
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais."
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast({
        title: "Erreur d'envoi",
        description: "Une erreur est survenue. Veuillez réessayer ou me contacter directement à rossketcha@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [{
    icon: Mail,
    label: 'Email',
    value: 'rossketcha@gmail.com',
    href: 'mailto:rossketcha@gmail.com'
  }, {
    icon: Phone,
    label: 'Téléphone',
    value: '+33 (0)6 62 02 64 80',
    href: 'tel:+33662026480'
  }, {
    icon: MapPin,
    label: 'Localisation',
    value: 'Paris, France',
    href: '#'
  }];
  const socialLinks = [{
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Ross260',
    color: 'hover:text-foreground'
  }, {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ross-gildas-ketcha-a39a172b0',
    color: 'hover:text-blue-400'
  }, {
    icon: Mail,
    label: 'Email',
    href: 'mailto:rossketcha@gmail.com',
    color: 'hover:text-red-400'
  }];
  return <section ref={ref} id="contact" className={`py-20 bg-muted/20 transition-all duration-1000 ${hasIntersected ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-accent-gradient bg-clip-text text-transparent">Contactez-moi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Prêt à donner vie à votre projet ? Discutons de vos idées et créons quelque chose d'extraordinaire ensemble.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card-gradient border border-primary/10 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                <Send className="h-6 w-6 text-primary" />
                Envoyez-moi un message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Nom complet</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Votre nom" required className="bg-background/50 border-primary/20 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="votre@email.com" required className="bg-background/50 border-primary/20 focus:border-primary/50" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Sujet</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Sujet de votre message" required className="bg-background/50 border-primary/20 focus:border-primary/50" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Décrivez votre projet ou votre demande..." rows={5} required className="bg-background/50 border-primary/20 focus:border-primary/50 resize-none" />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                      Envoi en cours...
                    </> : <>
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer le message
                    </>}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-card-gradient border border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <a href={info.href} className="text-foreground hover:text-primary transition-colors font-medium">
                        {info.value}
                      </a>
                    </div>
                  </div>)}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card-gradient border border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Suivez-moi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-all duration-300 group ${social.color}`}>
                      <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>)}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;