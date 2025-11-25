import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
const Certifications = () => {
  const {
    ref,
    hasIntersected
  } = useIntersectionObserver({
    threshold: 0.1
  });
  const certifications = [{
    title: 'Créer des calculs visuels dans Power BI Desktop',
    issuer: 'Microsoft Learning',
    date: '2025',
    description: 'Utilisation des fonctions de comparaison dans des calculs visuels',
    image: '/images/Créer des calculs visuels dans Power BI Desktop.png',
    file: '/certifs/Créer des calculs visuels dans Power BI Desktop.pdf'
  },{
    title: 'Modifier le contexte de filtre DAX dans des Modèles sémantiques',
    issuer: 'Microsoft Learning',
    date: '2025',
    description: 'Utilisation de la fonction CALCULATE',
    image: '/images/Modifier le contexte de filtre DAX dans des Modèles sémantiques.png',
    file: '/certifs/Modifier le contexte de filtre DAX dans des modèles sémantiques.pdf'
  },{
    title: 'Utiliser DAX dans des modèles sémantiques',
    issuer: 'Microsoft Learning',
    date: '2025',
    description: 'Module3 d\'achèvement du cours complet à la PL-300',
    image: '/images/Utiliser DAX dans des modèles sémantiques (Module 3).png',
    file: '/certifs/Utiliser DAX dans des modèles sémantiques.pdf'
  },{
    title: 'Écrire des formules DAX pour des modèles',
    issuer: 'Microsoft Learning',
    date: '2025',
    description: 'Fonctions DAX, Colonnes calculées, Mesures, Tables calculées avec DAX',
    image: '/images/Écrire des formules DAX pour des modèles.png',
    file: '/certifs/Écrire des formules DAX pour des modèles.pdf'
  },{
    title: 'Configurer un modèle sémantique',
    issuer: 'Microsoft Learning',
    date: '2025',
    description: 'Catégorisation des données, Hiérarchies, Création de mesures simples et rapides',
    image: '/images/Configurer un modèle sémantique.png',
    file: '/certifs/Configurer un modèle sémantique.pdf'
  },{
    title: 'Préparer des données à des fins d’analyse avec Power BI',
    issuer: 'Microsoft Learning',
    date: '2025',
    description: 'Modélisation des données, Création de mesures, colonnes et tables calculées',
    image: '/images/Préparer des données à des fins d’analyse avec Power BI.png',
    file: '/certifs/Préparer des données à des fins d’analyse avec Power BI.pdf'
  },{
    title: 'Nettoyer, transformer et charger des données avec Power BI',
    issuer: 'Microsoft Learning',
    date: '2025',
    description: 'Nettoyage de données avec Power Query, Transformation et chargement dans Power BI Desktop',
    image: '/images/Nettoyer transformer et charger des données sous Power Bi.png',
    file: '/certifs/Nettoyer transformer et charger des données avec Power BI.pdf'
  },{
    title: 'Obtenire des données avec Power BI',
    issuer: 'Microsoft Learning',
    date: '2025',
    description: 'Résoudre les erreurs d’importation de données, Résoudre les problèmes de performances',
    image: '/images/Obtenir des données dans Power BI.png',
    file: '/certifs/Obtenir des données dans Power BI.pdf'
  }, {
    title: 'Python fundamentals for Data Science',
    issuer: 'OMNES Education - Datascientest',
    date: '2025',
    description: 'Python appliqué à la data science',
    image: '/images/Diplome_Python_techaway_DataSientest.png',
    file: '/certifs/Diplome Ross Gildas KETCHA - Python for DS.pdf'
  }, {
    title: 'Commencer à créer avec Power BI _ Microsoft Learn',
    issuer: 'Microsoft',
    date: '2025',
    description: 'Création de rapports avec Power BI',
    image: '/images/Commencer à créer avec Power Bi.png',
    file: '/certifs/Commencer à créer avec Power BI _ Microsoft Learn.pdf'
  }, {
    title: 'Découvrir les fonctionnalités de Microsoft Power BI',
    issuer: 'Microsoft',
    date: '2025',
    description: 'Acquisition, transformation et visualisation des données',
    image: '/images/Découvrir les fonctionnalités de Microsoft Power BI.png',
    file: '/certifs/Découvrir les fonctionnalités de Microsoft Power BI.pdf'
  }, {
    title: 'CertificatDaccomplissement_Decouvrir la data science  Comprendre les bases',
    issuer: 'Linkedin Learning',
    date: '2025',
    description: 'Concepts de base de la data science',
    image: '/images/Base_de_la_data_science.png',
    file: '/certifs/CertificatDaccomplissement_Decouvrir la data science  Comprendre les bases.pdf'
  }, {
    title: 'Certificat Daccomplissement_Scikitlearn pour le machine learning',
    issuer: 'Linkedin Learning',
    date: '2025',
    description: 'Scikit-learn · clustering · Apprentissage non supervisé · Apprentissage supervisé',
    image: '/images/Scikitlearn_pour_le_machine_learning.png',
    file: '/certifs/CertificatDaccomplissement_Scikitlearn pour le machine learning.pdf'
  }, {
    title: 'Examen Final Python pour la Data Science',
    issuer: 'DataSeientest',
    date: '2024',
    description: 'Python appliqué à la data science',
    image: '/images/Python_pour_la_data_science.png',
    file: '/certifs/Examen Final Python pour la Data Science.pdf'
  }];
  return <section ref={ref} id="certifications" className={`py-20 bg-background transition-all duration-1000 ${hasIntersected ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" id="certifications-title">
            <span className="bg-blue-gradient bg-clip-text text-transparent">Certifications Data & IA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expertise certifiée en intelligence artificielle, machine learning et sciences des données.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => <div key={index} className="group relative aspect-video overflow-hidden rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-blue">
              {/* Image de base */}
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              
              {/* Overlay avec informations au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 h-[70%] p-3 sm:p-4 lg:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col justify-end">
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white line-clamp-2 leading-tight">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-white/80">
                      <Award className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="truncate">{cert.issuer}</span>
                    </div>
                    
                    <p className="text-xs sm:text-sm text-white/90 line-clamp-2 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex items-center gap-1 sm:gap-2 text-xs text-white/70">
                      <Calendar className="h-3 w-3 flex-shrink-0" />
                      <span>Obtenu en {cert.date}</span>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-xs sm:text-sm bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 backdrop-blur-sm py-2"
                        >
                          <ExternalLink className="h-3 w-3 mr-1 sm:mr-2" />
                          Voir les détails
                        </Button>
                      </DialogTrigger>

                      <DialogContent className="max-w-3xl">
                        <div className="space-y-4">
                          <div className="text-center">
                            <h3 className="text-2xl font-bold text-foreground mb-2">{cert.title}</h3>
                            <p className="text-muted-foreground">{cert.issuer} • {cert.date}</p>
                          </div>

                          <object
                            data={cert.file}
                            type="application/pdf"
                            className="w-full h-[600px]"
                          >
                            <p>Votre navigateur ne supporte pas la lecture de PDF.</p>
                          </object>

                          <p className="text-center text-muted-foreground">{cert.description}</p>
                        </div>
                      </DialogContent>
                    </Dialog>

                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-blue-gradient p-8 text-center max-w-2xl mx-auto">
            <CardContent className="p-0">
              <Award className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                Formation Continue
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Je m'engage à rester à jour avec les dernières technologies et bonnes pratiques 
                pour offrir des solutions toujours plus innovantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                variant="glass" 
                size="lg" 
                className="bg-background/20 hover:bg-background/30 text-primary-foreground border-primary-foreground/20"
                onClick={() => {
                    const element = document.getElementById('certifications-title');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  
                  Voir toutes les certifications
                </Button>
                <Button variant="outline" size="lg" onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({
                  behavior: 'smooth'
                });
              }} className="border-primary-foreground/30 text-primary-foreground bg-slate-500 hover:bg-slate-400">
                  Discuter d'un projet
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Certifications;
