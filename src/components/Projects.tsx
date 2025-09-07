import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Github } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Projects = () => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1
  });

  const projects = [
    {
      title: 'RetinaML : Prédiction de maladies oculaires Assistée par IA',
      description: "Plateforme de collecte d'image de rétine pour la prédiction de rétinopathie diabétique.",
      image1: '/images/retinaml.png',
      image2: "/images/diagnostic.png",
      tags: ['React', 'TypeScript','Express.js', 'Python', 'Scikit-Learn', 'TensorFlow'],
      github: 'https://github.com/Ross260/eyes_ML',
      demo: 'https://vercel.com',
      featured: true
    },
    {
      title: 'Dashboard Analytics(en cours)',
      description: 'Tableau de bord interactif pour visualiser des données complexes avec des graphiques dynamiques.',
      image1: '/images/tdb.png',
      image2: "/images/Découvrir les fonctionnalités de Microsoft Power BI.png",
      tags: ['Power BI', 'DAX', 'Data Visualization', 'Business Intelligence'],
      github: '#',
      demo: '#',
      featured: true
    },
    {
      title: 'Scrapping et analyse d\'un site E-commerce',
      description: 'Extraction brute, nettoyage et analyse des données d\'un site e-commerce pour insights marketing.',
      image1: '/images/scraping.png',
      image2: '/images/bd_scraping.png',
      image3: '/images/pie.png',
      tags: ['Python', 'BeautifulSoup', 'Pandas', 'Matplotlib'],
      github: 'https://ross260.github.io/Portfolio/projets/ecommerce_scraping.html',
      demo: 'https://ross260.github.io/Portfolio/projets/ecommerce_scraping.html',
      featured: false
    },
    {
      title: 'Scraping d\'un site immobilier',
      description: "Système de gestion de contenu headless avec API REST et interface d'administration.",
      image1: '/images/scrapping.png',
      image2: '/images/Scraping with selenium.gif',
      image3: '/images/clic_me.png',
      tags: ['Python', 'Resquest', 'BeautifulSoup', 'Selenium'],
      github: 'https://github.com/Ross260/Python_Scraping/blob/main/TP1_pythonScraping/Exercice5.py',
      demo: '#',
      featured: false
    },
    {
      title: 'Bibliothèque en ligne',
      description: "Application web de gestion de bibliothèque avec emprunts, retours et recherche de livres.",
      image1: '/images/Bibliotheque.png',
      image2: '/images/Bibliotheque.png',
      image3: '/images/Bibliotheque_emprunt_resa.png',
      tags: ['Bootstrap', 'JavaScript', 'PHP', 'SQL'],
      github: 'https://github.com/Ross260/Bibliotheque',
      demo: '#',
      featured: false
    },
    {
      title: 'Site ecommerce de vente de vêtements',
      description: 'Site e-commerce de vêtements avec gestion des produits, panier et paiement en ligne.',
      image1: '/images/vente_vetements.png',
      image2: '/images/vente_vetements.png',
      image3: '/images/catalogue_vetement.png',
      tags: ['Bootstrap', 'JavaScript', 'PHP', 'SQL'],
      github: 'https://github.com/Ross260/online-sales',
      demo: 'https://www.gatsbyjs.com/',
      featured: false
    },
    {
      title: 'Logiciel de gestion scolaire JAVA',
      description: 'Application de gestion scolaire avec suivi des étudiants',
      image1: '/images/javafx_App_banniere2.png',
      image2: '/images/gestion_des_etudiants.png',
      image3: '/images/all_windows.png',
      tags: ['Java', 'Maven', 'Javafx', 'SQL'],
      github: 'https://ross260.github.io/Portfolio/projets/javafx_app.html',
      demo: 'https://www.gatsbyjs.com/',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
                className="group overflow-hidden bg-card-gradient border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image1}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    {/* Lien GitHub */}
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="ghost" className="bg-background/80 backdrop-blur-sm">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                    {/* Aperçu en dialog */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="ghost" className="bg-background/80 backdrop-blur-sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <div className="space-y-6">
                          <div className="text-center">
                            <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                            <p className="text-muted-foreground">{project.description}</p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            {/* Image 1 cliquable pour zoom */}
                            <Dialog>
                              <DialogTrigger asChild>
                                <img
                                  src={project.image1}
                                  alt={`Aperçu 1 de ${project.title}`}
                                  className="w-full h-64 object-contain rounded-lg border border-primary/20 bg-black cursor-pointer hover:opacity-90 transition"
                                />
                              </DialogTrigger>
                              <DialogContent className="max-w-6xl p-0 border-0 bg-transparent">
                                <img
                                  src={project.image1}
                                  alt={`Aperçu 1 de ${project.title}`}
                                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                                />
                              </DialogContent>
                            </Dialog>

                            {/* Image 2 cliquable pour zoom et visualisation en plus grand et clair */}
                            <Dialog>
                              <DialogTrigger asChild>
                                <img
                                  src={project.image2}
                                  alt={`Aperçu 2 de ${project.title}`}
                                  className="w-full h-64 object-contain rounded-lg border border-primary/20 bg-black cursor-pointer hover:opacity-90 transition"
                                />
                              </DialogTrigger>
                              <DialogContent className="max-w-6xl p-0 border-0 bg-transparent">
                                <img
                                  src={project.image2}
                                  alt={`Aperçu 2 de ${project.title}`}
                                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                                />
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-muted/50 text-foreground border border-primary/20"
                      >
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
              <Card
                key={index}
                className="group overflow-hidden bg-card-gradient border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-purple"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image1}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
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
                    {project.tags.slice(0, 5).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs bg-muted/50 text-foreground border border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {/* Lien GitHub */}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full border-primary/30">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    </a>
                    {/* Aperçu */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" className="flex-1 border-primary/30">
                          <Eye className="h-3 w-3 mr-1" />
                          Aperçu
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                       <div className="space-y-6">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                          <p className="text-muted-foreground">{project.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          {/* Image 1 avec zoom */}
                          <Dialog>
                            <DialogTrigger asChild>
                              <img
                                src={project.image2}
                                alt={`Aperçu 1 de ${project.title}`}
                                className="w-full h-64 object-contain rounded-lg border border-primary/20 bg-black cursor-pointer hover:opacity-90 transition"
                              />
                            </DialogTrigger>
                            <DialogContent className="max-w-6xl p-0 border-0 bg-transparent">
                              <img
                                src={project.image2}
                                alt={`Aperçu 1 de ${project.title}`}
                                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                              />
                            </DialogContent>
                            </Dialog>

                            {/* Image 2 avec zoom */}
                            <Dialog>
                              <DialogTrigger asChild>
                                <img
                                  src={project.image3}
                                  alt={`Aperçu 2 de ${project.title}`}
                                  className="w-full h-64 object-contain rounded-lg border border-primary/20 bg-black cursor-pointer hover:opacity-90 transition"
                                />
                              </DialogTrigger>
                              <DialogContent className="max-w-6xl p-0 border-0 bg-transparent">
                                <img
                                  src={project.image3}
                                  alt={`Aperçu 2 de ${project.title}`}
                                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                                />
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </DialogContent>

                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
