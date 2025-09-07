import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Zap, Users, Database, FileCode, Server, Container, Cloud, GitBranch, Settings, BarChart3, Brain,ChartLine, TrendingUp, Search } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const About = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });
  const skills = [
    { name: 'Python', icon: Settings, color: 'text-[#3776AB]' },
    { name: 'Git', icon: GitBranch, color: 'text-[#F05032]' },
    { name: 'Power Bi', icon: ChartLine, color: 'text-[#FF9900]' },
    { name: 'PostgreSQL', icon: Database, color: 'text-[#4169E1]' },
    { name: 'MySQL', icon: Database, color: 'text-[#06B6D4]' },
    { name: 'React', icon: Code, color: 'text-[#61DAFB]' },
    { name: 'TypeScript', icon: FileCode, color: 'text-[#3178C6]' },
    { name: 'Node.js', icon: Server, color: 'text-[#339933]' },
    { name: 'Next.js', icon: Code, color: 'text-foreground' },
    { name: 'MongoDB', icon: Database, color: 'text-[#47A248]' },
    { name: 'Tailwind CSS', icon: Palette, color: 'text-[#06B6D4]' },
    // { name: 'Docker', icon: Container, color: 'text-[#2496ED]' },  
    { name: 'Figma', icon: Palette, color: 'text-[#F24E1E]' }
    
  ];

  const features = [
    
    {
      icon: BarChart3,
      title: 'Analyse de Données',
      description: 'Traitement et visualisation de données avec Python et Power Bi, création de dashboards interactifs et insights métier.'
    },
    {
      icon: Server,
      title: 'Architecture Backend',
      description: 'Gestion des bases de données et développement d\'APIs robustes et scalables avec Node.js.'
    },
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      description: 'Implémentation de solutions IA, machine learning et automatisation intelligente pour optimiser les processus.'
    },
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Création d\'interfaces utilisateur modernes et réactives avec React, Next.js et TypeScript pour des expériences web optimales.'
    },
  ];

  return (
    <section 
      ref={ref}
      id="about" 
      className={`py-20 bg-muted/20 transition-all duration-1000 ${
        hasIntersected ? 'animate-fade-in' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-accent-gradient bg-clip-text text-transparent">À propos de moi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Etudiant <span className="text-primary font-bold font-semibold">en recherche d'alternance (2 semaines école 3 semaines entreprise)</span>, je suis passionné par l’univers de la data, 
            où je combine curiosité analytique et sens pratique pour transformer des données brutes en informations stratégiques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Collecte, transformation et insights
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Je suis animé par une forte motivation à approfondir mes compétences dans l’apprentissage et la maîtrise des 
              outils d’analyse de données en insight. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              J’aime explorer chaque étape du cycle de vie de la donnée :
              depuis l'acquisition, le nettoyage et la préparation des données brutes, jusqu’à leur transformation en formats exploitables 
              et leur stockage dans des environnements adaptés
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Avec une forte passion pour l'innovation et l'apprentissage continu, je m'efforce de rester à jour avec 
              les tendances technologiques et les meilleures pratiques de développement.
            </p>
            
            {/* Skills */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Technologies & Compétences</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill.name} 
                    variant="secondary" 
                    className="px-3 py-2 bg-card/50 text-foreground border border-primary/20 hover:bg-primary/10 transition-colors flex items-center gap-2"
                  >
                    <skill.icon className={`h-4 w-4 ${skill.color}`} />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card-gradient border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-purple group"
              >
                <div className="mb-4">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-accent-gradient bg-clip-text text-transparent">12+</div>
            <div className="text-muted-foreground">Projets Complétés</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-accent-gradient bg-clip-text text-transparent">4+</div>
            <div className="text-muted-foreground">Années d'Expérience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-accent-gradient bg-clip-text text-transparent">100%</div>
            <div className="text-muted-foreground">Satisfaction Client</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;