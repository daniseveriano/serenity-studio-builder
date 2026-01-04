import { Check } from "lucide-react";

const specialties = [
  "Ansiedade e Transtorno de Ansiedade Generalizada",
  "Depressão e Transtornos de Humor",
  "Síndrome do Pânico",
  "Estresse e Burnout",
  "Autoestima e Autoconfiança",
  "Dificuldades nos Relacionamentos",
  "Luto e Perdas",
  "Fobias e Medos",
  "Insônia e Distúrbios do Sono",
  "Orientação Profissional e de Carreira",
  "Desenvolvimento Pessoal",
  "Habilidades Sociais",
];

const SpecialtiesSection = () => {
  return (
    <section id="specialties" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Áreas de Especialização
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-soft hover:shadow-card transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="font-body text-foreground">{specialty}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
