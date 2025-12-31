import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

interface Project {
  title: string;
  description: string;
  image: string;
  images?: string[];
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
}

// Composant Lightbox pour afficher une image en grand
const ImageLightbox = ({ 
  images, 
  currentIndex, 
  onClose, 
  onPrev, 
  onNext,
  onSetIndex
}: { 
  images: string[]; 
  currentIndex: number; 
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSetIndex: (idx: number) => void;
}) => {
  // Gestion des touches du clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  // Bloquer les clics qui passent à travers
  const handleContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={handleBackgroundClick}
      onMouseDown={(e) => e.stopPropagation()}
      onMouseUp={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Fermer"
      >
        <X className="h-8 w-8" />
      </button>

      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Image suivante"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
        onClick={handleContainerClick}
      />

      {images.length > 1 && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
          onClick={handleContainerClick}
          aria-label="Navigation des images"
        >
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${idx === currentIndex ? 'bg-white' : 'bg-white/40'}`}
              onClick={(e) => {
                e.stopPropagation();
                onSetIndex(idx);
              }}
              aria-label={`Aller à l'image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>,
    document.body
  );
};

// Composant pour afficher les images de manière adaptative avec clic
const AdaptiveImageGrid = ({ 
  images, 
  title,
  onImageClick 
}: { 
  images: string[]; 
  title: string;
  onImageClick: (index: number) => void;
}) => {
  const count = images.length;
  
  const imageClass = "w-full object-cover rounded-lg border border-primary/20 cursor-pointer hover:opacity-90 transition-opacity hover:scale-[1.02] transition-transform duration-200";
  
  if (count === 1) {
    return (
      <div className="w-full">
        <img 
          src={images[0]} 
          alt={`Aperçu de ${title}`} 
          className={`${imageClass} h-80`}
          onClick={() => onImageClick(0)}
        />
      </div>
    );
  }
  
  if (count === 2) {
    return (
      <div className="grid md:grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt={`Aperçu ${idx + 1} de ${title}`} 
            className={`${imageClass} h-64`}
            onClick={() => onImageClick(idx)}
          />
        ))}
      </div>
    );
  }
  
  if (count === 3) {
    return (
      <div className="grid gap-4">
        <img 
          src={images[0]} 
          alt={`Aperçu 1 de ${title}`} 
          className={`${imageClass} h-64`}
          onClick={() => onImageClick(0)}
        />
        <div className="grid md:grid-cols-2 gap-4">
          {images.slice(1).map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`Aperçu ${idx + 2} de ${title}`} 
              className={`${imageClass} h-48`}
              onClick={() => onImageClick(idx + 1)}
            />
          ))}
        </div>
      </div>
    );
  }
  
  // 4 images ou plus (affiche max 4)
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {images.slice(0, 4).map((img, idx) => (
        <img 
          key={idx}
          src={img} 
          alt={`Aperçu ${idx + 1} de ${title}`} 
          className={`${imageClass} h-48`}
          onClick={() => onImageClick(idx)}
        />
      ))}
    </div>
  );
};

