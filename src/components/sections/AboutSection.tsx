import { GraduationCap, Award, BookOpen } from "lucide-react";
import psychologistPortrait from "@/assets/psychologist-portrait.jpg";

const credentials = [
  "CRP 16/12345",
  "Graduação em Psicologia - UFES (2012)",
  "Especialização em Terapia Cognitivo-Comportamental - IPA (2015)",
  "Formação em Mindfulness e Redução de Estresse - Instituto Brasileiro de Mindfulness (2018)",
  "Membro da Sociedade Brasileira de Psicologia (SBP)",
];

const AboutSection = () => {
  return (
    <section id="about-professional" className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Sobre a Psicóloga Juliana Mendes
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-hover">
              <img
                src={psychologistPortrait}
                alt="Psicóloga Juliana Mendes - Atendimento em Vitória ES"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="font-body text-muted-foreground leading-relaxed space-y-4">
              <p>
                Sou Juliana Mendes, psicóloga clínica formada pela Universidade Federal do Espírito Santo (UFES) com especialização em Terapia Cognitivo-Comportamental pelo Instituto de Psicologia Aplicada (IPA).
              </p>
              <p>
                Atuo há mais de 10 anos ajudando pessoas a superarem seus desafios emocionais e a conquistarem uma vida mais equilibrada e satisfatória. Minha missão é oferecer um atendimento humanizado, ético e baseado em evidências científicas.
              </p>
              <p>
                Acredito que buscar ajuda psicológica é um ato de coragem e autocuidado. Se você está passando por um momento difícil ou simplesmente deseja se conhecer melhor, saiba que não precisa enfrentar isso sozinho(a).
              </p>
              <p>
                Meu consultório está localizado na Enseada do Suá, em Vitória-ES, em um ambiente tranquilo e acolhedor. Também atendo online, permitindo que pessoas de todo o Brasil tenham acesso à psicoterapia de qualidade.
              </p>
            </div>

            {/* Credentials */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Formação e Credenciais
              </h3>
              <ul className="space-y-2">
                {credentials.map((credential, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-muted-foreground font-body"
                  >
                    <Award className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