const Projects = () => {
  const {
    ref,
    hasIntersected
  } = useIntersectionObserver({
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1));
  };

  const projects: Project[] = [
    {
      title: 'RetinaML : Prédiction de maladies oculaires Assistée par IA',
      description: "Plateforme de collecte d'image de rétine pour la prédiction de rétinopathie diabétique.",
      image: '/images/retinaml.png',
      images: ['/images/retinaml.png',"/images/diagnostic.png","/images/diagnostic2.png"],
      tags: ['React', 'TypeScript','Express.js', 'Python', 'Scikit-Learn', 'TensorFlow'],
      github: 'https://github.com/Ross260/eyes_ML',
      demo: 'https://vercel.com',
      featured: true
    },
    {
      title: 'Analyse des ventes d\'un supermarché avec Power BI',
      description: 'Tableau de bord interactif présentant l\'activité du supermarché dans le temps.',
      image: '/images/Analyse des ventes_.png',
      images: ['/images/Analyse des ventes_.gif'],
      tags: ['Power BI', 'DAX', 'Data Visualization', 'Business Intelligence'],
      github: '#', // Mettre le lien vers le projet publier sur linkedin ici
      demo: '#',
      featured: true
    },
    {
      title: 'Etude sur l\'impact des jeux vidéos sur les notes des étudiants',
      description: 'Suite à cette étude sur des données réelles, on peut remarqué qu\'en effet, les jeux vidéos ont un impact réel sur les étudiants. Cependant, plusieurs facteurs influences considérablement ce facteur notement l\'éducation et le revenu des parents.',
      image: '/images/Impact des jeux vidéos sur les grades des étudiants.png',
      images: ['/images/Impact des jeux vidéos sur les grades des étudiants.png'],
      tags: ['Power Query', 'Modélisation', 'Data Visualization','Power BI', 'Business Intelligence'],
      github: '#', //lien vers le projet publier sur linkedin ici
      demo: '#',
      featured: true
    },
    {
      title: 'Gestion de projets de conception d\'un site web avec Jira',
      description: 'Projet de groupe réalisé dans le cadre de la formation, utilisant Jira pour la gestion de projet pour un site web de vente de tiramisu.',
      image: "/images/jira2.png",
      images: ["/images/yoyo.png","/images/jira2.png"],
      tags: ['Jira', 'Gestion de projets', 'SCRUM', 'Agile'],
      github: '#', //lien vers le projet publier sur linkedin ici
      demo: '#',
      featured: true
    },
    {
      title: 'Rapport sur des données financières fictives avec Power BI',
      description: 'Tableau de bord interactif pour visualiser des données de ventes d\'une entreprise.',
      image: '/images/Rapport données financières.png',
      images: ['/images/Rapport données financières.png',"/images/Rapport données financières 2.png",],
      tags: ['Power BI', 'DAX', 'Data Visualization', 'Business Intelligence'],
      github: '#', // Mettre le lien vers le projet publier sur linkedin ici
      demo: '#',
      featured: true
    },
    {
      title: 'Scrapping et analyse d\'un site E-commerce',
      description: 'Extraction brute, nettoyage et analyse des données d\'un site e-commerce pour insights marketing.',
      image: '/images/scraping.png',
      images: ['/images/bd_scraping.png','/images/pie.png'],
      tags: ['Python', 'BeautifulSoup', 'Pandas', 'Matplotlib'],
      github: 'https://ross260.github.io/Portfolio/projets/ecommerce_scraping.html',
      demo: 'https://ross260.github.io/Portfolio/projets/ecommerce_scraping.html',
      featured: false
    },
    {
      title: 'Scraping d\'un site immobilier',
      description: "Système de gestion de contenu headless avec API REST et interface d'administration.",
      image: '/images/scrapping.png',
      images: ['/images/Scraping with selenium.gif'],
      tags: ['Python', 'Resquest', 'BeautifulSoup', 'Selenium'],
      github: 'https://github.com/Ross260/Python_Scraping/blob/main/TP1_pythonScraping/Exercice5.py',
      demo: '#',
      featured: false
    },
    {
      title: 'Bibliothèque en ligne',
      description: "Application web de gestion de bibliothèque avec emprunts, retours et recherche de livres.",
      image: '/images/Bibliotheque.png',
      images: ['/images/Bibliotheque.png','/images/Bibliotheque_emprunt_resa.png'],
      tags: ['Bootstrap', 'JavaScript', 'PHP', 'SQL'],
      github: 'https://github.com/Ross260/Bibliotheque',
      demo: '#',
      featured: false
    },
    {
      title: 'Site ecommerce de vente de vêtements',
      description: 'Site e-commerce de vêtements avec gestion des produits, panier et paiement en ligne.',
      image: '/images/vente_vetements.png',
      images: ['/images/vente_vetements.png','/images/catalogue_vetement.png'],
      tags: ['Bootstrap', 'JavaScript', 'PHP', 'SQL'],
      github: 'https://github.com/Ross260/online-sales',
      demo: 'https://www.gatsbyjs.com/',
      featured: false
    },
    {
      title: 'Logiciel de gestion scolaire JAVA',
      description: 'Application de gestion scolaire avec suivi des étudiants',
      image: '/images/javafx_App_banniere2.png',
      images: ['/images/gestion_des_etudiants.png','/images/all_windows.png'],
      tags: ['Java', 'Maven', 'Javafx', 'SQL'],
      github: 'https://ross260.github.io/Portfolio/projets/javafx_app.html',
      demo: 'https://www.gatsbyjs.com/',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getProjectImages = (project: Project) => {
    return project.images || [project.image];
  };

  return (
    <section
      ref={ref}
      id="projects"
      className={`py-20 bg-background transition-all duration-1000 ${
        hasIntersected ? 'animate-fade-in' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-accent-gradient bg-clip-text text-transparent">Mes Projets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes projets récents, illustrant ma passion pour la Data, la
            conception d'interface conviviale et l'innovation.
          </p>
        </div>

        {/* Featured Projects */}
                <div className="mb-16">
                  <h3 className="text-2xl font-semibold mb-8 text-foreground">Projets Phares</h3>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {featuredProjects.map((project, index) => (
                      <Card 
                        key={index} 
                        className="group overflow-hidden bg-card-gradient border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="relative overflow-hidden">
                          <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="bg-background/80 backdrop-blur-sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.github, '_blank');
                              }}
                            >
                              <Github className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-muted-foreground">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="bg-muted/50 text-foreground border border-primary/20">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Autres Projets</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden bg-card-gradient border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-purple">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs bg-muted/50 text-foreground border border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 border-primary/30">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                    <Dialog modal={!lightboxOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="flex-1 border-primary/30">
                          <Eye className="h-3 w-3 mr-1" />
                          Aperçu
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <VisuallyHidden.Root>
                          <DialogTitle>{project.title}</DialogTitle>
                          <DialogDescription>{project.description}</DialogDescription>
                        </VisuallyHidden.Root>
                        <div className="space-y-6">
                          <div className="text-center">
                            <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                            <p className="text-muted-foreground">{project.description}</p>
                          </div>
                          <AdaptiveImageGrid 
                            images={getProjectImages(project)} 
                            title={project.title}
                            onImageClick={(idx) => openLightbox(getProjectImages(project), idx)}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
                <div className="text-center mt-16">
                  
                  
                </div>
              </div>
        
              {/* Modal for Featured Projects */}
              <Dialog modal={!lightboxOpen} open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DialogContent className="max-w-4xl">
                  <VisuallyHidden.Root>
                    <DialogTitle>{selectedProject?.title || 'Détails du projet'}</DialogTitle>
                    <DialogDescription>{selectedProject?.description || ''}</DialogDescription>
                  </VisuallyHidden.Root>
                  {selectedProject && (
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{selectedProject.title}</h3>
                        <p className="text-muted-foreground">{selectedProject.description}</p>
                      </div>
                      <AdaptiveImageGrid 
                        images={getProjectImages(selectedProject)} 
                        title={selectedProject.title}
                        onImageClick={(idx) => openLightbox(getProjectImages(selectedProject), idx)}
                      />
                      <div className="flex justify-center gap-4">
                        <Button variant="outline" className="border-primary/30" onClick={() => window.open(selectedProject.github, '_blank')}>
                          <Github className="h-4 w-4 mr-2" />
                          Voir le code
                        </Button>
                        <Button variant="outline" className="border-primary/30" onClick={() => window.open(selectedProject.demo, '_blank')}>
                          <Eye className="h-4 w-4 mr-2" />
                          Démo
                        </Button>
                      </div>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
        
              {/* Lightbox for full-size image viewing */}
              {lightboxOpen && (
                <ImageLightbox 
                  images={lightboxImages}
                  currentIndex={lightboxIndex}
                  onClose={closeLightbox}
                  onPrev={prevImage}
                  onNext={nextImage}
                  onSetIndex={setLightboxIndex}
                />
              )}
            </section>
          );
        };
        
        export default Projects;